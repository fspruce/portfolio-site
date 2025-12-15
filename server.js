// server.js
import express from "express";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { existsSync } from "fs";

// Helper to fix common module-related issues
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Get the port Heroku assigns, or use 5000 locally
const PORT = process.env.PORT || 5000;
const app = express();

// Check if dist folder exists
const distPath = join(__dirname, "dist");
if (!existsSync(distPath)) {
  console.error("Error: 'dist' folder not found. Make sure to run 'npm run build' first.");
  process.exit(1);
}

// Health check endpoint
app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK", timestamp: new Date().toISOString() });
});

// 1. Tell Express to look inside the 'dist' folder for files
app.use(express.static(distPath));

// 2. For any other request, serve the index.html (SPA fallback)
app.get("*", (req, res) => {
  const indexPath = join(__dirname, "dist", "index.html");
  if (existsSync(indexPath)) {
    res.sendFile(indexPath);
  } else {
    res.status(404).send("Application not found. Please ensure the app is built properly.");
  }
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || "development"}`);
});
