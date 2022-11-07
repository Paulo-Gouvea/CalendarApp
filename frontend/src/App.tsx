import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MainPage } from "./pages/Main_Page"
import { GlobalStyle } from "./styles/global"

import { AppProvider } from "./hooks/index";

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient} >
      <AppProvider>
        <MainPage />

        <GlobalStyle />
      </AppProvider>
    </QueryClientProvider>
  )
}

export default App
