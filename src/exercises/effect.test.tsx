import React, {useEffect} from 'react'
import {render} from '@testing-library/react'
// import {Foo} from "../exercises-solution/effect";

interface FooProps {
    onMount: () => void,
    onUpdate: () => void,
    onDestroy: () => void,
    query: string
}

function Foo(props: FooProps) {
    // ¡Recuerda puedes tener más de un useEffect dentro del componente.!



    return <p>Foo</p>
}

describe(" React.useEffect hook", () => {
    let props: any = {}

    beforeEach(() => {
        props = {
            onMount: jest.fn(),
            onUpdate: jest.fn(),
            onDestroy: jest.fn(),
            query: "dummy query"
        }
    })

    test("solo cuando se monta el componente debe ejecutar la prop 'onMount'", () => {
        render(<Foo onMount={props.onMount} onUpdate={props.onUpdate} onDestroy={props.onDestroy} query={props.query}/>)

        expect(props.onMount).toHaveBeenCalledTimes(1)
        expect(props.onUpdate).toHaveBeenCalled()
        expect(props.onDestroy).not.toHaveBeenCalled()
    })

    test("solo cuando se monta y cuando query cambie se debe ejecutar la prop 'onUpdate'", () => {
        const component = render(<Foo onMount={props.onMount} onUpdate={props.onUpdate} onDestroy={props.onDestroy} query={props.query}/>)

        const newQuery = "New Dummy Query"
        component.rerender(<Foo onMount={props.onMount} onUpdate={props.onUpdate} onDestroy={props.onDestroy} query={newQuery}/>)

        expect(props.onMount).toHaveBeenCalled()
        expect(props.onUpdate).toHaveBeenCalled()
        expect(props.onDestroy).not.toHaveBeenCalled()
    })

    test("solo cuando se destruye el componente debe ejecutar la prop 'onDestroy'", () => {
        const component = render(<Foo onMount={props.onMount} onUpdate={props.onUpdate} onDestroy={props.onDestroy}
                                      query={props.query}/>)

        component.unmount()

        expect(props.onMount).toHaveBeenCalled()
        expect(props.onDestroy).toHaveBeenCalled()
    })
})