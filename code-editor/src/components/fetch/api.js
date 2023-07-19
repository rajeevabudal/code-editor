import axios from "axios";

export const api = async(type,url)=>{
    
const options={
    method: type,
    url:url,
    // params:params,
    headers:{
        'X-RapidAPI-Key': '70143dc9c7msh6ff1068fea1b043p146d23jsn3df8381f9773',
        'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com'
      }
}
console.log(options)
try {
	const response = await axios.request(options);
	console.log(response.data);
    return response.data;
} catch (error) {
	console.error(error);
    return error;
}
}

