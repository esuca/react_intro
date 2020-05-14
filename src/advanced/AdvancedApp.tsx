import React from 'react';
import {Layout} from "./Layout";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {LoginPage} from "./LoginPage";
import {ProductsPage} from "./ProductsPage/ProductsPage";


export function AdvancedApp() {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="/products" element={<ProductsPage/>}/>
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}