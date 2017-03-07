var mainPage = function () {
  "use strict";

var listGames = element.all(by.repeater('item in controller.menuItems.filtered'));
var betSlip = $('.title-heading')

  this.get = function(site){
    browser.get(site);
  };

  this.betSlip = function(){
    return betSlip.getText();
  }

  this.listGames = function(){
    waitForElementToBePresent(listGames);
  };

  function waitForElementToBePresent(element){
      browser.wait(function () {
        return element.isPresent();
      },60000);
   };

};
module.exports = mainPage;
