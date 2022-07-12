Feature: Login

Scenario: Successful Login
    Given I am on the applitools demo page
    And I enter my user name "sirTestingTon"
    And I enter my password "asdf1234"
    When I click button with text "Sign in"
    Then I successfully login
