!function(a){function b(){return!e.XMLHttpRequest||"file:"===e.location.protocol&&e.ActiveXObject?new e.ActiveXObject("Microsoft.XMLHTTP"):new e.XMLHttpRequest}function c(c){var d,e=a.extend({},h,c),g=e.dataType,i=e.timeout,j=b(),k=e.data,l=e.success;j.onreadystatechange=a.box(function(){4==j.readyState&&(200==j.status?(clearTimeout(d),l&&l("xml"==g?j.responseXML:"json"==g?f(j.responseText):j.responseText)):e.error&&e.error(j))}),j.open(e.type,e.url,e.async),j.setRequestHeader("Cache-Control","no-cache"),j.send("GET"==e.type?a.param(k):k),i>0&&(d=a.delay(function(){j.abort(),error&&error(j.xhr,j.type)},i))}function d(a,b,d,e,f){g(b)&&(e=d,d=b,b=null),c({url:a,data:b,success:d,dataType:e,type:f})}var e=a.global,f=a.parseJSON,g=a.isFun,h={type:"GET",async:!0,dataType:"text"};a.extend({ajax:c,get:d,getJSON:function(a,b,c){d(a,b,c,"json")},post:function(a,b,c,e){d(a,b,c,e,"post")}})}(Qmik);