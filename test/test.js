var fs = require('fs');
fs.readFile('./content.js', 'utf8', function(err, data){
	if (err)
	{
		throw err;
	}


	var jserrormonitor = require('../index.js');

	//Î´ÅäÖÃ¼à¿ØÌõ¼ş
	var c = jserrormonitor(data, {id: './content.js', rExt: '.js'}, {});
	fs.writeFile('./content0.js', c);

	//
	c = jserrormonitor(data, {id: './content.js', rExt: '.js'}, {func: {include: /(init|click)/i}, file: {include: /.js$/i}});
	fs.writeFile('./content1.js', c);
});

