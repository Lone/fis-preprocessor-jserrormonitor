var a = '', b='';

function A(){ 
	this.name="A";

	this.init = function(a,b){ try{

		this.name = a;
	}catch(e){if(typeof alog != 'undefined') {alog('exception.fire', 'catch', {msg: e.message, path:'./content.js', method: '',ln:9});}}};
}

function initLog(){


}

exports.init = function(a, b){ try{

	new A().init(a, b);
}catch(e){if(typeof alog != 'undefined') {alog('exception.fire', 'catch', {msg: e.message, path:'./content.js', method: '',ln:20});}}};

$('#usrbar').click(function(e){ try{
	console.log('Me');
}catch(e){if(typeof alog != 'undefined') {alog('exception.fire', 'catch', {msg: e.message, path:'./content.js', method: '',ln:24});}}});

$('#menu').delegate('li', 'click', function(e){ try{
	e.preventDefault();
}catch(e){if(typeof alog != 'undefined') {alog('exception.fire', 'catch', {msg: e.message, path:'./content.js', method: '',ln:28});}}});