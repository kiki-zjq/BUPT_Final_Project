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

export function checkAccount(account,pwd){
    const url = proxy + '/checkAccount/'+account+'/'+pwd;
    return axios.get(url)
}

// 邀请新成员的时候使用
export function inviteTeam(account,paperid){
    const url = proxy + '/inviteTeam/'+account+'/'+paperid;
    return axios.get(url)
}