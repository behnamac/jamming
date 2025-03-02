function SearchBar() {
  return (
    <div className=" w-[60%] h-[15%] flex flex-col justify-center items-center gap-5">
      <input
        type="text"
        className="w-full h-[35%] bg-amber-50 rounded-2xl pl-3"
        placeholder="Search your favoarite songs"
      />
      <button className="bg-gray-900 text-amber-50 rounded-xl w-[35%]  h-[28%]">
        Search
      </button>
    </div>
  );
}

export default SearchBar;
