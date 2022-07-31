import React from "react";
import { Button, Container } from "react-bootstrap";
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
                  to="/home"
                  className="text-decoration-none"
                  activeClassName="active"
                >
                  <MdSpaceDashboard className="icons" /> Home
                </Link>
              </li>
              <li>
                <Collapsible trigger="Writing Services">
                  <p>
                    <GoVersions className="icons" />
                    <Link to="/dashboard/essays">Essays Writing</Link>
                  </p>
                  <p>
                    <GoVersions className="icons" />
                    <Link to="/dashboard/assignment">Assignment Writing</Link>
                  </p>
                  <p>
                    <GoVersions className="icons" />
                    <Link to="/dashboard/course-work">Coursework Writing</Link>
                  </p>
                  <p>
                    <GoVersions className="icons" />
                    <Link to="/dashboard/essay-plan">Essay Plan Writing</Link>
                  </p>
                  <p>
                    <GoVersions className="icons" />
                    <Link to="/dashboard/reflective-essay">
                      Reflective Essay Writing
                    </Link>
                  </p>
                  <p>
                    <GoVersions className="icons" />
                    <Link to="/dashboard/research-paper">
                      Research Paper Writing
                    </Link>
                  </p>
                  <p>
                    <GoVersions className="icons" />
                    <Link to="/dashboard/dissertation">
                      Dissertation Writing
                    </Link>
                  </p>
                  <p>
                    <GoVersions className="icons" />
                    <Link to="/dashboard/report">Report Writing</Link>
                  </p>
                  <p>
                    <GoVersions className="icons" />
                    <Link to="/dashboard/case-study">Case Study Writing</Link>
                  </p>
                  <p>
                    <GoVersions className="icons" />
                    <Link to="/dashboard/powerpoint">
                      Powerpoint Presentation
                    </Link>
                  </p>
                  <p>
                    <GoVersions className="icons" />
                    <Link to="/dashboard/marking">Marking Service</Link>
                  </p>
                  <p>
                    <GoVersions className="icons" />
                    <Link to="/dashboard/editing">Editing Service</Link>
                  </p>
                  <p>
                    <GoVersions className="icons" />
                    <Link to="/dashboard/exam-revision">Exam Revision</Link>
                  </p>
                  <p>
                    <GoVersions className="icons" />
                    <Link to="/dashboard/academic-poster">Academic Poster</Link>
                  </p>
                  <p>
                    <GoVersions className="icons" />
                    <Link to="/dashboard/cv-writing">CV Writing</Link>
                  </p>
                </Collapsible>
              </li>
              <li>
                <a href="#">
                  <MdSpaceDashboard className="icons" /> Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="content">
          <Container>
            <h1 className="text-dark text-center mb-5">
              Welcome to Admin Dashboard
            </h1>
            <Outlet />
          </Container>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
