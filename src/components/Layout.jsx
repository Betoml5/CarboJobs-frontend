import React from "react";
import Footer from "./Footer";
import Header from "./Header";

import { Link } from "react-router-dom";

const Layout = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default Layout;
