import React, { useEffect, useState } from 'react'
import '../style.css'

export default function DemoPro1(){
  const [html, setHtml] = useState('')
  useEffect(() => {
    fetch('/demo.pro.1.html')
      .then(res => res.text())
      .then(text => setHtml(text))
  }, [])
  return <div dangerouslySetInnerHTML={{ __html: html }} />
}
