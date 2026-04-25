const Item = require('../models/Item');

exports.listItems = async (req, res) => {
  const items = await Item.find();
  res.json(items);
};

exports.getItemById = async (req, res) => {
  const item = await Item.findById(req.params.id);
  if (!item) return res.status(404).json({ message: 'Item não encontrado.' });
  res.json(item);
};

exports.createItem = async (req, res) => {
  const item = await Item.create(req.body);
  res.status(201).json(item);
};

exports.updateItem = async (req, res) => {
  const item = await Item.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  if (!item) return res.status(404).json({ message: 'Item não encontrado.' });

  res.json(item);
};

exports.deleteItem = async (req, res) => {
  const item = await Item.findByIdAndDelete(req.params.id);
  if (!item) return res.status(404).json({ message: 'Item não encontrado.' });

  res.json({ message: 'Item removido com sucesso.' });
};