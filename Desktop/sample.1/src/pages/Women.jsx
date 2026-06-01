import React, { useEffect, useState } from 'react'
import '../products.css'
import '../cart.js'

export default function Women(){
  const [html, setHtml] = useState('')
  useEffect(() => {
    fetch('/women.html')
      .then(res => res.text())
      .then(text => setHtml(text))
  }, [])
  return <div dangerouslySetInnerHTML={{ __html: html }} />
}
