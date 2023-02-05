import { useState, useEffect } from 'react'

const useFetch = (url, options) => {

    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        try {

            const fetchData = async() => {

                const res = await fetch(url, options)
                const parsedData = await res.json()

                setData(parsedData)
                setLoading(false)

            }

            fetchData()
        } catch (e) {

            setError(e);
            setLoading(false)

        }

        // eslint-disable-line react-hooks/exhaustive-deps
    }, [])

    return { data, error, loading }

}

export default useFetch