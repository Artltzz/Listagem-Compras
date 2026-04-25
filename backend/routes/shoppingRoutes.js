const express = require('express');
const router = express.Router();
const shoppingController = require('../controllers/shoppingController');

router.get('/', shoppingController.listItems);
router.get('/:id', shoppingController.getItemById);
router.post('/', shoppingController.createItem);
router.put('/:id', shoppingController.updateItem);
router.delete('/:id', shoppingController.deleteItem);

module.exports = router;