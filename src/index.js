import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

// Older way - before React 18
// import React from 'react'
// import ReactDOM from 'react-dom'
// import './index.css'
// import App from './App'

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// )

const domNode = document.getElementById('root')
const root = createRoot(domNode)
root.render(<App />)
