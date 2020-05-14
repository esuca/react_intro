import {Product} from "./interfaces";

export async function getProducts(): Promise<Product[]> {
    const products = await fetch('https://my-json-server.typicode.com/esuca/react_intro/products?_start=0&_end=2')
    return products.json()
}