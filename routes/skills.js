const express = require('express');
const router = express.Router();
// we do not need it becase we moved it to controllers/skills.js
//const Skill = require('../models/skill');
/* GET users listing. */
const skillsCtrl = require('../controllers/skills')


router.get('/', skillsCtrl.index);
//'/new' should be before '/:id' because we want to make sure that new skill will be reached. Show function will crash as well
router.get('/new', skillsCtrl.new);
router.get('/:id', skillsCtrl.show);
router.post('/', skillsCtrl.create);
router.delete('/:id', skillsCtrl.delete);
router.put('/:id', skillsCtrl.update);



module.exports = router;
