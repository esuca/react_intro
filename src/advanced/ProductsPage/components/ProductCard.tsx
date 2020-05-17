import React, {ReactNode} from 'react';
import {Product} from "../../api/interfaces";

interface Props {
    product: Product
}

export function ProductCard(props: Props) {
    return (
        <div className="products-list__card">
            <img src={props.product.imageUrl} width={150} height="auto" />
            <p>{props.product.description}</p>
            <div className="products-list__card-footer">
                <span>{props.product.price}€</span>
                <button>
                    Add to cart
                </button>
            </div>
        </div>
    )
}