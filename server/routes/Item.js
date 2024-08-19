const express = require('express');
const router = express.Router();
const { Item } = require('../models');

router.get('/', async (req, res) => {
    const items = await Item.findAll();
    res.json(items);
});

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    const item = await Item.findByPk(id);
    res.json(item);
});

router.get('/group/:group', async (req, res) => {
    const group = req.params.group;
    const items = await Item.findAll({ where: { group } });
    res.json(items);
});

router.post('/', async (req, res) => {
    const item = req.body;
    await Item.create(item);
    res.json(item);
});

router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    await Item.destroy({ where: { id } });
    res.json({ id });
});

module.exports = router;