import React from 'react'


interface RestApi {
    post: (body: object) => Promise<any>
}

function rest(url: string): RestApi {

    async function post(body: object): Promise<any> {
        const data = await fetch(url, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(body)
        })

        return await data.json()
    }

    return {
        post
    }
}

export { rest, }

export interface Request {
    data: any,
    loading: boolean,
    error: string,
}


const initialValue: Request = { data: null, loading: true, error: '' }

interface BaseProps {
    url: string,
    children: any
}

interface WithBodyProps {
    url: string,
    body: any,
    children: any
}

const Get: React.FC<BaseProps> = ({ url, children }) => {

    const isMounted = React.useRef(false)
    const [result, setResult,] = React.useState(initialValue)

    React.useEffect(() => {
        if (!isMounted.current) {
            isMounted.current = true
        } else {

            const getData = async () => {
                const data = await fetch(url)
                return await data.json()
            }

            getData()
                .then(data => setResult({ data, loading: false, error: null }))
                .catch(error => setResult({ data: null, loading: false, error, }))

        }
    }, [url])

    return (
        <>
            {children(result)}
        </>
    )

}

const Post: React.FC<WithBodyProps> = ({ url, body, children }) => {

    const [result, setResult,] = React.useState(initialValue)

    React.useEffect(() => {
        const getData = async () => {
            const data = await fetch(url, {
                method: 'POST',
                body: JSON.stringify(body),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            return await data.json()
        }

        getData()
            .then(data => setResult({ data, loading: false, error: null }))
            .catch(error => setResult({ data: null, loading: false, error, }))

    }, [url])

    return (
        <>
            {children(result)}
        </>
    )
}

const Put: React.FC<WithBodyProps> = ({ url, body, children }) => {

    const [result, setResult,] = React.useState(initialValue)

    React.useEffect(() => {
        const getData = async () => {
            const data = await fetch(url, {
                method: 'PUT',
                body: !!body && JSON.stringify(body),
                headers: {
                    'Content-Type': body && 'application/json'
                }
            })
            return await data.json()
        }

        getData()
            .then(data => setResult({ data, loading: false, error: null }))
            .catch(error => setResult({ data: null, loading: false, error, }))

    }, [url])

    return (
        <>
            {children(result)}
        </>
    )
}

const Delete: React.FC<BaseProps> = ({ url, children }) => {

    const [result, setResult,] = React.useState(initialValue)

    React.useEffect(() => {
        const getData = async () => {
            const data = await fetch(url, { method: 'DELETE', })
            return await data.json()
        }

        getData()
            .then(data => setResult({ data, loading: false, error: null }))
            .catch(error => setResult({ data: null, loading: false, error, }))

    }, [url])

    return (
        <>
            {children(result)}
        </>
    )
}

const Fetch = Object.freeze({
    Get,
    Post,
    Put,
    Delete,

})

export default Fetch
export { Get, Post, Delete, Put, }





