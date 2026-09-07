import React, { useState } from 'react'
import './App.css'

const App = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [feedback, setFeedback] = useState("")

  const handleSubmit = (e) => {

    e.preventDefault()

    alert("Feedback Submitted")
  }

  return (
    <div className="container">

      <form onSubmit={handleSubmit} className="form">

        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br>
        </br>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /><br>
        </br>

        <textarea
          placeholder="Feedback"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        /><br>
        </br>

        <button type="submit">
          Submit
        </button>

      </form>

    </div>
  )
}

export default App