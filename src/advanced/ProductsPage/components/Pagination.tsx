import React from "react";

interface Props {
    page: number,
    onIncrementPage: () => void,
    onDecrementPage: () => void
}

export function Pagination(props: Props) {
    return (
        <div>
            <button onClick={props.onDecrementPage} disabled={props.page === 0}> {"<"} </button>
            <span>{props.page}</span>
            <button onClick={props.onIncrementPage}> {">"} </button>
        </div>
    )
}