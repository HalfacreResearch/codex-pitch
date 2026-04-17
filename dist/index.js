// server/index.ts
import express from "express";
import { createServer } from "http";
import { existsSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";
var __filename = fileURLToPath(import.meta.url);
var __dirname = path.dirname(__filename);
async function startServer() {
  const app = express();
  const server = createServer(app);
  const candidates = [
    path.resolve(__dirname, "public"),
    // dist/public (expected production)
    path.resolve(__dirname, "..", "dist", "public"),
    // ../dist/public (dev fallback)
    path.resolve(process.cwd(), "dist", "public"),
    // cwd/dist/public
    path.resolve(process.cwd(), "public")
    // cwd/public
  ];
  let staticPath = candidates[0];
  for (const candidate of candidates) {
    if (existsSync(path.join(candidate, "index.html"))) {
      staticPath = candidate;
      break;
    }
  }
  console.log(`__dirname: ${__dirname}`);
  console.log(`cwd: ${process.cwd()}`);
  console.log(`staticPath resolved to: ${staticPath}`);
  console.log(`index.html exists: ${existsSync(path.join(staticPath, "index.html"))}`);
  app.use(express.static(staticPath));
  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });
  const port = process.env.PORT || 3e3;
  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}
startServer().catch(console.error);
