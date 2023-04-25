import express from 'express'
import bodyParser from 'body-parser'
import calculatorController from './calculatorController.js'
import path from 'path'

const app = express();

app.use(bodyParser.json());
app.use(express.static('/public'));

app.use('/api', calculatorController);

app.get('/', (req, res) => {
    res.sendFile(path.resolve('public', 'index.html'))
  });

app.listen(3000, () => {
  console.log('Calculator app listening on port 3000!');
});
