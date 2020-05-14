import React, {useEffect, useState} from 'react';
import {Layout} from "./Layout";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {LoginPage} from "./LoginPage";


const getProducts = () => fetch("")

// Redirigir a login si el usuario no está
export function ProductsPage() {
    const [loadingProducts, setLoadingProducts] = useState(false)
    const [productsList, setProductsList] = useState([])


    useEffect(() => {



    }, [])

    return <div>Products</div>
}

export function AdvancedApp() {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/login" element={<LoginPage />}/>
                    <Route path="/products" element={<ProductsPage />}/>
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}