export default {
  name: "文章管理",
  permissionsKey: "",
  icon: "fa fa-envelope-open",
  children: {
    courseCardList: {
      name: "文章列表",
      permissionsKey: "",
      icon: "fa fa-list-ul",
      path: "/article_manage/list"
    },
    organCardList: {
      name: "文章分类",
      permissionsKey: "",
      icon: "fa fa-cubes",
      path: "/articleManage/category"
    }
  }
};
