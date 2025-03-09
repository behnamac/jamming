import React from "react";
import clcx from "clsx";
interface TableListProps {
  children: React.ReactNode;
  className?: string;
}
function TableList({ children, className }: TableListProps) {
  return (
    <div
      className={clcx(
        `flex w-full flex-col items-center overflow-x-hidden bg-purple-800 py-1`,
        className,
      )}
    >
      {children}
    </div>
  );
}

export default TableList;
