const Skill = require('../models/skill');

module.exports = {
    index: index,
    show,
    new: newSkill,
    create,
    delete: deleteOne
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

function newSkill(req, res){
  res.render('skills/new')
};

function create(req, res) {
  console.log('hitting the create route. Hello,World!');
  // The model is responsible for creating data
  Skill.create(req.body);
  // Do a redirect anytime data is changed

  console.log(req.body, "<---------------- req.body");

  res.redirect('/skills')
}

function deleteOne(req, res) {
  console.log(req.params, "<-------params in delete")
  Skill.delete(req.params.id);
  res.redirect('/skills')
}
