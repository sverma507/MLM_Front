import React from "react";
import { Helmet } from "react-helmet";
import BottomNav from "./Navbar/BottomNav";
// import { Toaster } from "react-hot-toast";

const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <BottomNav/>
      <main style={{ minHeight: "70vh" }}>
        {/* <Toaster /> */}
        {children}
      </main>
    </div>
  );
};

Layout.defaultProps = {
  title: "MLM app - Expand Network",
  discription: "MLM Application",
  keywords: "mern. react, node, mongodb",
  author: "MLM",
};

export default Layout;
