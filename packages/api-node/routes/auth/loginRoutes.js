const express = require('express');
const router = express.Router();


const authenticatedEmails = [];

router.post('/login', (req, res) => {
  const { email, password } = req.body;
  
  if (!email || !password) {
    return res.status(400).json({ message: 'E-mail e senha obrigatórios' });
  }

  authenticatedEmails.push(email);

  return res.status(200).json({ message: 'Login realizado com sucesso', email });
});

module.exports = { router, authenticatedEmails };
