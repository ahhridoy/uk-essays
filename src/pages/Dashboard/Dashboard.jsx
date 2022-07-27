import React from "react";
import { Row, Container } from "react-bootstrap";
import Header from "../../components/Header/Header";
import TopBar from "../../components/Header/TopBar";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./_dashboard.scss";

const Dashboard = () => {
  return (
    <main style={{ overflow: "hidden" }}>
      <div id="home-dashboard">
        <Sidebar />
        <div className="home-container">
          {/* <TopBar />
          <Header /> */}
          <Container>
            <Row>
              <h1 className="text-dark">Welcome to Admin Dashboard</h1>
            </Row>
          </Container>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
