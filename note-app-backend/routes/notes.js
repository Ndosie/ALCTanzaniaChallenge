const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');

const noteCtrl = require('../controllers/notes');

router.post('/', auth, noteCtrl.createNote);
router.put('/:id', auth, noteCtrl.modifyNote);
router.delete('/:id', auth, noteCtrl.deleteNote);
router.get('/:id', auth, noteCtrl.getNote);
router.get('/', auth, noteCtrl.getAllNotes);

module.exports = router;