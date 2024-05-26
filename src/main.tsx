import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { RouterProvider } from 'react-router-dom'
import AppRoutes from './routes/Router.tsx'



const theme = extendTheme()


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
    <RouterProvider router={AppRoutes}>
    
    </RouterProvider>
    </ChakraProvider>
  </React.StrictMode>,
)
