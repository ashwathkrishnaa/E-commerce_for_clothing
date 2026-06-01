import React, { useEffect, useState } from 'react'
import '../products.css'
import '../cart.js'

export default function Child(){
  const [html, setHtml] = useState('')
  useEffect(() => {
    fetch('/child.html')
      .then(res => res.text())
      .then(text => setHtml(text))
  }, [])
  return <div dangerouslySetInnerHTML={{ __html: html }} />
}
