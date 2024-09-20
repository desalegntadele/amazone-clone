import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { initialState,reducer } from './Utility/reducer.js'
import { Dataprovider } from './Components/Dataprovider/Dataprovider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Dataprovider reducer={reducer} initialState={initialState}>
       <App />
    </Dataprovider>
   
  </StrictMode>,
)
