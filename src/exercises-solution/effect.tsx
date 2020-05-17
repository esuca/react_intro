import React, {useEffect} from "react";

interface FooProps {
    onMount: () => void,
    onUpdate: () => void,
    onDestroy: () => void,
    query: string
}

export function Foo(props: FooProps) {
    useEffect(() => {
        props.onMount()

        return function cleanup() {
            props.onDestroy()
        }
    }, [])

    useEffect(() => {
        props.onUpdate()
    }, [props.query])

    return <p>Foo</p>
}