var jsonData = JSON.parse(context.getVariable('response.content'));
var access_token = jsonData.access_token;
context.setVariable('workday.access_token',access_token);
