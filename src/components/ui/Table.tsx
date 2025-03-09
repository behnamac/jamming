import React, { use, useState } from "react";

interface props {
  title?: string;
  children: React.ReactNode;
}

export default function table({ children, title }: props) {
  const [input, setInput] = useState("");
  const handleInput = (e: any) => {
    setInput(e.target.value);
  };
  return (
    <div className="w-1/2 rounded-t-xl bg-purple-900">
      <div className="w-full rounded-t-xl border-b-2 border-gray-700 bg-purple-800">
        <h1 className="ml-5 py-2 text-3xl font-bold text-amber-50">
          {title ? (
            title
          ) : (
            <input type="text" value={input} onChange={handleInput} />
          )}
        </h1>
      </div>
      <div className="bg--500 h-full w-full overflow-auto bg-purple-900 py-1">
        {children}
      </div>
    </div>
  );
}
