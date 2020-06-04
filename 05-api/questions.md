# Q5 - API

Write an API with the following routes:

## GET /
Returns a JSON object with the field `message` set to `hello world`

## POST /calc
Request: two integer fields, `number1` and `number2`

Response: a JSON object with the field `total` which is the sum of the two integers

## GET /upper/:word
Response: a JSON object with the field `text` set to the uppercase version of the string sent as the `word` parameter