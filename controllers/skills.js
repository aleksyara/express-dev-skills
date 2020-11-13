const Skill = require('../models/skill');

module.exports = {
    index: index,
    show
  };
  

function index (req, res, next) {
    res.render('skills/index', {
      mySkills: Skill.getAll()
    });
  };

  function show (req, res) {
    res.render('skills/show', {
      skill: Skill.getOne(req.params.id),
      skillNum: req.params.id
  });
}