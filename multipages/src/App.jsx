import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import User from "./Pages/User";
import NotFound from "./Pages/Notfound";
import Services from "./Pages/Services";


import "./App.css";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Layout />}>

          <Route index element={<Home />} />

          <Route path="about" element={<About />} />

          <Route path="contact" element={<Contact />} />

          <Route path="services" element={<Services />} />

          <Route path="user/:id" element={<User />} />

        </Route>

        <Route path="*" element={<NotFound />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
