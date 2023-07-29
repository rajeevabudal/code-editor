import axios from "axios";

export const api = async(type,url,params,data)=>{
    
const options={
    method: type,
    url:url,
    params:params,
    headers:{
        'X-RapidAPI-Key': '',
        'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com'
      },
    data: data,
}
try {
	const response = await axios.request(options);
    return response.data;
} catch (error) {
	console.error(error);
    return error;
}
}

