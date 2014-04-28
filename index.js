'use strict';

var esprima = require('./esprima.js');

function traverse(node, func) {
    func(node);
    for (var key in node) {
        if (node.hasOwnProperty(key)) {
            var child = node[key];
            if (typeof child === 'object' && child !== null) {

                if (Array.isArray(child)) {
                    child.forEach(function(node) {
                        traverse(node, func);
                    });
                } else {
                    traverse(child, func);
                }
            }
        }
    }
}

function addFunctionHead(str, loc) {
    return str.replace(/(function\s*\([,\w\s]*\)\s*(\{))/, "$1 try{");
}

function addFunctionEnd(str, loc, filepath) {
    return str.replace(/(\})/, "}catch(e){if(typeof alog != 'undefined') {alog('exception.fire', 'catch', {msg: e.message, path:'" + filepath + "', method: '',ln:" + loc.line + "});}}}");
}

// 白名单
function isInWriteList(strFunHead, conf){
    var include = conf.include || null, 
		exclude = conf.exclude || null,
		toString = Object.prototype.toString;

    return !(exclude && toString.apply(exclude) == '[object RegExp]' && exclude.test(strFunHead)) && 
		(include && toString.apply(include) == '[object RegExp]' && include.test(strFunHead));

}
function modifyFunction(arrFile, loc, filepath, conf) {
    var _strHead = arrFile[loc.start.line - 1],
        _strEnd = arrFile[loc.end.line - 1];
    if (/try\s*\{/.test(_strHead) || /(function\s*\([,\w\s]*\)\s*(\{))/.test(_strHead) == false || /catch\s*\(.*\)\s*\{/.test(_strEnd)) {
        return false;
    }
    if(!isInWriteList(_strHead, conf)){
        return false;
    }
    arrFile[loc.start.line - 1] = addFunctionHead(arrFile[loc.start.line - 1], loc.start);
    arrFile[loc.end.line - 1] = addFunctionEnd(arrFile[loc.end.line - 1], loc.end, filepath);
}

module.exports = function(content, file, conf) {
    if (file.rExt !== '.js') {
        return content;
    }

	var arrContent = content.split('\n');
	try {
		var _parse = esprima.parse(content, {
			loc: true
		});
		traverse(_parse, function(node) {
			if (node.type == "FunctionExpression") {
				modifyFunction(arrContent, node.loc, file.id, conf);
			}
		});
	} catch (e) {}
	return arrContent.join('\n');
};