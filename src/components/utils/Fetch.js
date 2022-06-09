import axios from 'axios';
// 创建axios实例
const service =  axios.create({
  baseURL: 'https://api.cptsol.cn/api/', // api的base_url
  timeout: 50000                 // 请求超时时间
});

// request拦截器
service.interceptors.request.use((config) => {
  // 需要在请求发出前做的全局处理逻辑可以添加在这里
  return config;
}, (error) => {
  // 可以在这里统一处理请求错误
  Promise.reject(error);
});

// respone拦截器
service.interceptors.response.use((response) => {
  return response.data;
}, (error) => {
  // 可以在这里统一处理响应错误
  return Promise.reject(error);
});
export default service;
