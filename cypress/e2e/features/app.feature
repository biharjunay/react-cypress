Feature: Home page

Scenario: Verify home page text and link redirection
  Given I visit the home page
  Then I get text "Edit src/App.js and save to reload."
  When I click "Learn React"
  Then an alert is shown with the text "You learned a lot"
