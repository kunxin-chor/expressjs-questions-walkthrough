# Q1 - Express Routes

Add in the following routes:

## /
Using ```res.send()``` send back the string "Jack and Jill went up the hill"

## /about
Send back the text response `About My Website`

## /greet/:name
This route takes in one optional parameter `name`. Send back the response "Hello :name", where :name is the optional parameter.

Example: ```/greet/Alan``` should show "Hello Alan"

## /add/:n1/:n2
This route takes in two route parameters and add them together, before sending the result back as response.

