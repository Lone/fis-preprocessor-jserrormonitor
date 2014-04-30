fis-preprocessor-jserrormonitor
===============================

js error monitor for fis 2


###安装

```bash
$ npm install -g fis-preprocessor-jserrormonitor
```

###配置
```javascript
fis.config.merge({
    namespace: 'demo',
    modules: {
	preprocessor: {
		js: 'jserrormonitor'
	},
    },
    settings: {
        preprocessor: {
            'jserrormonitor':  {
		file: {
			include: /.js$/, //监控匹配的文件，如不指定则不监控任何文件
			exclude: /\/lib\//i  //排除不要监控的文件
		},
		func: {
			include: /init/i, //只监控匹配的函数名，如不指定则不监控
			exclude: ''  //排除不要监控的函数
		}
            }
        }
    }
});
```

###使用
+ 需要监控错误的函数定义方式为： XXX = function (a, b) {
+ 其中函数名被include正则匹配会自动添加监控打点


