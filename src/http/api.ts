import { api } from "./client"

export const getAllproducts = async () =>{
    const response = await api.get("/products")

    return response.data;
}