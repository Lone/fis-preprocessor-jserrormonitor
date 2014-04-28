var fs = require('fs');
fs.readFile('./content.js', 'utf8', function(err, data){
	if (err)
	{
		throw err;
	}

	//console.log(data);

	var jserrormonitor = require('fis-preprocessor-jserrormonitor');


	var c = jserrormonitor(data, {id: './content.js', rExt: '.js'}, {include: /init/i});

	//console.log(c);

	fs.writeFile('./content0.js', c);
});

