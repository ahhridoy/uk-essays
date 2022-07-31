import React from "react";
import { Container } from "react-bootstrap";
import "./_dashboard-form.scss";

const DashboardForm = () => {
  return (
    <main style={{ overflow: "hidden" }}>
          <div id="dashboard">
            <Container>
              <div className="form-box shadow">
                <form>
                  <h1 className="pb-3 text-white">Essays</h1>
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
    </main>
  );
};

export default DashboardForm;
