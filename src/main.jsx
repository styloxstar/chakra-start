import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import { Provider } from './components/ui/provider.jsx'
import { ColorModeButton } from './components/ui/color-mode.jsx'
// import { ChakraProvider } from '@chakra-ui/react'
// import { Provider } from "@/components/ui/provider"


// import { extendTheme } from '@chakra-ui/react'

// 2. Extend the theme to include custom colors, fonts, etc
// const colors = {
//   brand: {
//     900: '#1a365d',
//     800: '#153e75',
//     700: '#2a69ac',
//   },
// }

// const theme = extendTheme({ colors })

createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <Provider>
      {/* <ColorModeButton/> */}
      <App />
    </Provider>
  </StrictMode>,
)
