const express = require('express');
const router = express.Router();
// we do not need it becase we moved it to controllers/skills.js
//const Skill = require('../models/skill');
/* GET users listing. */
const skillsCtrl = require('../controllers/skills')


router.get('/', skillsCtrl.index);
router.get('/:id', skillsCtrl.show);

module.exports = router;
