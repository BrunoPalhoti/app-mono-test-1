import express from 'express';
import app from './app.js';

app.set('trust proxy', true);

const port = 3333;
app.listen(port, () => {
  console.log(`API rodando na porta ${port}`);
});