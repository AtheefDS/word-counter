import { useState } from 'react'
import './App.css'
function App() {
 const [text, setText] = useState('')
 return (
 <div className="counter-page">
 <h1>Character Counter</h1>
 <textarea
 value={text}
 onChange={(e) => setText(e.target.value)}
 placeholder="Type your text here..."
 />
 <p>Character Count: {text.length}</p>
 </div>
 )
}
export default App