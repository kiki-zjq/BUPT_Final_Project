import axios from 'axios'

const proxy='http://localhost:3000/download'

export function downloadPaper(data,format,type){
    const url = proxy + '/' + format + '/' + type;
    return axios.post(url,data)
}