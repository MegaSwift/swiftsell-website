import { createServer } from "../server";
import serverless from "serverless-http";
import path from "path";
import express from "express";

const app = createServer();

// Serve static files from the built SPA
const distPath = path.join(process.cwd(), "dist/spa");
app.use(express.static(distPath));

// Handle React Router - serve index.html for all non-API routes
app.get("*", (req, res) => {
  // Don't serve index.html for API routes
  if (req.path.startsWith("/api/") || req.path.startsWith("/health")) {
    return res.status(404).json({ error: "API endpoint not found" });
  }

  res.sendFile(path.join(distPath, "index.html"));
});

// Export for Vercel serverless
export default serverless(app); 