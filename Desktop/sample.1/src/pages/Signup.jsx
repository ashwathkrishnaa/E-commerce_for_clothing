import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../signup.css'

export default function Signup(){
  const [html, setHtml] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    fetch('/signup.html')
      .then(res => res.text())
      .then(text => setHtml(text))
  }, [])

  useEffect(() => {
    if (html) {
      const timer = setTimeout(() => {
        window.createAccount = function() {
          let name = document.getElementById("name").value
          let email = document.getElementById("email").value
          let password = document.getElementById("password").value

          if(name == "" || email == "" || password == ""){
            alert("Fill all fields")
            return
          }

          let user = {
            name: name,
            email: email,
            password: password
          }

          localStorage.setItem(email, JSON.stringify(user))
          alert("Account Created Successfully")
          navigate('/login')
        }
      }, 100)
      return () => clearTimeout(timer)
    }
  }, [html, navigate])

  return <div dangerouslySetInnerHTML={{ __html: html }} />
}
