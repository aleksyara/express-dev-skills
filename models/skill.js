
const mySkills = [
    {id: 001, skill: 'JS', done: true, level: 3},
    {id: 002, skill: 'git', done: true, level: 3},
    {id: 003, skill: 'gitHub', done: true, level: 3},
    {id: 004, skill: 'CSS', done: true, level: 3},
    {id: 005, skill: 'html', done: true, level: 4},
    {id: 006, skill: 'Node.js', done: false, level: 3}
  ];

  module.exports = {
    getAll,
    getOne,
    create,
    delete: deleteOne,
    update: updateOne
  };
  
  function getAll() {
    return mySkills;
  }

  function getOne(id) {
    // Use the Array.prototype.find iterator method
    return mySkills.find(skill => skill.id === parseInt(id));
  }

  function create(skill) {
    skill.id = Date.now () % 100000;
    skill.done = false;
    mySkills.push(skill);
}

function deleteOne(id){
  const idx = mySkills.findIndex(skill => skill.id === parseInt(id));
  mySkills.splice(idx, 1);
}

function updateOne(id){
  const idx = mySkills.findIndex(skill => skill.id === parseInt(id));
  mySkills.splice(idx, 1);
}