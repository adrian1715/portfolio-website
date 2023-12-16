import React, { useState } from "react";
import Modal from "../components/Modal";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function NewPerson() {
  // const [isModalOpen, setIsModalOpen] = useState(false)
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  //   console.log(watch());
  //   console.log(errors);

  async function submitHandler(formData) {
    console.log("submitted data: ", formData);

    axios
      .post("http://localhost:8000/api/people", formData)
      .catch((err) => console.log(err));

    navigate("..");
    reset();
  }

  return (
    <Modal>
      <form action="" onSubmit={handleSubmit(submitHandler)}>
        <div className="d-flex align-items-start">
          <label htmlFor="">
            <input
              type="text"
              placeholder="Name"
              className={errors.name && "invalid"}
              {...register("name", { required: "Insert a name!" })}
            />
            {errors.name && <p className="m-0">{errors.name.message}</p>}
          </label>
          <label htmlFor="">
            <input
              type="number"
              placeholder="Age"
              className={errors.age && "invalid"}
              {...register("age", { required: "Insert an age!" })}
            />
            {errors.age && <p className="m-0">{errors.age.message}</p>}
          </label>

          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => navigate("..")}
          >
            Cancel
          </button>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </Modal>
  );
}
