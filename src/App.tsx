import AllPageChecked from "./components/AllPageChecked";
import DoneButon from "./components/DoneButon";
import Pages from "./components/Pages";

function App() {
  return (
    <>
      <div className=" w-full h-screen flex justify-center items-center bg-slate-100">
        <div className="w-5/6  xl:w-1/4  md:w-1/4 bg-white rounded-md shadow-lg">
          <AllPageChecked />
          <div className="p-4   border-b flex justify-between mx-1.5">
            <Pages />
          </div>
          <div className="p-5 w-full">
            <DoneButon />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
