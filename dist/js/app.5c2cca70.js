(function(t){function e(e){for(var r,s,a=e[0],u=e[1],c=e[2],l=0,f=[];l<a.length;l++)s=a[l],o[s]&&f.push(o[s][0]),o[s]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);h&&h(e);while(f.length)f.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,s=1;s<n.length;s++){var u=n[s];0!==o[u]&&(r=!1)}r&&(i.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},o={app:0},i=[];function s(t){return a.p+"js/"+({about:"about"}[t]||t)+"."+{about:"ed1021ea"}[t]+".js"}function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.e=function(t){var e=[],n=o[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise(function(e,r){n=o[t]=[e,r]});e.push(n[2]=r);var i,u=document.createElement("script");u.charset="utf-8",u.timeout=120,a.nc&&u.setAttribute("nonce",a.nc),u.src=s(t),i=function(e){u.onerror=u.onload=null,clearTimeout(c);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src,s=new Error("Loading chunk "+t+" failed.\n("+r+": "+i+")");s.type=r,s.request=i,n[1](s)}o[t]=void 0}};var c=setTimeout(function(){i({type:"timeout",target:u})},12e4);u.onerror=u.onload=i,document.head.appendChild(u)}return Promise.all(e)},a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/",a.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var h=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("64a9"),o=n.n(r);o.a},1574:function(t,e,n){"use strict";var r=n("ea30"),o=n.n(r);o.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},i=[],s=(n("034f"),n("2877")),a={},u=Object(s["a"])(a,o,i,!1,null,null,null),c=u.exports,l=n("8c4f"),h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sudokuapp"},[n("Sudoku")],1)},f=[],d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Sudoku"},[n("div",{staticClass:"sudokuBox"},t._l(t.items,function(e,r){return n("div",{key:e.id,staticClass:"tileContainer"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.items[r],expression:"items[index]"}],staticClass:"tile",attrs:{type:"text",disabled:t.isdisabled(r)},domProps:{value:t.items[r]},on:{input:function(e){e.target.composing||t.$set(t.items,r,e.target.value)}}})])}),0),n("gameMenu",{attrs:{gameOver:t.gameOver,won:t.won},on:{"check-board":function(e){return t.checkBoard()},"close-box":function(e){return t.closeBox()}}})],1)},v=[],m=n("75fc"),p=(n("28a5"),{data:function(){return{CHUNK_SIZE:3,ROW_COL_SIZE:9,SIZE:81,MIN_HINTS:17,iterations:0}},methods:{checkRow:function(t,e,n){for(var r=Math.floor(n/this.ROW_COL_SIZE)*this.ROW_COL_SIZE,o=0;o<this.ROW_COL_SIZE;o+=1)if(t[r+o]===e)return!1;return!0},checkCol:function(t,e,n){for(var r=n%this.ROW_COL_SIZE,o=0;o<this.ROW_COL_SIZE;o+=1)if(t[r+o*this.ROW_COL_SIZE]===e)return!1;return!0},check3x3:function(t,e,n){for(var r=n-n%this.ROW_COL_SIZE%this.CHUNK_SIZE-this.ROW_COL_SIZE*(Math.floor(n/this.ROW_COL_SIZE)%this.CHUNK_SIZE),o=0;o<this.ROW_COL_SIZE;o+=1)if(t[r+this.ROW_COL_SIZE*Math.floor(o/this.CHUNK_SIZE)+o%this.CHUNK_SIZE]===e)return!1;return!0},check:function(t,e,n){return this.checkRow(t,e,n)&&this.checkCol(t,e,n)&&this.check3x3(t,e,n)},recursiveSolve:function(t,e,n){if(0!==n&&++this.iterations>n)throw new Error("Max iterations reached. No solution found.");if(e>=this.SIZE)return!0;if(0!==t[e])return this.recursiveSolve(t,e+1,n);for(var r=1;r<=this.ROW_COL_SIZE;r+=1)if(this.check(t,r,e)&&(t[e]=r,this.recursiveSolve(t,e+1,n)))return!0;return t[e]=0,!1},solve:function(t,e){var n={emptyValue:"0",hintCheck:!0,outputArray:!1,maxIterations:1<<20};if(void 0!==e&&Object.assign(n,e),"string"===typeof t&&(t=t.split("")),!Array.isArray(t))throw new TypeError("Puzzle must be string or array.");if(t.length!==this.SIZE)throw new Error("Puzzle is an invalid size.");var r=0;if(t=t.map(function(t){if(t===n.emptyValue||t===parseInt(n.emptyValue,10))return 0;r++;var e=parseInt(t,10);if(isNaN(e)||e>9||e<1)throw new TypeError("Invalid puzzle value: "+t);return e}),n.hintCheck&&r<this.MIN_HINTS)throw new Error("A valid puzzle must have at least "+this.MIN_HINTS+" hints.");if(!this.recursiveSolve(t,0,n.maxIterations))throw new Error("Puzzle could not be solved.");return n.outputArray?t:t.join("")}}}),_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"gameMenu"},[n("div",{staticClass:"title"},[t._v("Sudoku")]),n("a",{staticClass:"button space-right",on:{click:function(e){return t.checkBoard()}}},[t._v("Check")]),n("transition",{attrs:{name:"fade"}},[t.won?n("div",{staticClass:"modal"},[n("h1",[t._v("Sudoku Solved!")]),n("a",{staticClass:"button button-black",on:{click:function(e){return t.closeBox()}}},[t._v("Play again")])]):t.gameOver?n("div",{staticClass:"modal"},[n("h1",[t._v("Sudoku not solved!")]),n("a",{staticClass:"button button-black",on:{click:function(e){return t.closeBox()}}},[t._v("Close")])]):t._e()])],1)},b=[],O={name:"gameMenu",props:{gameOver:{type:Boolean,required:!0},won:{type:Boolean,required:!0}},methods:{checkBoard:function(){this.$emit("check-board")},closeBox:function(){this.$emit("close-box")}}},w=O,S=(n("1574"),Object(s["a"])(w,_,b,!1,null,"ea5e894e",null)),I=S.exports;function k(){var t=["800406007000000400010000650509030780000070000048020103052000090001000000300902005","703000009000700008010054000020090030005201800080030010000560070500002000400000201","060402005300800012000000070000190020003000600080043000050000000710009008900501040","040076005009800010000000308000060400500409003001050000304000000070001600900780030","310004200746028300009050000800240003000807000100036004000080600004390875008600049","900704205004900076000103940608000307000607000702000504047502000190006400203408009","500030109040109020700600003000005480000000000086900000400003006060201070807040002","800604090740080000060000024150200000400106002000007056910000070000090068080305009","001820950000010000600003007002070030090030010040050200700100009000080000015042300","000700004070869000603040700507000000020050010000000208008090601000124090200006000"];return g(t[C(11)])}function g(t){var e=t,n=e.split("");return n}function C(t){return Math.floor(Math.random()*Math.floor(t))}var y=k,E={name:"Sudoku",mixins:[p],components:{gameMenu:I},data:function(){return{items:[],shadowItems:[],solutionItems:[],gameOver:!1,won:!1}},beforeMount:function(){this.setupBoard()},methods:{isdisabled:function(t){return this.shadowItems[t]>0},setupBoard:function(){this.createBoard(),this.createShadowBoard(),this.removeZeros()},checkBoard:function(){this.checkItem()},closeBox:function(){this.won=!1,this.gameOver=!1},removeZeros:function(){for(var t=0;t<this.items.length;t++)this.items[t]<1&&(this.items[t]="")},createBoard:function(){this.items=y()},createShadowBoard:function(){this.shadowItems=Object(m["a"])(this.items),this.solveItems()},checkItem:function(){this.solutionItems===this.items.join("")?this.won=!0:this.gameOver=!0},solveItems:function(){this.solutionItems=this.solve(this.shadowItems)}}},x=E,Z=(n("62bd"),Object(s["a"])(x,d,v,!1,null,"67882d20",null)),M=Z.exports,j={name:"sudokuapp",components:{Sudoku:M}},B=j,N=Object(s["a"])(B,h,f,!1,null,null,null),R=N.exports;r["a"].use(l["a"]);var L=new l["a"]({routes:[{path:"/",name:"home",component:R},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}]}),P=n("2f62");r["a"].use(P["a"]);var W=new P["a"].Store({state:{},mutations:{},actions:{}});r["a"].config.productionTip=!1,new r["a"]({router:L,store:W,render:function(t){return t(c)}}).$mount("#app")},"62bd":function(t,e,n){"use strict";var r=n("987a"),o=n.n(r);o.a},"64a9":function(t,e,n){},"987a":function(t,e,n){},ea30:function(t,e,n){}});
//# sourceMappingURL=app.5c2cca70.js.map