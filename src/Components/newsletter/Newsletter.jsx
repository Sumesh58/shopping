import React from 'react'
import './newsletter.scss'
export default function Newsletter() {
  return (
    <div className='newsletter'>
  <h1>NEWSLETTER</h1>
<div className="desc">
Get timely updates from your favourite products.
</div>

  <div className="inputcontainer">
    <input type="text" placeholder='Your email' />
    <button>
    <span class="material-symbols-outlined">
send
</span>
    </button>
  </div>


    </div>
  )
}
