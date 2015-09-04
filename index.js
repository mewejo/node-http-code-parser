var HTTPStatus = require('http-status');

module.exports =
{
	parse: function(Code)
	{
		// Turn code into an object which contains success/error and details on the status code.
		var Response = {};
		
		// Initials
		Response.success = null;
		Response.error = null;
		Response.redirect = null;
		Response.friendly = null;
		Response.code = Code;
		Response.type = null;
		
		// Friendly text
		if (typeof HTTPStatus[Code] != 'undefined')
		{
			Response.friendly = HTTPStatus[Code];
		}
		
		// Get first digit
		var FirstDigit = parseInt(("" + Code)[0]);
		
		// Check the digit
		switch(FirstDigit)
		{
			case 2:
				Response.success = true;
				Response.error = false;
				Response.redirect = false;
				Response.type = "success";
				break;
				
			case 3:
				Response.success = false;
				Response.error = false;
				Response.redirect = true;
				Response.type = "redirect";
				break;
				
			case 4:
				Response.success = false;
				Response.error = true;
				Response.redirect = false;
				Response.type = "error_client";
				break;
				
			case 5:
				Response.success = false;
				Response.error = true;
				Response.redirect = false;
				Response.type = "error_server";
				break;
		}
		
		return Response;
	}
};