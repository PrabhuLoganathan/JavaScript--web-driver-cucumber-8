var LandingPage = require('../../pages/mainPage');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

var rateAgentPage = function(){

  var homePage = new LandingPage();

      this.Given(/^I go to "([^"]*)"$/, function(site) {
      // Write code here that turns the phrase above into concrete actions
        homePage.get(site);
    });


   this.Then(/^I should see the page title$/, function () {
        // Write code here that turns the phrase above into concrete actions
        return expect(homePage.getTitle()).to.eventually.equal('Australia\'s No. 1 real estate agent ratings website | RateMyAgent');
      });

    this.Given(/^I click on the Search Button$/, function () {
              return homePage.search();// Write code here that turns the phrase above into concrete actions
       });


      this.Given(/^I enter a "([^"]*)" name$/, function (locatename) {
        // Write code here that turns the phrase above into concrete actions
            return homePage.locationName(locatename);
    });

    this.Then(/^I should see the list of "([^"]*)" displayed$/, function (results) {
        // Write code here that turns the phrase above into concrete actions
         var searchList = element.all(by.repeater('result in vm.resultSet.Results'));
         return expect(searchList.get(1).getText()).to.eventually.contain(results);

      });
}
module.exports = rateAgentPage;