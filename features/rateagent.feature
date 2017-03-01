Feature: Rate My Agent Main Page
  As a user of Rate My Agent
  I should be able to view Main Page
  In order to search agents

@RateMyAgent
  Scenario: Rate My Agent Main Page
    Given I go to "https://www.ratemyagent.com.au/"
    Then I should see the page title

@Search
  Scenario Outline: Search for location
    Given I go to "https://www.ratemyagent.com.au/"
    And I click on the Search Button
    And I enter a "<location>" name
    Then I should see the list of "<suburbs>" displayed
Examples:
        | location   |suburbs    |
        | Bendigo    |Bendigo    |
        | Armadale   |Armadale   |
