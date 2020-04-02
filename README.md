# VueElementUiAdmin

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn dev
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).



### 笔记

#### Vuex

```
1. 在 main.js 中 引入，并且放在 new Vue 中
   import store from "./store";
2. 在 /store/index.js 中可以看到定义并使用了 Vuex， 还借助了 good-storage 存储了需要被全局监控的变量，比如: hideSidebar, 用来控制是否显示侧边栏的（在 layout/App.vue 中）
3. 对于 hideSidebar 变量的赋值是通过 Storage.set("HideSidebar", hideSidebar) 做到的，也就是页面按钮触发 调用 vuex.mutations 里定义的 mutations - HIDE_SIDEBAR_TOGGLE（） 方法

```

##### 菜单

整个菜单的数据 import 引入，并作为组件 data 的一部分， menu 数据格式如下:

```json
{
    "home":{
        "name":"首页",
        "path":"/"
    },
    "articleManage":{
        "name":"文章管理",
        "children":{
            "courseCardList":{
                "name":"文章列表",
                "path":"/article_manage/list"
            },
            "organCardList":{
                "name":"文章分类",
                "path":"/articleManage/category"
            }
        }
    }
}
```

接着在 Siderbar.vue 里 这么去渲染的

```vue
        <template v-for="(menu_v, menu_k) in menu">
          <el-submenu v-if="menu_v.children" :index="menu_k" :key="menu_k">
            <template slot="title">
              <i :class="menu_v.icon"></i>
              <span slot="title">{{ menu_v.name }}</span>
            </template>
            <el-menu-item
              v-for="(menuChildren_v, menuChildren_k) in menu_v.children"
              :key="menuChildren_k"
              :index="menuChildren_v.path"
            >
              <i class="is-children fa fa-circle-o"></i>
              <span slot="title">{{ menuChildren_v.name }}</span>
            </el-menu-item>
          </el-submenu>
          <el-menu-item v-else :index="menu_v.path" :key="menu_k">
            <i :class="menu_v.icon"></i>
            <span slot="title">{{ menu_v.name }}</span>
          </el-menu-item>
        </template>
```

解析

```
1. v-for="(menu_v, menu_k) in menu" 
  当对象(这里是menu)是一个对象时（其实就是Map）, (v,k) 对应 Map 里的 value,key
```

###### 菜单收缩

```
//layout/Sidebar.vue
<el-menu
        router
        :collapse="system.miniSidebar === 1"
      >
1. collapse 定义菜单是否收缩
   system.miniSidebar 正是 项目 vuex 里定义的
2. rounter:
   是否使用 vue-router 的模式，启用该模式会在激活导航时以 index 作为 path 进行路由跳转
```

###### icon

图标的大小在 style.css 里控制

##### 修改

```
1. 将 layout/App.vue 中的 css hide 变成 hide_ui， 因为hide 受到谷歌浏览器插件注入的css元素的影响
, injected stylesheet
```

