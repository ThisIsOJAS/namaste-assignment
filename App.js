import React from "react";
import ReactDOM from "react-dom/client";
import imageUrl1 from "/public/coolcaptain.jpg";
import imageUrl2 from "/public/user-logo.jpg";
import imageUrl3 from "/public/search-icon.svg";

// const Heading = () => <h1>This is header1</h1>;

// const InnerHeading = () => (
//   <>
//     <Heading />
//     <h2>This is header2</h2>
//   </>
// );

// const LowerHeading = () => (
//   <>
//     <InnerHeading />
//     <h3>This is header3</h3>
//   </>
// );

// const LastHeading = () => (
//   <div id="container" className="textbox">
//     <LowerHeading />
//     <h4>This is header4</h4>
//   </div>
// );

// const FinalApp = () => (
//   <>
//     <Header />
//     <LastHeading />
//   </>
// );

// -----------------------------------------

const LogoBox = () => (
  <div className="leftcorner">
    <img src={imageUrl1} className="headerphoto" height={40} width={40} />
    <h1>CAPTAIN</h1>
  </div>
);

const SearchBox = () => (
  <div>
    <form>
      <div className="searchcontainer">
        <img src={imageUrl3} height={15} className="searchicon" />
        <input
          type="text"
          name="searchbar"
          placeholder="Search"
          size="50"
          className="searchbar"
        />
      </div>
    </form>
  </div>
);

const UserIcon = () => (
  <>
    <img src={imageUrl2} className="profilephoto" height="40px" width="40px" />
  </>
);

const Header = () => (
  <div className="HeaderProfile">
    <LogoBox />
    <SearchBox />
    <UserIcon />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);
