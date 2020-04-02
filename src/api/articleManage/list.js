import request from "@/utils/request.js";

/**
 * 获取文章
 * @param params
 * @returns {AxiosPromise}
 */
function topics(params) {
  return request({
    // closeLoading: true,
    // closeInterceptors: true,
    url: "https://cnodejs.org/api/v1/topics", //如果是绝对路径就不会在使用配置里的url
    method: "get",
    params: params //注意：如果是post请求请使用 data: params
  });
}

// var handler = {
//   apply (target, ctx, args) {
//     return Reflect.apply(...args);
//   }
// };

// const p = new Proxy(topics, handler)


export {topics}; 

/**
 * var f = function(){}
 * export default f
 * 和
 * function f(){}
 * export {f}
 * 这2种方式是不同的
 * 参考: https://juejin.im/post/5abe3ecf6fb9a028e25dab77
 * 1. ES6中模块通过 export 和 export default 暴露出来的属性或者方法并不是普通的赋值或者引用，
 *   它们是对模块内部定义的标志符类似指针的绑定。
 * 2. export是绑定到标识符，改变标志符的值，然后访问这个绑定，得到的是新值
 * 3. export default 绑定的是标志符指向的值，如果修改标志符指向另一个值，
 *    而 import 后得到的修改前标志符指向的值，标志符的改变不会导致这个值的变化
 */