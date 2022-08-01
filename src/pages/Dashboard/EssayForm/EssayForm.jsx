import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import data from "../../../data.json";
import "./_essay-form.scss";

const EssayForm = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const url = `http://localhost:5000/orders`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  return (
    <main style={{ overflow: "hidden" }}>
      <div id="dashboard">
        <Container>
          <div className="app-container shadow">
            <form>
              <table>
                <thead>
                  <tr>
                    <th>Length</th>
                    <th>Price</th>
                    <th>Update</th>
                  </tr>
                </thead>
                <tbody>
                  {data.servicesPrice.map((service) => (
                    <tr>
                      <td>
                        <input
                          type="text"
                          name="name"
                          value={service.name}
                          readOnly
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          name="price"
                          required="required"
                          value={service.price}
                        />
                      </td>
                      <td>
                        <input type="submit" value="Update" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </form>
          </div>
        </Container>
      </div>
    </main>
  );
};

export default EssayForm;
