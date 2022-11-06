// import './App.css'
import { MainPage } from "./pages/Main_Page"
import { GlobalStyle } from "./styles/global"

import { AppProvider } from "./hooks/index";

function App() {
  return (
    <AppProvider>
      <MainPage />

      <GlobalStyle />
    </AppProvider>
  )
}

export default App
