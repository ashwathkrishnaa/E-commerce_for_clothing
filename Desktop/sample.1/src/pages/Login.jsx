import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../login.css'

export default function Login({ setIsLoggedIn }){
  const [html, setHtml] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    fetch('/login.html')
      .then(res => res.text())
      .then(text => setHtml(text))
  }, [])

  useEffect(() => {
    if (html) {
      // Wait a moment for HTML to render, then override the login function
      const timer = setTimeout(() => {
        const originalLoginUser = window.loginUser
        window.loginUser = function() {
          let email = document.getElementById("loginEmail").value
          let password = document.getElementById("loginPassword").value
          let data = localStorage.getItem(email)

          if(data == null){
            alert("Account not found")
            return
          }

          let user = JSON.parse(data)

          if(user.password == password){
            localStorage.setItem("currentUser", JSON.stringify(user))
            alert("Login Successful")
            setIsLoggedIn(true)
            navigate('/home')
          } else {
            alert("Incorrect Password")
          }
        }
      }, 100)
      return () => clearTimeout(timer)
    }
  }, [html, setIsLoggedIn, navigate])

  return <div dangerouslySetInnerHTML={{ __html: html }} />
}
