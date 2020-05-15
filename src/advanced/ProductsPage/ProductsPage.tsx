import React, {useEffect, useState} from "react";
import {ProductsList} from "./components/ProductsList";
import {getProducts} from "../api/products";
import {Product} from "../api/interfaces";
import {Pagination} from "./components/Pagination";

export function ProductsPage() {
    const [page, setPage] = useState(0)
    const [loadingProducts, productsList] = useProducts(page)

    function handlePageChange(page: number) {
        setPage(page)
    }

    return (
        <div>
            {loadingProducts ? <p>Loading Products...</p> : <ProductsList products={productsList}/>}
            <Pagination initialPage={0} onPageChange={handlePageChange} />
        </div>
    )
}

function useProducts(page: number): [ boolean, Product[] ] {
    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState<Product[]>([])

    useEffect(() => {
        setLoading(true)

        getProducts(page)
            .then(products => {
                setLoading(false)
                setProducts(products)
            })


    }, [page])


    return [loading, products]
}