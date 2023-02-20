import React from 'react'
import { Sparklines, SparklinesLine } from 'react-sparklines';
import './coin.css'
import {RiArrowDownSFill, RiArrowUpSFill} from 'react-icons/ri'


function CoinRow({coin, index}) {

  return (
    <tr>
    <td>{index + 1}</td>
    <td className='table-id-cell'><img src={coin.image} alt='' />{coin.name}</td>
    <td>${coin.current_price.toLocaleString('en-US', { minimumFractionDigits: 2 })}</td>
    <td>
      {coin.price_change_percentage_1h_in_currency < 0 ? (
      <span className={coin.price_change_percentage_1h_in_currency < 0 ? "red" : "green"}>
        <RiArrowDownSFill className='icon' />
        {(coin.price_change_percentage_1h_in_currency*(-1)).toLocaleString({ minimumFractionDigits: 2 })}%
      </span>
      ) : (
      <span className='green'>
        <RiArrowUpSFill className='icon' />
        {coin.price_change_percentage_1h_in_currency.toLocaleString({ minimumFractionDigits: 2 })}%
      </span>
      )}
    </td>
    <td>
    {coin.price_change_percentage_24h_in_currency < 0 ? (
      <span className='red'>
        <RiArrowDownSFill className='icon' />
        {(coin.price_change_percentage_24h_in_currency*(-1)).toLocaleString({ minimumFractionDigits: 2 })}%
      </span>
      ) : (
      <span className='green'>
        <RiArrowUpSFill className='icon' />
        {coin.price_change_percentage_24h_in_currency.toLocaleString({ minimumFractionDigits: 2 })}%
      </span>
      )}
    </td>
    <td>
      {coin.price_change_percentage_7d_in_currency < 0 ? (
      <span className='red'>
        <RiArrowDownSFill className='icon' />
        {(coin.price_change_percentage_7d_in_currency*(-1)).toLocaleString({ minimumFractionDigits: 2 })}%
      </span>
      ) : (
      <span className='green'>
        <RiArrowUpSFill className='icon' />
        {coin.price_change_percentage_7d_in_currency.toLocaleString({ minimumFractionDigits: 2 })}%
      </span>
      )}
    </td>
    <td>${coin.market_cap.toLocaleString('en-US')}</td>
    <td>${coin.total_volume.toLocaleString('en-US')}</td>
    <td>{coin.circulating_supply.toLocaleString('en-US')}</td>
    <td>
    {coin.price_change_percentage_7d_in_currency < 0 ? (
      <Sparklines data={coin.sparkline_in_7d.price} style={{width: "200px"}}>
      <SparklinesLine color="red" />
    </Sparklines>
      ) : (
        <Sparklines data={coin.sparkline_in_7d.price} style={{width: "200px"}}>
        <SparklinesLine color="green" />
      </Sparklines>
      )}
    </td>
  </tr>
  )
}

export default CoinRow