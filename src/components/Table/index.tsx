import React from "react";
import Thead from "./Thead";

type Props = {
  headers: string[];
  children?: React.ReactNode;
};

const Table: React.FC<Props> = ({ headers, children }) => (
  <div className="sm:rounded-lg mt-6 shadow overflow-x-scroll">
    <table className="divide-y divide-gray-200 overflow-hidden w-full">
      <Thead headers={headers} />
      <tbody className="bg-white divide-y divide-gray-200">{children}</tbody>
    </table>
  </div>
);

export default Table;
