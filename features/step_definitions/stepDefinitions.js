var HomePage = require('../../pages/homePage');

var homePage = function(){

  var angularPage = new HomePage();
//module.exports = function() {
  this.Given(/^I go to "([^"]*)"$/, function(site) {
    angularPage.go(site);

  });

  this.When(/^I add "([^"]*)" in the task field$/, function(task) {
    return angularPage.addTask(task);

  });

  this.When(/^I click the add button$/, function() {
    return angularPage.submitTask();

  });

 this.Then(/^I should see my "([^"]*)" in the list$/, function (inputText) {
   var todoList = angularPage.angularHomepage.todoList;
     expect(todoList.count()).to.eventually.equal(3);
     return expect(todoList.get(2).getText()).to.eventually.equal('inputText')
       .and.notify(callback);
  });

//Angular IO Page
  this.Then(/^I should see One Framework Displayed$/, function () {
     var pageTitle = browser.getTitle();
     return expect(pageTitle).to.eventually.equal('One framework. - Angular');
  });
};

module.exports = homePage;
