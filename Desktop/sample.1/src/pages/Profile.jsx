import React, { useEffect, useState } from 'react'
import '../profile.css'

export default function Profile(){
  const [html, setHtml] = useState('')
  useEffect(() => {
    fetch('/profile.html')
      .then(res => res.text())
      .then(text => setHtml(text))
  }, [])
  return <div dangerouslySetInnerHTML={{ __html: html }} />
}
