const express = require('express');
const router = express.Router();
const receitas = require('../data/receitas');

router.post('/', (req, res) => {
  const newReceita = { id: receitas.at(-1).id + 1 ?? 1, ...req.body };
  receitas.push(newReceita);
  return res.status(201).json(newReceita);
});

router.get('/', (req, res) => {
    return res.json(receitas);
});

router.get('/:id', (req, res) => {
  const receita = receitas.find(r => r.id == req.params.id);
  return receita ? res.json(receita) : res.status(404).json({ message: 'Receita não encontrada' });
});

router.put('/:id', (req, res) => {
  const index = receitas.findIndex(r => r.id == req.params.id);
  if (index !== -1) {
    receitas[index] = { ...receitas[index], ...req.body };
    return res.json(receitas[index]);
  } else {
    return res.status(404).json({ message: 'Receita não encontrada' });
  }
});

router.delete('/:id', (req, res) => {
  const index = receitas.findIndex(r => r.id == req.params.id);
  if (index !== -1) {
    const deletedReceita = receitas.splice(index, 1);
    return res.status(204).end();
  } else {
    return res.status(404).json({ message: 'Receita não encontrada' });
  }
});

module.exports = router;
