import React from "react";
import Header from "../Header";

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }: Props) => (
  <>
    <Header />
    <main className="p-6">{children}</main>
  </>
);

export default Layout;
