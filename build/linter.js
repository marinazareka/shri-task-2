!function(e){var n={};function t(r){if(n[r])return n[r].exports;var l=n[r]={i:r,l:!1,exports:{}};return e[r].call(l.exports,l,l.exports,t),l.l=!0,l.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var l in e)t.d(r,l,function(n){return e[n]}.bind(null,l));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=3)}([function(e,n){e.exports=e=>{const{children:n=[]}=e;let t,r=0;for(;!t&&r<n.length;)"block"===n[r].key.value&&(t=n[r].value.value),r+=1;return t}},function(e,n,t){t(2);const r=(e,n)=>{switch(e.type){case"Object":e.children.reduce((function(e,n){return e&&"elem"!==n.key.value}),!0)&&n(e),e.children.forEach((function(e){r(e,n)}));break;case"Property":"content"!==e.key.value&&"mix"!==e.key.value||r(e.value,n);break;case"Array":e.children.forEach((function(e){r(e,n)}))}};e.exports=r},function(e,n,t){const r=t(0);e.exports=e=>function(n){const t=r(n);e[t]&&e[t].forEach(e=>e.verify(n))}},function(e,n,t){const r=t(4);global.lint=r},function(e,n,t){const r=t(5),l=t(10),o=t(1),c=t(2);class i{constructor(e){this.ast=l(e),this.errors=[],this.rules={}}createRules(){const e=this.createRulesContext();for(let n in r)this.rules[r[n].meta.type]||(this.rules[r[n].meta.type]=[]),this.rules[r[n].meta.type].push(r[n].create(e))}createRulesContext(){return{reporter:this.reporter.bind(this),state:{}}}run(){return this.createRules(),o(this.ast,c(this.rules)),this.errors}reporter(e){this.errors.push(e)}}e.exports=function(e){return new i(e).run()}},function(e,n,t){const r=t(6),l=t(8),o=t(9);e.exports={warningValidator:r,textValidator:l,gridValidator:o}},function(e,n,t){const r=t(1),l=t(0),o=t(7);function c(e,n,t){if(!sizeStandard)return void n.recheck.push(()=>{c(e,n,t)});const{children:r=[]}=t,l=r.find((function(e){return"mods"===e.key.value}));let i=l&&l.value.children.find((function(e){return"size"===e.key.value}));if(i=i.value.value,!i)return;const u=o.indexOf(sizeStandard);if((-1!==u||u!==o.length-1)&&i!==o[u+1]){const{start:n,end:r}=t.loc,l={code:"WARNING.INVALID_BUTTON_SIZE",error:"Размер кнопки блока warning должен быть на 1 шаг больше эталонного",location:{start:{column:n.column,line:n.line},end:{column:r.column,line:r.line}}};e.reporter(l)}}e.exports={create(e){const n={recheck:[]};return{verify(t){const o=t.children,i=t.loc,u=o.find(e=>"content"===e.key.value);let a=void 0,s=void 0;function f(t){switch(l(t)){case"text":!function(n){const{children:t=[]}=n,r=t.find((function(e){return"mods"===e.key.value}));let l=r&&r.value.children.find((function(e){return"size"===e.key.value}));if(l=l.value.value,l)if(a){if(l!==a){const{start:n,end:t}=i,r={code:"WARNING.TEXT_SIZES_SHOULD_BE_EQUAL",error:"Тексты в блоке warning должны быть одного размера",location:{start:{column:n.column,line:n.line},end:{column:t.column,line:t.line}}};e.reporter(r)}}else a=l}(t);break;case"button":c(e,n,t),function t(r,l){if(l){if(s&&l){const{start:n,end:t}=r.loc,{start:l}=s.loc;if(t.line<l.line||t.line===l.line&&t.column<l.column){const r={code:"WARNING.INVALID_BUTTON_POSITION",error:"Блок button в блоке warning не может находиться перед блоком placeholder на том же или более глубоком уровне вложенности.",location:{start:{column:n.column,line:n.line},end:{column:t.column,line:t.line}}};e.reporter(r)}}}else n.recheck.push(()=>{t(r,!0)})}(t,!1);break;case"placeholder":s=t,function(n){const{children:t=[]}=n,r=t.find((function(e){return"mods"===e.key.value}));let l=r&&r.value.children.find((function(e){return"size"===e.key.value}));if(l=l&&l.value.value,l&&!["s","m","l"].includes(l)){const{start:t,end:r}=n.loc,l={code:"WARNING.INVALID_PLACEHOLDER_SIZE",error:" Допустимые размеры для блока placeholder в блоке warning (значение модификатора size): s, m, l.",location:{start:{column:t.column,line:t.line},end:{column:r.column,line:r.line}}};e.reporter(l)}}(t)}}u&&u.value.children.forEach(e=>{r(e,f)})}}},meta:{type:"warning"}}},function(e,n){e.exports=["xxxs","xxs","xs","s","m","l","xl","xxl","xxxl","xxxxl","xxxxxl"]},function(e,n){e.exports={create(e){const n={recheck:[]};return{verify(t){const r=t.children,l=t.loc,o=r.find(e=>"mods"===e.key.value);function c(t){switch(t.key.value){case"type":switch(t.value.value){case"h1":!function(e,n,t){if(n.h1){const{start:n,end:r}=t,l={code:"TEXT.SEVERAL_H1",error:"Заголовок h1 должен быть единственным на странице",location:{start:{column:n.column,line:n.line},end:{column:r.column,line:r.line}}};e.reporter(l)}}(e,n,l),n.h1=t;break;case"h2":!function e(n,t,r,l,o){if(o||t.recheck.push(()=>{e(n,t,r,l,!0)}),t.h1&&o){const{start:e}=t.h1.loc,{start:l,end:o}=r;if(o.line<e.line||o.line===e.line&&o.column<e.column){const e={code:"TEXT.INVALID_H2_POSITION",error:"Заголовок h2 не может находиться перед заголовком первого уровня на том же или более глубоком уровне вложенности",location:{start:{column:l.column,line:l.line},end:{column:o.column,line:o.line}}};n.reporter(e)}}}(e,n,l,t,!1),n.h2=t;break;case"h3":!function e(n,t,r,l,o){if(o){if(t.h2&&o){const{start:e}=t.h2.loc,{start:l,end:o}=r;if(o.line<e.line||o.line===e.line&&o.column<e.column){const e={code:"TEXT.INVALID_H3_POSITION",error:"Заголовок h3 не может находиться перед заголовком второго уровня на том же или более глубоком уровне вложенности",location:{start:{column:l.column,line:l.line},end:{column:o.column,line:o.line}}};n.reporter(e)}}}else t.recheck.push(()=>{e(n,t,r,l,!0)})}(e,n,l,t,!1)}}}o&&o.value.children.forEach(e=>{c(e)}),n.recheck.forEach((function(e){e()}))}}},meta:{type:"text"}}},function(e,n,t){const r=t(0);e.exports={create(e){const n={recheck:[]};return{verify(t){const l=t.children,o=t.loc,{content:c,mods:i}=l.reduce((e,n)=>("content"===n.key.value&&(e.content=n),"mods"===n.key.value&&(e.mods=n),e),{content:"",mods:""}),u=i.value.children.find(e=>"m-columns"===e.key.value),a=u&&u.value.value;let s=0;function f(n,t){if(t){if(a&&t){const n=parseInt(a);if(s>(n%2==0?n/2:(n-1)/2)){const{start:n,end:t}=o,r={code:"GRID.TOO_MUCH_MARKETING_BLOCKS",error:"Маркетинговые блоки(commercial, offer) должны занимать не больше половины от всех колонок блока grid",location:{start:{column:n.column,line:n.line},end:{column:t.column,line:t.line}}};e.reporter(r)}}}else{if(!n)return;s+=parseInt(n)}}c&&c.value.children.forEach((function(e){!function(e){const{mCol:n,block:t}=e.children.reduce((e,n)=>{if("elemMods"===n.key.value){const t=n.value.children.find(e=>"m-col"===e.key.value);e.mCol=t&&t.value.value}return"content"===n.key.value&&(e.block=n.value.children[0]),e},{mCol:void 0,block:void 0});switch("Object"===t.type?r(t):t.value.value){case"commercial":case"offer":f(n,!1)}}(e)})),s&&n.recheck.push(()=>{f(null,!0)}),n.recheck.forEach(e=>{e()})}}},meta:{type:"grid"}}},function(e,n,t){var r;r=function(){"use strict";function e(e,n){return e(n={exports:{}},n.exports),n.exports}"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;var n=new(e((function(e){e.exports&&(e.exports=function(){var e=3,n=4,t=12,r=13,l=16,o=17;function c(e,n){void 0===n&&(n=0);var t=e.charCodeAt(n);if(55296<=t&&t<=56319&&n<e.length-1){var r=t;return 56320<=(l=e.charCodeAt(n+1))&&l<=57343?1024*(r-55296)+(l-56320)+65536:r}if(56320<=t&&t<=57343&&n>=1){var l=t;return 55296<=(r=e.charCodeAt(n-1))&&r<=56319?1024*(r-55296)+(l-56320)+65536:l}return t}function i(c,i,u){var a=[c].concat(i).concat([u]),s=a[a.length-2],f=u,d=a.lastIndexOf(14);if(d>1&&a.slice(1,d).every((function(n){return n==e}))&&-1==[e,r,o].indexOf(c))return 2;var v=a.lastIndexOf(n);if(v>0&&a.slice(1,v).every((function(e){return e==n}))&&-1==[t,n].indexOf(s))return a.filter((function(e){return e==n})).length%2==1?3:4;if(0==s&&1==f)return 0;if(2==s||0==s||1==s)return 14==f&&i.every((function(n){return n==e}))?2:1;if(2==f||0==f||1==f)return 1;if(6==s&&(6==f||7==f||9==f||10==f))return 0;if(!(9!=s&&7!=s||7!=f&&8!=f))return 0;if((10==s||8==s)&&8==f)return 0;if(f==e||15==f)return 0;if(5==f)return 0;if(s==t)return 0;var h=-1!=a.indexOf(e)?a.lastIndexOf(e)-1:a.length-2;return-1!=[r,o].indexOf(a[h])&&a.slice(h+1,-1).every((function(n){return n==e}))&&14==f?0:15==s&&-1!=[l,o].indexOf(f)?0:-1!=i.indexOf(n)?2:s==n&&f==n?0:1}function u(c){return 1536<=c&&c<=1541||1757==c||1807==c||2274==c||3406==c||69821==c||70082<=c&&c<=70083||72250==c||72326<=c&&c<=72329||73030==c?t:13==c?0:10==c?1:0<=c&&c<=9||11<=c&&c<=12||14<=c&&c<=31||127<=c&&c<=159||173==c||1564==c||6158==c||8203==c||8206<=c&&c<=8207||8232==c||8233==c||8234<=c&&c<=8238||8288<=c&&c<=8292||8293==c||8294<=c&&c<=8303||55296<=c&&c<=57343||65279==c||65520<=c&&c<=65528||65529<=c&&c<=65531||113824<=c&&c<=113827||119155<=c&&c<=119162||917504==c||917505==c||917506<=c&&c<=917535||917632<=c&&c<=917759||918e3<=c&&c<=921599?2:768<=c&&c<=879||1155<=c&&c<=1159||1160<=c&&c<=1161||1425<=c&&c<=1469||1471==c||1473<=c&&c<=1474||1476<=c&&c<=1477||1479==c||1552<=c&&c<=1562||1611<=c&&c<=1631||1648==c||1750<=c&&c<=1756||1759<=c&&c<=1764||1767<=c&&c<=1768||1770<=c&&c<=1773||1809==c||1840<=c&&c<=1866||1958<=c&&c<=1968||2027<=c&&c<=2035||2070<=c&&c<=2073||2075<=c&&c<=2083||2085<=c&&c<=2087||2089<=c&&c<=2093||2137<=c&&c<=2139||2260<=c&&c<=2273||2275<=c&&c<=2306||2362==c||2364==c||2369<=c&&c<=2376||2381==c||2385<=c&&c<=2391||2402<=c&&c<=2403||2433==c||2492==c||2494==c||2497<=c&&c<=2500||2509==c||2519==c||2530<=c&&c<=2531||2561<=c&&c<=2562||2620==c||2625<=c&&c<=2626||2631<=c&&c<=2632||2635<=c&&c<=2637||2641==c||2672<=c&&c<=2673||2677==c||2689<=c&&c<=2690||2748==c||2753<=c&&c<=2757||2759<=c&&c<=2760||2765==c||2786<=c&&c<=2787||2810<=c&&c<=2815||2817==c||2876==c||2878==c||2879==c||2881<=c&&c<=2884||2893==c||2902==c||2903==c||2914<=c&&c<=2915||2946==c||3006==c||3008==c||3021==c||3031==c||3072==c||3134<=c&&c<=3136||3142<=c&&c<=3144||3146<=c&&c<=3149||3157<=c&&c<=3158||3170<=c&&c<=3171||3201==c||3260==c||3263==c||3266==c||3270==c||3276<=c&&c<=3277||3285<=c&&c<=3286||3298<=c&&c<=3299||3328<=c&&c<=3329||3387<=c&&c<=3388||3390==c||3393<=c&&c<=3396||3405==c||3415==c||3426<=c&&c<=3427||3530==c||3535==c||3538<=c&&c<=3540||3542==c||3551==c||3633==c||3636<=c&&c<=3642||3655<=c&&c<=3662||3761==c||3764<=c&&c<=3769||3771<=c&&c<=3772||3784<=c&&c<=3789||3864<=c&&c<=3865||3893==c||3895==c||3897==c||3953<=c&&c<=3966||3968<=c&&c<=3972||3974<=c&&c<=3975||3981<=c&&c<=3991||3993<=c&&c<=4028||4038==c||4141<=c&&c<=4144||4146<=c&&c<=4151||4153<=c&&c<=4154||4157<=c&&c<=4158||4184<=c&&c<=4185||4190<=c&&c<=4192||4209<=c&&c<=4212||4226==c||4229<=c&&c<=4230||4237==c||4253==c||4957<=c&&c<=4959||5906<=c&&c<=5908||5938<=c&&c<=5940||5970<=c&&c<=5971||6002<=c&&c<=6003||6068<=c&&c<=6069||6071<=c&&c<=6077||6086==c||6089<=c&&c<=6099||6109==c||6155<=c&&c<=6157||6277<=c&&c<=6278||6313==c||6432<=c&&c<=6434||6439<=c&&c<=6440||6450==c||6457<=c&&c<=6459||6679<=c&&c<=6680||6683==c||6742==c||6744<=c&&c<=6750||6752==c||6754==c||6757<=c&&c<=6764||6771<=c&&c<=6780||6783==c||6832<=c&&c<=6845||6846==c||6912<=c&&c<=6915||6964==c||6966<=c&&c<=6970||6972==c||6978==c||7019<=c&&c<=7027||7040<=c&&c<=7041||7074<=c&&c<=7077||7080<=c&&c<=7081||7083<=c&&c<=7085||7142==c||7144<=c&&c<=7145||7149==c||7151<=c&&c<=7153||7212<=c&&c<=7219||7222<=c&&c<=7223||7376<=c&&c<=7378||7380<=c&&c<=7392||7394<=c&&c<=7400||7405==c||7412==c||7416<=c&&c<=7417||7616<=c&&c<=7673||7675<=c&&c<=7679||8204==c||8400<=c&&c<=8412||8413<=c&&c<=8416||8417==c||8418<=c&&c<=8420||8421<=c&&c<=8432||11503<=c&&c<=11505||11647==c||11744<=c&&c<=11775||12330<=c&&c<=12333||12334<=c&&c<=12335||12441<=c&&c<=12442||42607==c||42608<=c&&c<=42610||42612<=c&&c<=42621||42654<=c&&c<=42655||42736<=c&&c<=42737||43010==c||43014==c||43019==c||43045<=c&&c<=43046||43204<=c&&c<=43205||43232<=c&&c<=43249||43302<=c&&c<=43309||43335<=c&&c<=43345||43392<=c&&c<=43394||43443==c||43446<=c&&c<=43449||43452==c||43493==c||43561<=c&&c<=43566||43569<=c&&c<=43570||43573<=c&&c<=43574||43587==c||43596==c||43644==c||43696==c||43698<=c&&c<=43700||43703<=c&&c<=43704||43710<=c&&c<=43711||43713==c||43756<=c&&c<=43757||43766==c||44005==c||44008==c||44013==c||64286==c||65024<=c&&c<=65039||65056<=c&&c<=65071||65438<=c&&c<=65439||66045==c||66272==c||66422<=c&&c<=66426||68097<=c&&c<=68099||68101<=c&&c<=68102||68108<=c&&c<=68111||68152<=c&&c<=68154||68159==c||68325<=c&&c<=68326||69633==c||69688<=c&&c<=69702||69759<=c&&c<=69761||69811<=c&&c<=69814||69817<=c&&c<=69818||69888<=c&&c<=69890||69927<=c&&c<=69931||69933<=c&&c<=69940||70003==c||70016<=c&&c<=70017||70070<=c&&c<=70078||70090<=c&&c<=70092||70191<=c&&c<=70193||70196==c||70198<=c&&c<=70199||70206==c||70367==c||70371<=c&&c<=70378||70400<=c&&c<=70401||70460==c||70462==c||70464==c||70487==c||70502<=c&&c<=70508||70512<=c&&c<=70516||70712<=c&&c<=70719||70722<=c&&c<=70724||70726==c||70832==c||70835<=c&&c<=70840||70842==c||70845==c||70847<=c&&c<=70848||70850<=c&&c<=70851||71087==c||71090<=c&&c<=71093||71100<=c&&c<=71101||71103<=c&&c<=71104||71132<=c&&c<=71133||71219<=c&&c<=71226||71229==c||71231<=c&&c<=71232||71339==c||71341==c||71344<=c&&c<=71349||71351==c||71453<=c&&c<=71455||71458<=c&&c<=71461||71463<=c&&c<=71467||72193<=c&&c<=72198||72201<=c&&c<=72202||72243<=c&&c<=72248||72251<=c&&c<=72254||72263==c||72273<=c&&c<=72278||72281<=c&&c<=72283||72330<=c&&c<=72342||72344<=c&&c<=72345||72752<=c&&c<=72758||72760<=c&&c<=72765||72767==c||72850<=c&&c<=72871||72874<=c&&c<=72880||72882<=c&&c<=72883||72885<=c&&c<=72886||73009<=c&&c<=73014||73018==c||73020<=c&&c<=73021||73023<=c&&c<=73029||73031==c||92912<=c&&c<=92916||92976<=c&&c<=92982||94095<=c&&c<=94098||113821<=c&&c<=113822||119141==c||119143<=c&&c<=119145||119150<=c&&c<=119154||119163<=c&&c<=119170||119173<=c&&c<=119179||119210<=c&&c<=119213||119362<=c&&c<=119364||121344<=c&&c<=121398||121403<=c&&c<=121452||121461==c||121476==c||121499<=c&&c<=121503||121505<=c&&c<=121519||122880<=c&&c<=122886||122888<=c&&c<=122904||122907<=c&&c<=122913||122915<=c&&c<=122916||122918<=c&&c<=122922||125136<=c&&c<=125142||125252<=c&&c<=125258||917536<=c&&c<=917631||917760<=c&&c<=917999?e:127462<=c&&c<=127487?n:2307==c||2363==c||2366<=c&&c<=2368||2377<=c&&c<=2380||2382<=c&&c<=2383||2434<=c&&c<=2435||2495<=c&&c<=2496||2503<=c&&c<=2504||2507<=c&&c<=2508||2563==c||2622<=c&&c<=2624||2691==c||2750<=c&&c<=2752||2761==c||2763<=c&&c<=2764||2818<=c&&c<=2819||2880==c||2887<=c&&c<=2888||2891<=c&&c<=2892||3007==c||3009<=c&&c<=3010||3014<=c&&c<=3016||3018<=c&&c<=3020||3073<=c&&c<=3075||3137<=c&&c<=3140||3202<=c&&c<=3203||3262==c||3264<=c&&c<=3265||3267<=c&&c<=3268||3271<=c&&c<=3272||3274<=c&&c<=3275||3330<=c&&c<=3331||3391<=c&&c<=3392||3398<=c&&c<=3400||3402<=c&&c<=3404||3458<=c&&c<=3459||3536<=c&&c<=3537||3544<=c&&c<=3550||3570<=c&&c<=3571||3635==c||3763==c||3902<=c&&c<=3903||3967==c||4145==c||4155<=c&&c<=4156||4182<=c&&c<=4183||4228==c||6070==c||6078<=c&&c<=6085||6087<=c&&c<=6088||6435<=c&&c<=6438||6441<=c&&c<=6443||6448<=c&&c<=6449||6451<=c&&c<=6456||6681<=c&&c<=6682||6741==c||6743==c||6765<=c&&c<=6770||6916==c||6965==c||6971==c||6973<=c&&c<=6977||6979<=c&&c<=6980||7042==c||7073==c||7078<=c&&c<=7079||7082==c||7143==c||7146<=c&&c<=7148||7150==c||7154<=c&&c<=7155||7204<=c&&c<=7211||7220<=c&&c<=7221||7393==c||7410<=c&&c<=7411||7415==c||43043<=c&&c<=43044||43047==c||43136<=c&&c<=43137||43188<=c&&c<=43203||43346<=c&&c<=43347||43395==c||43444<=c&&c<=43445||43450<=c&&c<=43451||43453<=c&&c<=43456||43567<=c&&c<=43568||43571<=c&&c<=43572||43597==c||43755==c||43758<=c&&c<=43759||43765==c||44003<=c&&c<=44004||44006<=c&&c<=44007||44009<=c&&c<=44010||44012==c||69632==c||69634==c||69762==c||69808<=c&&c<=69810||69815<=c&&c<=69816||69932==c||70018==c||70067<=c&&c<=70069||70079<=c&&c<=70080||70188<=c&&c<=70190||70194<=c&&c<=70195||70197==c||70368<=c&&c<=70370||70402<=c&&c<=70403||70463==c||70465<=c&&c<=70468||70471<=c&&c<=70472||70475<=c&&c<=70477||70498<=c&&c<=70499||70709<=c&&c<=70711||70720<=c&&c<=70721||70725==c||70833<=c&&c<=70834||70841==c||70843<=c&&c<=70844||70846==c||70849==c||71088<=c&&c<=71089||71096<=c&&c<=71099||71102==c||71216<=c&&c<=71218||71227<=c&&c<=71228||71230==c||71340==c||71342<=c&&c<=71343||71350==c||71456<=c&&c<=71457||71462==c||72199<=c&&c<=72200||72249==c||72279<=c&&c<=72280||72343==c||72751==c||72766==c||72873==c||72881==c||72884==c||94033<=c&&c<=94078||119142==c||119149==c?5:4352<=c&&c<=4447||43360<=c&&c<=43388?6:4448<=c&&c<=4519||55216<=c&&c<=55238?7:4520<=c&&c<=4607||55243<=c&&c<=55291?8:44032==c||44060==c||44088==c||44116==c||44144==c||44172==c||44200==c||44228==c||44256==c||44284==c||44312==c||44340==c||44368==c||44396==c||44424==c||44452==c||44480==c||44508==c||44536==c||44564==c||44592==c||44620==c||44648==c||44676==c||44704==c||44732==c||44760==c||44788==c||44816==c||44844==c||44872==c||44900==c||44928==c||44956==c||44984==c||45012==c||45040==c||45068==c||45096==c||45124==c||45152==c||45180==c||45208==c||45236==c||45264==c||45292==c||45320==c||45348==c||45376==c||45404==c||45432==c||45460==c||45488==c||45516==c||45544==c||45572==c||45600==c||45628==c||45656==c||45684==c||45712==c||45740==c||45768==c||45796==c||45824==c||45852==c||45880==c||45908==c||45936==c||45964==c||45992==c||46020==c||46048==c||46076==c||46104==c||46132==c||46160==c||46188==c||46216==c||46244==c||46272==c||46300==c||46328==c||46356==c||46384==c||46412==c||46440==c||46468==c||46496==c||46524==c||46552==c||46580==c||46608==c||46636==c||46664==c||46692==c||46720==c||46748==c||46776==c||46804==c||46832==c||46860==c||46888==c||46916==c||46944==c||46972==c||47e3==c||47028==c||47056==c||47084==c||47112==c||47140==c||47168==c||47196==c||47224==c||47252==c||47280==c||47308==c||47336==c||47364==c||47392==c||47420==c||47448==c||47476==c||47504==c||47532==c||47560==c||47588==c||47616==c||47644==c||47672==c||47700==c||47728==c||47756==c||47784==c||47812==c||47840==c||47868==c||47896==c||47924==c||47952==c||47980==c||48008==c||48036==c||48064==c||48092==c||48120==c||48148==c||48176==c||48204==c||48232==c||48260==c||48288==c||48316==c||48344==c||48372==c||48400==c||48428==c||48456==c||48484==c||48512==c||48540==c||48568==c||48596==c||48624==c||48652==c||48680==c||48708==c||48736==c||48764==c||48792==c||48820==c||48848==c||48876==c||48904==c||48932==c||48960==c||48988==c||49016==c||49044==c||49072==c||49100==c||49128==c||49156==c||49184==c||49212==c||49240==c||49268==c||49296==c||49324==c||49352==c||49380==c||49408==c||49436==c||49464==c||49492==c||49520==c||49548==c||49576==c||49604==c||49632==c||49660==c||49688==c||49716==c||49744==c||49772==c||49800==c||49828==c||49856==c||49884==c||49912==c||49940==c||49968==c||49996==c||50024==c||50052==c||50080==c||50108==c||50136==c||50164==c||50192==c||50220==c||50248==c||50276==c||50304==c||50332==c||50360==c||50388==c||50416==c||50444==c||50472==c||50500==c||50528==c||50556==c||50584==c||50612==c||50640==c||50668==c||50696==c||50724==c||50752==c||50780==c||50808==c||50836==c||50864==c||50892==c||50920==c||50948==c||50976==c||51004==c||51032==c||51060==c||51088==c||51116==c||51144==c||51172==c||51200==c||51228==c||51256==c||51284==c||51312==c||51340==c||51368==c||51396==c||51424==c||51452==c||51480==c||51508==c||51536==c||51564==c||51592==c||51620==c||51648==c||51676==c||51704==c||51732==c||51760==c||51788==c||51816==c||51844==c||51872==c||51900==c||51928==c||51956==c||51984==c||52012==c||52040==c||52068==c||52096==c||52124==c||52152==c||52180==c||52208==c||52236==c||52264==c||52292==c||52320==c||52348==c||52376==c||52404==c||52432==c||52460==c||52488==c||52516==c||52544==c||52572==c||52600==c||52628==c||52656==c||52684==c||52712==c||52740==c||52768==c||52796==c||52824==c||52852==c||52880==c||52908==c||52936==c||52964==c||52992==c||53020==c||53048==c||53076==c||53104==c||53132==c||53160==c||53188==c||53216==c||53244==c||53272==c||53300==c||53328==c||53356==c||53384==c||53412==c||53440==c||53468==c||53496==c||53524==c||53552==c||53580==c||53608==c||53636==c||53664==c||53692==c||53720==c||53748==c||53776==c||53804==c||53832==c||53860==c||53888==c||53916==c||53944==c||53972==c||54e3==c||54028==c||54056==c||54084==c||54112==c||54140==c||54168==c||54196==c||54224==c||54252==c||54280==c||54308==c||54336==c||54364==c||54392==c||54420==c||54448==c||54476==c||54504==c||54532==c||54560==c||54588==c||54616==c||54644==c||54672==c||54700==c||54728==c||54756==c||54784==c||54812==c||54840==c||54868==c||54896==c||54924==c||54952==c||54980==c||55008==c||55036==c||55064==c||55092==c||55120==c||55148==c||55176==c?9:44033<=c&&c<=44059||44061<=c&&c<=44087||44089<=c&&c<=44115||44117<=c&&c<=44143||44145<=c&&c<=44171||44173<=c&&c<=44199||44201<=c&&c<=44227||44229<=c&&c<=44255||44257<=c&&c<=44283||44285<=c&&c<=44311||44313<=c&&c<=44339||44341<=c&&c<=44367||44369<=c&&c<=44395||44397<=c&&c<=44423||44425<=c&&c<=44451||44453<=c&&c<=44479||44481<=c&&c<=44507||44509<=c&&c<=44535||44537<=c&&c<=44563||44565<=c&&c<=44591||44593<=c&&c<=44619||44621<=c&&c<=44647||44649<=c&&c<=44675||44677<=c&&c<=44703||44705<=c&&c<=44731||44733<=c&&c<=44759||44761<=c&&c<=44787||44789<=c&&c<=44815||44817<=c&&c<=44843||44845<=c&&c<=44871||44873<=c&&c<=44899||44901<=c&&c<=44927||44929<=c&&c<=44955||44957<=c&&c<=44983||44985<=c&&c<=45011||45013<=c&&c<=45039||45041<=c&&c<=45067||45069<=c&&c<=45095||45097<=c&&c<=45123||45125<=c&&c<=45151||45153<=c&&c<=45179||45181<=c&&c<=45207||45209<=c&&c<=45235||45237<=c&&c<=45263||45265<=c&&c<=45291||45293<=c&&c<=45319||45321<=c&&c<=45347||45349<=c&&c<=45375||45377<=c&&c<=45403||45405<=c&&c<=45431||45433<=c&&c<=45459||45461<=c&&c<=45487||45489<=c&&c<=45515||45517<=c&&c<=45543||45545<=c&&c<=45571||45573<=c&&c<=45599||45601<=c&&c<=45627||45629<=c&&c<=45655||45657<=c&&c<=45683||45685<=c&&c<=45711||45713<=c&&c<=45739||45741<=c&&c<=45767||45769<=c&&c<=45795||45797<=c&&c<=45823||45825<=c&&c<=45851||45853<=c&&c<=45879||45881<=c&&c<=45907||45909<=c&&c<=45935||45937<=c&&c<=45963||45965<=c&&c<=45991||45993<=c&&c<=46019||46021<=c&&c<=46047||46049<=c&&c<=46075||46077<=c&&c<=46103||46105<=c&&c<=46131||46133<=c&&c<=46159||46161<=c&&c<=46187||46189<=c&&c<=46215||46217<=c&&c<=46243||46245<=c&&c<=46271||46273<=c&&c<=46299||46301<=c&&c<=46327||46329<=c&&c<=46355||46357<=c&&c<=46383||46385<=c&&c<=46411||46413<=c&&c<=46439||46441<=c&&c<=46467||46469<=c&&c<=46495||46497<=c&&c<=46523||46525<=c&&c<=46551||46553<=c&&c<=46579||46581<=c&&c<=46607||46609<=c&&c<=46635||46637<=c&&c<=46663||46665<=c&&c<=46691||46693<=c&&c<=46719||46721<=c&&c<=46747||46749<=c&&c<=46775||46777<=c&&c<=46803||46805<=c&&c<=46831||46833<=c&&c<=46859||46861<=c&&c<=46887||46889<=c&&c<=46915||46917<=c&&c<=46943||46945<=c&&c<=46971||46973<=c&&c<=46999||47001<=c&&c<=47027||47029<=c&&c<=47055||47057<=c&&c<=47083||47085<=c&&c<=47111||47113<=c&&c<=47139||47141<=c&&c<=47167||47169<=c&&c<=47195||47197<=c&&c<=47223||47225<=c&&c<=47251||47253<=c&&c<=47279||47281<=c&&c<=47307||47309<=c&&c<=47335||47337<=c&&c<=47363||47365<=c&&c<=47391||47393<=c&&c<=47419||47421<=c&&c<=47447||47449<=c&&c<=47475||47477<=c&&c<=47503||47505<=c&&c<=47531||47533<=c&&c<=47559||47561<=c&&c<=47587||47589<=c&&c<=47615||47617<=c&&c<=47643||47645<=c&&c<=47671||47673<=c&&c<=47699||47701<=c&&c<=47727||47729<=c&&c<=47755||47757<=c&&c<=47783||47785<=c&&c<=47811||47813<=c&&c<=47839||47841<=c&&c<=47867||47869<=c&&c<=47895||47897<=c&&c<=47923||47925<=c&&c<=47951||47953<=c&&c<=47979||47981<=c&&c<=48007||48009<=c&&c<=48035||48037<=c&&c<=48063||48065<=c&&c<=48091||48093<=c&&c<=48119||48121<=c&&c<=48147||48149<=c&&c<=48175||48177<=c&&c<=48203||48205<=c&&c<=48231||48233<=c&&c<=48259||48261<=c&&c<=48287||48289<=c&&c<=48315||48317<=c&&c<=48343||48345<=c&&c<=48371||48373<=c&&c<=48399||48401<=c&&c<=48427||48429<=c&&c<=48455||48457<=c&&c<=48483||48485<=c&&c<=48511||48513<=c&&c<=48539||48541<=c&&c<=48567||48569<=c&&c<=48595||48597<=c&&c<=48623||48625<=c&&c<=48651||48653<=c&&c<=48679||48681<=c&&c<=48707||48709<=c&&c<=48735||48737<=c&&c<=48763||48765<=c&&c<=48791||48793<=c&&c<=48819||48821<=c&&c<=48847||48849<=c&&c<=48875||48877<=c&&c<=48903||48905<=c&&c<=48931||48933<=c&&c<=48959||48961<=c&&c<=48987||48989<=c&&c<=49015||49017<=c&&c<=49043||49045<=c&&c<=49071||49073<=c&&c<=49099||49101<=c&&c<=49127||49129<=c&&c<=49155||49157<=c&&c<=49183||49185<=c&&c<=49211||49213<=c&&c<=49239||49241<=c&&c<=49267||49269<=c&&c<=49295||49297<=c&&c<=49323||49325<=c&&c<=49351||49353<=c&&c<=49379||49381<=c&&c<=49407||49409<=c&&c<=49435||49437<=c&&c<=49463||49465<=c&&c<=49491||49493<=c&&c<=49519||49521<=c&&c<=49547||49549<=c&&c<=49575||49577<=c&&c<=49603||49605<=c&&c<=49631||49633<=c&&c<=49659||49661<=c&&c<=49687||49689<=c&&c<=49715||49717<=c&&c<=49743||49745<=c&&c<=49771||49773<=c&&c<=49799||49801<=c&&c<=49827||49829<=c&&c<=49855||49857<=c&&c<=49883||49885<=c&&c<=49911||49913<=c&&c<=49939||49941<=c&&c<=49967||49969<=c&&c<=49995||49997<=c&&c<=50023||50025<=c&&c<=50051||50053<=c&&c<=50079||50081<=c&&c<=50107||50109<=c&&c<=50135||50137<=c&&c<=50163||50165<=c&&c<=50191||50193<=c&&c<=50219||50221<=c&&c<=50247||50249<=c&&c<=50275||50277<=c&&c<=50303||50305<=c&&c<=50331||50333<=c&&c<=50359||50361<=c&&c<=50387||50389<=c&&c<=50415||50417<=c&&c<=50443||50445<=c&&c<=50471||50473<=c&&c<=50499||50501<=c&&c<=50527||50529<=c&&c<=50555||50557<=c&&c<=50583||50585<=c&&c<=50611||50613<=c&&c<=50639||50641<=c&&c<=50667||50669<=c&&c<=50695||50697<=c&&c<=50723||50725<=c&&c<=50751||50753<=c&&c<=50779||50781<=c&&c<=50807||50809<=c&&c<=50835||50837<=c&&c<=50863||50865<=c&&c<=50891||50893<=c&&c<=50919||50921<=c&&c<=50947||50949<=c&&c<=50975||50977<=c&&c<=51003||51005<=c&&c<=51031||51033<=c&&c<=51059||51061<=c&&c<=51087||51089<=c&&c<=51115||51117<=c&&c<=51143||51145<=c&&c<=51171||51173<=c&&c<=51199||51201<=c&&c<=51227||51229<=c&&c<=51255||51257<=c&&c<=51283||51285<=c&&c<=51311||51313<=c&&c<=51339||51341<=c&&c<=51367||51369<=c&&c<=51395||51397<=c&&c<=51423||51425<=c&&c<=51451||51453<=c&&c<=51479||51481<=c&&c<=51507||51509<=c&&c<=51535||51537<=c&&c<=51563||51565<=c&&c<=51591||51593<=c&&c<=51619||51621<=c&&c<=51647||51649<=c&&c<=51675||51677<=c&&c<=51703||51705<=c&&c<=51731||51733<=c&&c<=51759||51761<=c&&c<=51787||51789<=c&&c<=51815||51817<=c&&c<=51843||51845<=c&&c<=51871||51873<=c&&c<=51899||51901<=c&&c<=51927||51929<=c&&c<=51955||51957<=c&&c<=51983||51985<=c&&c<=52011||52013<=c&&c<=52039||52041<=c&&c<=52067||52069<=c&&c<=52095||52097<=c&&c<=52123||52125<=c&&c<=52151||52153<=c&&c<=52179||52181<=c&&c<=52207||52209<=c&&c<=52235||52237<=c&&c<=52263||52265<=c&&c<=52291||52293<=c&&c<=52319||52321<=c&&c<=52347||52349<=c&&c<=52375||52377<=c&&c<=52403||52405<=c&&c<=52431||52433<=c&&c<=52459||52461<=c&&c<=52487||52489<=c&&c<=52515||52517<=c&&c<=52543||52545<=c&&c<=52571||52573<=c&&c<=52599||52601<=c&&c<=52627||52629<=c&&c<=52655||52657<=c&&c<=52683||52685<=c&&c<=52711||52713<=c&&c<=52739||52741<=c&&c<=52767||52769<=c&&c<=52795||52797<=c&&c<=52823||52825<=c&&c<=52851||52853<=c&&c<=52879||52881<=c&&c<=52907||52909<=c&&c<=52935||52937<=c&&c<=52963||52965<=c&&c<=52991||52993<=c&&c<=53019||53021<=c&&c<=53047||53049<=c&&c<=53075||53077<=c&&c<=53103||53105<=c&&c<=53131||53133<=c&&c<=53159||53161<=c&&c<=53187||53189<=c&&c<=53215||53217<=c&&c<=53243||53245<=c&&c<=53271||53273<=c&&c<=53299||53301<=c&&c<=53327||53329<=c&&c<=53355||53357<=c&&c<=53383||53385<=c&&c<=53411||53413<=c&&c<=53439||53441<=c&&c<=53467||53469<=c&&c<=53495||53497<=c&&c<=53523||53525<=c&&c<=53551||53553<=c&&c<=53579||53581<=c&&c<=53607||53609<=c&&c<=53635||53637<=c&&c<=53663||53665<=c&&c<=53691||53693<=c&&c<=53719||53721<=c&&c<=53747||53749<=c&&c<=53775||53777<=c&&c<=53803||53805<=c&&c<=53831||53833<=c&&c<=53859||53861<=c&&c<=53887||53889<=c&&c<=53915||53917<=c&&c<=53943||53945<=c&&c<=53971||53973<=c&&c<=53999||54001<=c&&c<=54027||54029<=c&&c<=54055||54057<=c&&c<=54083||54085<=c&&c<=54111||54113<=c&&c<=54139||54141<=c&&c<=54167||54169<=c&&c<=54195||54197<=c&&c<=54223||54225<=c&&c<=54251||54253<=c&&c<=54279||54281<=c&&c<=54307||54309<=c&&c<=54335||54337<=c&&c<=54363||54365<=c&&c<=54391||54393<=c&&c<=54419||54421<=c&&c<=54447||54449<=c&&c<=54475||54477<=c&&c<=54503||54505<=c&&c<=54531||54533<=c&&c<=54559||54561<=c&&c<=54587||54589<=c&&c<=54615||54617<=c&&c<=54643||54645<=c&&c<=54671||54673<=c&&c<=54699||54701<=c&&c<=54727||54729<=c&&c<=54755||54757<=c&&c<=54783||54785<=c&&c<=54811||54813<=c&&c<=54839||54841<=c&&c<=54867||54869<=c&&c<=54895||54897<=c&&c<=54923||54925<=c&&c<=54951||54953<=c&&c<=54979||54981<=c&&c<=55007||55009<=c&&c<=55035||55037<=c&&c<=55063||55065<=c&&c<=55091||55093<=c&&c<=55119||55121<=c&&c<=55147||55149<=c&&c<=55175||55177<=c&&c<=55203?10:9757==c||9977==c||9994<=c&&c<=9997||127877==c||127938<=c&&c<=127940||127943==c||127946<=c&&c<=127948||128066<=c&&c<=128067||128070<=c&&c<=128080||128110==c||128112<=c&&c<=128120||128124==c||128129<=c&&c<=128131||128133<=c&&c<=128135||128170==c||128372<=c&&c<=128373||128378==c||128400==c||128405<=c&&c<=128406||128581<=c&&c<=128583||128587<=c&&c<=128591||128675==c||128692<=c&&c<=128694||128704==c||128716==c||129304<=c&&c<=129308||129310<=c&&c<=129311||129318==c||129328<=c&&c<=129337||129341<=c&&c<=129342||129489<=c&&c<=129501?r:127995<=c&&c<=127999?14:8205==c?15:9792==c||9794==c||9877<=c&&c<=9878||9992==c||10084==c||127752==c||127806==c||127859==c||127891==c||127908==c||127912==c||127979==c||127981==c||128139==c||128187<=c&&c<=128188||128295==c||128300==c||128488==c||128640==c||128658==c?l:128102<=c&&c<=128105?o:11}return this.nextBreak=function(e,n){if(void 0===n&&(n=0),n<0)return 0;if(n>=e.length-1)return e.length;for(var t,r,l=u(c(e,n)),o=[],a=n+1;a<e.length;a++)if(r=a-1,!(55296<=(t=e).charCodeAt(r)&&t.charCodeAt(r)<=56319&&56320<=t.charCodeAt(r+1)&&t.charCodeAt(r+1)<=57343)){var s=u(c(e,a));if(i(l,o,s))return a;o.push(s)}return e.length},this.splitGraphemes=function(e){for(var n,t=[],r=0;(n=this.nextBreak(e,r))<e.length;)t.push(e.slice(r,n)),r=n;return r<e.length&&t.push(e.slice(r)),t},this.iterateGraphemes=function(e){var n=0,t={next:function(){var t,r;return(r=this.nextBreak(e,n))<e.length?(t=e.slice(n,r),n=r,{value:t,done:!1}):n<e.length?(t=e.slice(n),n=e.length,{value:t,done:!1}):{value:void 0,done:!0}}.bind(this)};return"undefined"!=typeof Symbol&&Symbol.iterator&&(t[Symbol.iterator]=function(){return t}),t},this.countGraphemes=function(e){for(var n,t=0,r=0;(n=this.nextBreak(e,r))<e.length;)r=n,t++;return r<e.length&&t++,t},this})}))),t=function(e,t,r){for(var l=n.iterateGraphemes(e.substring(t)),o="",c=0;c<r-t;c++){var i=l.next();if(o+=i.value,i.done)break}return o},r=function(e,n,t,r,l,o,c){return{start:{line:e,column:n,offset:t},end:{line:r,column:l,offset:o},source:c||null}},l=e((function(e,n){e.exports=function(){var e,n="",t=function(t,r){if("string"!=typeof t)throw new TypeError("expected a string");if(1===r)return t;if(2===r)return t+t;var l=t.length*r;if(e!==t||void 0===e)e=t,n="";else if(n.length>=l)return n.substr(0,l);for(;l>n.length&&r>1;)1&r&&(n+=t),r>>=1,t+=t;return n=(n+=t).substr(0,l)},r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e};function l(e,n,r,l){var o=function(e,n,t){if(null==e||null==n)return e;var r=String(e),l="number"==typeof n?n:parseInt(n,10);if(isNaN(l)||!isFinite(l))return r;var o=r.length;if(o>=l)return r;var c=null==t?"":String(t);""===c&&(c=" ");for(var i=l-o;c.length<i;)c+=c;return(c.length>i?c.substr(0,i):c)+r}(String(n),r," "),c=t(" ",l.tabSize);return o+" | "+e.replace(/\t/g,c)}function o(e,n,t,r,o){return e.slice(n,t).map((function(e,t){return l(e,n+t+1,r,o)})).join("\n")}var c={extraLines:2,tabSize:4};return function(e,n,i,u){u=r({},c,u);var a=e.split(/\r\n?|\n|\f/),s=Math.max(1,n-u.extraLines)-1,f=Math.min(n+u.extraLines,a.length),d=String(f).length,v=o(a,s,n,d,u),h=l(a[n-1].substring(0,i-1),n,d,u);return[v,t(" ",h.length)+"^",o(a,n,f,d,u)].filter(Boolean).join("\n")}}()})),o=(new Error).stack,c=function(e,n,t,r,c){throw function(e){var n=Object.create(SyntaxError.prototype);return Object.assign(n,e,{name:"SyntaxError"}),Object.defineProperty(n,"stack",{get:function(){return o?o.replace(/^(.+\n){1,3}/,String(n)+"\n"):""}}),n}({message:r?e+"\n"+l(n,r,c):e,rawMessage:e,source:t,line:r,column:c})},i=function(){return"Unexpected end of input"},u=function(e){for(var n=arguments.length,t=Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];return"Unexpected token <"+e+"> at "+t.filter(Boolean).join(":")},a=function(e){for(var n=arguments.length,t=Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];return"Unexpected symbol <"+e+"> at "+t.filter(Boolean).join(":")},s=0,f=1,d=2,v=3,h=4,p=5,m=6,y=7,x=8,b=9,g=10,k={"{":s,"}":f,"[":d,"]":v,":":h,",":p},O={true:x,false:b,null:g},w=0,A=1,I=2,S={'"':0,"\\":1,"/":2,b:3,f:4,n:5,r:6,t:7,u:8},E=0,_=1,N=2,j=3,T=4,C=5,L=6,P=7;function R(e){return e>="1"&&e<="9"}function B(e){return e>="0"&&e<="9"}function G(e){return B(e)||e>="a"&&e<="f"||e>="A"&&e<="F"}function M(e){return"e"===e||"E"===e}function V(e,n,t,r){var l=e.charAt(n);if("\r"===l)n++,t++,r=1,"\n"===e.charAt(n)&&n++;else if("\n"===l)n++,t++,r=1;else{if("\t"!==l&&" "!==l)return null;n++,r++}return{index:n,line:t,column:r}}function z(e,n,t,r){var l=e.charAt(n);return l in k?{type:k[l],line:t,column:r+1,index:n+1,value:null}:null}function D(e,n,t,r){for(var l in O)if(O.hasOwnProperty(l)&&e.substr(n,l.length)===l)return{type:O[l],line:t,column:r+l.length,index:n+l.length,value:l};return null}function U(e,n,t,r){for(var l=n,o=w;n<e.length;){var c=e.charAt(n);switch(o){case w:if('"'!==c)return null;n++,o=A;break;case A:if("\\"===c)n++,o=I;else{if('"'===c)return n++,{type:m,line:t,column:r+n-l,index:n,value:e.slice(l,n)};n++}break;case I:if(!(c in S))return null;if(n++,"u"===c)for(var i=0;i<4;i++){var u=e.charAt(n);if(!u||!G(u))return null;n++}o=A}}}function H(e,n,t,r){var l=n,o=n,c=E;e:for(;n<e.length;){var i=e.charAt(n);switch(c){case E:if("-"===i)c=_;else if("0"===i)o=n+1,c=N;else{if(!R(i))return null;o=n+1,c=j}break;case _:if("0"===i)o=n+1,c=N;else{if(!R(i))return null;o=n+1,c=j}break;case N:if("."===i)c=T;else{if(!M(i))break e;c=L}break;case j:if(B(i))o=n+1;else if("."===i)c=T;else{if(!M(i))break e;c=L}break;case T:if(!B(i))break e;o=n+1,c=C;break;case C:if(B(i))o=n+1;else{if(!M(i))break e;c=L}break;case L:if("+"===i||"-"===i)c=P;else{if(!B(i))break e;o=n+1,c=P}break;case P:if(!B(i))break e;o=n+1}n++}return o>0?{type:y,line:t,column:r+o-l,index:o,value:e.slice(l,o)}:null}var W=0,X=1,Z=2,F=3,K=0,Q=1,q=2,J=0,Y=1,$=2,ee=3,ne={loc:!0,source:null};function te(e,n,t){var r=n.length>0?n[n.length-1].loc.end:{line:1,column:1};c(i(),e,t.source,r.line,r.column)}function re(e){for(var n=0,t=0;t<4;t++)n=16*n+parseInt(e[t],16);return String.fromCharCode(n)}var le={b:"\b",f:"\f",n:"\n",r:"\r",t:"\t"},oe=['"',"\\","/"];function ce(e){for(var n="",t=0;t<e.length;t++){var r=e.charAt(t);if("\\"===r){t++;var l=e.charAt(t);if("u"===l)n+=re(e.substr(t+1,4)),t+=4;else if(-1!==oe.indexOf(l))n+=l;else{if(!(l in le))break;n+=le[l]}}else n+=r}return n}function ie(e,n,l,o){for(var i=void 0,a={type:"Object",children:[]},d=W;l<n.length;){var v=n[l];switch(d){case W:if(v.type!==s)return null;i=v,d=X,l++;break;case X:if(v.type===f)return o.loc&&(a.loc=r(i.loc.start.line,i.loc.start.column,i.loc.start.offset,v.loc.end.line,v.loc.end.column,v.loc.end.offset,o.source)),{value:a,index:l+1};var h=ue(e,n,l,o);a.children.push(h.value),d=Z,l=h.index;break;case Z:if(v.type===f)return o.loc&&(a.loc=r(i.loc.start.line,i.loc.start.column,i.loc.start.offset,v.loc.end.line,v.loc.end.column,v.loc.end.offset,o.source)),{value:a,index:l+1};v.type===p?(d=F,l++):c(u(t(e,v.loc.start.offset,v.loc.end.offset),o.source,v.loc.start.line,v.loc.start.column),e,o.source,v.loc.start.line,v.loc.start.column);break;case F:var m=ue(e,n,l,o);m?(l=m.index,a.children.push(m.value),d=Z):c(u(t(e,v.loc.start.offset,v.loc.end.offset),o.source,v.loc.start.line,v.loc.start.column),e,o.source,v.loc.start.line,v.loc.start.column)}}te(e,n,o)}function ue(e,n,l,o){for(var i=void 0,a={type:"Property",key:null,value:null},s=K;l<n.length;){var f=n[l];switch(s){case K:if(f.type!==m)return null;var d={type:"Identifier",value:ce(e.slice(f.loc.start.offset+1,f.loc.end.offset-1)),raw:f.value};o.loc&&(d.loc=f.loc),i=f,a.key=d,s=Q,l++;break;case Q:f.type===h?(s=q,l++):c(u(t(e,f.loc.start.offset,f.loc.end.offset),o.source,f.loc.start.line,f.loc.start.column),e,o.source,f.loc.start.line,f.loc.start.column);break;case q:var v=fe(e,n,l,o);return a.value=v.value,o.loc&&(a.loc=r(i.loc.start.line,i.loc.start.column,i.loc.start.offset,v.value.loc.end.line,v.value.loc.end.column,v.value.loc.end.offset,o.source)),{value:a,index:v.index}}}}function ae(e,n,l,o){for(var i=void 0,a={type:"Array",children:[]},s=J,f=void 0;l<n.length;)switch(f=n[l],s){case J:if(f.type!==d)return null;i=f,s=Y,l++;break;case Y:if(f.type===v)return o.loc&&(a.loc=r(i.loc.start.line,i.loc.start.column,i.loc.start.offset,f.loc.end.line,f.loc.end.column,f.loc.end.offset,o.source)),{value:a,index:l+1};var h=fe(e,n,l,o);l=h.index,a.children.push(h.value),s=$;break;case $:if(f.type===v)return o.loc&&(a.loc=r(i.loc.start.line,i.loc.start.column,i.loc.start.offset,f.loc.end.line,f.loc.end.column,f.loc.end.offset,o.source)),{value:a,index:l+1};f.type===p?(s=ee,l++):c(u(t(e,f.loc.start.offset,f.loc.end.offset),o.source,f.loc.start.line,f.loc.start.column),e,o.source,f.loc.start.line,f.loc.start.column);break;case ee:var m=fe(e,n,l,o);l=m.index,a.children.push(m.value),s=$}te(e,n,o)}function se(e,n,t,r){var l=n[t],o=null;switch(l.type){case m:o=ce(e.slice(l.loc.start.offset+1,l.loc.end.offset-1));break;case y:o=Number(l.value);break;case x:o=!0;break;case b:o=!1;break;case g:o=null;break;default:return null}var c={type:"Literal",value:o,raw:l.value};return r.loc&&(c.loc=l.loc),{value:c,index:t+1}}function fe(e,n,r,l){var o=n[r],i=se.apply(void 0,arguments)||ie.apply(void 0,arguments)||ae.apply(void 0,arguments);if(i)return i;c(u(t(e,o.loc.start.offset,o.loc.end.offset),l.source,o.loc.start.line,o.loc.start.column),e,l.source,o.loc.start.line,o.loc.start.column)}return function(e,n){var l=function(e,n){for(var l=1,o=1,i=0,u=[];i<e.length;){var s=[e,i,l,o],f=V.apply(void 0,s);if(f)i=f.index,l=f.line,o=f.column;else{var d=z.apply(void 0,s)||D.apply(void 0,s)||U.apply(void 0,s)||H.apply(void 0,s);if(d){var v={type:d.type,value:d.value,loc:r(l,o,i,d.line,d.column,d.index,n.source)};u.push(v),i=d.index,l=d.line,o=d.column}else c(a(t(e,i,i+1),n.source,l,o),e,n.source,l,o)}}return u}(e,n=Object.assign({},ne,n));0===l.length&&te(e,l,n);var o=fe(e,l,0,n);if(o.index===l.length)return o.value;var i=l[o.index];c(u(t(e,i.loc.start.offset,i.loc.end.offset),n.source,i.loc.start.line,i.loc.start.column),e,n.source,i.loc.start.line,i.loc.start.column)}},e.exports=r()}]);