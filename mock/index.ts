const express = require('express');
const app = express();
const port = 3001;

const router = express.Router();

app.listen(port, () => {
  console.log(`Express app listening at http://localhost:${port}`);
})