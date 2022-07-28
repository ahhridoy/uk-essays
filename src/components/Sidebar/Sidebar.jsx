import React from "react";
import Collapsible from "react-collapsible";
import { MdSpaceDashboard, MdCategory } from "react-icons/md";
import { AiFillSetting } from "react-icons/ai";
import { GoVersions } from "react-icons/go";
import { FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./_sidebar.scss";

const Sidebar = () => {
  return (
    <main id="dashboard-sidebar">
      <div className="center mt-4">
        <div>
          <img src="/assets/logo.png" alt="logo" className="logo" />
        </div>
        <ul>
          <li>
            <Link
              to="/dashboard"
              className="text-decoration-none"
              activeClassName="active"
            >
              <MdSpaceDashboard className="icons" /> Dashboard
            </Link>
          </li>
          <li>
            {/* <SiGoogletagmanager /> */}
            <Collapsible trigger="Services">
              <p>
                <MdCategory className="icons" />
                <Link to="/essays">Essays Writing</Link>
              </p>
              <p>
                <GoVersions className="icons" />
                <Link to="/assignment">Assignment Writing</Link>
              </p>
            </Collapsible>
          </li>
          <li>
            <Link
              to="/setting"
              className="text-decoration-none"
              activeClassName="active"
            >
              <AiFillSetting className="icons" />
              Setting
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Sidebar;
