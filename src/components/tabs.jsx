import { useState } from "react";

const Tabs = () => {
  const pages = {
    home: "home",
    about: "about",
    pricing: "pricing",
  };
  const [currentTab, setCurrentTab] = useState("");
  const tabClick = (tab) => setCurrentTab(tab);
  console.log(currentTab);
  return (
    <>
      <div className="nav-container">
        <button
          className={`tab ${currentTab === pages.home ? "selected-tab" : ""}`}
          onClick={() => tabClick(pages.home)}
        >
          Home
        </button>
        <button
          className={`tab ${currentTab === pages.about ? "selected-tab" : ""}`}
          onClick={() => tabClick(pages.about)}
        >
          About
        </button>
        <button
          className={`tab ${
            currentTab === pages.pricing ? "selected-tab" : ""
          }`}
          onClick={() => tabClick(pages.pricing)}
        >
          Pricing
        </button>
      </div>
      <div className="tab-content">
        {currentTab === pages.home ? (
          <div className="home">
            <h1>this is home</h1>
          </div>
        ) : currentTab === pages.about ? (
          <div className="about">
            {" "}
            <h1>this is about</h1>
          </div>
        ) : currentTab === pages.pricing ? (
          <div className="pricing">
            {" "}
            <h1>this is pricing</h1>
          </div>
        ) : null}
      </div>
    </>
  );
};
export default Tabs;
