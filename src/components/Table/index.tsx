import React from "react";

const headers = ["category", "description", "your score"];

type Props = {
  data: {
    category: string;
    text: string;
    score: 0 | 1;
  }[];
};

const Table: React.FC<Props> = ({ data }) => (
  <div className="sm:rounded-lg mt-6 shadow overflow-x-scroll">
    <table className="divide-y divide-gray-200 overflow-hidden">
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
      <tbody className="bg-white divide-y divide-gray-200">
        {data.map((d, i) => (
          <tr key={i}>
            <td className="px-6 py-4 whitespace-nowrap">{d.category}</td>
            <td className="px-6 py-4 whitespace-nowrap">{d.text}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {d.score}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default Table;
