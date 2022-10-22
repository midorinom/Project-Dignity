import React from "react";

const JobSeekerNewSkill = () => {
  return (
    <>
      {/*<-------------------------- skill set -------------------------->*/}
      <div className="form-group mb-4">
        <label className="form-label" htmlFor="skillset">
          Skillset
        </label>
        <input
          className="form-control mb-2 p-3"
          id="skillset"
          type="text"
          placeholder={"e.g Digital Marketing"}
        ></input>
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
          type="text"
          placeholder={"e.g Google Certificate for Digital Marketing"}
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
          type="text"
          placeholder="e.g. Google"
        ></input>
      </div>
      {/*<-------------------- issuing date -------------------->*/}
      {/* to show when accreditation checked */}
      <div className="form-group mb-4">
        <label className="form-label" htmlFor="issue-date-cert">
          Issue Date (Optional)
        </label>
        <input
          className="form-control p-3"
          id="issue-date-cert"
          type="date"
        ></input>
      </div>
      <hr></hr>
    </>
  );
};

export default JobSeekerNewSkill;
