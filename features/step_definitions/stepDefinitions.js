var HomePage = require('../../pages/homePage');

var homePage = function(){

  var angularPage = new HomePage();

  this.Given(/^I go to "([^"]*)"$/, function(site) {
    //browser.get(site);
    angularPage.get(site);
  });

  this.When(/^I add "([^"]*)" in the task field$/, function(task) {
    return angularPage.taskList.sendKeys(task);

  });

  this.When(/^I click the add button$/, function() {
    var el = element(by.css('[value="add"]'));
    el.click();

  });

 this.Then(/^I should see my "([^"]*)" in the list$/, function (inputText) {
    var todoList = angularPage.todoList;
    expect(todoList.count()).to.eventually.equal(3);
    return expect(todoList.get(2).getText()).to.eventually.equal(inputText)
    //callback();
  });

//Angular IO Page
  this.Then(/^I should see One Framework Displayed$/, function () {
     var pageTitle = browser.getTitle();
     return expect(pageTitle).to.eventually.equal('One framework. - Angular');
  });
};

module.exports = homePage;
