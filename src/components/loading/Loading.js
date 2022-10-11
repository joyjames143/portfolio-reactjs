import React from 'react'
import ReactLoading from 'react-loading';
import "./Loading.css"

export default function Loading() {
  return (
    <div className='main-loading'>
        <ReactLoading className='loading-element' type={"cubes"} color={"grey"} height={0} width={250} />
    </div>
    
  )
}
