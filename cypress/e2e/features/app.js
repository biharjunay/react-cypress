import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor';

Given('I visit the home page', () => {
  cy.visit('/');
});

Then('I get text {string}', (text) => {
  cy.contains(text);
});

When('I click {string}', (linkText) => {
  cy.contains(linkText).click();
});

Then('an alert is shown with the text {string}', (alertText) => {
  cy.on('window:alert', (txt) => {
    expect(txt).to.contains(alertText);
  });
});