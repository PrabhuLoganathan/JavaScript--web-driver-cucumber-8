var HomePage = require('../../pages/homePage');

var homePage = function(){

  var angularPage = new HomePage();

  this.Given(/^I go to "([^"]*)"$/, function(site) {
    angularPage.get(site);
  });

  this.When(/^I add "([^"]*)" in the task field$/, function(task) {
    return angularPage.addTask(task);
  });

  this.When(/^I click the add button$/, function() {
    return angularPage.submitTask();
  });

 this.Then(/^I should see my "([^"]*)" in the list$/, function (inputText) {
    var todoList = element.all(by.repeater('todo in todoList.todos'));
    expect(todoList.count()).to.eventually.equal(3);
    return expect(todoList.get(2).getText()).to.eventually.equal(inputText)
    //callback();
  });
};

module.exports = homePage;
