import React from "react";
import { Link } from "react-router-dom";
import { Icons } from "../../assets/icons";
import { SidebarWrap } from "./Sidebar.styles";
import { MdOutlineClose } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { setSidebarClose } from "../../redux/slices/sidebarSlice";
import Invoices from "../Invoices/Invoices";
import SignupComponent from "../../Pages/Schools/Schools";

const Sidebar = () => {
  const isSidebarOpen = useSelector((state) => state.sidebar.isSidebarOpen);
  const dispatch = useDispatch();

  return (
    <SidebarWrap className={`${isSidebarOpen ? "sidebar-open" : ""}`}>
      <div className="sidebar-top">
        <div className="sidebar-brand">
          <span className="brand-logo">
            <img src={Icons.LogoWhite} alt="site brand logo" />
          </span>
          <span className="brand-text">Zeraki.</span>
        </div>
        <button
          className="sidebar-close-btn"
          onClick={() => dispatch(setSidebarClose())}
        >
          <MdOutlineClose size={24} />
        </button>
      </div>
      <div className="sidebar-body">
        <div className="sidebar-menu">
          <ul className="menu-list">
            <li className="menu-item">
              <Link to="/" className="menu-link active">
                <span className="menu-link-icon">
                  <img src={Icons.Chart} alt="" />
                </span>
                <span className="menu-link-text">Dashboard</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/schools" className="menu-link"> 
              {/* <SignupComponent/> */}
                <span className="menu-link-icon">
                  <img src={Icons.Graph} alt="" />
                </span>
                <span className="menu-link-text">Schools</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/invoices" className="menu-link">
              {/* <Invoices/> */}
                <span className="menu-link-icon">
                  <img src={Icons.Bag} alt="" />
                </span>
                <span className="menu-link-text">Invoices</span>
              </Link>
            </li>
      
            <li className="menu-item">
              <Link to="/" className="menu-link">
                <span className="menu-link-icon">
                  <img src={Icons.SignOut} alt="" />
                </span>
                <span className="menu-link-text">Sign Out</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </SidebarWrap>
  );
};

export default Sidebar;
