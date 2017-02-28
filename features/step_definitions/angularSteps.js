var HomePage = require('../../pages/homePage');

var angularPage = function(){

  var homePage = new HomePage();

  //Angular IO Page
    this.Then(/^I should see One Framework Displayed$/, function () {
       //var pageTitle = browser.getTitle();
       return expect(homePage.getTitle()).to.eventually.equal('One framework. - Angular');
    });
  };
module.exports = angularPage;
