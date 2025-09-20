import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router";

import { ThemeProvider } from "./Providers/theme.provider.tsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
import { Toaster } from "sonner";
import router from "./Routers/index.tsx";

createRoot(document.getElementById("root")!).render(
   <StrictMode>
      <Provider store={store}>
         <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <div className="m-0 p-0">
               <RouterProvider router={router} />
               <Toaster richColors />
            </div>
         </ThemeProvider>
      </Provider>
   </StrictMode>
);
