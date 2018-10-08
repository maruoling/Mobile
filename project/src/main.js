// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

//这里是主入口，第一个运行的，也是以后的全局配置文件
import Vue from 'vue'
import App from './App'
//这里导入了路由，所以按照路由给的路径来运行
import router from './router'

//安装axios  cnpm install axios
import Axios from 'axios'
//设置公共基础url
Axios.defaults.baseURL="http://www.sinya.online/api";
//扩展原型链
Vue.prototype.$axios=Axios

//安装界面框架（不能用普通的界面框架了，要基于vue的移动端框架）
//cnpm install vant
import Vant from 'vant';
import 'vant/lib/vant-css/index.css';

Vue.use(Vant);

//配置日期格式化对象  cnpm install moment
import Moment from 'moment';
//自定义过滤器
//{{xx|mmtime("YYYY年MM月DD日")}}
Vue.filter('mmtime',function (data,formatstr) {
  return Moment(data).format(formatstr);
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
