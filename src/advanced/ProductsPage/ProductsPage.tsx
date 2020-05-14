import React, {useEffect, useState} from "react";
import {ProductsList} from "./components/ProductsList";
import {getProducts} from "../api/products";
import {Product} from "../api/interfaces";


export function ProductsPage() {
    const [loadingProducts, productsList] = useProducts()

    return (
        <div>
            {loadingProducts && <p>Loading Products...</p>}
            <ProductsList products={productsList} />
        </div>
    )
}

function useProducts(): [boolean, Product[]] {
    const [loadingProducts, setLoadingProducts] = useState(true)
    const [productsList, setProductsList] = useState<Product[]>([])

    useEffect(() => {
        getProducts()
            .then(products => {
                setLoadingProducts(false)
                setProductsList(products)
            })
    }, [])


    return [loadingProducts, productsList]
}

