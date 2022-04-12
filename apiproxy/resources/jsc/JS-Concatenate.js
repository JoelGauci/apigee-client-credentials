 var client_id = context.getVariable('private.client_id');
 var client_secret = context.getVariable('private.client_secret');
 var result =  client_id + ':' + client_secret;
 context.setVariable('flow.basicauth', result);