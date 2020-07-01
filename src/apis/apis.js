import request  from '@/axios/axios'

// const url = 'http://106.13.228.236:8180/'
const url = 'https://louhao2.fc0701.com'

// 首页(小区)列表 
const villageList = (params) => request(url+'/api/Community/index',params)

// 小区详情
const villageDetails = (params) => request(url+'/api/Community/detail',params)

// 标记为已售
const signSale = (params) => request(url+'/api/House/sold',params)

module.exports ={
  url,
  villageList,
  villageDetails,
  signSale
}
