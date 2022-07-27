import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Container } from "react-bootstrap";
import "./_dashboard-form.scss";

const DashboardForm = () => {
  return (
    <main style={{ overflow: "hidden" }}>
      <div id="home-dashboard">
        <Sidebar />
        <div className="home-container">
          {/* <TopBar />
          <Header /> */}
          <div id="category">
            <Container>
              <div className="category-header">
                <span>This Essays </span>
              </div>
              <div className="form-box">
                <form>
                  <h4>Essays</h4>
                  <input
                    placeholder="Number of Page"
                    type="text"
                    className="input-form shadow"
                  />{" "}
                  <br />
                  <input
                    placeholder="Number of Price"
                    type="text"
                    className="input-form shadow"
                  />{" "}
                  <br />
                  <button type="submit" className="button shadow">
                    Add
                  </button>
                </form>
                
              </div>
            </Container>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DashboardForm;
