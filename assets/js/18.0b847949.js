(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{337:function(t,e,a){"use strict";a.r(e);var n=a(3),s=Object(n.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v('git操作最基本的流程\n创建工作目录 对工作目录进行修改\ngit add ./\ngit hash-object -w 文件名(修改了多少个工作目录中的文件 此命令就要被执行多少次)\ngit update-index ...\ngit commit -m "注释内容"\ngit write-tree\ngit commit-tree')]),t._v(" "),e("p",[t._v("git高层命令(CRUD)\ngit init            初始化仓库\ngit status          查看文件的状态\ngit diff            查看哪些修改还没有暂存\ngit diff --staged   查看哪些修改以及被暂存了 还没提交\ngit log --oneline   查看提交的历史记录\ngit add ./          将修改添加到暂存区\ngit rm 文件名       删除工作目录中对应的文件 再将修改添加到暂存区\ngit mv 原文件名 新文件名  将工作目录中的文件进行重命名 再将修改添加到暂存区\ngit commit\ngit commit -a\ngit commit -a -m 注释"),e("br"),t._v("\n将暂存区提交到版本库")]),t._v(" "),e("p",[t._v("git高层命令(分支)\ngit branch                显示分支列表\ngit branch 分支名         创建分支\ngit checkout 分支名       切换分支\ngit branch -D 分支名      强制删除分支")]),t._v(" "),e("h3",{attrs:{id:"切换分支"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#切换分支"}},[t._v("#")]),t._v(" 切换分支")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("最佳实践: 每次切换分支前 当前分支一定得是干净的(已提交状态)\n坑: \n    在切换分支时 如果当前分支上有未暂存的修改(第一次) 或者 有未提交的暂存(第一次)\n       分支可以切换成功  但是这种操作可能会污染其他分支\n动三个地方\n    HEAD\n    暂存区\n    工作目录\n")])])]),e("h3",{attrs:{id:"后悔药"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#后悔药"}},[t._v("#")]),t._v(" 后悔药")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("工作区\n    如何撤回自己在工作目录中的修改 : git checkout --filename\n暂存区\n    如何何撤回自己的暂存  : git reset HEAD filename\n版本库              \n    如何撤回自己的提交    : git commit --amend\n        1.注释写错了,重新给用户一次机会改注释\n")])])]),e("h3",{attrs:{id:"reset"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#reset"}},[t._v("#")]),t._v(" reset")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("git log    :  \ngit reflog : 主要是HEAD有变化 那么git reflog机会记录下来\n三部曲\n    第一部： git rest --soft HEAD~  (--amend)  \n        只动HEAD (带着分支一起移动)      \n    第二部: git reset [--mixed]   HEAD~ \n        动HEAD   (带着分支一起移动)  \n        动了暂存区\n    第三部:  git reset --hard  HEAD~   \n         动HEAD   (带着分支一起移动)  \n         动了暂存区\n         动了工作目录\n")])])]),e("h3",{attrs:{id:"checkout"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#checkout"}},[t._v("#")]),t._v(" checkout")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("git  checkout commithash   &   git reset --hard commithash         \n    1.  checkout只动HEAD    --hard动HEAD而且带着分支一起走\n    2.  checkout对工作目录是安全的   --hard是强制覆盖工作目录\n\ngit checkout  commithash\ngit checkout --filename  \n      相比于git reset --hard  commitHash --filename  \n      第一  第二步都没做\n      只会动了工作目录\ngit checkout  commithash  <file>    \n      将会跳过第 1 步 \n      更新暂存区 \n      更新工作目录   \n")])])]),e("p",[t._v("​")]),t._v(" "),e("h3",{attrs:{id:"路径reset切换分支"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#路径reset切换分支"}},[t._v("#")]),t._v(" 路径reset切换分支")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("最佳实践: 每次切换分支前 当前分支一定得是干净的(已提交状态)\n坑: \n    在切换分支时 如果当前分支上有未暂存的修改(第一次) 或者 有未提交的暂存(第一次)\n       分支可以切换成功  但是这种操作可能会污染其他分支\n动三个地方\n    HEAD\n    暂存区\n    工作目录\n")])])]),e("h3",{attrs:{id:"后悔药-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#后悔药-2"}},[t._v("#")]),t._v(" 后悔药")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("工作区\n    如何撤回自己在工作目录中的修改 : git checkout --filename\n暂存区\n    如何何撤回自己的暂存  : git reset HEAD filename\n版本库              \n    如何撤回自己的提交    : git commit --amend\n        1.注释写错了,重新给用户一次机会改注释\n")])])]),e("h3",{attrs:{id:"reset-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#reset-2"}},[t._v("#")]),t._v(" reset")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("git log    :  \ngit reflog : 主要是HEAD有变化 那么git reflog机会记录下来\n三部曲\n    第一部： git rest --soft HEAD~  (--amend)  \n        只动HEAD (带着分支一起移动)      \n    第二部: git reset [--mixed]   HEAD~ \n        动HEAD   (带着分支一起移动)  \n        动了暂存区\n    第三部:  git reset --hard  HEAD~   \n         动HEAD   (带着分支一起移动)  \n         动了暂存区\n         动了工作目录\n")])])]),e("h3",{attrs:{id:"checkout-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#checkout-2"}},[t._v("#")]),t._v(" checkout")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("git  checkout commithash   &   git reset --hard commithash         \n    1.  checkout只动HEAD    --hard动HEAD而且带着分支一起走\n    2.  checkout对工作目录是安全的   --hard是强制覆盖工作目录\n\ngit checkout  commithash\ngit checkout --filename  \n      相比于git reset --hard  commitHash --filename  \n      第一  第二步都没做\n      只会动了工作目录\ngit checkout  commithash  <file>    \n      将会跳过第 1 步 \n      更新暂存区 \n      更新工作目录   \n")])])]),e("p",[t._v("​")]),t._v(" "),e("h3",{attrs:{id:"路径reset"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#路径reset"}},[t._v("#")]),t._v(" 路径reset")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("git reset HEAD filename     (reset 将会跳过第 1 步)    \n    动了暂存区\ngit reset HEAD filename     (reset 将会跳过第 1 步)    \n    动了暂存区\n")])])]),e("h3",{attrs:{id:"远程分支"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#远程分支"}},[t._v("#")]),t._v(" 远程分支")]),t._v(" "),e("h3",{attrs:{id:"远程跟踪分支"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#远程跟踪分支"}},[t._v("#")]),t._v(" 远程跟踪分支")]),t._v(" "),e("h3",{attrs:{id:"本地分支"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#本地分支"}},[t._v("#")]),t._v(" 本地分支")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("正常的数据推送 和 拉取步骤\n    1. 确保本地分支已经跟踪了远程跟踪分支\n    2. 拉取数据 : git pull\n    3. 上传数据: git push\n    \n一个本地分支怎么去跟踪一个远程跟踪分支\n    1. 当克隆的时候 会自动生成一个master本地分支(已经跟踪了对应的远程跟踪分支)\n    2. 在新建其他分支时 可以指定想要跟踪的远程跟踪分支\n            git checkout -b 本地分支名 远程跟踪分支名\n            git checkout --track  远程跟踪分支名 \n    3. 将一个已经存在的本地分支 改成 一个跟踪分支   \n            git branch -u 远程跟踪分支名     \n")])])]),e("h3",{attrs:{id:"团队协作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#团队协作"}},[t._v("#")]),t._v(" 团队协作")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("1. 项目经理初始化远程仓库\n    一定要初始化一个空的仓库; 在github上操作\n2. 项目经理创建本地仓库\n    git remote 别名 仓库地址(https)\n    git init ; 将源码复制进来\n    修改用户名 修改邮箱\n    git add\n    git commit \n3. 项目经理推送本地仓库到远程仓库\n    清理windows凭据\n    git push  别名 分支  (输入用户名 密码;推完之后会附带生成远程跟踪分支)\n 4. 项目邀请成员 & 成员接受邀请\n      在github上操作  \n\n5. 成员克隆远程仓库\n    git clone  仓库地址 (在本地生成.git文件 默认为远程仓库配了别名 orgin)\n                只有在克隆的时候 本地分支master 和 远程跟踪分支别名/master 是有同步关系的\n6. 成员做出贡献\n    修改源码文件\n    git add \n    git commit \n    git push  别名 分支 (输入用户名 密码;推完之后会附带生成远程跟踪分支) \n    \n7. 项目经理更新修改\n    git fetch 别名 (将修改同步到远程跟踪分支上)\n    git merge 远程跟踪分支\n")])])]),e("h3",{attrs:{id:"冲突"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#冲突"}},[t._v("#")]),t._v(" 冲突")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("git本地操作会不会有冲突?\n    典型合并的时候\ngit远程协作的时候 会不会有冲突?\n    push\n    pull            \n")])])]),e("p",[t._v("​"),e("br"),t._v("\n​"),e("br"),t._v("\n​"),e("br"),t._v("\n​"),e("br"),t._v("\n​")])])}),[],!1,null,null,null);e.default=s.exports}}]);