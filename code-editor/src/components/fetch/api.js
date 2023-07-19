import axios from "axios";

export const api = async(type,url)=>{
    
const options={
    method: type,
    url:url,
    // params:params,
    headers:{
        'X-RapidAPI-Key': process.env.X_RapidAPI_Key,
        'X-RapidAPI-Host': ""
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

