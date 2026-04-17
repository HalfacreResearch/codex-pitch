import express from "express";
import { createServer } from "http";
import { existsSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const server = createServer(app);

  // Try multiple possible paths — Hostinger may deploy to a different directory
  const candidates = [
    path.resolve(__dirname, "public"),               // dist/public (expected production)
    path.resolve(__dirname, "..", "dist", "public"), // ../dist/public (dev fallback)
    path.resolve(process.cwd(), "dist", "public"),   // cwd/dist/public
    path.resolve(process.cwd(), "public"),            // cwd/public
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

  // Serve static files FIRST — assets, images, JS, CSS
  app.use(express.static(staticPath));

  // SPA fallback — serve index.html for all non-file routes
  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
