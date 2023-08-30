(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{697:function(_,v,t){"use strict";t.r(v);var n=t(7),d=Object(n.a)({},(function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h2",{attrs:{id:"算法的时间复杂度和空间复杂度"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#算法的时间复杂度和空间复杂度"}},[_._v("#")]),_._v(" 算法的时间复杂度和空间复杂度")]),_._v(" "),t("p",[_._v("常用的算法的时间复杂度和空间复杂度")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("排序法")]),_._v(" "),t("th",[_._v("最差时间分析")]),_._v(" "),t("th",[_._v("平均时间复杂度")]),_._v(" "),t("th",[_._v("稳定度")]),_._v(" "),t("th",[_._v("空间复杂度")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[_._v("冒泡排序")]),_._v(" "),t("td",[_._v("O(n2)")]),_._v(" "),t("td",[_._v("O(n2)")]),_._v(" "),t("td",[_._v("稳定")]),_._v(" "),t("td",[_._v("O(1)")])]),_._v(" "),t("tr",[t("td",[_._v("快速排序")]),_._v(" "),t("td",[_._v("O(n2)")]),_._v(" "),t("td",[_._v("O(n*log2n)")]),_._v(" "),t("td",[_._v("不稳定")]),_._v(" "),t("td",[_._v("O(log2n)~O(n)")])]),_._v(" "),t("tr",[t("td",[_._v("选择排序")]),_._v(" "),t("td",[_._v("O(n2)")]),_._v(" "),t("td",[_._v("O(n2)")]),_._v(" "),t("td",[_._v("稳定")]),_._v(" "),t("td",[_._v("O(1)")])]),_._v(" "),t("tr",[t("td",[_._v("二叉树排序")]),_._v(" "),t("td",[_._v("O(n2)")]),_._v(" "),t("td",[_._v("O(n*log2n)")]),_._v(" "),t("td",[_._v("不一顶")]),_._v(" "),t("td",[_._v("O(n)")])]),_._v(" "),t("tr",[t("td",[_._v("插入排序")]),_._v(" "),t("td",[_._v("O(n2)")]),_._v(" "),t("td",[_._v("O(n2)")]),_._v(" "),t("td",[_._v("稳定")]),_._v(" "),t("td",[_._v("O(1)")])]),_._v(" "),t("tr",[t("td",[_._v("堆排序")]),_._v(" "),t("td",[_._v("O(n*log2n)")]),_._v(" "),t("td",[_._v("O(n*log2n)")]),_._v(" "),t("td",[_._v("不稳定")]),_._v(" "),t("td",[_._v("O(1)")])]),_._v(" "),t("tr",[t("td",[_._v("希尔排序")]),_._v(" "),t("td",[_._v("O")]),_._v(" "),t("td",[_._v("O")]),_._v(" "),t("td",[_._v("不稳定")]),_._v(" "),t("td",[_._v("O(1)")])])])]),_._v(" "),t("h3",{attrs:{id:"_1、时间复杂度"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、时间复杂度"}},[_._v("#")]),_._v(" 1、时间复杂度")]),_._v(" "),t("p",[_._v("（1）时间频度  一个算法执行所耗费的时间，从理论上是不能算出来的，必须上机运行测试才能知道。但我们不可能也没有必要对每个算法都上机测试，只需知道哪个算法花费的时间多，哪个算法花费的时间少就可以了。并且一个算法花费的时间与算法中语句的执行次数成正比例，哪个算法中语句执行次数多，它花费时间就多。一个算法中的语句执行次数称为语句频度或时间频度。记为T(n)。"),t("br"),_._v("\n（2）时间复杂度  在刚才提到的时间频度中，n称为问题的规模，当n不断变化时，时间频度T(n)也会不断变化。但有时我们想知道它变化时呈现什么规律。为此，我们引入时间复杂度概念。   一般情况下，算法中基本操作重复执行的次数是问题规模n的某个函数，用T(n)表示，若有某个辅助函数f(n),使得当n趋近于无穷大时，T（n)/f(n)的极限值为不等于零的常数，则称f(n)是T(n)的同数量级函数。记作T(n)=Ｏ(f(n)),称Ｏ(f(n))  为算法的渐进时间复杂度，简称时间复杂度。\n在各种不同算法中，若算法中语句执行次数为一个常数，则时间复杂度为O(1),另外，在时间频度不相同时，时间复杂度有可能相同，如T(n)=n2+3n+4与T(n)=4n2+2n+1它们的频度不同，但时间复杂度相同，都为O(n2)。  按数量级递增排列，常见的时间复杂度有：常数阶O(1),对数阶O(log2n),线性阶O(n),  线性对数阶O(nlog2n),平方阶O(n2)，立方阶O(n3),...，  k次方阶O(nk),指数阶O(2n)。随着问题规模n的不断增大，上述时间复杂度不断增大，算法的执行效率越低。 2、空间复杂度  与时间复杂度类似，空间复杂度是指算法在计算机内执行时所需存储空间的度量。记作: S(n)=O(f(n))  我们一般所讨论的是除正常占用内存开销外的辅助存储单元规模。讨论方法与时间复杂度类似，不再赘述。\n（3）渐进时间复杂度评价算法时间性能 　　主要用算法时间复杂度的数量级(即算法的渐近时间复杂度)评价一个算法的时间性能。")]),_._v(" "),t("h3",{attrs:{id:"_2、空间复杂度"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、空间复杂度"}},[_._v("#")]),_._v(" 2、空间复杂度")]),_._v(" "),t("p",[_._v("类似于时间复杂度的讨论，一个算法的空间复杂度(Space Complexity)S(n)定义为该算法所耗费的存储空间，它也是问题规模n的函数。渐近空间复杂度也常常简称为空间复杂度。")]),_._v(" "),t("p",[_._v('空间复杂度(Space   Complexity)是对一个算法在运行过程中临时占用存储空间大小的量度。一个算法在计算机存储器上所占用的存储空间，包括存储算法本身所占用的存储空间，算法的输入输出数据所占用的存储空间和算法在运行过程中临时占用的存储空间这三个方面。算法的输入输出数据所占用的存储空间是由要解决的问题决定的，是通过参数表由调用函数传递而来的，它不随本算法的不同而改变。存储算法本身所占用的存储空间与算法书写的长短成正比，要压缩这方面的存储空间，就必须编写出较短的算法。算法在运行过程中临时占用的存储空间随算法的不同而异，有的算法只需要占用少量的临时工作单元，而且不随问题规模的大小而改变，我们称这种算法是“就地"进行的，是节省存储的算法，如这一节介绍过的几个算法都是如此；有的算法需要占用的临时工作单元数与解决问题的规模n有关，它随着n的增大而增大，当n较大时，将占用较多的存储单元，例如将在第九章介绍的快速排序和归并排序算法就属于这种情况。')]),_._v(" "),t("p",[_._v("如当一个算法的空间复杂度为一个常量，即不随被处理数据量n的大小而改变时，可表示为O(1)；当一个算法的空间复杂度与以2为底的n的对数成正比时，可表示为0(10g2n)；当一个算法的空I司复杂度与n成线性比例关系时，可表示为0(n).若形参为数组，则只需要为它分配一个存储由实参传送来的一个地址指针的空间，即一个机器字长空间；若形参为引用方式，则也只需要为其分配存储一个地址的空间，用它来存储对应实参变量的地址，以便由系统自动引用实参变量。")])])}),[],!1,null,null,null);v.default=d.exports}}]);