(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{697:function(s,a,t){"use strict";t.r(a);var e=t(7),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"开始配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#开始配置"}},[s._v("#")]),s._v(" 开始配置")]),s._v(" "),t("h3",{attrs:{id:"生成sshkey"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#生成sshkey"}},[s._v("#")]),s._v(" 生成sshkey")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("ssh-keygen -t rsa -C "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"youremail@example.com"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"用户名-邮箱配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#用户名-邮箱配置"}},[s._v("#")]),s._v(" 用户名&邮箱配置")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global user.name "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Your Name"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global user.email "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"email@example.com"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h2",{attrs:{id:"创建版本库-仓库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建版本库-仓库"}},[s._v("#")]),s._v(" 创建版本库（仓库）")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建仓库")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("仓库name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" \n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入仓库")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("仓库name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 把当前目录初始化成Git仓库")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" init\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("h2",{attrs:{id:"添加文件到仓库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#添加文件到仓库"}},[s._v("#")]),s._v(" 添加文件到仓库")]),s._v(" "),t("p",[s._v("在仓库目录下放入文件，如新建一个"),t("code",[s._v("test.txt")]),s._v("文件，然后使用"),t("code",[s._v("git add test.txt")]),s._v("命令告诉Git，把文件添加到缓存区，然后使用"),t("code",[s._v('git commit -m "提交描述"')]),s._v("告诉Git，把文件提交到仓库。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 添加指定文件或文件夹到缓存区，文件需添加后缀")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("文件或文件夹name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("                   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 单个文件")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("文件或文件夹name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("文件或文件夹name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 多个文件")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 或 全部文件同时添加到缓存区")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 把文件从缓存区提交至仓库")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -m "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"提交描述"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("h2",{attrs:{id:"版本管理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#版本管理"}},[s._v("#")]),s._v(" 版本管理")]),s._v(" "),t("h3",{attrs:{id:"提交修改"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#提交修改"}},[s._v("#")]),s._v(" 提交修改")]),s._v(" "),t("p",[s._v("如修改"),t("code",[s._v("test.txt")]),s._v("的内容后，运行"),t("code",[s._v("git status")]),s._v("命令看看被修改的文件，然后再使用"),t("code",[s._v("git add test.txt")]),s._v("、\n"),t("code",[s._v('git commit -m "修改描述"')]),s._v("把修改后的文件提交到仓库，提交后可再次使用"),t("code",[s._v("git status")]),s._v("查看当前状态。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示 新增/删除/被改动等 的文件")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" status\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h3",{attrs:{id:"查看版本记录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看版本记录"}},[s._v("#")]),s._v(" 查看版本记录")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看版本记录")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" log   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示版本号、提交时间等信息")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("blockquote",[t("p",[s._v("也可使用可视化工具查看Git版本历史：\n在仓库目录右键 > "),t("code",[s._v("Git BUI Here")])])]),s._v(" "),t("h3",{attrs:{id:"回退版本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#回退版本"}},[s._v("#")]),s._v(" 回退版本")]),s._v(" "),t("p",[s._v("首先，Git必须知道当前版本是哪个版本，在Git中，用"),t("code",[s._v("HEAD")]),s._v("表示当前版本，也就是最新的提交1094adb...（注意我的提交ID和你的肯定不一样），上一个版本就是"),t("code",[s._v("HEAD^")]),s._v("，上上一个版本就是"),t("code",[s._v("HEAD^^")]),s._v("，当然往上100个版本写100个^比较容易数不过来，所以写成"),t("code",[s._v("HEAD~100")]),s._v("。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 回退到上一个版本")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" reset --hard HEAD^\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("此时查看"),t("code",[s._v("git log")]),s._v("记录发现，原来最新的版本已经没有了，想回到原来最新的版本怎么办？这就需要知道最新的版本的版本号")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 跳转到指定版本")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" reset --hard "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("版本号前几位"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("但是不知道版本号怎么办？Git提供了一个命令"),t("code",[s._v("git reflog")]),s._v("用来记录你的每一次命令")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" reflog\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"撤销修改"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#撤销修改"}},[s._v("#")]),s._v(" 撤销修改")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://www.liaoxuefeng.com/wiki/896043488029600/897889638509536",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://www.liaoxuefeng.com/wiki/896043488029600/897889638509536"),t("OutboundLink")],1)]),s._v(" "),t("h3",{attrs:{id:"删除文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#删除文件"}},[s._v("#")]),s._v(" 删除文件")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://www.liaoxuefeng.com/wiki/896043488029600/900002180232448",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://www.liaoxuefeng.com/wiki/896043488029600/900002180232448"),t("OutboundLink")],1)]),s._v(" "),t("h2",{attrs:{id:"远程仓库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#远程仓库"}},[s._v("#")]),s._v(" 远程仓库")]),s._v(" "),t("h3",{attrs:{id:"ssh验证"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ssh验证"}},[s._v("#")]),s._v(" SSH验证")]),s._v(" "),t("p",[s._v("使本机能关联远程仓库，首次需要SSH验证")]),s._v(" "),t("ul",[t("li",[s._v("第1步：创建"),t("code",[s._v("SSH Key")]),s._v("。在用户主（C:\\Users\\dell）目录下，看看有没有.ssh目录，\n如果有，再看看这个目录下有没有"),t("code",[s._v("id_rsa")]),s._v("和"),t("code",[s._v("id_rsa.pub")]),s._v("这两个文件，如果已经有了，可直接跳到下一步。\n如果没有，打开Shell（Windows下打开Git Bash），创建"),t("code",[s._v("SSH Key")]),s._v("：")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建SSH Key")]),s._v("\nssh-keygen -t rsa -C "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"邮件地址"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("ul",[t("li",[s._v("第2步：登陆GitHub，右上角头像 > settings > SSH and GPG keys >Add SSH Key，在key的文本框里粘贴"),t("code",[s._v("id_rsa.pub")]),s._v("文件的内容")])]),s._v(" "),t("h3",{attrs:{id:"关联远程仓库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#关联远程仓库"}},[s._v("#")]),s._v(" 关联远程仓库")]),s._v(" "),t("p",[s._v("SSH验证完成后，在github创建仓库，创建仓库时记得取消 "),t("code",[s._v("Initialize this repository with a README")]),s._v("的勾选，然后在本地命令：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 关联远程仓库，仓库名一般使用origin")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("仓库名"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("远程仓库地址"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 示例")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" origin git@github.com:xugaoyi/test.git\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("下一步，就可以把本地库的所有内容推送到远程库上")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 把文件推送到远程仓库")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push -u "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("仓库名"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("分支名"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 示例")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push -u origin master\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("由于远程库是空的，我们第一次推送"),t("code",[s._v("master")]),s._v("分支时，加上了"),t("code",[s._v("-u")]),s._v("参数，Git不但会把本地的"),t("code",[s._v("master")]),s._v("分支内容推送的远程新的"),t("code",[s._v("master")]),s._v("分支，还会把本地的"),t("code",[s._v("master")]),s._v("分支和远程的"),t("code",[s._v("master")]),s._v("分支关联起来，在以后的推送或者拉取时就可以简化命令。")]),s._v(" "),t("blockquote",[t("p",[s._v("前提是目录已经"),t("code",[s._v("git init")]),s._v("初始化成仓库，并且"),t("code",[s._v("git status")]),s._v("状态是没有改动的，如果有改动则先"),t("code",[s._v("git add .")]),s._v("添加至缓存区，"),t("code",[s._v("git commit -m '提交描述'")]),s._v("提交至仓库，然后执行上面命令。")]),s._v(" "),t("p",[s._v("如创建仓库时勾选了 "),t("code",[s._v("Initialize this repository with a README")]),s._v(" 则需先拉取"),t("code",[s._v("README.md")]),s._v("文件到本地仓库"),t("code",[s._v("git pull")])]),s._v(" "),t("p",[s._v("可关联多个远程仓库，注意给不同的远程仓库取不一样的名称，提交是分别按名称提交到不一样的远程仓库。")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 简化的推送命令")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h3",{attrs:{id:"查看远程仓库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看远程仓库"}},[s._v("#")]),s._v(" 查看远程仓库")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看远程仓库")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote -v\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h3",{attrs:{id:"删除远程仓库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#删除远程仓库"}},[s._v("#")]),s._v(" 删除远程仓库")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除远程仓库")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("仓库名"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h3",{attrs:{id:"从远程库克隆项目"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#从远程库克隆项目"}},[s._v("#")]),s._v(" 从远程库克隆项目")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 从远程库克隆项目")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("仓库地址"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h3",{attrs:{id:"克隆指定分支"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#克隆指定分支"}},[s._v("#")]),s._v(" 克隆指定分支")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 克隆指定分支")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone -b "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("分支名"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("仓库地址"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h3",{attrs:{id:"本地回退版本后-如何同步到远程仓库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#本地回退版本后-如何同步到远程仓库"}},[s._v("#")]),s._v(" 本地回退版本后，如何同步到远程仓库")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 本地先回退到之前的版本 ")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# --mixed：最新版HEAD的改变会保存在暂存区，")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# --hard：最新版HEAD的变化、暂存区中还没有提交的变化、工作区中所有的变化都会被移除")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" reset  --mixed "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("版本号前几位"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n或者\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" reset  --hard "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("版本号前几位"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 强制推送到远程仓库")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push --force\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 此时远程代码和本地代码都正常回退成功")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("h3",{attrs:{id:"推送本地仓库到远程指定仓库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#推送本地仓库到远程指定仓库"}},[s._v("#")]),s._v(" 推送本地仓库到远程指定仓库")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 本地仓库有是dev和feat，远程仓库有master和daily。")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 现在要推送feat到daily中去")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 首先切换到feat分支")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout feat\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 推送到指定分支")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin feat: daily\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("h2",{attrs:{id:"分支管理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#分支管理"}},[s._v("#")]),s._v(" 分支管理")]),s._v(" "),t("h3",{attrs:{id:"创建分支"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建分支"}},[s._v("#")]),s._v(" 创建分支")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建分支")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout -b "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("分支名"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h3",{attrs:{id:"查看分支"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看分支"}},[s._v("#")]),s._v(" 查看分支")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看分支")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("查看分支时，在分支前带 * 号的表示当前的分支")]),s._v(" "),t("h3",{attrs:{id:"切换分支"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#切换分支"}},[s._v("#")]),s._v(" 切换分支")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 切换分支")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("分支名"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h3",{attrs:{id:"合并分支"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#合并分支"}},[s._v("#")]),s._v(" 合并分支")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 合并本地的分支")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" merge "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("分支名"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 合并远程的分支")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" merge "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("远程仓库名"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("/"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("分支名"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[t("strong",[s._v("注意")]),s._v("，是将指定分支合并到当前分支，并非当前分支合并到指定分支。")]),s._v(" "),t("p",[s._v("一般情况下是把当前分支切换到"),t("strong",[s._v("主分支")]),s._v("，然后把"),t("strong",[s._v("子分支")]),s._v("合并到"),t("strong",[s._v("主分支")]),s._v("。")]),s._v(" "),t("h3",{attrs:{id:"删除分支"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#删除分支"}},[s._v("#")]),s._v(" 删除分支")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除分支")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch -d "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("分支名"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h3",{attrs:{id:"修改分支名"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修改分支名"}},[s._v("#")]),s._v(" 修改分支名")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改分支名")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch -m "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("原分支名"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("新分支名"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h3",{attrs:{id:"拉取指定分支"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#拉取指定分支"}},[s._v("#")]),s._v(" 拉取指定分支")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 首先克隆项目，此时查看分支 gitgit branch 发现只有master分支。")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone 项目地址\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建本地分支 dev-tang 并与远程分支 dev-tang 关联")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 注意：新建的本地分支名一定要与远程分支名一样")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout -b dev-tang origin/项目地址\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 切换 dev-tang 分支")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout -b dev-tang\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 拉取远程分支内容到本地")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" pull origin  dev-tang\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 正常修改代码，暂存 修改 推执行命令：")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("' *** '")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push -u origin dev-tang\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])]),t("h2",{attrs:{id:"参考文档"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考文档"}},[s._v("#")]),s._v(" 参考文档")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://www.liaoxuefeng.com/wiki/896043488029600",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://www.liaoxuefeng.com/wiki/896043488029600"),t("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=n.exports}}]);