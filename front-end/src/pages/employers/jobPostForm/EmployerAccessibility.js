import styles from "./jobPostForm.module.css";
import physical from "../../jobListings/filters/abilityDifference/icons/physical.png";
import visual from "../../jobListings/filters/abilityDifference/icons/visual.png";
import hearing from "../../jobListings/filters/abilityDifference/icons/hearing.png";
import intellectual from "../../jobListings/filters/abilityDifference/icons/intellectual.png";
import autism from "../../jobListings/filters/abilityDifference/icons/autism.png";

const EmployerAccessibility = () => {
  return (
    <>
      <section classname="container-md" id="Accessibility">
        <div className="row text-start">
          <div className={`${styles.form} col-md-6`}>
            <form id="AboutEmployer">
              {/*================================== Suitable Applicants ================================== */}
              <div className="form-group mb-4">
                <p>
                  <b>Suitable Applicants</b>
                </p>
                <p className="text-muted">
                  When deciding on who your suitable applicants might be, the
                  <span className={`${styles.orange}`}> nature of their ability
                  <br /> difference </span> might impact whether the job is accessible
                  for them, both physically and <br />
                  cognitively. Besides the ability differences, you should also
                  consider the support you <br />
                  will need to provide, and suitability of the <span className={`${styles.orange}`}>physical job
                  environment</span>.
                </p>
              </div>

              {/* ================================================================================================== */}

              {/*================================== Nature of Ability Differences ================================== */}
              <div className="form-group mb-4">
                <p className="text-muted">
                  <span style={{ color: "orange" }}>
                    <b>Nature of Ability Differences</b>
                  </span>
                  , you may select more than one option
                </p>
                <p className="text-muted">
                  When you select any of the options below, a short description
                  will appear to help you have an understanding of the <span className={`${styles.bold}`}> nature of
                  the ability difference </span>and the common types of support
                  required. However, the description is non-exhaustive and
                  should not be taken to be a representation of all persons with
                  that nature of ability difference as <span className={`${styles.bold}`}> different persons express
                  and experience ability differences to different degrees</span>.
                </p>
                <a href="https://www.mozilla.org/en-US/" className={`${styles.link}`}>
                  Use these reading resources to better understand the various
                  ability differences.
                </a>
              </div>
              <div className="form-group mb-4">
              <label className="form-label" htmlFor="job-title">
                Nature of Ability Differences
              </label>
              <small> (you may select more than one option)</small>
              <br />
              <div className="form-check-inline">
                <input
                  className="custom-control-input btn-check"
                  type="checkbox"
                  id="ability-diff-physical"
                  autocomplete="off"
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
                  id="ability-diff-visual"
                  autocomplete="off"
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
                  id="ability-diff-hearing"
                  autocomplete="off"
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
                  id="ability-diff-intellectual"
                  autocomplete="off"
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
                  id="ability-diff-autism"
                  autocomplete="off"
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
            </div>
              {/* ================================================================================================== */}

              {/*================================== Support Commitment ================================== */}
              <p className='text-muted'>
                <span style={{ color: "orange" }}>
                  <b>Support Commitment</b>
                </span>
                , you may select more than one option
              </p>
              {/* Training Through Structured Programmes */}
              <div className="form-check mb-4">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label
                  className="form-check-label mb-4 text-muted"
                  htmlfor="flexCheckDefault"
                >
                  Training through Structured Programmes
                  <br />
                  Example: 1 month training programme to ensure employee is
                  equipped with the necessary skills and knowledge to perform
                  the job tasks
                </label>
                <input
                  type="text"
                  class="form-control mb-4"
                  id="structured programmes"
                  placeholder="Please elaborate on the support you intend to provide"
                />
              </div>

              {/* Training and Shadowing by a Dedicated Job Coach */}
              <div className="form-check mb-4">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label
                  className="form-check-label mb-4 text-muted"
                  htmlfor="flexCheckDefault"
                >
                  Training and Shadowing by a Dedicated Job Coach
                  <br />
                  Higher level of training support comprising one-on-one
                  training with employee, including shadowing to guide the
                  employee more closely
                </label>
                <input
                  type="text"
                  class="form-control mb-4"
                  id="training and shadowing"
                  placeholder="Please elaborate on the support you intend to provide"
                />
              </div>
              {/* Workplace Redesign */}
              <div className="form-check mb-4">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label
                  className="form-check-label mb-4 text-muted"
                  htmlfor="flexCheckDefault"
                >
                  Workplace Redesign
                  <br />
                  Changes to the physical workplace environment to improve
                  accessibility and enable independence; for example: adjust
                  table height for wheelchair access, install automatic doors,
                  etc.
                </label>
                <input
                  type="text"
                  class="form-control mb-4"
                  id="workplace redesign"
                  placeholder="Please elaborate on the support you intend to provide"
                />
              </div>
              {/* Assistive Technology */}
              <div className="form-check mb-4">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label
                  className="form-check-label mb-4 text-muted"
                  htmlfor="flexCheckDefault" 
                >
                  Assistive Technology
                  <br />
                  Devices to improve accessibility and enable independence; for
                  example: specialised keyboards, screen reading software, etc.
                </label>
                <input
                  type="text"
                  class="form-control mb-4"
                  id="assistive Technology"
                  placeholder="Please elaborate on the support you intend to provide"
                />
              </div>

              {/* Social Integration */}
              <div className="form-check mb-4">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label
                  className="form-check-label mb-4 text-muted"
                  htmlfor="flexCheckDefault"
                >
                  Social Integration
                  <br />
                  Tools or policies to help employee better integrate into the
                  workplace; Includes preparing existing employees to work with
                  a differently-abled employee
                </label>
                <input
                  type="text"
                  class="form-control mb-4"
                  id="social Integration"
                  placeholder="Please elaborate on the support you intend to provide"
                />
              </div>
              {/* Trial Period */}
              <div className="form-check mb-4">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label
                  className="form-check-label mb-4 text-muted"
                  htmlfor="flexCheckDefault"
                >
                  Trial Period
                  <br />
                  To help determine suitability of job match, where the
                  differently-abled employee could withdraw after the trial
                  period without any penalty
                </label>
                <input
                  type="text"
                  class="form-control mb-4"
                  id="trial period"
                  placeholder="Please elaborate on the support you intend to provide"
                />
              </div>
              <div className="form-check mb-4">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label
                  className="form-check-label mb-4 text-muted"
                  htmlfor="flexCheckDefault"
                >
                  Others, Please Specify
                </label>
                <input type="text" class="form-control mb-4" id="others" />
              </div>
              {/* ================================================================================================== */}
              {/*================================== Physical Job Environment ================================== */}
              {/* Noise Level */}
              <label for="noiselevel" class="form-label">
                Noise Level
              </label>
              <input type="range" class="form-range" id="noiselevel"></input>
              {/* Light Intensity */}
              <label for="lightintensity" class="form-label mt-4">
                Light Intensity
              </label>
              <input
                type="range"
                class="form-range"
                id="lightintensity"
              ></input>
              {/* Upload Image(s) of the Workplace */}

              {/* Other Information About the Physical Job Environment, optional */}
              <div className="form-group mb-4">
                <label for="JobDescription" className="JobDescription text-muted">
                <span className={`${styles.bold}`}>Other Information About the Physical Job Environment</span>, optional
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Any other information about the physical job environment that you would like inform job applicants of? "
                ></textarea>
              </div>
              {/* ================================================================================================== */}
              <button type="button" className={`${styles.bottom_button}`}>
                Upload Job Post{" "}
              </button>
            </form>
          </div>
          <div className="col-md-1"></div>
          {/*================================== Side Panel ====================================================== */}
          <div className="col-md-4">
            <div className={`${styles.sideButtonsContainer}`}>
              <button className= {`${styles.sideButtons} sidebuttons mt-3 mb-4 p-3`}>
                Save as Draft
              </button>
              <button className={`${styles.sideButtons} sidebuttons mt-3 mb-4 p-3`}>
                Previous Job Post
              </button>
              <button className={`${styles.sideButtons} sidebuttons mt-3 mb-4 p-3`}>
                Upload Job post
              </button>
            <div class="progress mt-4">
              <div
                class="progress-bar"
                role="progressbar"
                Style="width: 75%"
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <div className={`${styles.progressBar} progress_bar`}>
              <small className="text-muted" htmlFor="progress-bar">
                75% complete
              </small>
            </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
// eslint-disable-next-line no-lone-blocks
{
  /* ================================================================================================== */
}

export default EmployerAccessibility;
