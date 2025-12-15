// server.js
import express from "express";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

// Helper to fix common module-related issues
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Get the port Heroku assigns, or use 5000 locally
const PORT = process.env.PORT || 5000;
const app = express();

// 1. Tell Express to look inside the 'dist' folder for files
app.use(express.static(join(__dirname, "dist")));

// 2. For any other request, serve the index.html (SPA fallback)
app.get("*", (req, res) => {
  res.sendFile(join(__dirname, "dist", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
