import Navbar from "../components/Navbar";
import React, { useState, useEffect } from 'react';
import Footer from "../components/Footer";
import { Sparklines, SparklinesLine } from 'react-sparklines';

function Coins() {

  const [coinsData, setCoinsData] = useState([]);

  useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false')
      .then(response => response.json())
      .then(data => setCoinsData(data))
      .catch(error => console.log(error));
  }, []);

  console.log(coinsData)

  return (
    <div>
        <Navbar />
                <div>
              <table>
                <thead>
                  <tr>
                    <th>Number</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>1%</th>
                    <th>24%</th>
                    <th>7%</th>
                    <th>Market Cap</th>
                    <th>Volume 24h</th>
                    <th>Circulating Supply</th>
                    <th>Chart (last 7 days)</th>
                  </tr>
                </thead>
                <tbody>
                  {coinsData.map((coin, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{coin.name}</td>
                      <td>${coin.current_price}</td>
                      <td>{coin.price_change_percentage_1h_in_currency}%</td>
                      <td>{coin.price_change_percentage_24h_in_currency}%</td>
                      <td>{coin.price_change_percentage_7d_in_currency}%</td>
                      <td>${coin.market_cap.toLocaleString()}</td>
                      <td>${coin.total_volume.toLocaleString()}</td>
                      <td>{coin.circulating_supply.toLocaleString()}</td>
                      <td>
                      <Sparklines data={coin.sparkline_in_7d.price}>
                        <SparklinesLine color="#1c8cdc" />
                      </Sparklines>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
        <Footer />
    </div>
  )
}

export default Coins