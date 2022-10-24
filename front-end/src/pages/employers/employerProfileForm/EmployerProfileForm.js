import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./employerProfileForm.module.css";
const EmployerProfileForm = (props) => {
  const [characterCount, setCharacterCount] = useState(0);
 
  // adding react-hook-forms functionality
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm();

  // const onSubmit = (data) => {
  //   props.setAboutJobSchema(data);
  //   console.log(data);
  //   console.log(data.mobile);
  // };

  // const onError = (errors) => console.log(errors);

  return (
    <section className="container-md" id="jobSeekerProfileForm-AboutSection">
      <form id="jobSeekerProfileForm-About">
        <div className="row m-5">
          <div className="col-md-8">
            {/*<-----------------------------Company name ----------------------------->*/}
            <div className="form-group mb-4">
              <label className="form-label" htmlFor="name">
                Company Name
              </label>
              <div className="input-group">
                <span className="input-group-text">
                  <i className="bi bi-person-fill"></i>
                </span>
                <input
                  className="form-control p-3"
                  id="name"
                  type="text"
                  placeholder={"e.g Le Ciel Bakery"}
                ></input>
              </div>
            </div>
            {/*<-------------------------Who We Are ------------------------->*/}
            <div className="form-group mb-4">
              <label className="form-label" htmlFor="brand">
                Who We Are
              </label>
              <textarea
                className="form-control mb-2 p-3"
                type="text"
                id="brand"
                style={{ height: 200 }}
                placeholder={"Brief introduction about your company"}
              ></textarea>
              <small className="text-muted">{`${
                200 - characterCount
              } / 200 characters left`}</small>
            </div>
      {/*<-----------------------       What We Do ----------------------->*/}
            <div className="form-group mb-4">
              <label className="form-label" htmlFor="brand">
                What We Do
              </label>
              <textarea
                className="form-control mb-2 p-3"
                type="text"
                id="brand"
                style={{ height: 200 }}
                placeholder={"Brief description about what your company does"}
              ></textarea>
              <small className="text-muted">{`${
                200 - characterCount
              } / 200 characters left`}</small>             
            </div>
            {/*<---------------------------Experience Working with Differently-abled Persons--------------------------->*/}
            <div className="form-group mb-4">
              <label className="form-label" htmlFor="brand">
              Experience Working with Differently-abled Persons
              </label>
              <textarea
                className="form-control mb-2 p-3"
                type="text"
                id="brand"
                style={{ height: 200 }}
                placeholder={"Brief description of your company's experience working with differently abled persons"}
              ></textarea>
              <small className="text-muted">{`${
                200 - characterCount
              } / 200 characters left`}</small>            
            </div>
            </div>
          {/*<-------------------------- empty col -------------------------->*/}
          <div className="col-md-1"></div>
          {/* <------------------------ side panel ------------------------> */}
          <div className="col-md-3">
            <div className=" sidePanel row mt-5">
              <button
                type="submit"
                className={`${styles.side_buttons} mt-3 mb-4 p-3`}
              >
                Save Changes
              </button>
              <button className={`${styles.side_buttons} mb-4 p-3`}>
                Cancel
              </button>
              {/* <--------------------- progress bar ---------------------> */}
              <div className="form-group">
                <div className={`${styles.progress} progress mb-1`}>
                  <div
                    className={styles.progress_bar}
                    role="progressbar"
                    style={{ width: "10%" }}
                    aria-valuenow="10"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <small className="text-muted" htmlFor="progress-bar">
                  10% complete
                </small>
              </div>
            </div>
          </div>
        
        {/*<----------------------- proceed next btn ----------------------->*/}
        <div className="row justify-content-center m-5">
          <button
            className={`${styles.bottom_button} p-3`}
          >
            Upload Profile
          </button>
        </div>
        </div>
      </form>
    </section>
  );
};

export default EmployerProfileForm;
