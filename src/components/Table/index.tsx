import React from "react";

type Props = {
  headers: string[];
  data: {
    category: string;
    text: string;
    // TODO fix
    score: any;
  }[];
};

// TODO: 構造を変えてスキルチェック用のテーブルも作れるようにする
const Table: React.FC<Props> = ({ headers, data }) => (
  <div className="sm:rounded-lg mt-6 shadow overflow-x-scroll">
    <table className="divide-y divide-gray-200 overflow-hidden w-full">
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
