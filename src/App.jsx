import { ChakraProvider, createStandaloneToast } from "@chakra-ui/react";
import "./scss/index.scss";
import theme from "./theme";
import Router from "./router/index";
import queryClient from "./services/queryClient";
import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { BrowserRouter } from "react-router-dom";
import { useEffect } from "react";
import PreloaderProvider from "./providers/PreloaderProvider";
const { ToastContainer, toast } = createStandaloneToast();

function App() {
  return (
    <>
      <div className="App">
        <PreloaderProvider />
        <ChakraProvider theme={theme}>
          <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={false} position="bottom-left" />
            <BrowserRouter>
              <Router />
            </BrowserRouter>
          </QueryClientProvider>
        </ChakraProvider>
      </div>
      <ToastContainer />
    </>
  );
}

export const standaloneToast = toast;

export default App;
