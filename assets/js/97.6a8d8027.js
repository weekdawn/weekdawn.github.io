(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{707:function(a,s,e){"use strict";e.r(s);var t=e(7),n=Object(t.a)({},(function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h3",{attrs:{id:"定义"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#定义"}},[a._v("#")]),a._v(" 定义")]),a._v(" "),e("ul",[e("li",[a._v("IaaS：基础设施即服务，Infrastructure-as-a-service")]),a._v(" "),e("li",[a._v("PaaS：平台即服务，Platform-as-a-service")]),a._v(" "),e("li",[a._v("SaaS：软件即服务，Software-as-a-service")])]),a._v(" "),e("p",[a._v("IaaS、PaaS、SaaS简单的说都属于云计算服务，也就是云计算+服务。云计算就是一种按照需求通过Internet获取计算资源的形态。这些计算资源被包装成为服务，提供给用户。而提供这些服务的主体，我们称之为云服务供应商（Cloud Service Provider）")]),a._v(" "),e("h3",{attrs:{id:"它们有什么区别呢"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#它们有什么区别呢"}},[a._v("#")]),a._v(" 它们有什么区别呢？")]),a._v(" "),e("p",[a._v("IBM 的软件架构师 Albert Barron 曾经使用披萨作为比喻，解释这个问题。David Ng 进一步引申，让它变得更准确易懂。")]),a._v(" "),e("p",[a._v("请设想你是一个餐饮业者，打算做披萨生意。")]),a._v(" "),e("p",[a._v("你可以从头到尾，自己生产披萨，但是这样比较麻烦，需要准备的东西多，因此你决定外包一部分工作，采用他人的服务。你有三个方案。")]),a._v(" "),e("ul",[e("li",[a._v("方案一：IaaS")])]),a._v(" "),e("p",[a._v("他人提供厨房、炉子、煤气，你使用这些基础设施，来烤你的披萨。")]),a._v(" "),e("ul",[e("li",[a._v("方案二：PaaS")])]),a._v(" "),e("p",[a._v("除了基础设施，他人还提供披萨饼皮。")]),a._v(" "),e("p",[a._v("你只要把自己的配料洒在饼皮上，让他帮你烤出来就行了。也就是说，你要做的就是设计披萨的味道（海鲜披萨或者鸡肉披萨），他人提供平台服务，让你把自己的设计实现。")]),a._v(" "),e("ul",[e("li",[a._v("方案三：SaaS")])]),a._v(" "),e("p",[a._v("他人直接做好了披萨，不用你的介入，到手的就是一个成品。你要做的就是把它卖出去，最多再包装一下，印上你自己的 Logo。")]),a._v(" "),e("p",[a._v("上面的三种方案，可以总结成下面这张图。\n"),e("img",{attrs:{src:"http://www.ruanyifeng.com/blogimg/asset/2017/bg2017072306.png",alt:""}})]),a._v(" "),e("p",[a._v("从左到右，自己承担的工作量（上图蓝色部分）越来越少，IaaS > PaaS > SaaS。")]),a._v(" "),e("p",[a._v("对应软件开发，则是下面这张图。\n"),e("img",{attrs:{src:"http://www.ruanyifeng.com/blogimg/asset/2017/bg2017072307.jpg",alt:""}})]),a._v(" "),e("p",[a._v("SaaS 是软件的开发、管理、部署都交给第三方，不需要关心技术问题，可以拿来即用。普通用户接触到的互联网服务，几乎都是 SaaS，下面是一些例子。")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("客户管理服务 Salesforce\n团队协同服务 Google Apps\n储存服务 Box\n储存服务 Dropbox\n社交服务 Facebook / Twitter / Instagram\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br")])]),e("p",[a._v("PaaS 提供软件部署平台（runtime），抽象掉了硬件和操作系统细节，可以无缝地扩展（scaling）。开发者只需要关注自己的业务逻辑，不需要关注底层。下面这些都属于 PaaS。")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("Heroku\nGoogle App Engine\nOpenShift\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br")])]),e("p",[a._v("IaaS 是云服务的最底层，主要提供一些基础资源。它与 PaaS 的区别是，用户需要自己控制底层，实现基础设施的使用逻辑。下面这些都属于 IaaS。")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("Amazon EC2\nDigital Ocean\nRackSpace Cloud\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br")])])])}),[],!1,null,null,null);s.default=n.exports}}]);