# XSS攻击模拟
1.需要express模版搭建服务器<br>
2.因为node_modules太大，因此项目中没有拷贝，需要下载此项目的同学需要npm install命令安装package.json的依赖<br>
3.两个引用的第三方的库名字不一样，分别是he.js  与htmlparse.js  但是功能和对外暴露的接口是一致的，不需要担心<br>
4.以下是笔记部分<br>
<br>
# XSS笔记
一、理解XSS的攻击方式<br>
1.反射型:<br>
  发出请求时，XSS代码出现在URL中，作为输入提交到服务器端，服务器解析并相应，XSS代码随相应内容一起传回给浏览器，最后浏览器解析并执行XSS代码（JS代码）<br>  
2.存储型<br>
  XSS脚本不存在URL中，而是存在数据库中，接口JS请求服务端的XSS代码，让客户端解析并执行。<br>
二、XSS防御措施<br>
1.编码：对用户输入的数据进行HTML Entity编码，如">", "<"," ","&","\n"等<br>
2.过滤：<br>
    ⑴移除用户上传的DOM属性，如onerro,onclick等；<br>
    ⑵移除用户上传输入的style,script,frame,iframe,link标签;<br>
3.校正：<br>
    ⑴避免直接对HTML Entity解码<br>
    ⑵使用DomParse转换，校正不配对的DOM标签<br>
    
