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
		file: {
			include: /.js$/, //���ƥ����ļ����粻ָ���򲻼���κ��ļ�
			exclude: /\/lib\//i  //�ų���Ҫ��ص��ļ�
		},
		func: {
			include: /init/i, //ֻ���ƥ��ĺ��������粻ָ���򲻼��
			exclude: ''  //�ų���Ҫ��صĺ���
		}
            }
        }
    }
});
```

###ʹ��
+ ��Ҫ��ش���ĺ������巽ʽΪ�� XXX = function (a, b) {
+ ���к�������include����ƥ����Զ���Ӽ�ش��


