const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

// Home route
app.get("/", (req, res) => {
  res.send(`
    <h2>🧮 Node.js Calculator App</h2>
    <p>Use the following APIs:</p>
    <ul>
      <li>/add?a=10&b=5</li>
      <li>/sub?a=10&b=4</li>
      <li>/mul?a=10&b=5</li>
      <li>/div?a=10&b=5</li>
    </ul>
  `);
});

// Helper function
function validateNumbers(a, b, res) {
  if (isNaN(a) || isNaN(b)) {
    res.status(400).json({ error: "Both a and b must be numbers" });
    return false;
  }
  return true;
}

// Addition
app.get("/add", (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);
  if (!validateNumbers(a, b, res)) return;
  res.json({ result: a + b });
});

// Subtraction
app.get("/sub", (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);
  if (!validateNumbers(a, b, res)) return;
  res.json({ result: a - b });
});

// Multiplication
app.get("/mul", (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);
  if (!validateNumbers(a, b, res)) return;
  res.json({ result: a * b });
});

// Division
app.get("/div", (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);
  if (!validateNumbers(a, b, res)) return;

  if (b === 0) {
    return res.status(400).json({ error: "Division by zero not allowed" });
  }
  res.json({ result: a / b });
});

// Health check
app.get("/health", (req, res) => {
  res.json({ status: "UP" });
});

// Start server
app.listen(PORT, () => {
  console.log(`🧮 Calculator app running on port ${PORT}`);
});

