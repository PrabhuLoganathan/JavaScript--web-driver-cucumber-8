var mainPage = function () {
  "use strict";

var listGames = element.all(by.repeater('item in controller.menuItems.filtered'));
var betSlip = $('.title-heading');
var login = $('.login-link');
var accountNumber = $('.login-field-wrapper');
var password = element(by.name('account_password'));
var loginButton = $('.common-button');
var balance = element(by.xpath('/html/body/ui-view/header/div/div[3]/div/a[2]'));

  this.get = function(site){
    browser.get(site);
  };

  this.betSlip = function(){
    return betSlip.getText();
  }

  this.Login = function(){
  
  login.click();
  }

  this.listGames = function(){
    waitForElementToBePresent(listGames);
  };

  this.AccountNumber = function(accountnumber){
    waitForElementToBePresent(accountNumber);
    accountNumber.click();
    accountNumber.sendKeys(accountnumber);

  };

  this.Password = function(userpassword){
    password.sendKeys(userpassword);
  };


this.loginBtn = function(){
    loginButton.click();

};


this.userbalance = function(){
   return balance.getText();
}

  function waitForElementToBePresent(element){
      browser.wait(function () {
        return element.isPresent();
      },60000);
   };

};
module.exports = mainPage;
