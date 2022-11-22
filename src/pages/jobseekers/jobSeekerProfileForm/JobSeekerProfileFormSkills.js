import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, useFieldArray } from "react-hook-form";
import styles from "./jobSeekerProfileForm.module.css";
import skillsList from "../../../components/skillList";

const JobSeekerProfileFormSkills = (props) => {
  // console.log(props);

  // when proceed next button is clicked
  function goToAbilityDiff() {
    props.setCurrentPage("Ability Differences");
  }

  // when cancel button is clicked
  const navigate = useNavigate();
  function goToJobSeekerLanding() {
    navigate("/job-seekers");
    alert("Your data are not saved");
  }

  useEffect(() => {
    if (props.profileData !== undefined) {
      for (let i = 0; i < props.profileData.skills.length; i++) {
        setValue(`skillSet.${i}.skill`, props.profileData.skills[i].skill);
        setValue(`skillSet.${i}.cert`, props.profileData.skills[i].cert);
        setValue(`skillSet.${i}.issuer`, props.profileData.skills[i].issuer);
        setValue(
          `skillSet.${i}.issueDate`,
          props.profileData.skills[i].issueDate
        );
      }
    }
  }, []);

  // adding react-hook-forms functionality
  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      skillSet: [
        {
          skill: "",
          cert: "",
          issuer: "",
          issueDate: "",
        },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "skillSet", // an array of objects
  });

  const onSubmit = (data) => {
    props.setSkillsSchema(data.skillSet);
    console.log("data: ", data.skillSet);
    console.log(data.skillSet[0].skill);
  };

  const onError = (errors) => console.log(errors);

  return (
    <section className="container-md" id="jobSeekerProfileForm-SkillsSection">
      <form
        onSubmit={handleSubmit(onSubmit, onError)}
        id="jobSeekerProfileForm-Skills"
      >
        <div className="row m-5">
          <div className="col-md-8">
            {/*<-------------------- add new skillset object -------------------->*/}
            {fields.map((item, index) => {
              return (
                <div key={item.id}>
                  {/*<----------------------------- skill ----------------------------->*/}
                  <div className="form-group mb-4">
                    <label className="form-label" htmlFor="skillset">
                      Skillset
                    </label>
                    <input
                      className="form-control mb-2 p-3"
                      id="skillset"
                      list="skillsOptions"
                      name={`skillSet.${index}.skill`}
                      type="text"
                      placeholder={"Type to search..."}
                      {...register(`skillSet.${index}.skill`, {
                        required: true,
                      })}
                      aria-invalid={
                        errors.skillSet?.[index]?.skill ? "true" : "false"
                      }
                    ></input>
                    <datalist id="skillsOptions">
                      {skillsList.map((skill, index) => {
                        return (
                          <option key={index} value={skill}>
                            {skill}
                          </option>
                        );
                      })}
                    </datalist>
                    {errors?.skillSet?.[index]?.skill?.type === "required" && (
                      <p className="mt-2 text-danger">
                        Skillset is required, please enter a least one skill
                      </p>
                    )}
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="flexCheckDefault-skills"
                      ></input>
                      <label
                        className="form-check-label text-muted mb-4"
                        htmlFor="flexCheckDefault-skills"
                      >
                        I have accreditation for this skill
                      </label>
                    </div>
                    {/*<------------------------ certification ------------------------>*/}
                    {/* to show when accreditation checked */}
                    <div className="form-group mb-4">
                      <label className="form-label" htmlFor="cert-name">
                        Name of Supporting Certificate / License (Optional)
                      </label>
                      <input
                        className="form-control p-3"
                        id="cert-name"
                        name={`skillSet.${index}.cert`}
                        type="text"
                        placeholder={
                          "e.g Google Certificate for Digital Marketing"
                        }
                        {...register(`skillSet.${index}.cert`)}
                      ></input>
                    </div>
                    {/*<-------------------- issuing organisation -------------------->*/}
                    {/* to show when accreditation checked */}
                    <div className="form-group mb-4">
                      <label className="form-label" htmlFor="issuing-org">
                        Issuing Organisation (Optional)
                      </label>
                      <input
                        className="form-control p-3"
                        id="issuing-org"
                        name={`skillSet.${index}.issuer`}
                        type="text"
                        placeholder="e.g. Google"
                        {...register(`skillSet.${index}.issuer`)}
                      ></input>
                    </div>
                    {/*<------------------------ issuing date ------------------------>*/}
                    {/* to show when accreditation checked */}
                    <div className="form-group mb-4">
                      <label className="form-label" htmlFor="issue-date-cert">
                        Issue Date (Optional)
                      </label>
                      <input
                        className="form-control p-3"
                        id="issue-date-cert"
                        name={`skillSet.${index}.issueDate`}
                        type="month"
                        {...register(`skillSet.${index}.issueDate`)}
                      ></input>
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
                  </div>
                  <hr></hr>
                </div>
              );
            })}
            {/*<------------------- add new skill button ------------------->*/}
            <div className="form-group mb-4">
              <button
                className={`${styles.circle_btn} btn btn-outline-dark btn-sm bi-plus-lg mt-3`}
                onClick={() => append()}
                id="add-new-skill"
              ></button>
              <label className="form-label" htmlFor="add-new-skill">
                Add new skill
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
                    aria-label="Basic example"
                    style={{ width: "20%" }}
                    aria-valuenow="10"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <small className="text-muted" htmlFor="progress-bar">
                  20% complete
                </small>
              </div>
            </div>
          </div>
        </div>
        {/*<----------------------- proceed next btn ----------------------->*/}
        <div className="row justify-content-center m-5">
          <button
            onClick={goToAbilityDiff}
            className={`${styles.bottom_button} p-3`}
          >
            Proceed to Ability Differences Section
          </button>
        </div>
      </form>
    </section>
  );
};

export default JobSeekerProfileFormSkills;
