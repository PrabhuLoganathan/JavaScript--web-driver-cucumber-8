Feature: Tab Com Main Page
  As a user of Tab Com
  I should be able to view Main Page
  In order to select a game


@TabLogin
  Scenario Outline: Login into Tab Account
    Given I go to "https://www.tab.com.au/"
    When I click on Login
    And I enter accountnumber "<accountnumber>"
    And I enter password "<password>"
    And I click login button
    Then I should see my balance "<balance>"
Examples:
        | accountnumber    |password      |balance  |
        | 2090852          |Devinder71    |$0.00    |

@TabMainPage
  Scenario: Bet Slip
    Given I go to "https://www.tab.com.au/"
    Then I should view Bet Slip
