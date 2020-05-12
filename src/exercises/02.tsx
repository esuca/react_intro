import React, {PropsWithChildren} from "react";

interface Props {
    onClick?: any
    isLoading?: any
}

export function Button(props: PropsWithChildren<Props>) {
    return <button onClick={props.onClick}>{props.children}</button>;
}
