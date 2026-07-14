import { useState } from 'react'
import './App.css'

function App() {
  const [text, setText] = useState('')

  const wordCount = text
    .trim()
    .split(/\s+/)
    .filter(word => word.length > 0)
    .length

  return (
    <div className="counter-page">
      <h1>Word Counter</h1>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type your text here..."
      />

      <p>Word Count: {wordCount}</p>
      <p>Character Count: {text.length}</p>
    </div>
  )
}

export default App