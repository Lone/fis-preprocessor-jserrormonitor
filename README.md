fis-preprocessor-jserrormonitor
===============================

js error monitor for fis 2


###��װ

```bash
$ npm install -g fis-preprocessor-jserrormonitor
```

###����
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

###ʹ��
+ ��Ҫ��ش���ĺ������巽ʽΪ�� XXX = function (a, b) {
+ ���к�������include����ƥ����Զ���Ӽ�ش��


