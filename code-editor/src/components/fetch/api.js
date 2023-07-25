import axios from "axios";

export const api = async(type,url,params,data)=>{
    
const options={
    method: type,
    url:url,
    params:params,
    headers:{
        'X-RapidAPI-Key': '70143dc9c7msh6ff1068fea1b043p146d23jsn3df8381f9773',
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

