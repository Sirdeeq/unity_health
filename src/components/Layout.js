import React, { useState } from "react";
import Head from "./Head";
import Footer from "./Footer";
import Error from "./Error";
import Skeleton from "./Skeleton";

function Layout({ children, error, loading }) {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  if (error) {
    return <Error />;
  }

  if (loading) {
    return <Skeleton />;
  }

  return (
    <div>
      <header>
        <Head />
      </header>
      <main>{children}</main>
      <footer>
        <Footer darkMode={darkMode} />
      </footer>
    </div>
  );
}

export default Layout;
