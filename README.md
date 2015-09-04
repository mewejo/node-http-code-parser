# HTTP Code Parser
NPM module to parse HTTP status codes into something more useable.

https://www.npmjs.com/package/http-code-parser

## Install
```javascript
npm install http-code-parser
```

## Usage
Running:
```javascript
var http_code_parser = require('http-code-parser');
var Status = http_code_parser.parse(201);
```
Results in:
```javascript
{
  success: true,
  error: false,
  redirect: false,
  friendly: 'Created',
  code: 201,
  type: "success"
}
```
