import { useState } from "react";
interface props {
  items: string[];
}

function useSearch({ items }: props) {
  const [searchQuery, setSearchInput] = useState<string>("");
  const filterItems = items.filter((item) =>
    item.toLowerCase().includes(searchQuery.toLocaleLowerCase())
  );

  return filterItems;
}

export default useSearch;
