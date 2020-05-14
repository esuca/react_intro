import React from "react";
import {Product} from "../../api/interfaces";

interface Props {
    products: Product[]
}

export function ProductsList(props: Props) {
    return (
        <ul>
            {
                props.products.map(product => <li>{product.title}</li>)
            }
        </ul>
    );
}