import { useState } from "react";
import PersonalForm from "./PersonalForm";
import Plan from "./Plan";
import AddOn from "./AddOn";
import ThankYou from "./ThankYou";

const FormLayout = () => {
  // const [data, setData] = useState({
  //   name: '',
  //   emailAddress: '',
  //   phoneNumber: 0,

  // })

  const [page, setPage] = useState(0);
  const FormArray = [
    <div key={1}>
      <PersonalForm />
    </div>,
    <div key={2}>
      <Plan />
    </div>,
    <div key={3}>
      <AddOn />
    </div>,
    <div key={4}>
      <ThankYou />
    </div>,
  ];
  function handleBackwardClick() {
    setPage((currPage) => currPage - 1);
  }
  function handleForwardClick() {
    if (page + 1 === FormArray.length) return;
    setPage((currPage) => currPage + 1);
  }
  return (
    <div className="Page-Container">
      <div className="navigation">
        <nav>
          <div className={page === 0 ? "isActive nav-links" : "nav-links"}>
            <span>1</span>
            <div className="nav-tab-responsive">
              <small>STEP 1</small>
              <span>YOUR INFO</span>
            </div>
          </div>
          <div className={page === 1 ? "isActive nav-links" : "nav-links"}>
            <span>2</span>
            <div className="nav-tab-responsive">
              <small>STEP 2</small>
              <span>SELECT PLAN</span>
            </div>
          </div>
          <div className={page === 2 ? "isActive nav-links" : "nav-links"}>
            <span>3</span>
            <div className="nav-tab-responsive">
              <small>STEP 3</small>
              <span>ADD-ONS</span>
            </div>
          </div>
          <div className={page === 3 ? "isActive nav-links" : "nav-links"}>
            <span>4</span>
            <div className="nav-tab-responsive">
              <small>STEP 4</small>
              <span>SUMMARY</span>
            </div>
          </div>
        </nav>
      </div>
      <div className="main-form">
        <form action="#">{FormArray[page]}</form>
      </div>
      <div className="footer">
        <button
          className={page === 0 ? "disabled" : ""}
          onClick={handleBackwardClick}
        >
          {" "}
          Go Back
        </button>
        <button type="submit" onClick={handleForwardClick}>
          {page + 1 === FormArray.length ? "Submit" : "Next Step"}
        </button>
      </div>
    </div>
  );
};

export default FormLayout;
