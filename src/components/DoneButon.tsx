import pages from "../constants/pages";
import usePagesStore from "../utils/state";

const DoneButon = () => {
  const { selectedPages } = usePagesStore((state) => ({
    pages: state.pages,
    selectedPages: state.selectedPages,
    togglePage: state.togglePage,
  }));

  const handleDoneButton = () => {
    alert(
      selectedPages.length > 0
        ? selectedPages.length == pages.length
          ? "You Select All Pages"
          : "You Select Page " + selectedPages.join(", ")
        : "No Selected Pages"
    );
  };
  return (
    <div>
      <button
        type="button"
        onClick={() => handleDoneButton()}
        className="w-full focus:outline-none text-black bg-yellow-400 hover:bg-yellow-500  focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
      >
        Done
      </button>
    </div>
  );
};

export default DoneButon;
