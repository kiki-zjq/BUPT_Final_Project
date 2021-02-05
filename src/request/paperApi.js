import axios from 'axios'

const proxy='http://localhost:3000/papers'


// 查询试卷的Meta信息
export function getPaperMeta(paperid){
    const url = proxy+'/'+paperid
    return axios.get(url)
}

