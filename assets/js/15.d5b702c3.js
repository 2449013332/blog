(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{335:function(v,_,e){"use strict";e.r(_);var t=e(3),a=Object(t.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h2",{attrs:{id:"初识vue"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#初识vue"}},[v._v("#")]),v._v(" 初识Vue")]),v._v(" "),_("p",[v._v("​        1.想让Vue工作，就必须创建一个Vue实例，且要传入一个配置对象；")]),v._v(" "),_("p",[v._v("​        2.root容器里的代码依然符合html规范，只不过混入了一些特殊的Vue语法；")]),v._v(" "),_("p",[v._v("​        3.root容器里的代码被称为【Vue模板】；")]),v._v(" "),_("p",[v._v("​        4.Vue实例和容器是一一对应的；")]),v._v(" "),_("p",[v._v("​        5.真实开发中只有一个Vue实例，并且会配合着组件一起使用；")]),v._v(" "),_("p",[v._v("​        6."+v._s(v.xxx)+"中的xxx要写js表达式，且xxx可以自动读取到data中的所有属性；")]),v._v(" "),_("p",[v._v("​        7.一旦data中的数据发生改变，那么页面中用到该数据的地方也会自动更新；")]),v._v(" "),_("p",[v._v("​        注意区分：js表达式 和 js代码(语句)")]),v._v(" "),_("p",[v._v("​            1.表达式：一个表达式会产生一个值，可以放在任何一个需要值的地方：")]),v._v(" "),_("p",[v._v("​                  (1). a")]),v._v(" "),_("p",[v._v("​                  (2). a+b")]),v._v(" "),_("p",[v._v("​                  (3). demo(1)")]),v._v(" "),_("p",[v._v("​                  (4). x === y ? 'a' : 'b'")]),v._v(" "),_("p",[v._v("​            2.js代码(语句)")]),v._v(" "),_("p",[v._v("​                  (1). if(){}")]),v._v(" "),_("p",[v._v("​                  (2). for(){}")]),v._v(" "),_("h2",{attrs:{id:"vue模板语法有2大类"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#vue模板语法有2大类"}},[v._v("#")]),v._v(" Vue模板语法有2大类")]),v._v(" "),_("p",[v._v("​          1.插值语法：")]),v._v(" "),_("p",[v._v("​              功能：用于解析标签体内容。")]),v._v(" "),_("p",[v._v("​              写法："+v._s(v.xxx)+"，xxx是js表达式，且可以直接读取到data中的所有属性。")]),v._v(" "),_("p",[v._v("​          2.指令语法：")]),v._v(" "),_("p",[v._v("​              功能：用于解析标签（包括：标签属性、标签体内容、绑定事件.....）。")]),v._v(" "),_("p",[v._v('​              举例：v-bind:href="xxx" 或  简写为 :href="xxx"，xxx同样要写js表达式，')]),v._v(" "),_("p",[v._v("​                   且可以直接读取到data中的所有属性。")]),v._v(" "),_("p",[v._v("​              备注：Vue中有很多的指令，且形式都是：v-????，此处我们只是拿v-bind举个例子")]),v._v(" "),_("h2",{attrs:{id:"vue中有2种数据绑定的方式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#vue中有2种数据绑定的方式"}},[v._v("#")]),v._v(" Vue中有2种数据绑定的方式")]),v._v(" "),_("p",[v._v("​          1.单向绑定(v-bind)：数据只能从data流向页面。")]),v._v(" "),_("p",[v._v("​          2.双向绑定(v-model)：数据不仅能从data流向页面，还可以从页面流向data。")]),v._v(" "),_("p",[v._v("​            备注：")]),v._v(" "),_("p",[v._v("​                1.双向绑定一般都应用在表单类元素上（如：input、select等）")]),v._v(" "),_("p",[v._v("​                2.v-model:value 可以简写为 v-model，因为v-model默认收集的就是value值。")]),v._v(" "),_("h2",{attrs:{id:"mvvm模型"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#mvvm模型"}},[v._v("#")]),v._v(" MVVM模型")]),v._v(" "),_("p",[v._v("​            1. M：模型(Model) ：data中的数据")]),v._v(" "),_("p",[v._v("​            2. V：视图(View) ：模板代码")]),v._v(" "),_("p",[v._v("​            3. VM：视图模型(ViewModel)：Vue实例")]),v._v(" "),_("p",[v._v("​      观察发现：")]),v._v(" "),_("p",[v._v("​            1.data中所有的属性，最后都出现在了vm身上。")]),v._v(" "),_("p",[v._v("​            2.vm身上所有的属性 及 Vue原型上所有属性，在Vue模板中都可以直接使用。")]),v._v(" "),_("h2",{attrs:{id:"vue中的数据代理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#vue中的数据代理"}},[v._v("#")]),v._v(" Vue中的数据代理")]),v._v(" "),_("p",[v._v("​              通过vm对象来代理data对象中属性的操作（读/写）")]),v._v(" "),_("p",[v._v("​        1.Vue中数据代理的好处：")]),v._v(" "),_("p",[v._v("​              更加方便的操作data中的数据")]),v._v(" "),_("p",[v._v("​       2.基本原理：")]),v._v(" "),_("p",[v._v("​              通过Object.defineProperty()把data对象中所有属性添加到vm上。")]),v._v(" "),_("p",[v._v("​              为每一个添加到vm上的属性，都指定一个getter/setter。")]),v._v(" "),_("p",[v._v("​              在getter/setter内部去操作（读/写）data中对应的属性。")]),v._v(" "),_("h2",{attrs:{id:"事件的基本使用"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#事件的基本使用"}},[v._v("#")]),v._v(" 事件的基本使用：")]),v._v(" "),_("p",[v._v("​              1.使用v-on:xxx 或 @xxx 绑定事件，其中xxx是事件名；")]),v._v(" "),_("p",[v._v("​              2.事件的回调需要配置在methods对象中，最终会在vm上；")]),v._v(" "),_("p",[v._v("​              3.methods中配置的函数，不要用箭头函数！否则this就不是vm了；")]),v._v(" "),_("p",[v._v("​              4.methods中配置的函数，都是被Vue所管理的函数，this的指向是vm 或 组件实例对象；")]),v._v(" "),_("p",[v._v('​              5.@click="demo" 和 @click="demo($event)" 效果一致，但后者可以传参；')]),v._v(" "),_("h2",{attrs:{id:"vue中的事件修饰符"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#vue中的事件修饰符"}},[v._v("#")]),v._v(" Vue中的事件修饰符：")]),v._v(" "),_("p",[v._v("​            1.prevent：阻止默认事件（常用）；")]),v._v(" "),_("p",[v._v("​            2.stop：阻止事件冒泡（常用）；")]),v._v(" "),_("p",[v._v("​            3.once：事件只触发一次（常用）；")]),v._v(" "),_("p",[v._v("​            4.capture：使用事件的捕获模式；")]),v._v(" "),_("p",[v._v("​            5.self：只有event.target是当前操作的元素时才触发事件；")]),v._v(" "),_("p",[v._v("​            6.passive：事件的默认行为立即执行，无需等待事件回调执行完毕；")]),v._v(" "),_("h2",{attrs:{id:"键盘事件"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#键盘事件"}},[v._v("#")]),v._v(" 键盘事件：")]),v._v(" "),_("p",[v._v("​       1.Vue中常用的按键别名：")]),v._v(" "),_("p",[v._v("​              回车 => enter")]),v._v(" "),_("p",[v._v("​              删除 => delete (捕获“删除”和“退格”键)")]),v._v(" "),_("p",[v._v("​              退出 => esc")]),v._v(" "),_("p",[v._v("​              空格 => space")]),v._v(" "),_("p",[v._v("​              换行 => tab (特殊，必须配合keydown去使用)")]),v._v(" "),_("p",[v._v("​              上 => up")]),v._v(" "),_("p",[v._v("​              下 => down")]),v._v(" "),_("p",[v._v("​              左 => left")]),v._v(" "),_("p",[v._v("​              右 => right")]),v._v(" "),_("p",[v._v("​        2.Vue未提供别名的按键，可以使用按键原始的key值去绑定，但注意要转为kebab-case（短横线命名）")]),v._v(" "),_("p",[v._v("​        3.系统修饰键（用法特殊）：ctrl、alt、shift、meta")]),v._v(" "),_("p",[v._v("​              (1).配合keyup使用：按下修饰键的同时，再按下其他键，随后释放其他键，事件才被触发。")]),v._v(" "),_("p",[v._v("​              (2).配合keydown使用：正常触发事件。")]),v._v(" "),_("p",[v._v("​        4.也可以使用keyCode去指定具体的按键（不推荐）")]),v._v(" "),_("p",[v._v("​        5.Vue.config.keyCodes.自定义键名 = 键码，可以去定制按键别名")]),v._v(" "),_("h2",{attrs:{id:"计算属性"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#计算属性"}},[v._v("#")]),v._v(" 计算属性：")]),v._v(" "),_("p",[v._v("​          1.定义：要用的属性不存在，要通过已有属性计算得来。")]),v._v(" "),_("p",[v._v("​          2.原理：底层借助了Objcet.defineproperty方法提供的getter和setter。")]),v._v(" "),_("p",[v._v("​          3.get函数什么时候执行？")]),v._v(" "),_("p",[v._v("​                (1).初次读取时会执行一次。")]),v._v(" "),_("p",[v._v("​                (2).当依赖的数据发生改变时会被再次调用。")]),v._v(" "),_("p",[v._v("​          4.优势：与methods实现相比，内部有缓存机制（复用），效率更高，调试方便。")]),v._v(" "),_("p",[v._v("​          5.备注：")]),v._v(" "),_("p",[v._v("​              1.计算属性最终会出现在vm上，直接读取使用即可。")]),v._v(" "),_("p",[v._v("​              2.如果计算属性要被修改，那必须写set函数去响应修改，且set中要引起计算时依赖的数据发生改变。")]),v._v(" "),_("h2",{attrs:{id:"监视属性watch"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#监视属性watch"}},[v._v("#")]),v._v(" 监视属性watch：")]),v._v(" "),_("p",[v._v("​          1.当被监视的属性变化时, 回调函数自动调用, 进行相关操作")]),v._v(" "),_("p",[v._v("​          2.监视的属性必须存在，才能进行监视！！")]),v._v(" "),_("p",[v._v("​          3.监视的两种写法：")]),v._v(" "),_("p",[v._v("​              (1).new Vue时传入watch配置")]),v._v(" "),_("p",[v._v("​              (2).通过vm.$watch监视")]),v._v(" "),_("h2",{attrs:{id:"深度监视"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#深度监视"}},[v._v("#")]),v._v(" 深度监视：")]),v._v(" "),_("p",[v._v("​            (1).Vue中的watch默认不监测对象内部值的改变（一层）。")]),v._v(" "),_("p",[v._v("​            (2).配置deep:true可以监测对象内部值改变（多层）。")]),v._v(" "),_("p",[v._v("​        备注：")]),v._v(" "),_("p",[v._v("​            (1).Vue自身可以监测对象内部值的改变，但Vue提供的watch默认不可以！")]),v._v(" "),_("p",[v._v("​            (2).使用watch时根据数据的具体结构，决定是否采用深度监视。")]),v._v(" "),_("h2",{attrs:{id:"computed和watch之间的区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#computed和watch之间的区别"}},[v._v("#")]),v._v(" computed和watch之间的区别：")]),v._v(" "),_("p",[v._v("​            1.computed能完成的功能，watch都可以完成。")]),v._v(" "),_("p",[v._v("​            2.watch能完成的功能，computed不一定能完成，例如：watch可以进行异步操作。")]),v._v(" "),_("p",[v._v("​        两个重要的小原则：")]),v._v(" "),_("p",[v._v("​              1.所被Vue管理的函数，最好写成普通函数，这样this的指向才是vm 或 组件实例对象。")]),v._v(" "),_("p",[v._v("​              2.所有不被Vue所管理的函数（定时器的回调函数、ajax的回调函数等、Promise的回调函数），最好写成箭头函数，")]),v._v(" "),_("p",[v._v("​                这样this的指向才是vm 或 组件实例对象。")]),v._v(" "),_("h2",{attrs:{id:"绑定样式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#绑定样式"}},[v._v("#")]),v._v(" 绑定样式：")]),v._v(" "),_("p",[v._v("​          1. class样式")]),v._v(" "),_("p",[v._v('​                写法:class="xxx" xxx可以是字符串、对象、数组。')]),v._v(" "),_("p",[v._v("​                    字符串写法适用于：类名不确定，要动态获取。")]),v._v(" "),_("p",[v._v("​                    对象写法适用于：要绑定多个样式，个数不确定，名字也不确定。")]),v._v(" "),_("p",[v._v("​                    数组写法适用于：要绑定多个样式，个数确定，名字也确定，但不确定用不用。")]),v._v(" "),_("p",[v._v("​          2. style样式")]),v._v(" "),_("p",[v._v('​                :style="{fontSize: xxx}"其中xxx是动态值。')]),v._v(" "),_("p",[v._v('​                :style="[a,b]"其中a、b是样式对象。')]),v._v(" "),_("h2",{attrs:{id:"条件渲染"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#条件渲染"}},[v._v("#")]),v._v(" 条件渲染：")]),v._v(" "),_("p",[v._v("​              1.v-if")]),v._v(" "),_("p",[v._v("​                    写法：")]),v._v(" "),_("p",[v._v('​                        (1).v-if="表达式"')]),v._v(" "),_("p",[v._v('​                        (2).v-else-if="表达式"')]),v._v(" "),_("p",[v._v('​                        (3).v-else="表达式"')]),v._v(" "),_("p",[v._v("​                    适用于：切换频率较低的场景。")]),v._v(" "),_("p",[v._v("​                    特点：不展示的DOM元素直接被移除。")]),v._v(" "),_("p",[v._v("​                    注意：v-if可以和:v-else-if、v-else一起使用，但要求结构不能被“打断”。")]),v._v(" "),_("p",[v._v("​              2.v-show")]),v._v(" "),_("p",[v._v('​                    写法：v-show="表达式"')]),v._v(" "),_("p",[v._v("​                    适用于：切换频率较高的场景。")]),v._v(" "),_("p",[v._v("​                    特点：不展示的DOM元素未被移除，仅仅是使用样式隐藏掉")]),v._v(" "),_("p",[v._v("​              3.备注：使用v-if的时，元素可能无法获取到，而使用v-show一定可以获取到。")]),v._v(" "),_("h2",{attrs:{id:"列表渲染"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#列表渲染"}},[v._v("#")]),v._v(" 列表渲染")]),v._v(" "),_("h3",{attrs:{id:"v-for指令"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#v-for指令"}},[v._v("#")]),v._v(" v-for指令:")]),v._v(" "),_("p",[v._v("​            1.用于展示列表数据")]),v._v(" "),_("p",[v._v('​            2.语法：v-for="(item, index) in xxx" :key="yyy"')]),v._v(" "),_("p",[v._v("​            3.可遍历：数组、对象、字符串（用的很少）、指定次数（用的很少）")]),v._v(" "),_("h3",{attrs:{id:"面试题-react、vue中的key有什么作用-key的内部原理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#面试题-react、vue中的key有什么作用-key的内部原理"}},[v._v("#")]),v._v(" 面试题：react、vue中的key有什么作用？（key的内部原理）")]),v._v(" "),_("p",[v._v("​            1.虚拟DOM中key的作用：")]),v._v(" "),_("p",[v._v("​                    key是虚拟DOM对象的标识，当数据发生变化时，Vue会根据【新数据】生成【新的虚拟DOM】,")]),v._v(" "),_("p",[v._v("​                    随后Vue进行【新虚拟DOM】与【旧虚拟DOM】的差异比较，比较规则如下：")]),v._v(" "),_("p",[v._v("​            2.对比规则：")]),v._v(" "),_("p",[v._v("​                  (1).旧虚拟DOM中找到了与新虚拟DOM相同的key：")]),v._v(" "),_("p",[v._v("​                        ①.若虚拟DOM中内容没变, 直接使用之前的真实DOM！")]),v._v(" "),_("p",[v._v("​                        ②.若虚拟DOM中内容变了, 则生成新的真实DOM，随后替换掉页面中之前的真实DOM。")]),v._v(" "),_("p",[v._v("​                  (2).旧虚拟DOM中未找到与新虚拟DOM相同的key")]),v._v(" "),_("p",[v._v("​                        创建新的真实DOM，随后渲染到到页面。")]),v._v(" "),_("ol",{attrs:{start:"3"}},[_("li",[v._v("用index作为key可能会引发的问题：")])]),v._v(" "),_("p",[v._v("​                      （1） 若对数据进行：逆序添加、逆序删除等破坏顺序操作:")]),v._v(" "),_("p",[v._v("​                              会产生没有必要的真实DOM更新 ==> 界面效果没问题, 但效率低。")]),v._v(" "),_("p",[v._v("​                      （2） 如果结构中还包含输入类的DOM：")]),v._v(" "),_("p",[v._v("​                              会产生错误DOM更新 ==> 界面有问题。")]),v._v(" "),_("p",[v._v("​        4. 开发中如何选择key?:")]),v._v(" "),_("p",[v._v("​                      （1）最好使用每条数据的唯一标识作为key, 比如id、手机号、身份证号、学号等唯一值。")]),v._v(" "),_("p",[v._v("​                        （2）如果不存在对数据的逆序添加、逆序删除等破坏顺序操作，仅用于渲染列表用于展示， 使用index作为key是没有问题的。")]),v._v(" "),_("h2",{attrs:{id:"vue监视数据的原理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#vue监视数据的原理"}},[v._v("#")]),v._v(" Vue监视数据的原理：")]),v._v(" "),_("p",[v._v("​        1. vue会监视data中所有层次的数据。")]),v._v(" "),_("p",[v._v("​        2. 如何监测对象中的数据？")]),v._v(" "),_("p",[v._v("​                通过setter实现监视，且要在new Vue时就传入要监测的数据。")]),v._v(" "),_("p",[v._v("​                  (1).对象中后追加的属性，Vue默认不做响应式处理")]),v._v(" "),_("p",[v._v("​                  (2).如需给后添加的属性做响应式，请使用如下API：")]),v._v(" "),_("p",[v._v("​                          Vue.set(target，propertyName/index，value) 或")]),v._v(" "),_("p",[v._v("​                          vm.$set(target，propertyName/index，value)")]),v._v(" "),_("p",[v._v("​        3. 如何监测数组中的数据？")]),v._v(" "),_("p",[v._v("​                  通过包裹数组更新元素的方法实现，本质就是做了两件事：")]),v._v(" "),_("p",[v._v("​                    (1).调用原生对应的方法对数组进行更新。")]),v._v(" "),_("p",[v._v("​                    (2).重新解析模板，进而更新页面。")]),v._v(" "),_("p",[v._v("​        4.在Vue修改数组中的某个元素一定要用如下方法：")]),v._v(" "),_("p",[v._v("​              (1).使用这些API:push()、pop()、shift()、unshift()、splice()、sort()、reverse()")]),v._v(" "),_("p",[v._v("​              (2).Vue.set() 或 vm.$set()")]),v._v(" "),_("p",[v._v("​        特别注意：Vue.set() 和 vm.$set() 不能给vm 或 vm的根数据对象 添加属性！！！")]),v._v(" "),_("h2",{attrs:{id:"收集表单数据"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#收集表单数据"}},[v._v("#")]),v._v(" 收集表单数据：")]),v._v(" "),_("p",[v._v("​          若："),_("input",{attrs:{type:"text"}}),v._v("，则v-model收集的是value值，用户输入的就是value值。")]),v._v(" "),_("p",[v._v("​          若："),_("input",{attrs:{type:"radio"}}),v._v("，则v-model收集的是value值，且要给标签配置value值。")]),v._v(" "),_("p",[v._v("​          若："),_("input",{attrs:{type:"checkbox"}})]),v._v(" "),_("p",[v._v("​              1.没有配置input的value属性，那么收集的就是checked（勾选 or 未勾选，是布尔值）")]),v._v(" "),_("p",[v._v("​              2.配置input的value属性:")]),v._v(" "),_("p",[v._v("​                  (1)v-model的初始值是非数组，那么收集的就是checked（勾选 or 未勾选，是布尔值）")]),v._v(" "),_("p",[v._v("​                  (2)v-model的初始值是数组，那么收集的的就是value组成的数组")]),v._v(" "),_("p",[v._v("​          备注：v-model的三个修饰符：")]),v._v(" "),_("p",[v._v("​                  lazy：失去焦点再收集数据")]),v._v(" "),_("p",[v._v("​                  number：输入字符串转为有效的数字")]),v._v(" "),_("p",[v._v("​                  trim：输入首尾空格过滤")]),v._v(" "),_("h2",{attrs:{id:"过滤器"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#过滤器"}},[v._v("#")]),v._v(" 过滤器：")]),v._v(" "),_("p",[v._v("​        定义：对要显示的数据进行特定格式化后再显示（适用于一些简单逻辑的处理）。")]),v._v(" "),_("p",[v._v("​        语法：")]),v._v(" "),_("p",[v._v("​            1.注册过滤器：Vue.filter(name,callback) 或 new Vue{filters:{}}")]),v._v(" "),_("p",[v._v("​            2.使用过滤器："+v._s(v._f("过滤器名")(v.xxx))+'  或  v-bind:属性 = "xxx | 过滤器名"')]),v._v(" "),_("p",[v._v("​        备注：")]),v._v(" "),_("p",[v._v("​            1.过滤器也可以接收额外参数、多个过滤器也可以串联")]),v._v(" "),_("p",[v._v("​            2.并没有改变原本的数据, 是产生新的对应的数据")]),v._v(" "),_("h2",{attrs:{id:"我们学过的指令"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#我们学过的指令"}},[v._v("#")]),v._v(" 我们学过的指令：")]),v._v(" "),_("p",[v._v("​            v-bind  : 单向绑定解析表达式, 可简写为 :xxx")]),v._v(" "),_("p",[v._v("​            v-model : 双向数据绑定")]),v._v(" "),_("p",[v._v("​            v-for  : 遍历数组/对象/字符串")]),v._v(" "),_("p",[v._v("​            v-on   : 绑定事件监听, 可简写为@")]),v._v(" "),_("p",[v._v("​            v-if     : 条件渲染（动态控制节点是否存存在）")]),v._v(" "),_("p",[v._v("​            v-else  : 条件渲染（动态控制节点是否存存在）")]),v._v(" "),_("p",[v._v("​            v-show  : 条件渲染 (动态控制节点是否展示)")]),v._v(" "),_("p",[v._v("​        v-text指令：")]),v._v(" "),_("p",[v._v("​            1.作用：向其所在的节点中渲染文本内容。")]),v._v(" "),_("p",[v._v("​            2.与插值语法的区别：v-text会替换掉节点中的内容，"+v._s(v.xx)+"则不会。")]),v._v(" "),_("h2",{attrs:{id:"v-html指令"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#v-html指令"}},[v._v("#")]),v._v(" v-html指令：")]),v._v(" "),_("p",[v._v("​            1.作用：向指定节点中渲染包含html结构的内容。")]),v._v(" "),_("p",[v._v("​            2.与插值语法的区别：")]),v._v(" "),_("p",[v._v("​                  (1).v-html会替换掉节点中所有的内容，"+v._s(v.xx)+"则不会。")]),v._v(" "),_("p",[v._v("​                  (2).v-html可以识别html结构。")]),v._v(" "),_("p",[v._v("​            3.严重注意：v-html有安全性问题！！！！")]),v._v(" "),_("p",[v._v("​                  (1).在网站上动态渲染任意HTML是非常危险的，容易导致XSS攻击。")]),v._v(" "),_("p",[v._v("​                  (2).一定要在可信的内容上使用v-html，永不要用在用户提交的内容上！")]),v._v(" "),_("h2",{attrs:{id:"v-cloak指令-没有值"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#v-cloak指令-没有值"}},[v._v("#")]),v._v(" v-cloak指令（没有值）：")]),v._v(" "),_("p",[v._v("​            1.本质是一个特殊属性，Vue实例创建完毕并接管容器后，会删掉v-cloak属性。")]),v._v(" "),_("p",[v._v("​            2.使用css配合v-cloak可以解决网速慢时页面展示出"+v._s(v.xxx)+"的问题。")]),v._v(" "),_("h2",{attrs:{id:"v-once指令"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#v-once指令"}},[v._v("#")]),v._v(" v-once指令：")]),v._v(" "),_("p",[v._v("​            1.v-once所在节点在初次动态渲染后，就视为静态内容了。")]),v._v(" "),_("p",[v._v("​            2.以后数据的改变不会引起v-once所在结构的更新，可以用于优化性能。")]),v._v(" "),_("h2",{attrs:{id:"v-pre指令"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#v-pre指令"}},[v._v("#")]),v._v(" v-pre指令：")]),v._v(" "),_("p",[v._v("​          1.跳过其所在节点的编译过程。")]),v._v(" "),_("p",[v._v("​          2.可利用它跳过：没有使用指令语法、没有使用插值语法的节点，会加快编译。")]),v._v(" "),_("h2",{attrs:{id:"自定义指令总结"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#自定义指令总结"}},[v._v("#")]),v._v(" 自定义指令总结：")]),v._v(" "),_("p",[v._v("​            一、定义语法：")]),v._v(" "),_("p",[v._v("​                  (1).局部指令：")]),v._v(" "),_("p",[v._v("​                        new Vue({                              new Vue({")]),v._v(" "),_("p",[v._v("​                          directives:{指令名:配置对象}  或      directives{指令名:回调函数}")]),v._v(" "),_("p",[v._v("​                        })                                    })")]),v._v(" "),_("p",[v._v("​                  (2).全局指令：")]),v._v(" "),_("p",[v._v("​                          Vue.directive(指令名,配置对象) 或  Vue.directive(指令名,回调函数)")]),v._v(" "),_("p",[v._v("​            二、配置对象中常用的3个回调：")]),v._v(" "),_("p",[v._v("​                  (1).bind：指令与元素成功绑定时调用。")]),v._v(" "),_("p",[v._v("​                  (2).inserted：指令所在元素被插入页面时调用。")]),v._v(" "),_("p",[v._v("​                  (3).update：指令所在模板结构被重新解析时调用。")]),v._v(" "),_("p",[v._v("​            三、备注：")]),v._v(" "),_("p",[v._v("​                  1.指令定义时不加v-，但使用时要加v-；")]),v._v(" "),_("p",[v._v("​                  2.指令名如果是多个单词，要使用kebab-case命名方式，不要用camelCase命名。")]),v._v(" "),_("h2",{attrs:{id:"生命周期"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#生命周期"}},[v._v("#")]),v._v(" 生命周期：")]),v._v(" "),_("p",[v._v("​            1.又名：生命周期回调函数、生命周期函数、生命周期钩子。")]),v._v(" "),_("p",[v._v("​            2.是什么：Vue在关键时刻帮我们调用的一些特殊名称的函数。")]),v._v(" "),_("p",[v._v("​            3.生命周期函数的名字不可更改，但函数的具体内容是程序员根据需求编写的。")]),v._v(" "),_("p",[v._v("​            4.生命周期函数中的this指向是vm 或 组件实例对象。")]),v._v(" "),_("h2",{attrs:{id:"常用的生命周期钩子"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#常用的生命周期钩子"}},[v._v("#")]),v._v(" 常用的生命周期钩子：")]),v._v(" "),_("p",[v._v("​            1.mounted: 发送ajax请求、启动定时器、绑定自定义事件、订阅消息等【初始化操作】。")]),v._v(" "),_("p",[v._v("​            2.beforeDestroy: 清除定时器、解绑自定义事件、取消订阅消息等【收尾工作】。")]),v._v(" "),_("h2",{attrs:{id:"关于销毁vue实例"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#关于销毁vue实例"}},[v._v("#")]),v._v(" 关于销毁Vue实例")]),v._v(" "),_("p",[v._v("​            1.销毁后借助Vue开发者工具看不到任何信息。")]),v._v(" "),_("p",[v._v("​            2.销毁后自定义事件会失效，但原生DOM事件依然有效。")]),v._v(" "),_("p",[v._v("​            3.一般不会在beforeDestroy操作数据，因为即便操作数据，也不会再触发更新流程了。")]),v._v(" "),_("h2",{attrs:{id:"vue中使用组件的三大步骤"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#vue中使用组件的三大步骤"}},[v._v("#")]),v._v(" Vue中使用组件的三大步骤：")]),v._v(" "),_("p",[v._v("​          一、定义组件(创建组件)")]),v._v(" "),_("p",[v._v("​          二、注册组件")]),v._v(" "),_("p",[v._v("​          三、使用组件(写组件标签)")]),v._v(" "),_("p",[v._v("​      一、如何定义一个组件？")]),v._v(" "),_("p",[v._v("​            使用Vue.extend(options)创建，其中options和new Vue(options)时传入的那个options几乎一样，但也有点区别；")]),v._v(" "),_("p",[v._v("​            区别如下：")]),v._v(" "),_("p",[v._v("​                1.el不要写，为什么？ ——— 最终所有的组件都要经过一个vm的管理，由vm中的el决定服务哪个容器。")]),v._v(" "),_("p",[v._v("​                2.data必须写成函数，为什么？ ———— 避免组件被复用时，数据存在引用关系。")]),v._v(" "),_("p",[v._v("​            备注：使用template可以配置组件结构。")]),v._v(" "),_("p",[v._v("​      二、如何注册组件？")]),v._v(" "),_("p",[v._v("​              1.局部注册：靠new Vue的时候传入components选项")]),v._v(" "),_("p",[v._v("​              2.全局注册：靠Vue.component('组件名',组件)")]),v._v(" "),_("p",[v._v("​      三、编写组件标签：")]),v._v(" "),_("p",[v._v("​              "),_("school")],1),v._v(" "),_("h2",{attrs:{id:"几个注意点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#几个注意点"}},[v._v("#")]),v._v(" 几个注意点：")]),v._v(" "),_("p",[v._v("​          1.关于组件名:")]),v._v(" "),_("p",[v._v("​                一个单词组成：")]),v._v(" "),_("p",[v._v("​                      第一种写法(首字母小写)：school")]),v._v(" "),_("p",[v._v("​                      第二种写法(首字母大写)：School")]),v._v(" "),_("p",[v._v("​                多个单词组成：")]),v._v(" "),_("p",[v._v("​                      第一种写法(kebab-case命名)：my-school")]),v._v(" "),_("p",[v._v("​                      第二种写法(CamelCase命名)：MySchool (需要Vue脚手架支持)")]),v._v(" "),_("p",[v._v("​                备注：")]),v._v(" "),_("p",[v._v("​                    (1).组件名尽可能回避HTML中已有的元素名称，例如：h2、H2都不行。")]),v._v(" "),_("p",[v._v("​                    (2).可以使用name配置项指定组件在开发者工具中呈现的名字。")]),v._v(" "),_("p",[v._v("​          2.关于组件标签:")]),v._v(" "),_("p",[v._v("​                第一种写法："),_("school")],1),v._v(" "),_("p",[v._v("​                第二种写法："),_("school")],1),v._v(" "),_("p",[v._v("​                备注：不用使用脚手架时，"),_("school"),v._v("会导致后续组件不能渲染。")],1),v._v(" "),_("p",[v._v("​          3.一个简写方式：")]),v._v(" "),_("p",[v._v("​                const school = Vue.extend(options) 可简写为：const school = options")]),v._v(" "),_("h2",{attrs:{id:"关于vuecomponent"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#关于vuecomponent"}},[v._v("#")]),v._v(" 关于VueComponent：")]),v._v(" "),_("p",[v._v("​            1.school组件本质是一个名为VueComponent的构造函数，且不是程序员定义的，是Vue.extend生成的。")]),v._v(" "),_("p",[v._v("​            2.我们只需要写"),_("school"),v._v("或"),_("school"),v._v("，Vue解析时会帮我们创建school组件的实例对象，")],1),v._v(" "),_("p",[v._v("​              即Vue帮我们执行的：new VueComponent(options)。")]),v._v(" "),_("p",[v._v("​            3.特别注意：每次调用Vue.extend，返回的都是一个全新的VueComponent！！！！")]),v._v(" "),_("p",[v._v("​            4.关于this指向：")]),v._v(" "),_("p",[v._v("​                (1).组件配置中：")]),v._v(" "),_("p",[v._v("​                      data函数、methods中的函数、watch中的函数、computed中的函数 它们的this均是【VueComponent实例对象】。")]),v._v(" "),_("p",[v._v("​                (2).new Vue(options)配置中：")]),v._v(" "),_("p",[v._v("​                      data函数、methods中的函数、watch中的函数、computed中的函数 它们的this均是【Vue实例对象】。")]),v._v(" "),_("p",[v._v("​            5.VueComponent的实例对象，以后简称vc（也可称之为：组件实例对象）。")]),v._v(" "),_("p",[v._v("​              Vue的实例对象，以后简称vm。")]),v._v(" "),_("p",[v._v("1.一个重要的内置关系：VueComponent.prototype."),_("strong",[v._v("proto")]),v._v(" === Vue.prototype")]),v._v(" "),_("p",[v._v("2.为什么要有这个关系：让组件实例对象（vc）可以访问到 Vue原型上的属性、方法。")])])}),[],!1,null,null,null);_.default=a.exports}}]);