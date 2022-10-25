import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import styles from "./jobSeekerProfileForm.module.css";

const JobSeekerProfileFormAbout = (props) => {
  const [characterCount, setCharacterCount] = useState(0);

  console.log(`section saved state: `, props.sectionSaved);

  // when proceed next button is clicked
  function goToSkills() {
    if (!props.sectionSaved) {
      alert("Please save before proceeding to the next section");
    } else {
      props.setCurrentPage("Skills");
    }
  }

  // when cancel button is clicked
  const navigate = useNavigate();
  function goToJobSeekerLanding() {
    navigate("/job-seekers");
    alert("Your data are not saved");
  }

  useEffect(() => {
    if (props.profileData !== undefined) {
      const fields = ["name", "aspiration", "brand", "email", "mobile"];
      fields.forEach((field) =>
        setValue(field, props.profileData.about[field])
      );
    }
  });

  // adding react-hook-forms functionality
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    props.setAboutSchema(data);
    console.log(data);
    console.log(data.mobile);
  };

  const onError = (errors) => console.log(errors);

  return (
    <section className="container-md" id="jobSeekerProfileForm-AboutSection">
      <form
        onSubmit={handleSubmit(onSubmit, onError)}
        id="jobSeekerProfileForm-About"
      >
        <div className="row m-5">
          <div className="col-md-8">
            {/*<----------------------------- name ----------------------------->*/}
            <div className="form-group mb-4">
              <label className="form-label" htmlFor="name">
                Full Name
              </label>
              <div className="input-group">
                <span className="input-group-text">
                  <i className="bi bi-person-fill"></i>
                </span>
                <input
                  className="form-control p-3"
                  id="name"
                  type="text"
                  placeholder={"e.g Tan Li Choon"}
                  {...register("name", { required: true })}
                  aria-invalid={errors.name ? "true" : "false"}
                ></input>
              </div>
              {errors?.name?.type === "required" && (
                <p className="mt-2 text-danger">Full name is required</p>
              )}
            </div>
            {/*<------------------------- aspiration ------------------------->*/}
            <div className="form-group mb-4">
              <label className="form-label" htmlFor="aspiration">
                Aspiration
              </label>
              <input
                className="form-control p-3"
                id="aspiration"
                type="text"
                placeholder={"e.g Librarian"}
                {...register("aspiration", { required: true })}
                aria-invalid={errors.aspiration ? "true" : "false"}
              ></input>
              {errors?.aspiration?.type === "required" && (
                <p className="mt-2 text-danger">Aspiration is required</p>
              )}
            </div>
            {/*<----------------------- brand statement ----------------------->*/}
            <div className="form-group mb-4">
              <label className="form-label" htmlFor="brand">
                Personal Brand Statement
              </label>
              <textarea
                className="form-control mb-2 p-3"
                type="text"
                id="brand"
                style={{ height: 200 }}
                placeholder={"Enter here"}
                {...register("brand", {
                  required: true,
                  maxLength: 200,
                  onChange: (e) => setCharacterCount(e.target.value.length),
                })}
                aria-invalid={errors.brand ? "true" : "false"}
              ></textarea>
              <small className="text-muted">{`${
                200 - characterCount
              } / 200 characters left`}</small>
              {errors?.brand?.type === "required" && (
                <p className="mt-2 text-danger">
                  Personal brand statement is required
                </p>
              )}
            </div>
            {/*<--------------------------- email --------------------------->*/}
            <div className="form-group mb-4">
              <label className="form-label" htmlFor="email">
                Contact Email
              </label>
              <div className="input-group">
                <span className="input-group-text">
                  <i className="bi bi-envelope-fill"></i>
                </span>
                <input
                  className="form-control p-3"
                  id="email"
                  type="email"
                  placeholder="e.g. tanlichoon@gmail.com"
                  {...register("email", {
                    required: true,
                    pattern: /^\S+@\S+$/i,
                  })}
                  aria-invalid={errors.email ? "true" : "false"}
                ></input>
              </div>
              {errors?.email?.type === "required" && (
                <p className="mt-2 text-danger">Email is required</p>
              )}
            </div>
            {/*<--------------------------- phone --------------------------->*/}
            <div className="form-group mb-4">
              <label className="form-label" htmlFor="mobile">
                Contact Number
              </label>
              <div className="input-group">
                <span className="input-group-text">
                  <i className="bi bi-telephone-fill"></i>
                </span>
                <input
                  className="form-control p-3"
                  id="mobile"
                  type="text"
                  placeholder="e.g. 92732719"
                  {...register("mobile", { required: true, maxLength: 8 })}
                  aria-invalid={errors.mobile ? "true" : "false"}
                ></input>
              </div>
              {errors?.mobile?.type === "required" && (
                <p className="mt-2 text-danger">Contact number is required</p>
              )}
            </div>
          </div>
          {/*<-------------------------- empty col -------------------------->*/}
          <div className="col-md-1"></div>
          {/* <------------------------ side panel ------------------------> */}
          <div className="col-md-3">
            <div className=" sidePanel sticky-top row mt-5">
              <button
                type="submit"
                className={`${styles.side_buttons} mt-3 mb-4 p-3`}
                onClick={() => {
                  props.setSectionSaved(true);
                }}
              >
                Save Changes
              </button>
              <button
                className={`${styles.side_buttons} mb-4 p-3`}
                onClick={goToJobSeekerLanding}
              >
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
        </div>
        {/*<----------------------- proceed next btn ----------------------->*/}
        <div className="row justify-content-center m-5">
          <button
            onClick={goToSkills}
            className={`${styles.bottom_button} p-3`}
          >
            Proceed to Skills Section
          </button>
        </div>
      </form>
    </section>
  );
};

export default JobSeekerProfileFormAbout;
