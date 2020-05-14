import React, {useState} from "react";

// Login y navigate al profile
export function LoginPage() {
    const {values, handleChange, handleSubmit} = useForm({
        initialValues: {
            username: "",
            password: ""
        },
        onSubmit: (values) => {
            console.log(values)
        }})

    return (
        <form onSubmit={handleSubmit}>
            <h2>Welcome!</h2>
            <label>
                Username:
                <input type="text" name="username"/>
            </label>
            <label>
                Password:
                <input type="password" name="password"/>
            </label>
            <button type="submit">Login</button>
        </form>
    )
}

interface values {
    initialValues: Record<string, any>,
    onSubmit: (values: any) => void,
}

function useForm(p: values) {
    const [values, setValues] = useState<Record<string, any>>(p.initialValues ?? {})

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setValues(prev => {
            return {
                ...prev,
                [event.target.name]: event.target.value
            }
        })
    }

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        p.onSubmit(values)
    }

    return {values, handleChange, handleSubmit}
}
