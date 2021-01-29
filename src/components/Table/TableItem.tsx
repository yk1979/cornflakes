import React from "react";

type Props = JSX.IntrinsicElements["td"];

const TableItem: React.FC<Props> = ({ children, ...args }) => (
  <td {...args}>{children}</td>
);

export default TableItem;
