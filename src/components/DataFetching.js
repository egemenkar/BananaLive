import React, {useState, useEffect} from 'react'
import axios from 'axios'


function DataFetching() {
    const [posts, setPosts] = useState([])
    
    
    useEffect(() => {
        axios.get('https://ape-swap-api.herokuapp.com/stats')
            .then(res => {
                console.log(res)
                setPosts(res.data)
            })
            .catch(err => {
                console.log(err)
            })
            
    }, [])
    
      
    return (
        
        <div>
                <div>
                    <br />
                </div>
                <div>
                            
                    <p>Banana Price: ${posts.bananaPrice > 0 ? posts.bananaPrice.toFixed(3) : ' Loading...'}</p> 
                    <p>Gnana  Value: ${posts.bananaPrice > 0 ? (posts.bananaPrice * 1.389).toFixed(3) : ' Loading...'}</p>
                    <p>Market Cap  : ${posts.marketCap > 0 ? posts.marketCap.toLocaleString() : ' Loading...'}</p>
                    <p className="update">Last Update : {posts.marketCap > 0 ? posts.createdAt.split("T")[0] + " " + posts.createdAt.substr(11, 18).split(".")[0] + " UTC": ' Loading...'}</p>
                  
                </div>
        </div>
        
    )
}


export default DataFetching
