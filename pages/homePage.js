var homePage= function () {
    "use strict";
    this.taskList = element(by.model('todoList.todoText'));
    this.todoList = element.all(by.repeater('todo in todoList.todos'));

    this.get = function(site){
      browser.get(site);
    };



};
module.exports = homePage;
