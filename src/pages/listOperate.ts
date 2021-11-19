import axios from "axios";

axios.defaults.baseURL="http://119.91.154.129:8080/code/"

export const getList = async () => {      // 获取题目相应信息
  return axios.post('GetTestList').then(res => res.data.Records.Data)
}

export const getResult = async () => {    //  获取测试结果
  return axios.post('').then(res => res)
}

// export const getTotalCount = async () => {
//   return await axios.post('getTotalCount')
// }