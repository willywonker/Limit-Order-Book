window.___jsl=window.___jsl||{};
window.___jsl.h=window.___jsl.h||'r;gc\/24805178-fa62ba1b';
window.___jsl.l=[];
window.__GOOGLEAPIS=window.__GOOGLEAPIS||{};
window.__GOOGLEAPIS.gwidget=window.__GOOGLEAPIS.gwidget||{};
window.__GOOGLEAPIS.gwidget.superbatch=false;window.__GOOGLEAPIS.iframes=window.__GOOGLEAPIS.iframes||{};
window.__GOOGLEAPIS.iframes.plusone=window.__GOOGLEAPIS.iframes.plusone_m=window.__GOOGLEAPIS.iframes.plusone||{url:':socialhost:/u/:session_index:/_/+1/fastbutton',params:{count:'',size:'',url:''}};window.___gpq=[];
window.gapi=window.gapi||{};
window.gapi.plusone=window.gapi.plusone||(function(){
  function f(n){return function(){window.___gpq.push(n,arguments)}}
  return{go:f('go'),render:f('render')}})();
function __bsld(){var p=window.gapi.plusone=window.googleapisv0.plusone;var f;while(f=window.___gpq.shift()){
  p[f]&&p[f].apply(p,window.___gpq.shift())}
if (gadgets.config.get("gwidget")["parsetags"]!=="explicit"){gapi.plusone.go();}}
window['___jsl'] = window['___jsl'] || {};window['___jsl']['u'] = 'https:\/\/apis.google.com\/js\/plusone.js';window['___jsl']['f'] = ['googleapis.client','plusone'];window['___jsl']['ms'] = 'https://plus.google.com';(window['___jsl']['ci'] = (window['___jsl']['ci'] || [])).push({"gwidget":{"parsetags":"onload","superbatch":false},"iframes":{"sharebox":{"params":{"json":"&"},"url":":socialhost:/u/:session_index:/_/sharebox/dialog"},":socialhost:":"https://plusone.google.com","plusone_m":{"url":":socialhost:/u/:session_index:/_/+1/fastbutton","params":{"count":"","size":"","url":""}},"card":{"params":{"style":"#","userid":"&"},"url":":socialhost:/u/:session_index:/_/hovercard/card"},"plusone":{"url":":socialhost:/u/:session_index:/_/+1/fastbutton","params":{"count":"","size":"","url":""}}},"googleapis.config":{"requestCache":{"enabled":true},"methods":{"chili.people.list":true,"pos.plusones.list":true,"pos.plusones.get":true,"chili.people.get":true,"pos.plusones.insert":true,"chili.activities.list":true,"pos.plusones.delete":true,"chili.activities.get":true,"chili.activities.search":true,"pos.plusones.getSignupState":true},"versions":{"chili":"v1","pos":"v1"},"rpc":"/rpc","transport":{"isProxyShared":true},"sessionCache":{"enabled":true},"root-1p":"https://clients6.google.com","root":"https://www.googleapis.com","xd3":"/static/proxy.html","developerKey":"AIzaSyCKSbrvQasunBoV16zDH9R33D88CeLr9gQ","auth":{"useInterimAuth":false}}});var gapi=window.gapi||{};gapi.client=window.gapi&&window.gapi.client||{};
(function(){var o=void 0,p=void 0,q="___jsl",G="h",k="l",H="m",r="ms",s="cu",t="c",I="o",l="p",i="q",m="https://ssl.gstatic.com",J="/webclient/js",K="/webclient/jsx/",u="https://apis.google.com",v=".js",L="gcjs-3p",M=/^(https?:)?\/\/([^/:@]*)(:[0-9]+)?(\/[\w.,:!=/-]*)(\?[^#]*)?(#.*)?$/,w=/^[?#]([^&]*&)*jsh=([^&]*)/,x="d",j="r",N="f",n="m",O="n",P="sync",Q="callback",y="config",z="nodep",A="gapi.load: ",B=function(a,b){o&&o(a,b);throw A+a+(b&&" "+b);},C=function(a){p&&p(a);var b=window.console;b&&
b.warn(A+a)},R=function(a,b,d){a=a[G];if(b=b&&w.exec(b)||d&&w.exec(d))try{a=decodeURIComponent(b[2])}catch(f){C("Invalid hint "+b[2])}return a},D=function(a){a.sort();for(var b=0;b<a.length;)!a[b]||b&&a[b]==a[b-1]?a.splice(b,1):++b},S=function(a,b){for(var d=true,f=0,c=0,e,g;d&&(e=a[f])&&(g=b[c]);)e==g?++f:e<g&&(d=false),++c;return d&&!e},T=function(a){if(document.readyState!="loading")return false;if(typeof window.___gapisync!="undefined")return window.___gapisync;if(a&&(a=a[P],typeof a!="undefined"))return a;
for(var a=document.getElementsByTagName("meta"),b=0,d;d=a[b];++b)if("generator"==d.getAttribute("name")&&"blogger"==d.getAttribute("content"))return true;return false},U=function(a){var b=document.createElement("script");b.setAttribute("src",a);a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(b,a)},W=function(a,b,d,f,c){var e=d.shift(),g;g=e==j?m:e==n?f[r]||u:(g=d.shift())&&g.replace(/\/+$/,"");var h;e==j?(h=d.shift(),h=(h.indexOf(K)?J+"/":"")+h):h=d.shift();var i=e==x,V=i&&
d.shift()||L,d=i&&d.shift();if(e==x)c=h,h=V,a="/"+a.join(":")+(b.length?"!"+b.join(":"):"")+v+"?container="+h+"&c=2&jsload=0",c&&(a+="&r="+c),d=="d"&&(a+="&debug=1");else if(e==j||e==N)c=h,a=(c.indexOf("/")?"/":"")+c+"/"+a.join("__")+(b.length?"--"+b.join("__"):"")+v;else if(e==n||e==O)b=h,a=a.join(",").replace(/\./g,"_").replace(/-/g,"_"),a=b.replace("__features__",a),a=c[z]?a.replace("/d=1/","/d=0/"):a;else return C("Unknown hint type "+e),"";if(!g)return"";g+=a;a=g;b=f;if(c=f=M.exec(a))if(c=!/\.\.|\/\//.test(f[4]))b:if(c=
a,f=f[2],e==j)c=c.substr(0,m.length)==m;else if(e==n)f=b[r]||u,c=c.substr(0,f.length)==f;else{e=b[H];if(f&&e){e=e.split(",");b=0;for(c=e.length;b<c;++b)if(d=e[b],h=f.lastIndexOf(d),(h==0||d.charAt(0)=="."||f.charAt(h-1)==".")&&f.length-d.length==h){c=true;break b}}c=false}c||B("Invalid URI",a);return g},X=function(a,b,d){(a[i]=a[i]||[]).push([b,d])},F=function(a){a[i]&&a[i].length>0&&(window.gapi.load||E).apply(null,a[i].shift())},E=function(a,b){var d,f={};typeof b!=="function"?(f=b||{},d=f[Q]):
d=b;var c=window[q]=window[q]||{};if(c[l])X(c,a,b);else{var e=a.split(":");f[z]||D(e);var g=c[k]=c[k]||[];D(g);var h=R(c,window.location.search,window.location.hash);h||B("No hint present","");var i=function(a){if(a)try{a()}catch(b){return b}return null};if(!S(e,g)&&(h=h.split(";"),g=W(e,g,h,c,f),f[y]&&(c[s]=c[s]||[]).push(f[y]),g)){c[l]=e;c[I]=1;c[t]=function(){delete c[l];delete c[t];var a=i(d);F(c);if(a)throw a;};[].push.apply(c[k],e);T(f)?document.write('<script src="'+g+'"><\/script>'):U(g);
return}f=i(d);F(c);if(f)throw f;}};gapi.loader={load:E}})();
gapi.load=window.___jsl&&window.___jsl.il&&window.gapi&&window.gapi.load||gapi.loader.load;
(window.gapi=window.gapi||{}).load=window.___jsl&&window.___jsl.il&&window.gapi.load||gapi.load;
gapi.load('googleapis.client:plusone', {'callback': window['__bsld']  });