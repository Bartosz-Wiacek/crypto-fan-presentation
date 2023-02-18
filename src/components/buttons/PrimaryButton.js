import React from 'react'
import './buttons.css'

function PrimaryButton({size, onClick, children}) {

    if(size == "small"){
        return (
            <button className='btn btn-primary-small' onClick={onClick}>
                {children}
            </button>
          )
    }
    else{
        return (
            <button className='btn btn-primary-big' onClick={onClick}>
                {children}
            </button>
          )
    }

}

export default PrimaryButton