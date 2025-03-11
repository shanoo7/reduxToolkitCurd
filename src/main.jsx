import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './app/store.js'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

import Forms from './components/Forms.jsx'
import Read from './components/Read.jsx'
import Update from './components/Update.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
        <Route path='' element={<Read/>}/>
      <Route path='/form' element={<Forms/>}/>
      <Route path='/update/:id' element={<Update/>}/>

    
    </Route>

  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>

    
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  
    
    
  </StrictMode>,
)
