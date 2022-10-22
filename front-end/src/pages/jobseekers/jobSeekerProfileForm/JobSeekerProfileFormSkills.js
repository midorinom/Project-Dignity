import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
// import JobSeekerNewSkill from "./JobSeekerNewSkill";
import styles from "./jobSeekerProfileForm.module.css";

const JobSeekerProfileFormSkills = (props) => {
  // console.log(props);

  function goToAbilityDiff() {
    props.setCurrentPage("Ability Differences");
  }

  // // adding a new skills block when add more skills button is clicked
  // const [addNewSkill, setAddNewSkill] = useState([
  //   <JobSeekerNewSkill key={0} />,
  // ]);

  // const handleAddSkill = (e) => {
  //   e.preventDefault();
  //   setAddNewSkill([
  //     ...addNewSkill,
  //     <JobSeekerNewSkill
  //       key={addNewSkill.length}
  //       setSkillsSchema={props.setSkillsSchema}
  //     />,
  //   ]);
  // };

  // adding react-hook-forms functionality
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      skillSet: [
        {
          skill: "",
          cert: "",
          issuer: "",
          issueMonth: "",
          issueYear: "",
        },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "skillSet",
  });

  const onSubmit = (data) => {
    props.setSkillsSchema(data);
    console.log("data: ", data);
    console.log(data.skill);
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
            {/* {addNewSkill} */}
            {/*<-------------------- add new skill -------------------->*/}
            {fields.map((item, index) => {
              return (
                <div key={item.id}>
                  {/*<-------------------------- skill set -------------------------->*/}
                  <div className="form-group mb-4">
                    <label className="form-label" htmlFor="skillset">
                      Skillset
                    </label>
                    <input
                      className="form-control mb-2 p-3"
                      id="skillset"
                      name={`skillSet.${index}.skill`}
                      type="text"
                      placeholder={"e.g Digital Marketing"}
                      {...register(`skillSet.${index}.skill`, {
                        required: true,
                      })}
                      // aria-invalid={
                      //   errors.skillSet[index].skill ? "true" : "false"
                      // }
                    ></input>
                    {/* {`errors?.skillSet.${index}.skill?`.type === "required" && (
                      <p className="mt-2 text-danger">
                        Skillset is required, please enter a least one skill
                      </p>
                    )} */}
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="flexCheckDefault-skills"
                      ></input>
                      <label
                        className="form-check-label text-muted"
                        htmlFor="flexCheckDefault-skills"
                      >
                        I have accreditation for this skill
                      </label>
                    </div>
                    <button
                      type="button"
                      className={`${styles.circle_btn} btn btn-outline-dark btn-sm bi-dash mt-3`}
                      onClick={() => remove(index)}
                    ></button>
                  </div>
                </div>
              );
            })}
            {/*<----/------------ add new skill button -----/----------->*/}
            <div className="form-group mt-5 mb-4">
              <button
                className={styles.circle_btn}
                // onClick={handleAddSkill}
                onClick={() => append()}
                id="add-new-skill"
              >
                <i className="bi bi-plus-lg"></i>
              </button>
              <label className="form-label" htmlFor="add-new-skill">
                Add new skill
              </label>
            </div>
          </div>
          {/* <------------------------ empty col -------------------------> */}
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
