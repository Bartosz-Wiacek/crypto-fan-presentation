import Navbar from "../components/Navbar";
import React, { useState, useEffect } from 'react';
import Footer from "../components/Footer";
import { Sparklines, SparklinesLine } from 'react-sparklines';
import { FiArrowUpRight, FiArrowDown } from 'react-icons/fi'
import './Coins.css'
import CoinRow from "../components/coins/CoinRow";

function Coins() {

  const [coinsData, setCoinsData] = useState([]);

  useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=35&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d')
      .then(response => response.json())
      .then(data => setCoinsData(data))
      .catch(error => console.log(error));
  }, []);

  console.log(coinsData)

  return (
    <div>
        <Navbar />
                <div>
              <table  className="coin-table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>1h %</th>
                    <th>24h %</th>
                    <th>7d %</th>
                    <th>Market Cap</th>
                    <th>Volume 24h</th>
                    <th>Circulating Supply</th>
                    <th>Last 7 days</th>
                  </tr>
                </thead>
                <tbody>
                  {coinsData.map((coin, index) => (
                   <CoinRow coin={coin} index={index}/>
                  ))}
                </tbody>
              </table>
            </div>
        <Footer />
    </div>
  )
}

export default Coins