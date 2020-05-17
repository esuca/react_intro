import React, {useEffect, useState} from "react";
import {ProductsList} from "./components/ProductsList";
import {getProducts} from "../api/products";
import {Product} from "../api/interfaces";
import {Pagination} from "./components/Pagination";
import {useCounter} from "../../exercises-solution/04";

function filterProducts(products: Product[], filterText: string) {
    return products.filter(product => product.description.includes(filterText))
}

export function ProductsPage() {
    const [filterText, setFilterText] = useState("")
    const {countValue: page, handleIncrement, handleDecrement} = useCounter(0)
    const {loading, products} = useProducts(page)

    function handleFilterChange(event: React.ChangeEvent<HTMLInputElement>) {
        setFilterText(event.target.value)
    }

    const filteredProducts = filterProducts(products, filterText)

    return (
        <div>
            <label>
                Filter products by:
                <input type="text" value={filterText} onChange={handleFilterChange}/>
            </label>
            {loading ? <p>Loading Products...</p> : <ProductsList products={products}/>}
            <Pagination page={page} onDecrementPage={handleDecrement} onIncrementPage={handleIncrement} />
        </div>
    )
}

function useProducts(page: number): { loading: boolean, products: Product[], error: Error | null } {
    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState<Product[]>([])
    const [error, setError] = useState<Error | null>(null)

    useEffect(() => {
        setLoading(true)
        setError(null)
        getProducts(page)
            .then(products => {
                setLoading(false)
                setError(null)
                setProducts(products)
            })
            .catch(error => {
                setError(error)
                setLoading(false)
                setProducts([])
            })
    }, [page])


    return {loading, products, error}
}