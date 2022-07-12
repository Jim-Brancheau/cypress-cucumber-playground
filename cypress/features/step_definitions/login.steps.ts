import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../pages/login.page"

Given("I am on the applitools demo page", () => {
  cy.visit("https://demo.applitools.com/");
});

Given(/^I enter my user name "(.*)"$/, (userName: string) => {
  let loginPage = new LoginPage();

  loginPage.enterUserName(userName);
});

Given(/^I enter my password "(.*)"$/, (password: string) => {
  let loginPage = new LoginPage();

  loginPage.enterPassword(password);
});

When(/^I click button with text "Sign in"$/, (buttonText: string) => {
  let loginPage = new LoginPage();

  loginPage.clickSignIn();
})

Then(/^I successfully login$/, () => {
  cy.findByText('Financial Overview').should('be.visible');
})

