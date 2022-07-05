(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{693:function(s,a,n){"use strict";n.r(a);var e=n(7),t=Object(e.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"yaml简介"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#yaml简介"}},[s._v("#")]),s._v(" yaml简介")]),s._v(" "),n("p",[s._v('YAML 是 "YAML Ain\'t a Markup Language"（YAML 不是一种标记语言）的递归缩写。在开发的这种语言时，YAML 的意思其实是："Yet Another Markup Language"（仍是一种标记语言）。')]),s._v(" "),n("p",[s._v("YAML 的语法和其他高级语言类似，并且可以简单表达清单、散列表，标量等数据形态。它使用空白符号缩进和大量依赖外观的特色，特别适合用来表达或编辑数据结构、各种配置文件、倾印调试内容、文件大纲（例如：许多电子邮件标题格式和YAML非常接近）。")]),s._v(" "),n("p",[s._v("YAML 的配置文件后缀为 .yml，如："),n("strong",[s._v("runoob.yml")]),s._v(" 。")]),s._v(" "),n("h2",{attrs:{id:"基本语法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#基本语法"}},[s._v("#")]),s._v(" 基本语法")]),s._v(" "),n("ul",[n("li",[s._v("大小写敏感")]),s._v(" "),n("li",[s._v("使用缩进表示层级关系")]),s._v(" "),n("li",[s._v("缩进不允许使用tab，只允许空格")]),s._v(" "),n("li",[s._v("缩进的空格数不重要，只要相同层级的元素左对齐即可")]),s._v(" "),n("li",[s._v("'#'表示注释")])]),s._v(" "),n("h2",{attrs:{id:"数据类型"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#数据类型"}},[s._v("#")]),s._v(" 数据类型")]),s._v(" "),n("p",[s._v("YAML 支持以下几种数据类型：")]),s._v(" "),n("ul",[n("li",[s._v("对象：键值对的集合，又称为映射（mapping）/ 哈希（hashes） / 字典（dictionary）")]),s._v(" "),n("li",[s._v("数组：一组按次序排列的值，又称为序列（sequence） / 列表（list）")]),s._v(" "),n("li",[s._v("纯量（scalars）：单个的、不可再分的值")])]),s._v(" "),n("h2",{attrs:{id:"yaml-对象"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#yaml-对象"}},[s._v("#")]),s._v(" YAML 对象")]),s._v(" "),n("p",[s._v("对象键值对使用冒号结构表示 "),n("strong",[s._v("key: value")]),s._v("，冒号后面要加一个空格。")]),s._v(" "),n("p",[s._v("也可以使用 "),n("strong",[s._v("key:{key1: value1, key2: value2, ...}")]),s._v("。")]),s._v(" "),n("p",[s._v("还可以使用缩进表示层级关系；")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("key: \n    child-key: value\n    child-key2: value2\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("较为复杂的对象格式，可以使用问号加一个空格代表一个复杂的 key，配合一个冒号加一个空格代表一个 value：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("?  \n    - complexkey1\n    - complexkey2\n:\n    - complexvalue1\n    - complexvalue2\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[s._v("意思即对象的属性是一个数组 [complexkey1,complexkey2]，对应的值也是一个数组 [complexvalue1,complexvalue2]")]),s._v(" "),n("h2",{attrs:{id:"yaml-数组"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#yaml-数组"}},[s._v("#")]),s._v(" YAML 数组")]),s._v(" "),n("p",[s._v("以 - 开头的行表示构成一个数组：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("- A\n- B\n- C\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("YAML 支持多维数组，可以使用行内表示：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("key: [value1, value2, ...]\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("数据结构的子成员是一个数组，则可以在该项下面缩进一个空格。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("-\n - A\n - B\n - C\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[s._v("一个相对复杂的例子：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("companies:\n    -\n        id: 1\n        name: company1\n        price: 200W\n    -\n        id: 2\n        name: company2\n        price: 500W\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("p",[s._v("意思是 companies 属性是一个数组，每一个数组元素又是由 id、name、price 三个属性构成。")]),s._v(" "),n("p",[s._v("数组也可以使用流式(flow)的方式表示：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("companies: [{id: 1,name: company1,price: 200W},{id: 2,name: company2,price: 500W}]\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h2",{attrs:{id:"复合结构"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#复合结构"}},[s._v("#")]),s._v(" 复合结构")]),s._v(" "),n("p",[s._v("数组和对象可以构成复合结构，例：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("languages:\n  - Ruby\n  - Perl\n  - Python \nwebsites:\n  YAML: yaml.org \n  Ruby: ruby-lang.org \n  Python: python.org \n  Perl: use.perl.org\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("p",[s._v("转换为 json 为：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("{ \n  languages: [ 'Ruby', 'Perl', 'Python'],\n  websites: {\n    YAML: 'yaml.org',\n    Ruby: 'ruby-lang.org',\n    Python: 'python.org',\n    Perl: 'use.perl.org' \n  } \n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("h2",{attrs:{id:"纯量"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#纯量"}},[s._v("#")]),s._v(" 纯量")]),s._v(" "),n("p",[s._v("纯量是最基本的，不可再分的值，包括：")]),s._v(" "),n("ul",[n("li",[s._v("字符串")]),s._v(" "),n("li",[s._v("布尔值")]),s._v(" "),n("li",[s._v("整数")]),s._v(" "),n("li",[s._v("浮点数")]),s._v(" "),n("li",[s._v("Null")]),s._v(" "),n("li",[s._v("时间")]),s._v(" "),n("li",[s._v("日期")])]),s._v(" "),n("p",[s._v("使用一个例子来快速了解纯量的基本使用：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("boolean: \n    - TRUE  #true,True都可以\n    - FALSE  #false，False都可以\nfloat:\n    - 3.14\n    - 6.8523015e+5  #可以使用科学计数法\nint:\n    - 123\n    - 0b1010_0111_0100_1010_1110    #二进制表示\nnull:\n    nodeName: 'node'\n    parent: ~  #使用~表示null\nstring:\n    - 哈哈\n    - 'Hello world'  #可以使用双引号或者单引号包裹特殊字符\n    - newline\n      newline2    #字符串可以拆成多行，每一行会被转化成一个空格\ndate:\n    - 2018-02-17    #日期必须使用ISO 8601格式，即yyyy-MM-dd\ndatetime: \n    -  2018-02-17T15:02:31+08:00    #时间使用ISO 8601格式，时间和日期之间使用T连接，最后使用+代表时区\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br")])]),n("h2",{attrs:{id:"引用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#引用"}},[s._v("#")]),s._v(" 引用")]),s._v(" "),n("p",[s._v("& 锚点和 * 别名，可以用来引用:")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("defaults: &defaults\n  adapter:  postgres\n  host:     localhost\n\ndevelopment:\n  database: myapp_development\n  <<: *defaults\n\ntest:\n  database: myapp_test\n  <<: *defaults\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("p",[s._v("相当于:")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("defaults:\n  adapter:  postgres\n  host:     localhost\n\ndevelopment:\n  database: myapp_development\n  adapter:  postgres\n  host:     localhost\n\ntest:\n  database: myapp_test\n  adapter:  postgres\n  host:     localhost\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br")])]),n("p",[n("strong",[s._v("&")]),s._v(" 用来建立锚点（defaults），"),n("strong",[s._v("<<")]),s._v(" 表示合并到当前数据，"),n("strong",[s._v("*")]),s._v(" 用来引用锚点。")]),s._v(" "),n("p",[s._v("下面是另一个例子:")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("- &showell Steve \n- Clark \n- Brian \n- Oren \n- *showell \n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("转为 JavaScript 代码如下:")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("[ 'Steve', 'Clark', 'Brian', 'Oren', 'Steve' ]\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])])])}),[],!1,null,null,null);a.default=t.exports}}]);