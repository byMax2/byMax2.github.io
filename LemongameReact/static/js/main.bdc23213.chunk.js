(this["webpackJsonptesting-react"]=this["webpackJsonptesting-react"]||[]).push([[0],[,,,function(e,t,n){},,function(e,t,n){e.exports=n(12)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var l=n(0),a=n.n(l),c=n(4),r=n.n(c),o=(n(10),n(1));n(11),n(3);var u=function(e){function t(e){var t=Math.floor(Math.log10(e)/(3*Math.log10(10)));return e<=999&&e>0&&(t=0),e<=0?0:Math.floor(e/Math.pow(1e3,t),3).toString()+" "+["","K","M","B","T","Qa","Qi","Sx","Sp","Oc","No","Dc","Ud","Dd","Td","Qad","Qid","Sxd","Spd","Od","Nd","V","Uv","Dv","Tv","Qav","Qiv","Sxv","Spv","Ov","Nv","Tg","Utg","Dtg","Ttg","Qatg","Qitg","Sxtg","Sptg","Otg","Ntg","Qaa","Uqa","Dqa","Tqa","Qaqa","Qiqa","Sxqa","Spqa","Oqa","Nqa","Qia","Uqi","Dqi","Tqi","Qaqi","Qiqi","Sxqi","Spqi","Oqi","Nqi","Sxa","Usx","Dsx","Tsx","Qasx","Qisx","Sxsx","Spsx","Osx","Nsx","Spa","Usp","Dsp","Tsp","Qasp","Qisp","Sxsp","Spsp","Osp","Nsp","Og","Uog","Dog","Tog","Qaog","Qiog","Sxog","Spog","Oog","Nog","Na","Un","Dn","Tn","Qan","Qin","Sxn","Spn","On","Nn","Ct","Uc"][t]}return a.a.createElement("div",{id:"middlebar"},a.a.createElement("h2",null,"Resources:"),a.a.createElement("div",{id:"ressource",className:"table"},a.a.createElement("table",null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null),a.a.createElement("th",null,"Lemons"),a.a.createElement("th",null,"Juice"),a.a.createElement("th",null,"Lemonade"),a.a.createElement("th",null,"Dollar"),a.a.createElement("th",null,"Electircity"),a.a.createElement("th",null,"Science"))),a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("td",null,"Amout:"),a.a.createElement("td",null,t(e.lemons)),a.a.createElement("td",null,t(e.juice)),a.a.createElement("td",null,t(e.lemonade)),a.a.createElement("td",null,t(e.money)),a.a.createElement("td",null,t(e.electricity)),a.a.createElement("td",null,t(e.science))),a.a.createElement("tr",null,a.a.createElement("td",null,"Services per Click:"),a.a.createElement("td",null,"One Free Lemon"),a.a.createElement("td",null,"Three Lemons for One Juice"),a.a.createElement("td",null,"Six Juice for One Lemonade"),a.a.createElement("td",null,"One Lemonade for Two Dollar"),a.a.createElement("td",null,"Impossible"),a.a.createElement("td",null,"Impossible")),a.a.createElement("tr",null,a.a.createElement("td",null,"Action:"),a.a.createElement("td",null,a.a.createElement("input",{type:"submit",onClick:function(){e.setLemons(e.lemons+1)},value:"reap"})),a.a.createElement("td",null,a.a.createElement("input",{type:"submit",onClick:function(){e.lemons>=3&&(e.setLemons(e.lemons-3),e.setJuice(e.juice+1))},value:"squeeze"})),a.a.createElement("td",null,a.a.createElement("input",{type:"submit",onClick:function(){e.juice>=6&&(e.setJuice(e.juice-6),e.setLemonade(e.lemonade+1))},value:"make"})),a.a.createElement("td",null,a.a.createElement("input",{type:"submit",onClick:function(){e.lemonade>=1&&(e.setLemonade(e.lemonade-1),e.setMoney(e.money+2))},value:"sell"})),a.a.createElement("td",null),a.a.createElement("td",null))))))};var m=function(e){var t=Object(l.useState)(0),n=Object(o.a)(t,2),c=n[0],r=n[1],u=function(){return r(c-1)};return Object(l.useEffect)((function(){c<=0&&function(){var t=e.lemons,n=e.juice,l=e.lemonade,a=e.money,c=e.electricity,r=e.science;e.research>=1&&c>=5*e.research&&(c-=5*e.research,r+=1*e.research),e.acid>=1&&n>=12*e.acid&&(n-=12*e.acid,c+=1*e.acid),e.booth>=1&&l>=1*e.booth&&(l-=1*e.booth,a+=2*e.booth),e.mixer>=1&&n>=5*e.mixer&&(n-=5*e.mixer,l+=1*e.mixer),e.squeezer>=1&&t>=2*e.squeezer&&(t-=2*e.squeezer,n+=1*e.squeezer),e.lemontree>=1&&(t+=1*e.lemontree),e.setLemons(t),e.setJuice(n),e.setLemonade(l),e.setMoney(a),e.setElectricity(c),e.setScience(r)}();var t=setInterval(u,1e3);return function(){return clearInterval(t)}}),[c]),a.a.createElement("div",{id:"middlebar"},a.a.createElement("h2",null,"Machinery:"),a.a.createElement("div",{id:"machinery",className:"table"},a.a.createElement("table",null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null),a.a.createElement("th",null,"Lemontree"),a.a.createElement("th",null,"Squeezer"),a.a.createElement("th",null,"Mixer"),a.a.createElement("th",null,"Sales booth"),a.a.createElement("th",null,"Acid Generator"),a.a.createElement("th",null,"Research Center"))),a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("td",null,"Amout:"),a.a.createElement("td",null,e.lemontree),a.a.createElement("td",null,e.squeezer),a.a.createElement("td",null,e.mixer),a.a.createElement("td",null,e.booth),a.a.createElement("td",null,e.acid),a.a.createElement("td",null,e.research)),a.a.createElement("tr",null,a.a.createElement("td",null,"Costs:"),a.a.createElement("td",null,"20 Dollar"),a.a.createElement("td",null,"100 Dollar"),a.a.createElement("td",null,"250 Dollar"),a.a.createElement("td",null,"500 Dollar"),a.a.createElement("td",null,"1200 Dollar"),a.a.createElement("td",null,"2600 Dollar")),a.a.createElement("tr",null,a.a.createElement("td",null,"Services per Second:"),a.a.createElement("td",null,"One Free Lemon"),a.a.createElement("td",null,"Two Lemons for One Juice"),a.a.createElement("td",null,"Five Juice for One Lemonade"),a.a.createElement("td",null,"One Lemonade for Two Dollar"),a.a.createElement("td",null,"Twelve Juice for 1 Electricity"),a.a.createElement("td",null,"5 Electricity for 1 Science")),a.a.createElement("tr",null,a.a.createElement("td",null,"Action:"),a.a.createElement("td",null,a.a.createElement("input",{type:"submit",onClick:function(){e.money>=20&&(e.setMoney(e.money-20),e.setLemontree(e.lemontree+1))},value:"buy"})),a.a.createElement("td",null,a.a.createElement("input",{type:"submit",onClick:function(){e.money>=100&&(e.setMoney(e.money-100),e.setSqueezer(e.squeezer+1))},value:"buy"})),a.a.createElement("td",null,a.a.createElement("input",{type:"submit",onClick:function(){e.money>=250&&(e.setMoney(e.money-250),e.setMixer(e.mixer+1))},value:"buy"})),a.a.createElement("td",null,a.a.createElement("input",{type:"submit",onClick:function(){e.money>=500&&(e.setMoney(e.money-500),e.setBooth(e.booth+1))},value:"buy"})),a.a.createElement("td",null,a.a.createElement("input",{type:"submit",onClick:function(){e.money>=1200&&(e.setMoney(e.money-1200),e.setAcid(e.acid+1))},value:"buy"})),a.a.createElement("td",null,a.a.createElement("input",{type:"submit",onClick:function(){e.money>=2600&&(e.setMoney(e.money-2600),e.setResearch(e.research+1))},value:"buy"})))))))};var i=function(){var e=Object(l.useState)(0),t=Object(o.a)(e,2),n=t[0],c=t[1],r=Object(l.useState)(0),i=Object(o.a)(r,2),s=i[0],d=i[1],E=Object(l.useState)(0),b=Object(o.a)(E,2),y=b[0],h=b[1],p=Object(l.useState)(0),S=Object(o.a)(p,2),O=S[0],v=S[1],f=Object(l.useState)(0),j=Object(o.a)(f,2),x=j[0],g=j[1],q=Object(l.useState)(0),L=Object(o.a)(q,2),Q=L[0],M=L[1],D=Object(l.useState)(0),k=Object(o.a)(D,2),T=k[0],C=k[1],w=Object(l.useState)(0),J=Object(o.a)(w,2),N=J[0],z=J[1],U=Object(l.useState)(0),A=Object(o.a)(U,2),B=A[0],I=A[1],F=Object(l.useState)(0),R=Object(o.a)(F,2),W=R[0],G=R[1],K=Object(l.useState)(0),V=Object(o.a)(K,2),$=V[0],H=V[1],P=Object(l.useState)(0),X=Object(o.a)(P,2),Y=X[0],Z=X[1];return a.a.createElement(a.a.Fragment,null,a.a.createElement(u,{lemons:n,setLemons:c,juice:s,setJuice:d,lemonade:y,setLemonade:h,money:O,setMoney:v,electricity:x,setElectricity:g,science:Q,setScience:M}),a.a.createElement(m,{money:O,setMoney:v,research:Y,setResearch:Z,acid:$,setAcid:H,booth:W,setBooth:G,mixer:B,setMixer:I,squeezer:N,setSqueezer:z,lemontree:T,setLemontree:C,lemons:n,setLemons:c,juice:s,setJuice:d,lemonade:y,setLemonade:h,electricity:x,setElectricity:g,science:Q,setScience:M}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(i,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[5,1,2]]]);
//# sourceMappingURL=main.bdc23213.chunk.js.map