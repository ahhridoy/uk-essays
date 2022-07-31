import React from "react";
import { Container } from "react-bootstrap";
import Collapsible from "react-collapsible";
import { MdSpaceDashboard, MdCategory } from "react-icons/md";
import { GoVersions } from "react-icons/go";
import { Link, Outlet } from "react-router-dom";
import "./_dashboard.scss";

const Dashboard = () => {
  return (
    <main style={{ overflow: "hidden" }}>
      <div className="dashboard">
        <div className="sidebar">
          <div className="center mt-4">
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
                    <Link to="/dashboard/essays">Essays Writing</Link>
                  </p>
                  <p>
                    <GoVersions className="icons" />
                    <Link to="/dashboard/assignment">Assignment Writing</Link>
                  </p>
                </Collapsible>
              </li>
            </ul>
          </div>
        </div>
        <div className="content">
          <Container>
            <h1 className="text-dark text-center mb-5">Welcome to Admin Dashboard</h1>
            <Outlet />
          </Container>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
