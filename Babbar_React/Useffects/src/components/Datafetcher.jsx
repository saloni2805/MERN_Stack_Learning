import { useState, useEffect } from "react"

const Datafetcher = () => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        async () => {
            setLoading(true)
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts')
                console.log("response", response)
                const data = await response.json()
                console.log("data", data)
                setData(data)
            } catch (error) {
                console.error(error)
            }
            setLoading(false)
        }
    }, [])

    return (
        <div>
            {
                loading ? <p>Loading...</p> : (
                    <div>
                        {
                            data.map((item) => (
                                <div key={item.id}>
                                    <h2>{item.title}</h2>
                                    <p>{item.body}</p>
                                </div>
                            ))


                        }
                    </div>
                )
            }
        </div>

    )
}
export default Datafetcher