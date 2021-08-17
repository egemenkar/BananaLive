import React, {useState, useEffect} from 'react'
import axios from 'axios'
import CountUp from 'react-countup'



function DataFetching() {
    const [posts, setPosts] = useState([])
    const [apeStats, setApeStats] = useState([])
    
    

    
    useEffect(() => {
        axios.get('https://jsonblob.com/api/jsonBlob/eed7cc15-fd9b-11eb-b644-91a58acc6da2')
            .then(res => {
                console.log(res)
                setPosts(res.data)
            })
            .catch(err => {
                console.log(err)
            })

        axios.get('https://ape-swap-api.herokuapp.com/stats')
            .then(res => {
                console.log(res)
                setApeStats(res.data)
            })
            .catch(err => {
                console.log(err)
            })    
            
    }, [])
    
   const arr = [] 
   posts.map(element => {
        arr.push(element.replace(/[^0-9-.ZT:]+/g,""))
   })


   const bananaPrice = arr[4] >= apeStats.createdAt ? Number(arr[0]) : apeStats.bananaPrice
   const priceDate = arr[4] >= apeStats.createdAt ? arr[4] : apeStats.createdAt
   

    return (
        
        <div className="stats">
                <img src="https://apeswap.finance/images/ape-banana-frenzy-summer.svg" className="App-logo" alt="logo" />
                <div>
                          
                    <p>Banana Price</p>

                    <CountUp 
                        className="newCs"
                        start={0}
                        end={bananaPrice > 0 ? bananaPrice : 0}
                        duration={1.25}
                        separator=" "
                        decimals={2}
                        decimal=","
                        prefix="$"
  
                    />

                    <p>Gnana  Value</p>

                    <CountUp
                        start={0}
                        end={bananaPrice > 0 ? bananaPrice * 1.389 : 0}
                        duration={1.25}
                        separator=" "
                        decimals={2}
                        decimal=","
                        prefix="$"
  
                    />

                    <p>Market Cap</p>

                    <CountUp
                        start={0}
                        end={apeStats.marketCap > 0 ? apeStats.marketCap : 0}
                        duration={1.25}
                        separator=" "
                        decimals={2}
                        decimal=","
                        prefix="$"
  
                    />
                    <p>_________________________________</p>
                    <p style={{color: "#38a611", fontSize: 12}}>Last Update : {bananaPrice> 0 ? priceDate.split("T")[0] + " " + priceDate.substr(11, 18).split(".")[0] + " UTC": '0000-00-00 00:00:00'}</p>
                    
                    

                </div>

                

        </div>
        
    )
}


export default DataFetching
