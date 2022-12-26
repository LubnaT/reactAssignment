import React, { useState } from 'react'
import Button from './Button'
// import Card from './Card'
import Details from './Details'

function Ui() {
    const [cards,setCards] = useState(false)
  return (
    <div>
        {
            cards ? <Details/> : <Button b={setCards}/>
        }
    </div>
  )
}

export default Ui