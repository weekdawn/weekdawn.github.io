(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{543:function(t,e,i){},600:function(t,e,i){"use strict";i(543)},626:function(t,e,i){"use strict";i.r(e);i(43),i(48),i(49);var s={data:function(){return{time:"",date:"",week:["SUN","MON","TUE","WED","THU","FRI","SAT"]}},mounted:function(){var t=this;setInterval((function(){t.updateTime()}),1e3)},methods:{updateTime:function(){var t=new Date;this.time=this.zeroPadding(t.getHours(),2)+":"+this.zeroPadding(t.getMinutes(),2)+":"+this.zeroPadding(t.getSeconds(),2),this.date=this.zeroPadding(t.getFullYear(),4)+"-"+this.zeroPadding(t.getMonth()+1,2)+"-"+this.zeroPadding(t.getDate(),2)+" "+this.week[t.getDay()]},zeroPadding:function(t,e){for(var i="",s=0;s<e;s++)i+="0";return(i+t).slice(-e)}}},n=(i(600),i(7)),a=Object(n.a)(s,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"clock"}},[e("span",{staticClass:"date"},[this._v(this._s(this.date))]),this._v(" "),e("span",{staticClass:"time"},[this._v(this._s(this.time))])])}),[],!1,null,"45347e2e",null);e.default=a.exports}}]);