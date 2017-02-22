Feature: Running Cucumber with Protractor
  As a user of Protractor
  I should be able to use Cucumber
  In order to run my E2E tests

@AddNewTask
Scenario Outline: Protractor and Cucumber Test
    Given I go to "https://angularjs.org/"
    When I add "<words>" in the task field
    And I click the add button
    Then I should see my "<result>" in the list
Examples:
        | words      |result     |
        | Be Awesome |Be Awesome |
        | Be Cool    |Be Awesome |

@AngularPage
  Scenario: Angular Page Test
    Given I go to "https://angular.io/"
    Then I should see One Framework Displayed
