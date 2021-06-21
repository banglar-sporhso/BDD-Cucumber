$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Login.feature");
formatter.feature({
  "line": 1,
  "name": "Validate TechFios Login Functionality",
  "description": "",
  "id": "validate-techfios-login-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 16015936000,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on the TechFios login page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.User_is_on_the_TechFios_login_page()"
});
formatter.result({
  "duration": 3374960200,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "User should be able to login with valid credentials",
  "description": "",
  "id": "validate-techfios-login-functionality;user-should-be-able-to-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "User enters username as \"demo@techfios.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enters password as \"abc123\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User clicks on signin button",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User should land on Dashboard page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 25
    }
  ],
  "location": "StepDefinition.User_enters_username_as(String)"
});
formatter.result({
  "duration": 2754326000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 25
    }
  ],
  "location": "StepDefinition.user_enters_password_as(String)"
});
formatter.result({
  "duration": 2419191800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_clicks_on_signin_button()"
});
formatter.result({
  "duration": 7953623300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_should_land_on_Dashboard_page()"
});
formatter.result({
  "duration": 49107600,
  "status": "passed"
});
formatter.after({
  "duration": 3610437400,
  "status": "passed"
});
});