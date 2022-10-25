import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {useNavigate} from "react-router-dom"
import styles from "./employerProfileForm.module.css";
const EmployerProfileForm = (props) => {
  const [characterCount, setCharacterCount] = useState(0);
  const [employerProfile, setEmployerProfile]=useState();
  const [whoWeAreCharacterCount, setWhoWeAreCharacterCount]= useState(0)
  const [whatWeDoCharacterCount, setwhatWeDoCharacterCount]= useState(0)
  const [workingWithDiffCharacterCount, setworkingWithDiffCharacterCount]= useState(0)
  const [sectionSaved, setSectionSaved]= useState()
  const [profileCompleted, setProfileCompleted]=useState()
  // adding react-hook-forms functionality
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues:{
      aboutJobSet:[
        {  
          company: "",
          whoWeAre: "",
          whatWeDo: "",
          experience: "",
          location: "",
          accessibility: "",
          contact: "",
          email: "",
        }
      ]
    }
  });

  const onSubmit = (data) => {
    setEmployerProfile(data);
    console.log(data);
  };

  const onError = (errors) => console.log(errors);

  const navigate = useNavigate();
  function goToProfile() {
    if (!props.sectionSaved) {
      alert("Please save before proceeding to the next section");
    } else {
      navigate("/profile");
    }
  }

//   const createJobPost = async (req, res) => {
//     try {
//       const hardCodedId = "6352b602869782ec9b076cf3";

//       const res = await fetch(
//         "http://127.0.0.1:5001/api/jobposts/create",
//         {
//           method: "PUT",
//           headers: { "content-type": "application/json" },
//           body: JSON.stringify(
//             {
//               employerId: hardCodedId,
//               jobPost: 
//               { 
//                about: aboutJobSchema,
//                accessibility: accessibilityConsiderationsSchema
//               }
//              }
//           ),
//         }
//       );
//       const createdJobPost = await res.json();

//       console.log(createdJobPost);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   createJobPost();
//   navigate("/profile");
// } , [sectionSaved]);
  return (
    <section className="container-md" id="jobSeekerProfileForm-AboutSection">
      <form id="jobSeekerProfileForm-About"  onSubmit={handleSubmit(onSubmit, onError)}>
        <div className="row m-5">
          <div className="col-md-8">
            {/*<-----------------------------Company name ----------------------------->*/}
            <div className="form-group mb-4">
              <label className="form-label" htmlFor="name">
                Company Name
              </label>
              <div className="input-group">
                <span className="input-group-text">
                  <i className="bi bi-person-fill"></i>
                </span>
                <input
                  className="form-control p-3"
                  id="name"
                  type="text"
                  placeholder={"e.g Le Ciel Bakery"}
                  {...register("company", {
                    required: {
                      value: true,
                      message: "Name of company is required",
                    },
                  })}
                ></input>
              </div>
              <p className="mt-2 text-danger">{errors.company?.message}</p>
            </div>
            {/*<-------------------------Who We Are ------------------------->*/}
            <div className="form-group mb-4">
              <label className="form-label" htmlFor="brand">
                Who We Are
              </label>
              <textarea
                className="form-control mb-2 p-3"
                type="text"
                id="brand"
                style={{ height: 200 }}
                placeholder={"Brief introduction about your company"}
                {...register("whoWeAre", {
                  maxLength: 200,
                  onChange: (e) =>
                    setWhoWeAreCharacterCount(e.target.value.length),
                })}
              ></textarea>
              <small className="text-muted">{`${
                200 - whoWeAreCharacterCount
              } / 200 characters left`}</small>
            <p className="mt-2 text-danger">{errors.whoWeAre?.message}</p>

            </div>
      {/*<-----------------------       What We Do ----------------------->*/}
            <div className="form-group mb-4">
              <label className="form-label" htmlFor="brand">
                What We Do
              </label>
              <textarea
                className="form-control mb-2 p-3"
                type="text"
                id="brand"
                style={{ height: 200 }}
                placeholder={"Brief description about what your company does"}
                {...register("whatWeDo", {
                  maxLength: 200,
                  onChange: (e) =>
                    setwhatWeDoCharacterCount(e.target.value.length),
                })}
              ></textarea>
              <small className="text-muted">{`${
                200 - whatWeDoCharacterCount
              } / 200 characters left`}</small>
              <p className="mt-2 text-danger">{errors.whatWeDo?.message}</p>
            </div>
            {/*<---------------------------Experience Working with Differently-abled Persons--------------------------->*/}
            <div className="form-group mb-4">
              <label className="form-label" htmlFor="brand">
              Experience Working with Differently-abled Persons
              </label>
              <textarea
                className="form-control mb-2 p-3"
                type="text"
                id="brand"
                style={{ height: 200 }}
                placeholder={"Brief description of your company's experience working with differently abled persons"}
                {...register("experience", {
                  maxLength: 200,
                  onChange: (e) =>
                    setWhoWeAreCharacterCount(e.target.value.length),
                })}
              ></textarea>
              <small className="text-muted">{`${
                200 - workingWithDiffCharacterCount
              } / 200 characters left`}</small>    
             <p className="mt-2 text-danger">{errors.experience?.message}</p> 
            </div>
            </div>
          {/*<-------------------------- empty col -------------------------->*/}
          <div className="col-md-1"></div>
          {/* <------------------------ side panel ------------------------> */}
          <div className="col-md-3">
            <div className=" sidePanel row mt-5">
              <button
                type="submit"
                className={`${styles.side_buttons} mt-3 mb-4 p-3`}
                onClick={() => {
                  setSectionSaved(true);
                }}
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
                    style={{ width: "10%" }}
                    aria-valuenow="10"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <small className="text-muted" htmlFor="progress-bar">
                  10% complete
                </small>
              </div>
            </div>
          </div>
        
        {/*<----------------------- proceed next btn ----------------------->*/}
        <div className="row justify-content-center m-5">
          <button
            type='submit'
            className={`${styles.bottom_button} p-3`}
            onClick={goToProfile}
          >
            Upload Profile
          </button>
        </div>
        </div>
      </form>
    </section>
  );
};

export default EmployerProfileForm;
