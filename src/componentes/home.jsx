import React from 'react'
import { useNavigate } from 'react-router-dom'
function Home() {
  const x = useNavigate()
  return (
    <div>
      <div>Home</div>
      <button onClick={()=> x('products')}>Go to Product</button>
    </div>

  )
}

export default Home