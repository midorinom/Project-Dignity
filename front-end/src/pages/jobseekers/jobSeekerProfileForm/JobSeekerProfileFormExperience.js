import React, { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import styles from "./jobSeekerProfileForm.module.css";

const JobSeekerProfileFormExperience = (props) => {
  const [characterCount, setCharacterCount] = useState(0);

  function goToEducation() {
    props.setCurrentPage("Education");
  }

  // adding react-hook-forms functionality
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      experienceSet: [
        {
          title: "",
          type: "",
          company: "",
          startDate: "",
          endDate: "",
          jobDesc: "",
        },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "experienceSet", // an array of objects
  });

  const onSubmit = (data) => {
    props.setExperienceSchema(data.experienceSet);
    console.log("data: ", data.experienceSet);
    console.log(data.experienceSet[0].title);
  };

  const onError = (errors) => console.log(errors);

  return (
    <section
      className="container-md"
      id="jobSeekerProfileForm-ExperienceSection"
    >
      <form
        onSubmit={handleSubmit(onSubmit, onError)}
        id="jobSeekerProfileForm-Experience"
      >
        <div className="row m-5">
          <div className="col-md-8">
            {/* -------------------- add new experience object -------------------- */}
            {fields.map((item, index) => {
              return (
                <div key={item.id}>
                  {/*<-------------------------- job title -------------------------->*/}
                  <div className="form-group mb-4">
                    <label className="form-label" htmlFor="job-title">
                      Job Title
                    </label>
                    <input
                      className="form-control p-3"
                      id="job-title"
                      name={`experienceSet.${index}.title`}
                      type="text"
                      placeholder={"e.g Cataloguing Assistant"}
                      {...register(`experienceSet.${index}.title`, {
                        required: {
                          value: true,
                          message: "Job title is required",
                        },
                      })}
                    ></input>
                    {errors?.experienceSet?.[index]?.title && (
                      <p className="mt-2 text-danger">
                        {errors.experienceSet[index].title.message}
                      </p>
                    )}
                  </div>
                  {/*<-------------------------- job type -------------------------->*/}
                  <div className="form-group mb-4">
                    <label className="form-label" htmlFor="job-type">
                      Job Type
                    </label>
                    <select
                      className="form-select p-3"
                      id="job-type"
                      name={`experienceSet.${index}.type`}
                      {...register(`experienceSet.${index}.type`, {
                        required: {
                          value: true,
                          message:
                            "Job type is required, please select one option",
                        },
                      })}
                    >
                      <option value="">Select from drop down list</option>
                      <option value="Baker">Baker</option>
                      <option value="Barista">Barista</option>
                      <option value="Cashier">Cashier</option>
                      <option value="Packer">Packer</option>
                      <option value="Waiter">Waiter</option>
                    </select>
                    {errors?.experienceSet?.[index]?.type && (
                      <p className="mt-2 text-danger">
                        {errors.experienceSet[index].type.message}
                      </p>
                    )}
                  </div>
                  {/*<------------------------ company name ------------------------>*/}
                  <div className="form-group mb-4">
                    <label className="form-label" htmlFor="company-name">
                      Company Name
                    </label>
                    <input
                      className="form-control p-3"
                      id="company-name"
                      name={`experienceSet.${index}.company`}
                      type="text"
                      placeholder="e.g. Starbucks"
                      {...register(`experienceSet.${index}.company`, {
                        required: {
                          value: true,
                          message: "Company name is required",
                        },
                      })}
                    ></input>
                    {errors?.experienceSet?.[index]?.company && (
                      <p className="mt-2 text-danger">
                        {errors.experienceSet[index].company.message}
                      </p>
                    )}
                  </div>
                  {/*<------------------------- start date ------------------------->*/}
                  <div className="form-group mb-4">
                    <label className="form-label" htmlFor="start-date-job">
                      Start Date
                    </label>
                    <input
                      className="form-control p-3"
                      id="start-date-job"
                      name={`experienceSet.${index}.startDate`}
                      type="date"
                      {...register(`experienceSet.${index}.startDate`, {
                        required: {
                          value: true,
                          message: "Start date is required",
                        },
                      })}
                    ></input>
                    {errors?.experienceSet?.[index]?.startDate && (
                      <p className="mt-2 text-danger">
                        {errors.experienceSet[index].startDate.message}
                      </p>
                    )}
                  </div>
                  {/*<-------------------------- end date -------------------------->*/}
                  <div className="form-group mb-4">
                    <label className="form-label" htmlFor="end-date-job">
                      End Date
                    </label>
                    <input
                      className="form-control mb-2 p-3"
                      id="end-date-job"
                      name={`experienceSet.${index}.endDate`}
                      type="date"
                      {...register(`experienceSet.${index}.endDate`)}
                    ></input>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="flexCheckDefault-experience"
                      ></input>
                      <label
                        className="form-check-label text-muted"
                        htmlFor="flexCheckDefault-experience"
                      >
                        I am currently working here
                      </label>
                    </div>
                  </div>
                  {/*<---------------------- job description ---------------------->*/}
                  <div className="form-group mb-4">
                    <label className="form-label" htmlFor="job-description">
                      Description
                    </label>
                    <textarea
                      className="form-control mb-2 p-3"
                      type="text"
                      id="job-description"
                      name={`experienceSet.${index}.jobDesc`}
                      style={{ height: 200 }}
                      placeholder={"Enter here"}
                      {...register(`experienceSet.${index}.jobDesc`, {
                        required: {
                          value: true,
                          message: "Please provide a short description",
                        },
                        maxLength: 200,
                        onChange: (e) =>
                          setCharacterCount(e.target.value.length),
                      })}
                    ></textarea>
                    <small className="text-muted">{`${
                      200 - characterCount
                    } / 200 characters left`}</small>
                  </div>
                  {/*<-------------------- delete skill button -------------------->*/}
                  <div className="form-group align-content-end mb-4">
                    <button
                      type="button"
                      className={`${styles.circle_btn} btn btn-outline-dark btn-sm bi-dash-lg mt-3`}
                      onClick={() => remove(index)}
                    ></button>
                    <label className="form-label" htmlFor="add-new-skill">
                      Delete skill
                    </label>
                  </div>
                  <hr></hr>
                </div>
              );
            })}
            {/*<-------------------- add new experience button -------------------->*/}
            <div className="form-group mb-4">
              <button
                className={`${styles.circle_btn} btn btn-outline-dark btn-sm bi-plus-lg mt-3`}
                onClick={() => append()}
                id="add-new-skill"
              ></button>
              <label className="form-label" htmlFor="add-new-skill">
                Add Another Experience
              </label>
            </div>
          </div>
          {/* <------------------------ empty col -------------------------> */}
          <div className="col-md-1"></div>
          {/* <------------------------ side panel ------------------------> */}
          <div className="col-md-3">
            <div className=" sidePanel sticky-top row mt-5">
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
                    aria-label="Basic example"
                    style={{ width: "75%" }}
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <small className="text-muted" htmlFor="progress-bar">
                  75% complete
                </small>
              </div>
            </div>
          </div>
        </div>
        {/*<----------------------- proceed next btn ----------------------->*/}
        <div className="row justify-content-center m-5">
          <button
            onClick={goToEducation}
            className={`${styles.bottom_button} p-3`}
          >
            Proceed to Education Section
          </button>
        </div>
      </form>
    </section>
  );
};

export default JobSeekerProfileFormExperience;
