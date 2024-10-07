const express = require('express');

const app = express();

app.get('/home', (req, res) => {
  res.contentType('application/html');
  res.status(200).send('<h1>hello world</h1>');
})

app.get('/users', (req, res) => {
  const users = [
    {
      name: 'James',
      email: 'john@example.com',
    },
    {
      name: 'John Smith',
      email: 'smith@example.com',
    }
  ]
  res.status(200).json(users)
  
})

const port = 8080

app.listen(port, () => console.log(`Rodando na porta ${port}`))
