import axios from 'axios'

const proxy='http://localhost:3000/papers'


// 查询试卷的Meta信息
export function getPaperMeta(paperid){
    const url = proxy+'/'+paperid
    return axios.get(url)
}


// 修改试卷的Meta信息
export function modifyPaperMeta(paperid,data){
    const url = proxy+'/'+paperid
    return axios.post(url,data)
}


// 删除试卷
// 这里有一个问题，当我们要删除试卷的时候我们还需要
// 剔除account.paper中对应的paperid
// 剔除question中paperid为对应的所有题目
export function deletePaper(paperid){

    const paperUrl =  proxy+'/'+paperid;
    const questionUrl = 'http://localhost:3000/questions/paperRemove/'+paperid;
    const accountUrl = 'http://localhost:3000/accounts/paperRemove/'+paperid;
    axios.delete(questionUrl);
    axios.delete(accountUrl)
    return axios.delete(paperUrl);
}
