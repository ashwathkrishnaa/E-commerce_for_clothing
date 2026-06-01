import React, { useEffect, useState } from 'react'
import '../about.css'

export default function About(){
  const [html, setHtml] = useState('')
  useEffect(() => {
    fetch('/about.html')
      .then(res => res.text())
      .then(text => setHtml(text))
  }, [])
  return <div dangerouslySetInnerHTML={{ __html: html }} />
}
