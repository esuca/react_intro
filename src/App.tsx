import * as React from "react";
import "./styles.css";
import {useEffect, useState} from "react";
import {Pagination} from "./advanced/ProductsPage/components/Pagination";
import {Product} from "./advanced/api/interfaces";
import {getProducts} from "./advanced/api/products";
import {AdvancedApp} from "./advanced/AdvancedApp";

// Tenemos un componente ProductsList que tiene unos productos que renderizamos en el navegador.
// Cuando el componente se carga no hay productos

// Con un componente que lo que va a pintar en pantalla son los productos que recibe del servidor.
function ProductsList() {
    const [filterBy, setFilterBy] = useState("")
    const [page, setPage] = useState(0)
    const [products, setProducts] = useState<Product[]>([])

    function handlePageChange(page: number) {
        setPage(page)
    }

    // ¡Por defecto, useEffect se ejecuta después de cada render!
    useEffect(function () {
     console.log("A")
    })

    // Ejecuta useEffect solo una vez, después del primer render y nunca más.
    useEffect(function() {
        console.log("A2")
    }, [])

    useEffect(function() {
    // Ejecuta useEffect solamente cuando page haya cambiado
    }, [page])

    useEffect(function () {
        console.log("useEffect")
        setProducts([{id: 1, description: "hola", imageUrl: "", price: 100}])
    }, [page])

    console.log("renders!")

    return (
        <div>
            <input type="text" value={filterBy} onChange={(event) => setFilterBy(event.target.value)}/>
            <ul className="products-list">
                {
                    products.map(product => (
                        <li key={product.id}>
                            {product.description} | price: {product.price}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default function App() {
    const [showProducts, setShowProducts] = useState(true)

    function toggleShowProducts() {
        setShowProducts(!showProducts)
    }

    return <AdvancedApp />
}