
const mySkills = [
    {id: 001, skill: 'JS', done: true, level: 3},
    {id: 002, skill: 'git', done: true, level: 3},
    {id: 003, skill: 'gitHub', done: true, level: 3},
    {id: 004, skill: 'CSS', done: true, level: 2},
    {id: 005, skill: 'html', done: true, level: 4},
    {id: 006, skill: 'Node.js', done: false, level: 2}
  ];

  module.exports = {
    getAll,
    getOne
  };
  
  function getAll() {
    return mySkills;
  }

  function getOne(id) {
    // Use the Array.prototype.find iterator method
    return mySkills.find(skill => skill.id === parseInt(id));
  }