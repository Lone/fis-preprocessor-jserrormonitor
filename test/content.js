var a = '', b='';

function A(){ 
	this.name="A";

	this.init = function(a,b){

		this.name = a;
	};
}

function initLog(){


}

exports.init = function(a, b){

	new A().init(a, b);
};