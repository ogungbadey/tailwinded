import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";
import { HiSearch } from "react-icons/hi";

import { useState } from "react";
import NavigationItems from "./components/NavigationItems/NavigationItems";
import FixedSideBar from "./components/SideBar/FixedSideBar";

function App() {
  const [isSideBar, setIsSideBar] = useState(false);
  const toggleSideBar = () => setIsSideBar(!isSideBar);
  return (
    <div className="App">
      <Header open={isSideBar} toggle={toggleSideBar} />
      <div>
        <div className="max-w-8xl mx-auto px-4">
          <FixedSideBar />
        </div>
        <div className="lg:pl-[19.5rem]">
          <div className="w-full h-10"></div>
          <div className="max-w-3xl mx-auto">
            <h1>Topic</h1>
            <p>
              lEsse adipisicing incididunt incididunt velit nulla aliqua
              voluptate qui. Laboris eu tempor sunt culpa consequat dolore
              mollit Lorem adipisicing minim. Consequat ex minim veniam quis
              velit laboris occaecat ea quis. Aliquip esse esse cillum laborum
              commodo sunt incididunt nostrud do sit mollit ad exercitation eu.
              Mollit incididunt do labore reprehenderit cillum amet nostrud
              mollit elit eu. Est reprehenderit cillum anim qui. Cupidatat
              deserunt sunt nulla nulla Lorem non eu. Esse eu consectetur
              incididunt deserunt anim ut eu eiusmod mollit ea. Occaecat enim
              reprehenderit eiusmod ut Lorem quis dolore quis. In nisi commodo
              do anim officia nisi. Amet qui voluptate consequat enim commodo.
              Amet incididunt reprehenderit commodo enim aute anim dolor sint
              occaecat pariatur Lorem officia. Cillum do excepteur fugiat do
              laborum eiusmod eiusmod deserunt ipsum consectetur sint ex. Anim
              enim incididunt fugiat labore adipisicing aute occaecat officia id
              eiusmod dolore sunt ipsum ea. Non ipsum et ea ea voluptate nostrud
              do in nulla dolor minim. Laboris ipsum officia nulla nulla nostrud
              sint est voluptate cupidatat non veniam. Sunt ut mollit cillum
              dolore velit laboris pariatur sunt proident ex aute dolore
              pariatur. Magna et commodo do anim tempor mollit dolor aute. Nisi
              magna culpa consequat duis id ea adipisicing laboris et.
              Consectetur laborum irure magna veniam ut nulla magna commodo quis
              voluptate eiusmod. Et minim ad ullamco magna. Enim amet Lorem
              proident proident irure amet tempor excepteur nostrud ex
              reprehenderit minim pariatur elit. Reprehenderit consectetur
              mollit deserunt in aliquip dolore. Esse proident ut sunt aute duis
              in anim deserunt consequat consectetur occaecat laboris cupidatat
              voluptate. Culpa aliquip labore Lorem ut minim officia incididunt.
              Cupidatat velit tempor laborum culpa aliqua in consectetur
              pariatur. Excepteur tempor amet in eiusmod eiusmod duis veniam
              eiusmod magna id ut quis et commodo. Mollit eiusmod qui
              reprehenderit duis tempor. Consectetur laborum eu ex tempor
              proident qui ut est fugiat irure adipisicing adipisicing
              incididunt. Officia ut in sint cupidatat cillum mollit aute in.
              Ipsum et aliquip et enim laboris aliqua non duis ea velit ipsum.
              Culpa esse ipsum et magna dolor anim laborum. Officia duis
              occaecat Lorem reprehenderit amet nisi aute adipisicing nulla qui
              ex. Quis cillum sunt irure esse velit qui id sint nulla mollit
              eiusmod velit incididunt eiusmod. Dolor laborum adipisicing et
              sunt fugiat id ad minim sunt. Ut culpa fugiat exercitation in
              velit anim. Laboris labore velit est et amet laboris est do mollit.
            </p>
          </div>
        </div>
      </div>
      <SideBar open={isSideBar} toggle={toggleSideBar} />
    </div>
  );
}

export default App;
