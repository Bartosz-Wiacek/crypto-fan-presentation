import Navbar from "../components/Navbar";
import React, { useState, useEffect } from 'react';
import Footer from "../components/Footer";
import { Sparklines, SparklinesLine } from 'react-sparklines';
import { FiArrowUpRight, FiArrowDown } from 'react-icons/fi'
import './Coins.css'

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
                <div className="coin-table">
              <table>
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
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td><img src={coin.image} alt='' />{coin.name}</td>
                      <td>${coin.current_price.toLocaleString('en-US', { minimumFractionDigits: 2 })}</td>
                      <td>
                        {coin.price_change_percentage_1h_in_currency < 0 ? (
                        <span className='red'>
                          <FiArrowDown className='icon' />
                          {(coin.price_change_percentage_1h_in_currency*(-1)).toLocaleString({ minimumFractionDigits: 2 })}%
                        </span>
                        ) : (
                        <span className='green'>
                          <FiArrowUpRight className='icon' />
                          {coin.price_change_percentage_1h_in_currency.toLocaleString({ minimumFractionDigits: 2 })}%
                        </span>
                        )}
                      </td>
                      <td>
                      {coin.price_change_percentage_24h_in_currency < 0 ? (
                        <span className='red'>
                          <FiArrowDown className='icon' />
                          {(coin.price_change_percentage_24h_in_currency*(-1)).toLocaleString({ minimumFractionDigits: 2 })}%
                        </span>
                        ) : (
                        <span className='green'>
                          <FiArrowUpRight className='icon' />
                          {coin.price_change_percentage_24h_in_currency.toLocaleString({ minimumFractionDigits: 2 })}%
                        </span>
                        )}
                      </td>
                      <td>
                        {coin.price_change_percentage_7d_in_currency < 0 ? (
                        <span className='red'>
                          <FiArrowDown className='icon' />
                          {(coin.price_change_percentage_7d_in_currency*(-1)).toLocaleString({ minimumFractionDigits: 2 })}%
                        </span>
                        ) : (
                        <span className='green'>
                          <FiArrowUpRight className='icon' />
                          {coin.price_change_percentage_7d_in_currency.toLocaleString({ minimumFractionDigits: 2 })}%
                        </span>
                        )}
                      </td>
                      <td>${coin.market_cap.toLocaleString('en-US')}</td>
                      <td>${coin.total_volume.toLocaleString('en-US')}</td>
                      <td>{coin.circulating_supply.toLocaleString('en-US')}</td>
                      <td>
                      {coin.price_change_percentage_7d_in_currency < 0 ? (
                        <Sparklines data={coin.sparkline_in_7d.price}>
                        <SparklinesLine color="red" />
                      </Sparklines>
                        ) : (
                          <Sparklines data={coin.sparkline_in_7d.price}>
                          <SparklinesLine color="green" />
                        </Sparklines>
                        )}
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