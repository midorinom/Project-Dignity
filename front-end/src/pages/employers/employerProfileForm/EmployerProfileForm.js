import React, { useState, useContext } from "react";
import UserContext from "../../../context/userContext";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styles from "./employerProfileForm.module.css";
const EmployerProfileForm = (props) => {
  const [employerProfile, setEmployerProfile] = useState();
  const [whoWeAreCharacterCount, setWhoWeAreCharacterCount] = useState(0);
  const [whatWeDoCharacterCount, setwhatWeDoCharacterCount] = useState(0);
  const [workingWithDiffCharacterCount, setworkingWithDiffCharacterCount] =
    useState(0);
  const [accessibilityCharacterCount, setAccessibilityCharacterCount] =
    useState(0);
  const [sectionSaved, setSectionSaved] = useState();

  const userCtx = useContext(UserContext);

  // adding react-hook-forms functionality
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setEmployerProfile(data);
    console.log(data);
  };

  const onError = (errors) => console.log(errors);

  const navigate = useNavigate();

  //Update employerprofile
  const createEmployerprofile = async (req, res) => {
    if (employerProfile) {
      try {
        const res = await fetch("http://127.0.0.1:5001/api/employers/update", {
          method: "PATCH",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({
            id: userCtx.userDetails.id,
            profile: employerProfile,
          }),
        });
        const createdEmployerProfile = await res.json();
        console.log(createdEmployerProfile);
        userCtx.setUserDetails((prevState) => {
          return { ...prevState, profileCompleted: true };
        });
        navigate("/profile");
      } catch (err) {
        console.log(err);
      }
    } else {
      alert("Please save your changes");
    }
  };

  return (
    <section className="container-md" id="jobSeekerProfileForm-AboutSection">
      <form
        id="jobSeekerProfileForm-About"
        onSubmit={handleSubmit(onSubmit, onError)}
      >
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
                  {...register("company", {
                    required: {
                      value: true,
                      message: "Name of company is required",
                    },
                  })}
                ></input>
              </div>
              <p className="mt-2 text-danger">{errors.company?.message}</p>
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
                {...register("whoWeAre", {
                  required: {
                    value: true,
                    message:
                      "Brief introduction about your company is required",
                  },
                  maxLength: 200,
                  onChange: (e) =>
                    setWhoWeAreCharacterCount(e.target.value.length),
                })}
              ></textarea>
              <small className="text-muted">{`${
                200 - whoWeAreCharacterCount
              } / 200 characters left`}</small>
              <p className="mt-2 text-danger">{errors.whoWeAre?.message}</p>
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
                {...register("whatWeDo", {
                  required: {
                    value: true,
                    message:
                      "Brief introduction about what your company does is required",
                  },
                  maxLength: 200,
                  onChange: (e) =>
                    setwhatWeDoCharacterCount(e.target.value.length),
                })}
              ></textarea>
              <small className="text-muted">{`${
                200 - whatWeDoCharacterCount
              } / 200 characters left`}</small>
              <p className="mt-2 text-danger">{errors.whatWeDo?.message}</p>
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
                placeholder={
                  "Brief description of your company's experience working with differently abled persons"
                }
                {...register("experience", {
                  required: {
                    value: true,
                    message:
                      "Brief description of your company's experience working with differently abled persons is required",
                  },
                  maxLength: 200,
                  onChange: (e) =>
                    setworkingWithDiffCharacterCount(e.target.value.length),
                })}
              ></textarea>
              <small className="text-muted">{`${
                200 - workingWithDiffCharacterCount
              } / 200 characters left`}</small>
              <p className="mt-2 text-danger">{errors.experience?.message}</p>
            </div>
            {/*<---------------------------Location--------------------------->*/}
            <div className="form-group mb-4">
              <label className="form-label" htmlFor="location">
                Location
              </label>
              <div className="input-group">
                <span className="input-group-text">
                  <i className="bi bi-geo-alt-fill"></i>
                </span>
                <input
                  className="form-control p-3"
                  id="location"
                  type="text"
                  placeholder={"e.g Blk 573 Jurong West #10-222 560722"}
                  {...register("location", {
                    required: {
                      value: true,
                      message: "Location of company is required",
                    },
                  })}
                ></input>
              </div>
              <p className="mt-2 text-danger">{errors.location?.message}</p>
            </div>

            {/*<---------------------------Acessibility--------------------------->*/}
            <div className="form-group mb-4">
              <label className="form-label" htmlFor="accessibility">
                Accessibility
              </label>
              <textarea
                className="form-control mb-2 p-3"
                type="text"
                id="accessibility"
                style={{ height: 200 }}
                placeholder={
                  "Brief description of the accessibility of your company's location"
                }
                {...register("accessibility", {
                  required: {
                    value: true,
                    message:
                      "Brief description of the accessibility of your company's location is required",
                  },
                  maxLength: 200,
                  onChange: (e) =>
                    setAccessibilityCharacterCount(e.target.value.length),
                })}
              ></textarea>
              <small className="text-muted">{`${
                200 - accessibilityCharacterCount
              } / 200 characters left`}</small>
              <p className="mt-2 text-danger">
                {errors.accessibility?.message}
              </p>
            </div>
            {/*<---------------------------Contact--------------------------->*/}
            <div className="form-group mb-4">
              <label className="form-label" htmlFor="contact">
                Contact
              </label>
              <div className="input-group">
                <span className="input-group-text">
                  <i className="bi bi-telephone-fill"></i>
                </span>
                <input
                  className="form-control p-3"
                  id="contact"
                  type="text"
                  placeholder={"e.g 81268900"}
                  {...register("contact", {
                    required: {
                      value: true,
                      message: "Name of company is required",
                    },
                  })}
                ></input>
              </div>
              <p className="mt-2 text-danger">{errors.contact?.message}</p>
            </div>

            {/*<---------------------------Email--------------------------->*/}
            <div className="form-group mb-4">
              <label className="form-label" htmlFor="email">
                Email
              </label>
              <div className="input-group">
                <span className="input-group-text">
                  <i className="bi bi-envelope"></i>
                </span>
                <input
                  className="form-control p-3"
                  id="email"
                  type="text"
                  placeholder={"e.g LeCielBakery@gmail.com"}
                  {...register("email", {
                    required: {
                      value: true,
                      message: "email of company is required",
                    },
                  })}
                ></input>
              </div>
              <p className="mt-2 text-danger">{errors.email?.message}</p>
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
                onClick={() => {
                  setSectionSaved(true);
                }}
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
              type="submit"
              className={`${styles.bottom_button} p-3`}
              onClick={createEmployerprofile}
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
