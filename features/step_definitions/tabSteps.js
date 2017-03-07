var LandingPage = require('../../pages/tabMainPage');
var count;
var games = ['NBA', 'A-League', 'ATP Dubai', 'Super Rugby', 'NBL Finals', 'Todays Specials'];

var tabPage = function(){

  var homePage = new LandingPage();

    this.Then('I should view the list of games', function () {
        homePage.listGames();
        var listAll = element.all(by.repeater('item in controller.menuItems.filtered'));
        element.all(by.repeater('item in controller.menuItems.filtered')).count().then(function(count){
        console.log(count);

        for (var i = 0; i < count; ++i) {
            listAll.get(i).getText().then(function(text) {
                expect(text[i]).to.eventually.equal(games[i])
            });
        }//end for loop
        });
   });

      this.Then('I should view Bet Slip', function () {
         // Write code here that turns the phrase above into concrete actions
         return expect(homePage.betSlip()).to.eventually.equal('Bet Slip');
    });

    this.When('I click on Login', function () {
        // Write code here that turns the phrase above into concrete actions
          homePage.Login();
      });


     this.When(/^I enter accountnumber "([^"]*)"$/, function (accountNumber) {
       // Write code here that turns the phrase above into concrete actions
         homePage.AccountNumber(accountNumber);
     });

     this.When(/^I enter password "([^"]*)"$/, function (password) {
        // Write code here that turns the phrase above into concrete actions
        homePage.Password(password);
      });

      this.When(/^I click login button$/, function () {
         // Write code here that turns the phrase above into concrete actions
          homePage.loginBtn();
       });


      this.Then(/^I should see my balance "([^"]*)"$/, function (balance) {
        return expect(homePage.userbalance()).to.eventually.equal(balance);
      });
};
module.exports = tabPage;
