import React from "react";
import { Button } from "@/components/ui/button";
import Auth from "./pages/auth/index";
import Chat from "./pages/chat";
import Profile from "./pages/profile";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useAppStore } from "./store";

const PrivateRoute = ({ children }) => {
  const { userInfo } = useAppStore();
  const isAuthed = !!userInfo;
  return isAuthed ? children : <Navigate to="/auth" />;
};
const AuthRoute = ({ children }) => {
  const { userInfo } = useAppStore();
  const isAuthed = !!userInfo;
  return isAuthed ? <Navigate to="/auth" /> : children;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/auth"
          element={
       
              <Auth />
       
          }
        />
        <Route
          path="/chat"
          element={
   
              <Chat />
       
          }
        />
        <Route
          path="/profile"
          element={
           
              <Profile />
          }
        />
        <Route path="*" element={<Navigate to="/auth" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
