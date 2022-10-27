import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./jobPostForm.module.css";
import { useForm, useFieldArray } from "react-hook-form";
import surveyedSkills from "../../../components/skillList";
import SkillsetsCard from "../../jobseekers/jobSeekerProfile/resume/SkillsetsCard";

const JobAbout = (props) => {
  const [accessibilityCharacterCount, setAccessibilityCharacterCount] =
    useState(0);

  // proceeds to accessibility considerstions when next is clicked
  function goToAccessibility() {
    if (!props.sectionSaved) {
      alert("Please save before proceeding to the next section");
    } else {
      props.setCurrentPage("Accessibilty Considerations");
    }
  }

  const navigate = useNavigate();

  //react-hook-forms functionality
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      tasks: [{ taskItem: "" }],
      skills: [""],
    },
  });

  const {
    fields: fieldTask,
    append: appendTask,
    remove: removeTask,
  } = useFieldArray({
    control,
    name: "tasks",
  });

  const {
    fields: fieldSkills,
    append: appendSkills,
    remove: removeSkills,
  } = useFieldArray({
    control,
    name: "skills",
  });

  const onSubmit = (data) => {
    let revisedData = [];
    for (let i = 0; i < data.tasks.length; i++) {
      if (i === 0) {
        revisedData.push(Object.values(data.tasks[i])[1]);
      } else {
        revisedData.push(Object.values(data.tasks[i])[0]);
      }
    }
    console.log(revisedData);
    data.tasks = revisedData;
    console.log(data);
    props.setAboutJobSchema(data);
  };

  const onError = (errors) => console.log(errors);

  return (
    <>
      {/* =====================================================
        FORM ABOUT JOB
        ========================================================= */}
      <section classname="container-md" id="AboutEmployer">
        <form id="About Job" onSubmit={handleSubmit(onSubmit, onError)}>
          <div className="row m-5 text-start">
            <div className="col-md-6">
              {/*================================== Job Title and Job Type ================================== */}
              <label className="form-label ms-3" htmlFor="name">
                Job Title
              </label>
              <label className={`${styles.label} form label`} htmlFor="name">
                Job Type
              </label>
              <div className={`form-group mb-4 ${styles.range}`}>
                <input
                  type="text"
                  className="form-control p-3"
                  id="name"
                  placeholder="e.g Assistant Chef"
                  {...register("title", {
                    required: {
                      value: true,
                      message: "Please include job title",
                    },
                  })}
                />
                <select
                  type="text"
                  className={`form-group form-select ms-5 p-3 ${styles.range}`}
                  id="JobType"
                  {...register("type", {
                    required: {
                      value: true,
                      message: "Please select one option",
                    },
                  })}
                >
                  <option className="default" selected>
                    Select from the drop down list
                  </option>
                  <option value="Full-Time">Full-Time</option>
                  <option value="Part-Time">Part-Time</option>
                  <option value="Internship">Internship</option>
                  <option value="Mentorship">Mentorship</option>
                </select>
              </div>
              <div>
                <p className="mt-2 text-danger">{errors.title?.message}</p>
                <p className="mt-2 text-danger">{errors.type?.message}</p>
              </div>
              {/* ================================================================================================== */}
              {/*======================================Interaction Type ================================== */}
              <div className="form-group mb-4">
                <label className="form-label" htmlFor="Job Interaction Type">
                  Job Interaction Type
                </label>
              </div>
              <div className="form-check mb-4">
                <input
                  className="flexRadioDefault m-2"
                  type="radio"
                  value={true}
                  id="flexRadioDefault1"
                  {...register("customerFacing", {
                    required: {
                      value: true,
                      message: "Please select at least one option",
                    },
                  })}
                />
                <label className="form-check-label" htmlfor="flexCheckDefault">
                  Customer Facing Jobs that involve interacting with customers
                  directly.
                  <br />
                  Example: Cashier, Receptionist, Service Staff
                </label>
              </div>
              <div className="form-check mb-4">
                <input
                  className="flexRadioDefault m-2"
                  type="radio"
                  value={false}
                  id="flexRadioDefault"
                  {...register("customerFacing", {
                    required: {
                      value: true,
                      message: "Please select at least one option",
                    },
                  })}
                />
                <label className="form-check-label" htmlfor="flexCheckDefault">
                  Non-Customer Facing Jobs that do not involve interacting with
                  customers directly.
                  <br />
                  Example: Cooks, Administrators, Analysts
                </label>
              </div>
              <p className="mt-2 text-danger">
                {errors.customerFacing?.message}
              </p>

              {/* ================================================================================================== */}
              {/*======================================Job Description ============================================ */}
              <div className="form-group mb-4">
                <label for="JobDescription" className="JobDescription mb-2">
                  Job Description
                </label>
                <textarea
                  className="form-control p-3"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Tip: Keep it simple!"
                  {...register("desc", {
                    required: {
                      value: true,
                      message: "Please include a brief description",
                    },
                  })}
                ></textarea>
              </div>
              <p className="mt-2 text-danger">{errors.desc?.message}</p>
              {/* ================================================================================================== */}
              {/*============================================Job Tasks ============================================ */}
              <div className="form-group mb-2">
                      <label className="form-label" htmlFor="Job Tasks">
                        Job Tasks
                      </label>
              {fieldTask.map((item, index) => {
                return (
                  <div key={item.id}>
                      <input
                        type="text"
                        className="form-control p-3"
                        id="Job Tasks"
                        name={`tasks.${index}.tasksItem`}
                        placeholder="Insert Task"
                        {...register(`tasks.${index}.tasksItem`, {
                          required: {
                            value: true,
                            message: "Please include at least one task",
                          },
                        })}
                      />
                    {/*<-------------------- delete task  button -------------------->*/}
                    <div className="form-group align-content-end mb-4">
                      <button
                        type="button"
                        className={`${styles.circle_btn} btn btn-outline-dark btn-sm bi-dash-lg mt-3`}
                        onClick={() => removeTask(index)}
                      ></button>
                      <label className="form-label" htmlFor="add-new-skill">
                        Delete Task
                      </label>
                    </div>
                    <hr></hr>
                  </div>
                );
              })}
              {/*<-------------------- add new task button -------------------->*/}

              <div className="form-group mb-4">
                <button
                  className={`${styles.circle_btn} btn btn-outline-dark btn-sm bi-plus-lg mt-3`}
                  onClick={() => appendTask()}
                  id="add-new-edu"
                ></button>
                <label className="form-label" htmlFor="add-new-edu">
                  Add Another Task
                </label>
              </div>
              </div>
              <p className="mt-2 text-danger">{errors.tasks?.message}</p>
              {/* ================================================================================================== */}
              {/*============================================ Skills ============================================ */}
              <div className="form-group mb-2">
                <label className="form-label" htmlFor="Job Tasks">
                  Skills
                </label>
                {fieldSkills.map((item, index) => {
                  return (
                    <div key={item.id}>
                      <input
                        list="skills"
                        className="form-control mb-4 p-3"
                        id="skills"
                        name={`skills${[index]}`}
                        placeholder="Insert Skill"
                        {...register(`skills[${[index]}]`, {
                          required: {
                            value: true,
                            message: "Please include at least one skills",
                          },
                        })}
                      />
                      <datalist id="skills">
                        {surveyedSkills.map((skill) => {
                          return <option value={skill}>{skill}</option>;
                        })}
                      </datalist>
                      <div className="form-group align-content-end mb-4">
                        <button
                          type="button"
                          className={`${styles.circle_btn} btn btn-outline-dark btn-sm bi-dash-lg mt-3`}
                          onClick={() => removeSkills(index)}
                        ></button>
                        <label className="form-label" htmlFor="deleteSkills">
                          Delete Skill
                        </label>
                      </div>
                      <hr></hr>
                    </div>
                  );
                })}
                <div className="form-group mb-4">
                  <button
                    className={`${styles.circle_btn} btn btn-outline-dark btn-sm bi-plus-lg mt-3`}
                    onClick={() => appendSkills()}
                    id="addSkills"
                  ></button>
                  <label className="form-label" htmlFor="addSkills">
                    Add Another Skill
                  </label>
                </div>
              </div>
              {/*============================================Expected Salary ============================================ */}
              <div className="form-group mb-4">
                <label className="form-label" htmlFor="Job Tasks">
                  Expected Salary
                </label>
                <input
                  type="text"
                  className="form-control mb-2 p-3"
                  id="minimum"
                  placeholder="Minimum"
                  {...register("minSalary", {
                    required: {
                      value: true,
                      message: "Please include minimum salary",
                    },
                  })}
                />
                <p>to</p>
                <input
                  type="text"
                  className="form-control mt-2 p-3"
                  id="maximum"
                  placeholder="Maximum"
                  {...register("maxSalary", {
                    required: {
                      value: true,
                      message: "Please include maximum salary",
                    },
                  })}
                />
              </div>
              <p className="mt-2 text-danger">{errors.minSalary?.message}</p>
              <p className="mt-2 text-danger">{errors.maxSalary?.message}</p>
              {/* ================================================================================================== */}
              {/*==================================================Address ============================================ */}
              <div className="form-check mb-4">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value={true}
                  id="flexCheckDefault"
                  {...register("locationSame", {
                    required: {
                      value: false,
                    },
                  })}
                />
                <label className="form-check-label" htmlfor="flexCheckDefault">
                  Location of job is same as office address
                </label>
              </div>
              <div className="form-check mb-4">
                <label className="form-label" htmlFor="Job Tasks">
                  Postal Code
                </label>
                <input
                  type="text"
                  className="form-control p-3"
                  id="postalCode"
                  placeholder="E.g 730712"
                  {...register("postalCode", {
                    required: {
                      value: true,
                      message: "Please include postal code",
                    },
                  })}
                />
              </div>
              <p className="mt-2 text-danger">{errors.postalCode?.message}</p>
              <div className="form-check mb-4">
                <label className="form-label" htmlFor="Block/StreetNumber">
                  Block/Street Number
                </label>
                <input
                  type="text"
                  className="form-control p-3"
                  id="block/streetNumber"
                  placeholder="E.g Blk 712"
                  {...register("block", {
                    required: {
                      value: true,
                      message: "Please include Block/Street Number ",
                    },
                  })}
                />
              </div>
              <p className="mt-2 text-danger">{errors.block?.message}</p>
              <div className="form-check mb-4">
                <label className="form-label" htmlFor="Unit Number">
                  Unit Number, <span>if applicable</span>
                </label>

                <input
                  type="text"
                  className="form-control p-3"
                  id="unitNumber"
                  placeholder="E.g 10-234"
                  {...register("unit", {
                    required: {
                      value: true,
                      message: "Please include Unit Number ",
                    },
                  })}
                />
              </div>
              <p className="mt-2 text-danger">{errors.unit?.message}</p>
              <div className="form-check mb-4">
                <label for="Accessibility" class="Accessibility">
                  Accessibility of Job Location
                </label>
                <textarea
                  className="form-control mb-4 p-3"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="
                    Some question to consider:&#10;- What transport might an employee have to take to reach the workplace? &#10;- Is there sufficient space for the use of mobility devices such as wheelchairs?"
                  {...register("accessibility", {
                    required: {
                      value: true,
                      message: "Please include a brief description",
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
              {/* ================================================================================================== */}
              <button
                type="button"
                class="btn btn-dark mt-3"
                onClick={goToAccessibility}
              >
                Proceed to 'Accessibility Consideration Section'{" "}
              </button>
            </div>
            <div className="col-md-2"></div>
            <div className="col-md-4">
              <div className={`${styles.sideButtonsContainer}`}>
                <button
                  className={`${styles.sideButtons} sidebuttons mt-3 mb-4 p-3`}
                  onClick={props.setSectionSaved}
                  type="submit"
                >
                  Save as Draft
                </button>
                <button
                  className={`${styles.sideButtons} sidebuttons mt-3 mb-4 p-3`}
                >
                  Cancel
                </button>
                <div className="form-group">
                  <div className={`${styles.progress} progress mb-1`}>
                    <div
                      className={styles.progressBar}
                      role="progressbar"
                      style={{ width: "90%" }}
                      aria-valuenow="90"
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
        </form>
      </section>
    </>
  );
};

export default JobAbout;
