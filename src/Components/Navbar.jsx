import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav-container">
      <nav>
        <NavLink to="/">
          <div className="links">1</div>
          <div className="steps">
            <span>STEP 1</span>
            <span>YOUR INFO</span>
          </div>
        </NavLink>
        <NavLink
          to="/plan"
          className={({ isActive }) => {
            isActive ? "active" : "";
          }}
        >
          <div className="links">2</div>
          <div className="steps">
            <span>STEP 2</span>
            <span>SELECT PLAN</span>
          </div>
        </NavLink>
        <NavLink
          to="/add-on"
          className={({ isActive }) => {
            isActive ? "active" : "";
          }}
        >
          <div className="links">3</div>
          <div className="steps">
            <span>STEP 3</span>
            <span>ADD-ONS</span>
          </div>
        </NavLink>
        <NavLink
          to="/summary"
          className={({ isActive }) => {
            isActive ? "active" : "";
          }}
        >
          <div className="links">4</div>
          <div className="steps">
            <span>STEP 4</span>
            <span>SUMMARY</span>
          </div>
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
