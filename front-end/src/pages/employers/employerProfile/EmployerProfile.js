import React from "react";
import styles from "./employerProfile.module.css";
const EmployerProfile = () => {
  return (
    <>
      <div className={`${styles.container}container-md`}>
        <div className="row m-1">
          <div className={`${styles.jobDescription} col-md-7`}>
          <div className={`${styles.companyName} md-12`}>
            {/* Need to make it responsive */}
            Le Ciel Bakery
          </div>
          <h6 className={`${styles.subheading} md-lg-6`}>Who We Are</h6>
          <p className={`${styles.p} md-lg-4`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <h6 className={`${styles.subheading} md-lg-6`}>What We Do</h6>
          <p className={`${styles.p} md-lg-4`}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt.{" "}
          </p>

          <h6 className={`${styles.subheading} md-lg-6`}>
            Experience Working with Differently-abled Persons
          </h6>
          <p className={`${styles.p} md-lg-4`}>
            Le Ciel currently does not have any experience working with
            differently-abled persons. However, we are committed to training
            employees of all abilities to help them achieve their potential, and
            support them in integrating into the workplace.
            <li className={`${styles.li} md-lg-4`}>
              Our founder and head baker, Edmund, will personally teach and
              coach all new employees to help them gain confidence and
              competence in performing the assigned tasks.{" "}
            </li>
            <li className={`${styles.li} md-lg-4`}>
              We understand that differently-abled persons are sometimes
              concerned with their suitability for a certain job. Where
              required, Le Ciel is open to making changes to the physical
              workplace environment to improve employee’s accessibility and
              enable independence. Le Ciel will work with the employee on the
              necessary redesign needed to accommodate ability differences.
            </li>
          </p>
          </div>

          {/* Side View */}
      
          <div className="col-md-3 mt-4">
          <button className={`${styles.bottom_button} p-3`}>
            Upload A Job Post
          </button>
              {/*  Location and Accessibility Box*/}
            <div className={`${styles.box} container-md`}>
              <h6 className={`${styles.subheading} md-lg-6`}>Location</h6>
              <p className={`${styles.p} md-lg-4`}>
                Blk 347 Ang Mo Kio Avenue 3, #01-1722, Singapore 560122
              </p>
              <h6 className={`${styles.subheading} md-lg-6`}>Accessibility</h6>
              <p className={`${styles.p} md-lg-4`}>
                5 minute walk from Ang Mo Kio MRT - portions of the pathway
                between MRT is currently uneven due to construction and might
                not be suitable for wheelchair users
              </p>
            </div>

            {/* Contact Number and Email Address Box */}
            <div className={`${styles.box} container-md`}>
              <h6 className={`${styles.subheading} md-lg-6`}>Contact</h6>
              <p className={`${styles.p} md-lg-4`}>Contact Number</p>
              <p className={`${styles.p} md-lg-4`}>+65 6XXX XXXXX</p>
              <h6 className={`${styles.subheading} md-lg-6`}>Email Address</h6>
              <p className={`${styles.p} md-lg-4`}>enquiry@lecielbakery.com</p>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployerProfile;
