import React from "react";
import { useForm } from "react-hook-form";
import { Container } from "react-bootstrap";
import "../EssayForm/_essay-form.scss";

const AssignmentForm = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <main style={{ overflow: "hidden" }}>
      <div id="dashboard">
        <Container>
          <div className="form-box shadow">
            <form onSubmit={handleSubmit(onSubmit)}>
              <h1 className="pb-3 text-white">Assignment</h1>
              <input
                placeholder="Service Name"
                type="text"
                className="input-form shadow"
                {...register("service_name")}
              />
              <br />
              <input
                placeholder="Number of Page"
                type="text"
                className="input-form shadow"
                {...register("page_number", { required: true })}
              />
              <br />
              <input
                placeholder="Number of Price"
                type="text"
                className="input-form shadow"
                {...register("page_price", { required: true })}
              />
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

export default AssignmentForm;
