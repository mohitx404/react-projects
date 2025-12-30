import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const myCustomElement = React.createElement(
  'a',
  { href: 'https://www.youtube.com', target: '_blank' },
  'click me to youtube'

)


ReactDOM.createRoot(document.getElementById('root')).render(

  <StrictMode>
    <myCustomElement />
  </StrictMode>,
)
