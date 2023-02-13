import express from 'express';
const app = express();

app.get('/', (res, req) => {
  req.send('Hello, world')
})

app.listen('8080', () => {
  console.log('listening on http://localhost:8080')
})