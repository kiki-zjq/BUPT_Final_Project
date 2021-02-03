import axios from 'axios'

const proxy='https://www.fastmock.site/mock/c44d08ff131933059ee720ac232910e4/test'




// 增加新的问题
export function addQuestion(data){
    const url = 'http://localhost:3000/questions'
    return axios.post(url,data)
}

// 修改已经存在的问题
export function modifyQuestion(data,qid){
    const url = 'http://localhost:3000/questions/'+qid
    return axios.post(url,data)
}


// 读取MongoDB(Final.question)中的问题数据
export function fetchQuestion(){
    //const url ='https://www.fastmock.site/mock/f94cbaef21e3b2d49f3980edb7626137/final/getQuestion'
    const url = 'http://localhost:3000/questions'
    return axios.get(url)
}

// 删除问题
export function deleteQuestion(qid){

    const url = 'http://localhost:3000/questions/'+qid
    return axios.delete(url)
}



// 修改题目的评论
export function modifyComment(data,qid){
    const url = 'http://localhost:3000/questions/comment/'+qid
    return axios.post(url,data)
}
