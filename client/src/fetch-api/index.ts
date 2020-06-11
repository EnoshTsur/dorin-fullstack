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
