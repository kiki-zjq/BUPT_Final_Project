import axios from 'axios'

const proxy='http://localhost:3000/accounts'


// 查询这个账号有哪些paper
export function getAccountPaper(account){
    const url = proxy+'/'+account
    return axios.get(url)
}


// 注册账号的时候使用
export function createAccount(data){
    const url = proxy + '/'
    return axios.post(url,data)
}

