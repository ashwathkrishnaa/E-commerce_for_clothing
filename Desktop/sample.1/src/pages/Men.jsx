import React, { useEffect, useState } from 'react'
import '../products.css'
import '../cart.js'

export default function Men(){
  const [html, setHtml] = useState('')
  useEffect(() => {
    fetch('/men.html')
      .then(res => res.text())
      .then(text => setHtml(text))
  }, [])
  return <div dangerouslySetInnerHTML={{ __html: html }} />
}
