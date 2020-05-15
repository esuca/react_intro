import {useCounter} from "../../../exercises-solution/04";
import React, {useEffect} from "react";

interface Props {
    initialPage: number
    onPageChange: (page: number) => void
}

export function Pagination(props: Props) {
    const {countValue, handleIncrement, handleDecrement} = useCounter(props.initialPage)

    useEffect(() => {
        props.onPageChange(countValue)
    }, [countValue])

    return (
        <div>
            <button onClick={handleDecrement} disabled={countValue === 0}> {"<"} </button>
            <span>{countValue}</span>
            <button onClick={handleIncrement}> {">"} </button>
        </div>
    )
}