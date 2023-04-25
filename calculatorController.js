import express from 'express'
import Calculator from './calculator.js'

const router = express.Router();

router.get('/add/:a/:b', (req, res) => {
  const { a, b } = req.params;
  const result = Calculator.add(a, b);
  res.json({ result });
});

router.get('/subtract/:a/:b', (req, res) => {
  const { a, b } = req.params;
  const result = Calculator.subtract(a, b);
  res.json({ result });
});

router.get('/multiply/:a/:b', (req, res) => {
  const { a, b } = req.params;
  try {
    const result = Calculator.multiply(a, b);
    res.json({ result });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/divide/:a/:b', (req, res) => {
  const { a, b } = req.params;
  try {
    const result = Calculator.divide(a, b);
    res.json({ result });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router
