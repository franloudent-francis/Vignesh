import { BrowserRouter, Routes, Route } from "react-router";
import Login from "@/pages/Login.tsx";
import { Toaster } from "sonner";
import Home from "@/pages/Home.tsx";
import ProtectedRoute from "@/auth/ProtectedRoute";
import Test from "./pages/Test";

function App() {
  return (
    <BrowserRouter>
      <Toaster richColors position="top-center" />
      <Routes>
        <Route path="/" element={
          <ProtectedRoute>
             <Home />
          </ProtectedRoute>
         
          } />
          <Route path="/test" element={
          <ProtectedRoute>
            <Test/>
          </ProtectedRoute>
         
          } />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
