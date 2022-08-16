(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{662:function(s,a,e){"use strict";e.r(a);var n=e(7),t=Object(n.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"常用基本命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常用基本命令"}},[s._v("#")]),s._v(" 常用基本命令")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("# 启动docker\nsystemctl start docker\n# 停止dokcer\nsystemctl stop docker\n# 查看docker状态\nsystemctl status docker \n# 重启docker\nsystemctl restart docker\n# 设置docker 开机自启\nsystemctl ebable docker\n# 查看docker 版本\ndocker version\n# 查看docker 镜像\ndocker images\n# 查看docker 运行列表\ndocker ps \n# 查看docker （运行、停止）\ndocker ps -aq\n# 删除容器\ndocker rm -f 容器ID/容器名称(CONTAINER ID/NAMES)\n#  删除多个容器（空格隔开）\ndocker rm -f 容器ID/容器名称 容器ID/容器名称 ...\n# 删除全部容器\ndocker rm -f $(docker ps -aq)\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br")])]),e("h2",{attrs:{id:"工作中常用docker命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#工作中常用docker命令"}},[s._v("#")]),s._v(" 工作中常用docker命令")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("# 查看docker \ndocker ps \n# 进入容器\ndocker exec -it 容器ID/容器名称(CONTAINER ID/NAMES) /bin/bash\ndocker exec -it 容器ID/容器名称(CONTAINER ID/NAMES) bash\n# 例如:\ndocker exec -it 56f0b18af626 /bin/bash\ndocker exec -it postgres10.7 bash \n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("h2",{attrs:{id:"查看容器挂载目录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看容器挂载目录"}},[s._v("#")]),s._v(" 查看容器挂载目录")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("# 先查询容器ID\ndocker ps \n# 再查看容器挂载的目录\ndocker inspect 容器ID/容器名称 | grep Mounts -A 20\n# 例如：\ndocker inspect 56f0b18af626 | grep Mounts -A 20\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("h2",{attrs:{id:"容器拷贝文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#容器拷贝文件"}},[s._v("#")]),s._v(" 容器拷贝文件")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("# 容器内 ---\x3e 宿主机\ndocker cp 容器ID/名称:容器内文件路径  宿主机文件路径\n# 例如\ndocker cp 56f0b18af626:/opt/test.txt /opt/dockercpcehi/\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("# 宿主机 ---\x3e 容器内\ndocker  cp 宿主机文件路径 容器ID/名称: 容器内文件路径\n# 例如：\ndocker cp /opt/dockercpcehi/test.txt 56f0b18af626:/opt/dockerceshifile/\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("h2",{attrs:{id:"设置容器开机自启"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#设置容器开机自启"}},[s._v("#")]),s._v(" 设置容器开机自启")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("docker  update --restart=always 容器ID/容器名\n# 例如：\ndocker  update --restart=always 56f0b18af626\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("h2",{attrs:{id:"开启容器端口"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#开启容器端口"}},[s._v("#")]),s._v(" 开启容器端口")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("# 启动firewalld\nsystemctl status firewalld.service\nsystemctl start firewalld.service\n\n# 开放端口号\nfirewall-cmd --zone=public --add-port=5432/tcp --permanent (permanent永久生效，没有此参数重启后失效)\n# 更新防火墙策略\nfirewall-cmd --reload\n# 查看开放端口\nfirewall-cmd --zone=public --list-ports\n# 查看5432\nfirewall-cmd --zone= public --query-port=5432/tcp\n# 删除端口\nfirewall-cmd --zone=public --remove-port=5432/tcp --permanent\n# 注：每次更改firewall规则后需重新加载（firewall-cmd --reload）\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br")])])])}),[],!1,null,null,null);a.default=t.exports}}]);