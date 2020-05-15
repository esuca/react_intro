import React, {ReactNode} from "react";
import {Navbar} from "./Navbar";

interface Props {
    children: ReactNode
}

export function Layout(props: Props) {
    return (
        <React.Fragment>
            <Navbar />
            <main className='main-content'>
                {props.children}
            </main>
            <footer className='footer'>
                I'm a footer
            </footer>
        </React.Fragment>
    )
}