import axios from 'axios'

const proxy='http://localhost:3000/accounts'


// 查询这个账号有哪些paper
export function getAccountPaper(account){
    const url = proxy+'/'+account
    return axios.get(url)
}

