import { BrowserRouter, Routes, Route } from "react-router";
import Login from "@/pages/Login.tsx";
import { Toaster } from "sonner";
import Home from "@/pages/Home.tsx";
import ProtectedRoute from "@/auth/ProtectedRoute";
import Test from "./pages/Test";
import '@mantine/core/styles.css';
import { createTheme, MantineProvider } from '@mantine/core';
import DashBoard from "./pages/DashBoard";

const theme = createTheme({
  /** Put your mantine theme override here */
});

function App() {
  return (
    <MantineProvider theme={theme}>
    <BrowserRouter>
      <Toaster richColors position="top-center" />
      <Routes>
        <Route path="/" element={
          <ProtectedRoute>
             {/* <Home /> */}
             <DashBoard/>
          </ProtectedRoute>
         
          } />
        <Route path="/:id" element={
          <ProtectedRoute>
             {/* <Home /> */}
             <DashBoard/>
          </ProtectedRoute>
         
          } />
          <Route path="/test/:name" element={
          <ProtectedRoute>
            <Test/>
          </ProtectedRoute>
         
          } />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
