import usePagesStore from "../utils/state";

const Pages = () => {
  const { pages, selectedPages, togglePage } = usePagesStore((state) => ({
    pages: state.pages,
    selectedPages: state.selectedPages,
    togglePage: state.togglePage,
  }));

  return (
    <div className="w-full ">
      {pages.map((page) => (
        <div key={page.id} className="w-full flex h-12 justify-between py-1">
          <p>{page.name}</p>
          <input
            className="w-5 h-5"
            type="checkbox"
            checked={selectedPages.includes(page.id)}
            onChange={() => togglePage(page.id)}
          />{" "}
        </div>
      ))}
    </div>
  );
};

export default Pages;
