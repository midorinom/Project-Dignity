import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./jobSeekerProfileForm.module.css";
import physical from "../../jobListings/filters/abilityDifference/icons/physical.png";
import visual from "../../jobListings/filters/abilityDifference/icons/visual.png";
import hearing from "../../jobListings/filters/abilityDifference/icons/hearing.png";
import intellectual from "../../jobListings/filters/abilityDifference/icons/intellectual.png";
import autism from "../../jobListings/filters/abilityDifference/icons/autism.png";

const JobSeekerProfileFormAbilityDiff = (props) => {
  const [characterCount, setCharacterCount] = useState(0);
  const [supportDescCharacterCount, setSupportDescCharacterCount] = useState(0);

  function goToExperience() {
    props.setCurrentPage("Experience");
  }

  // adding react-hook-forms functionality
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    props.setAbilityDifferencesSchema(data);
    console.log(data);
    console.log("aids: ", data.aids);
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
            {/*<------------------- nature of ability diff ------------------->*/}
            <div className="form-group mb-4">
              <label className="form-label" htmlFor="ability-diff">
                Nature of Ability Differences
              </label>
              <small> (you may select more than one option)</small>
              <br />
              <div className="form-check-inline">
                <input
                  className="custom-control-input btn-check"
                  type="checkbox"
                  value="physical"
                  id="ability-diff-physical"
                  {...register("diff", {
                    required: {
                      value: true,
                      message: "Please select at least one option",
                    },
                  })}
                ></input>
                <label
                  className="custom-control-label btn p-3"
                  htmlFor="ability-diff-physical"
                  style={{ width: 120, height: 120 }}
                >
                  <div className="p-1">
                    <img src={physical} style={{ height: 50 }} alt="Physical" />
                    <p className="m-0 mt-1">Physical</p>
                  </div>
                </label>
              </div>
              <div className="form-check-inline">
                <input
                  className="custom-control-input btn-check"
                  type="checkbox"
                  value="visual"
                  id="ability-diff-visual"
                  {...register("diff", {
                    required: {
                      value: true,
                      message: "Please select at least one option",
                    },
                  })}
                ></input>
                <label
                  className="custom-control-label btn p-3"
                  htmlFor="ability-diff-visual"
                  style={{ width: 120, height: 120 }}
                >
                  <div className="p-1">
                    <img src={visual} style={{ height: 50 }} alt="Visual" />
                    <p className="m-0 mt-1">Visual</p>
                  </div>
                </label>
              </div>
              <div className="form-check-inline">
                <input
                  className="custom-control-input btn-check"
                  type="checkbox"
                  value="hearing"
                  id="ability-diff-hearing"
                  {...register("diff", {
                    required: {
                      value: true,
                      message: "Please select at least one option",
                    },
                  })}
                ></input>
                <label
                  className="custom-control-label btn p-3"
                  htmlFor="ability-diff-hearing"
                  style={{ width: 120, height: 120 }}
                >
                  <div className="p-1">
                    <img src={hearing} style={{ height: 50 }} alt="Hearing" />
                    <p className="m-0 mt-1">Hearing</p>
                  </div>
                </label>
              </div>
              <div className="form-check-inline">
                <input
                  className="custom-control-input btn-check"
                  type="checkbox"
                  value="intellectual"
                  id="ability-diff-intellectual"
                  {...register("diff", {
                    required: {
                      value: true,
                      message: "Please select at least one option",
                    },
                  })}
                ></input>
                <label
                  className="custom-control-label btn p-3"
                  htmlFor="ability-diff-intellectual"
                  style={{ width: 120, height: 120 }}
                >
                  <div className="p-1">
                    <img
                      src={intellectual}
                      style={{ height: 50 }}
                      alt="Intellectual"
                    />
                    <p className="m-0 mt-1">Intellectual</p>
                  </div>
                </label>
              </div>
              <div className="form-check-inline">
                <input
                  className="custom-control-input btn-check"
                  type="checkbox"
                  value="autism"
                  id="ability-diff-autism"
                  {...register("diff", {
                    required: {
                      value: true,
                      message: "Please select at least one option",
                    },
                  })}
                ></input>
                <label
                  className="custom-control-label btn p-3"
                  htmlFor="ability-diff-autism"
                  style={{ width: 120, height: 120 }}
                >
                  <div className="p-1">
                    <img src={autism} style={{ height: 50 }} alt="Autism" />
                    <p className="m-0 mt-1">Autism</p>
                  </div>
                </label>
              </div>
              {errors.diff && (
                <p className="mt-2 text-danger">{errors.diff.message}</p>
              )}
            </div>
            {/*<------------------------ diagnosis ------------------------>*/}
            <div className="form-group mb-4">
              <label className="form-label" htmlFor="diagnosis">
                Diagnosis of Ability Difference (Optional)
              </label>
              <input
                className="form-control p-3"
                id="diagnosis"
                type="text"
                placeholder="e.g. Parkinson's Disease"
                {...register("diagnosis")}
              ></input>
            </div>
            {/*<--------------- description of ability diff --------------->*/}
            <div className="form-group mb-4">
              <label className="form-label" htmlFor="support-required">
                Short Description of Ability Difference
              </label>
              <textarea
                className="form-control mb-2 p-3"
                type="text"
                id="support-required"
                style={{ height: 200 }}
                placeholder={
                  "e.g. I have Stage 2 Parkinson's Disease, and experience stiffness, tremors, and trembling on both sides of my body as my main symptoms. I have slight difficulty in speech."
                }
                {...register("diffDesc", {
                  required: {
                    value: true,
                    message: "Please provide short description",
                  },
                  maxLength: 200,
                  onChange: (e) => setCharacterCount(e.target.value.length),
                })}
              ></textarea>
              <small className="text-muted">{`${
                200 - characterCount
              } / 200 characters left`}</small>
              {errors.diffDesc && (
                <p className="mt-2 text-danger">{errors.diffDesc.message}</p>
              )}
            </div>
            {/*<------------------- type of support ------------------->*/}
            <div className="form-group mb-4">
              <label className="form-label">Type of Support Required</label>
              <small> (you may select more than one option)</small>
              <div className="mb-4">
                <input
                  className="custom-control-input btn-check"
                  type="checkbox"
                  value="training"
                  id="training"
                  {...register("support", {
                    required: {
                      value: true,
                      message: "Please select at least one option",
                    },
                  })}
                ></input>
                <label
                  className="custom-control-label btn p-3"
                  htmlFor="training"
                  style={{ width: 400 }}
                >
                  Training through Structured Programmes
                </label>
              </div>
              <div className="mb-4">
                <input
                  className="custom-control-input btn-check"
                  type="checkbox"
                  value="shadow_by_coach"
                  id="coach"
                  {...register("support", {
                    required: {
                      value: true,
                      message: "Please select at least one option",
                    },
                  })}
                ></input>
                <label
                  className="custom-control-label btn p-3"
                  htmlFor="coach"
                  style={{ width: 400 }}
                >
                  Shadowing by a Dedicated Job Coach
                </label>
              </div>
              <div className="mb-4">
                <input
                  className="custom-control-input btn-check"
                  type="checkbox"
                  value="workplace_redesign"
                  id="workplace"
                  {...register("support", {
                    required: {
                      value: true,
                      message: "Please select at least one option",
                    },
                  })}
                ></input>
                <label
                  className="custom-control-label btn p-3"
                  htmlFor="workplace"
                  style={{ width: 400 }}
                >
                  Workplace Redesigned
                </label>
              </div>
              <div className="mb-4">
                <input
                  className="custom-control-input btn-check"
                  type="checkbox"
                  value="assistive_tech"
                  id="assist-tech"
                  {...register("support", {
                    required: {
                      value: true,
                      message: "Please select at least one option",
                    },
                  })}
                ></input>
                <label
                  className="custom-control-label btn p-3"
                  htmlFor="assist-tech"
                  style={{ width: 400 }}
                >
                  Assistive Technology (AT)
                </label>
              </div>
              <div className="mb-4">
                <input
                  className="custom-control-input btn-check"
                  type="checkbox"
                  value="social_integration"
                  id="integration"
                  {...register("support", {
                    required: {
                      value: true,
                      message: "Please select at least one option",
                    },
                  })}
                ></input>
                <label
                  className="custom-control-label btn p-3"
                  htmlFor="integration"
                  style={{ width: 400 }}
                >
                  Social Integration
                </label>
              </div>
              <div className="mb-4">
                <input
                  className="custom-control-input btn-check"
                  type="checkbox"
                  value="trial"
                  id="trial"
                  {...register("support", {
                    required: {
                      value: true,
                      message: "Please select at least one option",
                    },
                  })}
                ></input>
                <label
                  className="custom-control-label btn p-3"
                  htmlFor="trial"
                  style={{ width: 400 }}
                >
                  Trial Period
                </label>
              </div>
              {errors.support && (
                <p className="mt-2 text-danger">{errors.support.message}</p>
              )}
            </div>
            {/*<--------------------- support required --------------------->*/}
            <div className="form-group mb-4">
              <label className="form-label" htmlFor="support-required">
                Short Elaboration of Support Required
              </label>
              <textarea
                className="form-control mb-2 p-3"
                type="text"
                id="support-required"
                style={{ height: 200 }}
                placeholder={
                  "If you required any other support that has not been mentioned above, you may also add them here."
                }
                {...register("supportDesc", {
                  required: {
                    value: true,
                    message: "Please provide short description",
                  },
                  maxLength: 300,
                  onChange: (e) =>
                    setSupportDescCharacterCount(e.target.value.length),
                })}
              ></textarea>
              <small className="text-muted">{`${
                300 - supportDescCharacterCount
              } / 300 characters left`}</small>
              {errors.supportDesc && (
                <p className="mt-2 text-danger">{errors.supportDesc.message}</p>
              )}
            </div>
            {/*<------------------ mode of communication ------------------>*/}
            <div className="form-group mb-4">
              <label className="form-label">
                Preferred Mode of Communication
              </label>
              <small> (you may select more than one option)</small>
              <br />
              <div className="form-check-inline">
                <input
                  className="custom-control-input btn-check"
                  type="checkbox"
                  value="verbal"
                  id="mode-verbal"
                  {...register("comm", {
                    required: {
                      value: true,
                      message: "Please select at least one option",
                    },
                  })}
                ></input>
                <label
                  className="custom-control-label btn p-3"
                  htmlFor="mode-verbal"
                  style={{ width: 120 }}
                >
                  Verbal
                </label>
              </div>
              <div className="form-check-inline">
                <input
                  className="custom-control-input btn-check"
                  type="checkbox"
                  value="written"
                  id="mode-written"
                  {...register("comm", {
                    required: {
                      value: true,
                      message: "Please select at least one option",
                    },
                  })}
                ></input>
                <label
                  className="custom-control-label btn p-3"
                  htmlFor="mode-written"
                  style={{ width: 120 }}
                >
                  Written
                </label>
              </div>
              <div className="form-check-inline">
                <input
                  className="custom-control-input btn-check"
                  type="checkbox"
                  value="signing"
                  id="mode-signing"
                  {...register("comm", {
                    required: {
                      value: true,
                      message: "Please select at least one option",
                    },
                  })}
                ></input>
                <label
                  className="custom-control-label btn p-3"
                  htmlFor="mode-signing"
                  style={{ width: 120 }}
                >
                  Signing
                </label>
              </div>
              <div className="form-check-inline">
                <input
                  className="custom-control-input btn-check"
                  type="checkbox"
                  value="lip_reading"
                  id="mode-lip-reading"
                  {...register("comm", {
                    required: {
                      value: true,
                      message: "Please select at least one option",
                    },
                  })}
                ></input>
                <label
                  className="custom-control-label btn p-3"
                  htmlFor="mode-lip-reading"
                  style={{ width: 120 }}
                >
                  Lip-Reading
                </label>
              </div>
              <div className="form-check-inline">
                <input
                  className="custom-control-input btn-check"
                  type="checkbox"
                  value="others"
                  id="mode-others"
                  {...register("comm", {
                    required: {
                      value: true,
                      message: "Please select at least one option",
                    },
                  })}
                ></input>
                <label
                  className="custom-control-label btn p-3"
                  htmlFor="mode-others"
                  style={{ width: 120 }}
                >
                  Others
                </label>
              </div>
              <div className="form-group d-inline-flex mt-3 mb-4">
                <label
                  className="form-label mt-1"
                  htmlFor="mode-others-text"
                  style={{ marginRight: 30 }}
                >
                  If Others, please specify:
                </label>
                <input
                  className="form-control"
                  id="mode-others-text"
                  type="text"
                  style={{ width: 460 }}
                  {...register("commSpec")}
                ></input>
              </div>
              {errors.comm && (
                <p className="mt-2 text-danger">{errors.comm.message}</p>
              )}
            </div>
            {/*<-------------------------- aids -------------------------->*/}
            <div className="form-group mb-4">
              <label className="form-label">Usage of Aids</label>
              <small> (you may select more than one option)</small>
              <br />
              <div className="form-check-inline">
                <input
                  className="custom-control-input btn-check"
                  type="checkbox"
                  value="mobility"
                  id="aid-mobility"
                  {...register("aids", {
                    required: {
                      value: true,
                      message: "Please select at least one option",
                    },
                  })}
                ></input>
                <label
                  className="custom-control-label btn p-3"
                  htmlFor="aid-mobility"
                  style={{ width: 120 }}
                >
                  Mobility
                </label>
              </div>
              <div className="form-check-inline">
                <input
                  className="custom-control-input btn-check"
                  type="checkbox"
                  value="hearing"
                  id="aid-hearing"
                  {...register("aids", {
                    required: {
                      value: true,
                      message: "Please select at least one option",
                    },
                  })}
                ></input>
                <label
                  className="custom-control-label btn p-3"
                  htmlFor="aid-hearing"
                  style={{ width: 120 }}
                >
                  Hearing
                </label>
              </div>
              <div className="form-check-inline">
                <input
                  className="custom-control-input btn-check"
                  type="checkbox"
                  value="visual"
                  id="aid-visual"
                  {...register("aids", {
                    required: {
                      value: true,
                      message: "Please select at least one option",
                    },
                  })}
                ></input>
                <label
                  className="custom-control-label btn p-3"
                  htmlFor="aid-visual"
                  style={{ width: 120 }}
                >
                  Visual
                </label>
              </div>
              <div className="form-check-inline">
                <input
                  className="custom-control-input btn-check"
                  type="checkbox"
                  value="speech"
                  id="aid-speech"
                  {...register("aids", {
                    required: {
                      value: true,
                      message: "Please select at least one option",
                    },
                  })}
                ></input>
                <label
                  className="custom-control-label btn p-3"
                  htmlFor="aid-speech"
                  style={{ width: 120 }}
                >
                  Speech
                </label>
              </div>
              <div className="form-check-inline">
                <input
                  className="custom-control-input btn-check"
                  type="checkbox"
                  value="others"
                  id="aid-others"
                  {...register("aids", {
                    required: {
                      value: true,
                      message: "Please select at least one option",
                    },
                  })}
                ></input>
                <label
                  className="custom-control-label btn p-3"
                  htmlFor="aid-others"
                  style={{ width: 120 }}
                >
                  Others
                </label>
              </div>
              <div className="form-group d-inline-flex mt-3 mb-4">
                <label
                  className="form-label mt-1"
                  htmlFor="aid-others-text"
                  style={{ marginRight: 30 }}
                >
                  If Others, please specify:
                </label>
                <input
                  className="form-control"
                  id="aid-others-text"
                  type="text"
                  style={{ width: 460 }}
                  {...register("aidsSpec")}
                ></input>
              </div>
              {errors.aids && (
                <p className="mt-2 text-danger">{errors.aids.message}</p>
              )}
            </div>
            {/*<------------------------- travel ------------------------->*/}
            <div className="form-group mb-4">
              <label className="form-label">
                Ability to Travel Independently?
              </label>
              <small>
                {" "}
                (please select <u>one</u> option)
              </small>
              <br />
              <div className="form-check-inline">
                <input
                  className="custom-control-input btn-check"
                  type="checkbox"
                  value={true}
                  id="independent-travel-yes"
                  {...register("travel", {
                    required: {
                      value: true,
                      message: "Please select at least one option",
                    },
                  })}
                ></input>
                <label
                  className="custom-control-label btn p-3"
                  htmlFor="independent-travel-yes"
                  style={{ width: 120 }}
                >
                  Yes
                </label>
              </div>
              <div className="form-check-inline">
                <input
                  className="custom-control-input btn-check"
                  type="checkbox"
                  value={false}
                  id="independent-travel-no"
                  {...register("travel", {
                    required: {
                      value: true,
                      message: "Please select at least one option",
                    },
                  })}
                ></input>
                <label
                  className="custom-control-label btn p-3"
                  htmlFor="independent-travel-no"
                  style={{ width: 120 }}
                >
                  No
                </label>
              </div>
            </div>
            {errors.travel && (
              <p className="mt-2 text-danger">{errors.travel.message}</p>
            )}
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
                    style={{ width: "40%" }}
                    aria-valuenow="40"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <small className="text-muted" htmlFor="progress-bar">
                  40% complete
                </small>
              </div>
            </div>
          </div>
        </div>
        {/*<----------------------- proceed next btn ----------------------->*/}
        <div className="row justify-content-center m-5">
          <button
            onClick={goToExperience}
            className={`${styles.bottom_button} p-3`}
          >
            Proceed to Experience Section
          </button>
        </div>
      </form>
    </section>
  );
};

export default JobSeekerProfileFormAbilityDiff;
