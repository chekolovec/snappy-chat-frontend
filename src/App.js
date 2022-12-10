import React from "react";
import { CookiesProvider } from "react-cookie";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Chat } from "./pages/Chat";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { SetAvatar } from "./pages/SetAvatar";

export default function App() {
  return (
    <CookiesProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/setAvatar/:userId" element={<SetAvatar />} />
          <Route path="/" element={<Chat />} />
        </Routes>
      </BrowserRouter>
    </CookiesProvider>
  );
}
