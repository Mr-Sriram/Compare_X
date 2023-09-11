import Homepage from "./components/Homepage";
import NavBar from "./components/NavBar";
import SideNavBar from "./components/SideNavBar";
function App() {
  return (
    <div className=" w-screen h-full flex flex-row bg-cxBg">
      <SideNavBar />
      <div className="w-screen h-screen ">
        <NavBar />
        <Homepage className="w-screen h-full" />
      </div>
    </div>
  );
}

export default App;
