
import express from "express";
import cors from "cors";
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json()); 

let formData = [];

app.post('/submit', (req, res) => {
  const { name, age } = req.body;
  formData.push({ name, age });
  console.log('Form data received:', formData);
  res.json({ message: 'Form data received successfully!' });
});

app.get('/data', (req, res) => {
  res.json(formData);
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
