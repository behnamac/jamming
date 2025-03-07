function SearchBar() {
  return (
    <div className="flex h-auto w-[60%] flex-col items-center justify-center gap-5">
      <input
        type="text"
        className="h-10 w-full rounded-2xl bg-amber-50 pl-3"
        placeholder="Search your favoarite songs"
      />
      <button className="h-10 mb-5 w-[35%] rounded-xl bg-gray-900 text-amber-50 hover:cursor-pointer hover:bg-gray-500 md:w-[20%] ">
        Search
      </button>
    </div>
  );
}

export default SearchBar;
