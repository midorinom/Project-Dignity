const EmployerAccessibility=()=>{
    return(
        <>
    <section classname="container-md" id="AboutEmployer">
        <form id="AboutEmployer">
          <div className="row m-5">
{/*================================== Suitable Applicants ================================== */}
            <div className="col-md-8-lg-8">
                    <p><b>Suitable Applicants</b></p>
                    <p>When deciding on who your suitable applicants might be, the nature of their ability<br/> difference might impact whether the job is accessible for them, both physically and <br/>cognitively. Besides the ability differences, you should also consider the support you <br/>will need to provide, and suitability of the physical job environment.</p>
            </div>
{/* ================================================================================================== */}

{/*================================== Nature of Ability Differences ================================== */}
            <div className="col-md-8-lg-8">
                    <p ><span style={{ color: 'orange' }}><b>Nature of Ability Differences</b></span>, you may select more than one option</p>
                    <p>When you select any of the options below, a short description will appear to help you have an understanding of the nature of the ability difference and the common types of support required. However, the description is non-exhaustive and should not be taken to be a representation of all persons with that nature of ability difference as different persons express and experience ability differences to different degrees.</p>
                    <a href='https://www.mozilla.org/en-US/'>Use these reading resources to better understand the various ability differences.</a>
            </div>
{/* ================================================================================================== */}

{/*================================== Support Commitment ================================== */}
<div className="col-md-8-lg-8">
    <p><span style={{ color: 'orange' }}><b>Support Commitment</b></span>, you may select more than one option</p>
{/* Training Through Structured Programmes */}
    <div className="form-check m-4">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label "
                    htmlfor="flexCheckDefault"
                  >
                    Training through Structured Programmes<br/>
                    Example: 1 month training programme to ensure employee is equipped with the necessary skills and knowledge to perform the job tasks
                  </label>
                  <input
                    type="text"
                    class="form-control m-4"
                    id="structured programmes"
                    placeholder="Please elaborate on the support you intend to provide"
                  />
                </div>
    </div>

{/* Training and Shadowing by a Dedicated Job Coach */}
    <div className="form-check m-4">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label "
                    htmlfor="flexCheckDefault"
                  >
                    Training and Shadowing by a Dedicated Job Coach<br/>
                    Higher level of training support comprising one-on-one training with employee, including shadowing to guide the employee more closely 
                  </label>
                  <input
                    type="text"
                    class="form-control m-4"
                    id="training and shadowing"
                    placeholder="Please elaborate on the support you intend to provide"
                  />
    </div>
{/* Workplace Redesign */}
<div className="form-check m-4">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label "
                    htmlfor="flexCheckDefault"
                  >
                    Workplace Redesign<br/>
                    Changes to the physical workplace environment to improve accessibility and enable independence; for example: adjust table height for wheelchair access, install automatic doors, etc.
                  </label>
                  <input
                    type="text"
                    class="form-control m-4"
                    id="workplace redesign"
                    placeholder="Please elaborate on the support you intend to provide"
                  />
    </div>
    {/* Assistive Technology */}
    <div className="form-check m-4">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label "
                    htmlfor="flexCheckDefault"
                  >
                    Assistive Technology<br/>
                    Devices to improve accessibility and enable independence; for example: specialised keyboards, screen reading software, etc.
                  </label>
                  <input
                    type="text"
                    class="form-control m-4"
                    id="assistive Technology"
                    placeholder="Please elaborate on the support you intend to provide"
                  />
    </div>

    
    {/* Social Integration */}
    <div className="form-check m-4">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label "
                    htmlfor="flexCheckDefault"
                  >
                    Social Integration<br/>
                    Tools or policies to help employee better integrate into the workplace; Includes preparing existing employees to work with a differently-abled employee 
                  </label>
                  <input
                    type="text"
                    class="form-control m-4"
                    id="social Integration"
                    placeholder="Please elaborate on the support you intend to provide"
                  />
    </div>
    {/* Trial Period */}
    <div className="form-check m-4">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label "
                    htmlfor="flexCheckDefault"
                  >
                    Trial Period<br/>
                    To help determine suitability of job match, where the differently-abled employee could withdraw after the trial period without any penalty
                  </label>
                  <input
                    type="text"
                    class="form-control m-4"
                    id="trial period"
                    placeholder="Please elaborate on the support you intend to provide"
                  />
    </div>
    <div className="form-check m-4">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label "
                    htmlfor="flexCheckDefault"
                  >
                    Others, Please Specify
                  </label>
                  <input
                    type="text"
                    class="form-control m-4"
                    id="others"
                  />
    </div>
    
{/* ================================================================================================== */}
{/*================================== Physical Job Environment ================================== */}
{/* Noise Level */}
{/* Light Intensity */}
{/* Upload Image(s) of the Workplace */}
{/* Other Information About the Physical Job Environment, optional */}
{/* ================================================================================================== */}
</div>
<button type="button" class="btn btn-dark mt-3">Upload Job Post </button>
        </form>
    </section>
        </>
    )
}

export default EmployerAccessibility