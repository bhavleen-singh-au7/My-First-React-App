(this.webpackJsonpclock=this.webpackJsonpclock||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),c=a(2),s=a.n(c),r=(a(13),a(3)),i=a(4),o=a(7),u=a(5),b=(a(14),function(e){var t=e.title,a=e.clickable;return n.a.createElement("button",{className:"btn",onClick:a},t)}),m=(a(15),function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(r.a)(this,a);for(var l=arguments.length,n=new Array(l),c=0;c<l;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={balls:0,over:0},e.PlusOperation=function(){e.state.balls<6&&e.setState({balls:e.state.balls+1}),6===e.state.balls&&e.setState({over:e.state.over+1,balls:1})},e.MinusOperation=function(){e.state.balls>0&&e.setState({balls:e.state.balls-1}),0===e.state.balls&&0!==e.state.over&&e.setState({over:e.state.over-1})},e}return Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"main-div"},n.a.createElement("div",null,n.a.createElement("label",{className:"Label"},"Balls"),n.a.createElement("label",{className:"Label"},"Overs"),n.a.createElement("br",null),n.a.createElement("label",{className:"counter"},this.state.balls),n.a.createElement("label",{className:"counter"},this.state.over),n.a.createElement("br",null),n.a.createElement("div",{style:{textAlign:"center"}},n.a.createElement(b,{title:"-",clickable:this.MinusOperation}),n.a.createElement(b,{title:"+",clickable:this.PlusOperation}))))}}]),a}(l.Component)),v=a(6),E=(a(16),function(){var e=(new Date).toLocaleTimeString(),t=Object(l.useState)(e),a=Object(v.a)(t,2),c=a[0],s=a[1];return setInterval((function(){e=(new Date).toLocaleTimeString(),s(e)}),1e3),n.a.createElement("div",{className:"position"},n.a.createElement("header",{className:"pos"},n.a.createElement("p",null,c)))});s.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(E,null),n.a.createElement(m,null)),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.5ea93f22.chunk.js.map