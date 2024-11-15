import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { QueryClient, QueryClientProvider } from "react-query";
import { ConfigProvider } from "antd";
import { ContextProvider } from "./context/contextProvider.tsx";




const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ConfigProvider
     theme={{
    token: {
      colorBorder: "#69e459",
      colorPrimary: "#1dc307",
      colorTextPlaceholder: "#595958"
    },
  }}>
  
      <QueryClientProvider client={queryClient}>
       <ContextProvider>
      <App />
    </ContextProvider>
      </QueryClientProvider>
      ,
    </ConfigProvider>
  </StrictMode>
);
