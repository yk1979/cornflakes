import React from "react";

type Props = {
  headers: string[];
};

const Thead: React.FC<Props> = ({ headers }) => (
  <thead className="bg-gray-50">
    <tr>
      {headers.map((header, i) => (
        <th
          key={i}
          scope="col"
          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
        >
          {header}
        </th>
      ))}
    </tr>
  </thead>
);

export default Thead;
