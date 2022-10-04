import { useState, useEffect } from 'react';
import finnHub from '../apis/finnHub';


const StockList = () => {
    const [watchList, setWatchList] = useState(["GOOGL", "MSFT", "AMZ"])
    const token = process.env.REACT_APP_TOKEN

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await finnHub.get("/quote?symbol=AAPL&token=" + token)
                console.log(response)
            } catch (error) {

            }
        }
        fetchData()
    }, [])

    return(
        <div>stock list</div>
    )
}

export default StockList;



