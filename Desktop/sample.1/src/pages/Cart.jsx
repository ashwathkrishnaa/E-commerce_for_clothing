import React, { useEffect, useState } from 'react'
import '../cart.css'
import '../cart.js'

export default function Cart(){
  const [html, setHtml] = useState('')
  useEffect(() => {
    fetch('/cart.html')
      .then(res => res.text())
      .then(text => setHtml(text))
  }, [])
  return <div dangerouslySetInnerHTML={{ __html: html }} />
}
