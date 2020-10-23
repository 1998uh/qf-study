import logo from '@/assets/img/logo.png'

const imgBaseUrl = 'http://localhost:9000'

export default {
  logo,
  // 图片上传的接口，api数据接口，完全是两码
  upload: 'http://localhost:8002/api/v1/upload/img',
  // 图片最终访问的baseUrl
  imgBaseUrl
}
