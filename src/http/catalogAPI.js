import {$host} from "./index";


export const getProducts = async (settings) => {
    const axiosAPI = $host;
    return await axiosAPI.get('/products')
}