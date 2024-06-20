import usePagesStore from "../utils/state";
const AllPageChecked = () => {
  const { pages, selectedPages, toggleAllPages } = usePagesStore((state) => ({
    pages: state.pages,
    selectedPages: state.selectedPages,
    toggleAllPages: state.toggleAllPages,
  }));

  return (
    <div className="p-4  border-b flex justify-between mx-1.5">
      <p>All Pages</p>
      <input
        className="w-5 h-5"
        type="checkbox"
        checked={selectedPages.length === pages.length}
        onChange={toggleAllPages}
      />
    </div>
  );
};

export default AllPageChecked;
