import {Product} from "./interfaces";

export async function getProducts(page: number): Promise<Product[]> {
    const products = await fetch('https://my-json-server.typicode.com/esuca/react_intro/products?_start=' + page + '&_end=' + (page + 2))
    return products.json()
}