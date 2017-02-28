var homePage= function () {
    "use strict";
    var taskList = element(by.model('todoList.todoText'));
    var taskButton = element(by.css('[value="add"]'));

    this.get = function(site){
      browser.get(site);
    };

    this.addTask = function(task){
      taskList.sendKeys(task);
    };

    this.submitTask = function(){
      taskButton.click();
    };
};
module.exports = homePage;
