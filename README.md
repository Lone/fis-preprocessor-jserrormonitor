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
                include: /init/i
            }
        }
    }
});
```

###使用
+ 需要监控错误的函数定义方式为： XXX = function (a, b) {
+ 其中函数名被include正则匹配会自动添加监控打点


