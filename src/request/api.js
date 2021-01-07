import axios from 'axios'

const proxy='https://www.fastmock.site/mock/c44d08ff131933059ee720ac232910e4/test'

export function fetchWordCloud() {
    const url =proxy+'/paper/findMsgByWordCloud'
    return axios.get(url)
}

export function fetchBarChart() {
    const url =proxy+'/paper/findFigure1ByWC'
    return axios.get(url)
}

export function fetchCloudChart() {
    const url =proxy+'/paper/findFigure2ByWC'
    return axios.get(url)
}

export function fetchPieChart() {
    const url =proxy+'/paper/findFigure3ByWC'
    return axios.get(url)
}

export function fetchQuestion(){
    const url ='https://www.fastmock.site/mock/f94cbaef21e3b2d49f3980edb7626137/final/getQuestion'
    return axios.get(url)
}