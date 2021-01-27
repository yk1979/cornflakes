import React from "react";
import Header from "../Header";

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => (
  <>
    <Header />
    <main className="p-6 bg-gray-100">{children}</main>
  </>
);

export default Layout;
