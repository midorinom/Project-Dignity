import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, useFieldArray } from "react-hook-form";
import styles from "./jobSeekerProfileForm.module.css";

const JobSeekerProfileFormEducation = (props) => {
  const [characterCount, setCharacterCount] = useState(0);

  // when complete profile button is clicked
  const navigate = useNavigate();
  function goToProfile() {
    if (!props.sectionSaved) {
      alert("Please save before proceeding to the next section");
    } else {
      console.log(`here`);
      props.setToSaveProfile(true);
    }
    // navigate("/profile");
  }

  // when cancel button is clicked
  function goToJobSeekerLanding() {
    navigate("/job-seekers");
    alert("Your data are not saved");
  }

  useEffect(() => {
    if (props.profileData !== undefined) {
      for (let i = 0; i < props.profileData.education.length; i++) {
        setValue(
          `educationSet.${i}.school`,
          props.profileData.education[i].school
        );
        setValue(`educationSet.${i}.cert`, props.profileData.education[i].cert);
        setValue(
          `educationSet.${i}.startDate`,
          props.profileData.education[i].startDate
        );
        setValue(
          `educationSet.${i}.endDate`,
          props.profileData.education[i].endDate
        );
        setValue(
          `educationSet.${i}.grade`,
          props.profileData.education[i].grade
        );
        setValue(`educationSet.${i}.desc`, props.profileData.education[i].desc);
      }
    }
  });

  // adding react-hook-forms functionality
  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      educationSet: [
        {
          school: "",
          cert: "",
          startDate: "",
          endDate: "",
          grade: "",
          desc: "",
        },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "educationSet", // an array of objects
  });

  const onSubmit = (data) => {
    props.setEducationSchema(data.educationSet);
    console.log("data: ", data.educationSet);
    console.log(data.educationSet[0].school);
  };

  const onError = (errors) => console.log(errors);

  return (
    <section
      className="container-md"
      id="jobSeekerProfileForm-EducationSection"
    >
      <form
        onSubmit={handleSubmit(onSubmit, onError)}
        id="jobSeekerProfileForm-Education"
      >
        <div className="row m-5">
          <div className="col-md-8">
            {/* -------------------- add new education object -------------------- */}
            {fields.map((item, index) => {
              return (
                <div key={item.id}>
                  {/*<---------------------------- school ---------------------------->*/}
                  <div className="form-group mb-4">
                    <label className="form-label" htmlFor="school-name">
                      School
                    </label>
                    <input
                      className="form-control p-3"
                      id="school-name"
                      name={`educationSet.${index}.school`}
                      type="text"
                      placeholder={"e.g Dunman Secondary School"}
                      {...register(`educationSet.${index}.school`, {
                        required: {
                          value: true,
                          message: "Name of school is required",
                        },
                      })}
                    ></input>
                    {errors?.educationSet?.[index]?.school && (
                      <p className="mt-2 text-danger">
                        {errors.educationSet[index].school.message}
                      </p>
                    )}
                  </div>
                  {/*<---------------------- edu qualification ---------------------->*/}
                  <div className="form-group mb-4">
                    <label className="form-label" htmlFor="qualification">
                      Qualification Obtained
                    </label>
                    <input
                      className="form-control p-3"
                      id="qualification"
                      name={`educationSet.${index}.cert`}
                      type="text"
                      placeholder="e.g. GCE 'O'Level Certificate"
                      {...register(`educationSet.${index}.cert`, {
                        required: {
                          value: true,
                          message: "Please enter your qualification",
                        },
                      })}
                    ></input>
                    {errors?.educationSet?.[index]?.cert && (
                      <p className="mt-2 text-danger">
                        {errors.educationSet[index].cert.message}
                      </p>
                    )}
                  </div>
                  {/*<------------------------- start date ------------------------->*/}
                  <div className="form-group mb-4">
                    <label className="form-label" htmlFor="start-date-edu">
                      Start Date
                    </label>
                    <input
                      className="form-control p-3"
                      id="start-date-edu"
                      name={`educationSet.${index}.startDate`}
                      type="month"
                      {...register(`educationSet.${index}.startDate`)}
                    ></input>
                  </div>
                  {/*<-------------------------- end date -------------------------->*/}
                  <div className="form-group mb-4">
                    <label className="form-label" htmlFor="end-date-edu">
                      End Date (Or Expected)
                    </label>
                    <input
                      className="form-control mb-2 p-3"
                      id="end-date-edu"
                      name={`educationSet.${index}.endDate`}
                      type="month"
                      {...register(`educationSet.${index}.endDate`, {
                        required: {
                          value: true,
                          message:
                            "Please enter your graduation date or expected graduation date",
                        },
                      })}
                    ></input>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="flexCheckDefault-edu"
                      ></input>
                      <label
                        className="form-check-label text-muted"
                        htmlFor="flexCheckDefault-edu"
                      >
                        I am currently studying here
                      </label>
                    </div>
                    {errors?.educationSet?.[index]?.endDate && (
                      <p className="mt-2 text-danger">
                        {errors.educationSet[index].endDate.message}
                      </p>
                    )}
                  </div>
                  {/*<---------------------- edu qualification ---------------------->*/}
                  <div className="form-group mb-4">
                    <label className="form-label" htmlFor="grade">
                      Grade (Optional)
                    </label>
                    <input
                      className="form-control p-3"
                      id="qualification"
                      name={`educationSet.${index}.grade`}
                      type="text"
                      placeholder="e.g. A"
                      {...register(`educationSet.${index}.grade`)}
                    ></input>
                  </div>
                  {/*<---------------------- edu description ---------------------->*/}
                  <div className="form-group mb-4">
                    <label className="form-label" htmlFor="edu-description">
                      Description (Optional)
                    </label>
                    <textarea
                      className="form-control mb-2 p-3"
                      type="text"
                      id="edu-description"
                      name={`educationSet.${index}.desc`}
                      style={{ height: 200 }}
                      placeholder={"Enter here"}
                      {...register(`educationSet.${index}.desc`, {
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
            {/*<-------------------- add new education button -------------------->*/}
            <div className="form-group mb-4">
              <button
                className={`${styles.circle_btn} btn btn-outline-dark btn-sm bi-plus-lg mt-3`}
                onClick={() => append()}
                id="add-new-edu"
              ></button>
              <label className="form-label" htmlFor="add-new-edu">
                Add Another Education Qualification
              </label>
            </div>
          </div>
          {/* <------------------------ empty col -------------------------> */}
          <div className="col-md-1"></div>
          {/* <------------------------ side panel ------------------------> */}
          <div className="col-md-3">
            <div className=" sidePanel sticky-top row mt-5">
              <button
                className={`${styles.side_buttons} mt-3 mb-4 p-3`}
                onClick={() => {
                  // props.setToSaveProfile(true);
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
                    style={{ width: "90%" }}
                    aria-valuenow="90"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <small className="text-muted" htmlFor="progress-bar">
                  90% complete
                </small>
              </div>
            </div>
          </div>
        </div>
        {/*<------------------------- complete btn ------------------------->*/}
        <div className="row justify-content-center m-5">
          <button
            onClick={goToProfile}
            className={`${styles.bottom_button} p-3`}
            type="submit"
          >
            Complete Profile
          </button>
        </div>
      </form>
    </section>
  );
};

export default JobSeekerProfileFormEducation;
