import React, {useState, useEffect} from 'react'
import axios from 'axios'
import CountUp from 'react-countup'



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
        
        <div className="stats">
                <img src="https://apeswap.finance/images/ape-banana-frenzy-summer.svg" className="App-logo" alt="logo" />
                <div>
                          
                    <p>Banana Price</p>

                    <CountUp 
                        className="newCs"
                        start={0}
                        end={posts.bananaPrice > 0 ? posts.bananaPrice : 12}
                        duration={2.75}
                        separator=" "
                        decimals={3}
                        decimal=","
                        prefix="$"
  
                    />

                    <p>Gnana  Value</p>

                    <CountUp
                        start={0}
                        end={posts.bananaPrice > 0 ? posts.bananaPrice * 1.389 : 12}
                        duration={2.75}
                        separator=" "
                        decimals={3}
                        decimal=","
                        prefix="$"
  
                    />

                    <p>Market Cap</p>

                    <CountUp
                        start={0}
                        end={posts.marketCap > 0 ? posts.marketCap : 250000000}
                        duration={2.75}
                        separator=" "
                        decimals={3}
                        decimal=","
                        prefix="$"
  
                    />
                    <p>_________________________________</p>
                    <p style={{color: "#38a611", fontSize: 12}}>Last Update : {posts.marketCap > 0 ? posts.createdAt.split("T")[0] + " " + posts.createdAt.substr(11, 18).split(".")[0] + " UTC": '0000-00-00 00:00:00'}</p>
                    
                    

                </div>

                

        </div>
        
    )
}


export default DataFetching
