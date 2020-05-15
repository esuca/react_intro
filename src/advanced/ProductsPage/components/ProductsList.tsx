import React from "react";
import {Product} from "../../api/interfaces";
import {ProductCard} from "./ProductCard";

interface Props {
    products: Product[]
}

export function ProductsList(props: Props) {
    const hasProducts = props.products.length !== 0

    return hasProducts ? (
        <ul className="products-list">
            {
                props.products.map(product => (
                    <li key={product.id}>
                        <ProductCard product={product} />
                    </li>
                ))
            }
        </ul>
    ) : <p>No hay más productos</p>
}