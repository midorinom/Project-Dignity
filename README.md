# Project Dignity - Dignity Careers

## Introduction
As the project was undertaken as a group of 4, the project was initially split between front-end and back-end, with 2 members allocated to each. Subsequently, since the back-end portion of the project was completed quicker, the 2 members returned to help with the front end. 

The objective of the project was to create a job portal to connect differently-abled individuals with open-minded employers who are willing to hire and work with such individuals. The project was inspired by the organisation, Project Dignity, a social enterprise that focuses on providing differently-abled individuals with vocational training and employment opportunities. The website is named Dignity Careers and is designed like as if it were to be adopted by Project Dignity themselves. The website is intended for big screens such as monitors and laptops and thus, responsiveness for mobile devices was not included in the development of the site.
Explanations of the technologies used

###### Front End
React, HTML, CSS and Javascript gave life to the user interface.
Libraries such as Bootstrap, Materials UI and React hook forms were also used to enhance aesthetics and functionality.

###### Back End
Our API was coded in Express and the database was hosted on Mongo Atlas.
To link the front and back end, Mongoose served as our driver. 
A link to the Github repo of the backend can be found <a href="https://github.com/otwsia/Project-Dignity-Backend">here</a>.
A link to the API dictionary can be found <a href="https://docs.google.com/spreadsheets/d/1HyShoObTGmjqsI6gPy4b-fu121c6Yxn6mFU4jJKmKnI/edit#gid=0">here</a>.

## Installation instructions for any dependencies
Dependencies include Bootstrap, Materials UI and React hook form libraries.

Bootstrap was included via CDN and no further installation steps are required to run the app.

For Materials UI and React hook form libraries, they can be installed via the node package manager. The commands below (in corresponding order to the libraries listed above) will have to be run before starting up the app:

npm install @mui/icons-material @mui/material @emotion/styled @emotion/react

npm install react-hook-form

## Component Hierarchy
```
App
    NavBar
    Login
        LoginScreen
        RegisterScreen
        SuccessfulRegistration
    UniversalLanding
    JobListings
        Search
        AbilityDifference
        JobEnvironment
        JobInteractionType
        SupportProvided
        Card
    JobPostDetails
    CompanyProfile
    Footer

    JobSeekerLanding
        Search
    JobSeekerProfile
        SkillsetsCard
        ExperienceCard
        EducationCard
    JobSeekerProfileForm
        JobSeekerProfileFormAbout
        JobSeekerProfileFormSkills
        JobSeekerProfileFormAbilityDiff
        JobSeekerProfileFormExperience
        JobSeekerProfileFormEducation
    ManageJobs
        AppliedJobs
            AppliedJobsCard
        SavedJobs
           SavedJobsCard
    SuccessfulApplication

    EmployerLanding
        Search
    EmployerProfile
    EmployerProfileForm
    JobPostForm   
        JobAbout
        EmployerAccessibility
    JobsPosted
        JobsPostedCard
```
## User Stories 
###### Job Seekers
The job seekers are differently-abled individuals who are keen in looking for a job to fulfill their aspirations. The job seekers can also encompass the caregiver of the individuals who assist them in the application and seeking of jobs.

The main benefit of the website for these job seekers is providing them with a platform to find jobs that cater to their specific needs and preferences, according to their ability differences. Job posts are required to list various relevant information such as what kinds of ability differences the jobs are suitable for, the type of support provided, environmental conditions such as the light and noise level and more. Job seekers are then able to browse through job posts and decide based on these information provided by the employers, whether those jobs are suitable for them. 

Furthermore, the job listings page recommends jobs for job seekers, taking into account their specific ability differences, the support they require and their skillsets. These fields in the job seeker’s profile form and employer’s job post form (ability differences, support, skillsets) are designed to be limited by pre-defined options. This is what enables an accurate recommendation algorithm, as these aforementioned fields can be exactly matched with the corresponding information provided in the job posts created by the employers. The recommendation algorithm places a greater emphasis on ability differences and support required. The job listings page also comes with a filter bar at the side as well as a search bar to further filter the jobs listed if the job seeker wishes to do so.

Also, as a job portal, there will naturally be various features expected of one, such as being able to apply for jobs and a page for the user to view their applied jobs. Similarly, there is an option to save jobs to a page where the user can revisit to view their saved jobs. The user is also able to withdraw an application or remove a saved job. Clicking on a job post in the job listings page brings the user to another page with detailed information on that job such as job description and tasks, as well as a link to the employer’s profile to read more about the employer listing that job.

###### Employers
The employers are businesses that are willing and open to hiring differently-abled and disadvantaged individuals. The main benefit of the website the employer wants is to assess if applicants are suitable for the job, through the information of the jobseekers that would be provided, they would also want to be able to post the roles that their company is hiring for with relevant description to match the suitable applicants.

## Unsolved Problems or Features to Implement
* Logic for the forms (jobseeker profile, employer profile, job post) could be improved for a better user experience. Currently the forms require the user to press “save” before being allowed to proceed to the next page. This could simply be replaced with autosaving upon clicking the “next page” button. Also, all progress made on the form is lost if the user were to cancel the process or leave the page before filling in the form entirely. This could be changed to automatically save the user’s progress if they were to leave the form and allow them to return to continue from where they left off.

* Could add more features for the employer’s “My Job Posts” page such as being able to view the total number of applicants for each job, browse through the list of applicants, view each applicant’s profile and to accept or reject the applications. Consequently, the jobseeker’s applications on their “My Applied Jobs” page should reflect whether the employer has accepted or rejected their application. Could also explore application outcomes beyond a simple “accept” or “reject”, such as an interview invitation or allowing the employer to provide a customised message along with the application outcome.

* There is currently no implementation of any kind of local storage, JWT or sessions/cookies, so refreshing the page would log the user out and they would be required to log in again. Also, there is no option to log out manually.

* There are plans for an accessibility toolkit button in the navigation bar which provides options that when pressed, will change various visual elements of the website such as increased font size and colour contrast. Due to a large part of the target audience of this website being differently-abled people, this feature would provide great value to the website by making it accessible to more groups of people.

* The environmental conditions of noise and light level are somewhat arbitrary, they currently range from a value of 0 to 4, but what these values represent are completely subjective. One solution is to include a description of what each value can objectively be tied to, such as a noise level of 0 being related to the noise level in a library.

* The skills field in the job seeker form and job post form is intended to be a drop-down list, limiting the user to only a given selection of skills. The issue would be the drop-down being too big if there were a large number of skills (hundreds). Ideally, the user should be allowed to type in an input and have an auto-complete recommendation from the drop-down. Our current implementation does consist of the auto-complete recommendation with a pre-defined selection of skills. However, the user is allowed to type anything they want in the input and is not limited to the drop-down options. Fixing this and limiting the user to the drop-down options would improve the algorithm for recommending jobs to the job seeker.

* The functionality for uploading images has not yet been added, which would be used in the job seeker profile (the mugshot) and job posts (photos of the work environment). The biggest problem is that storing images in a cloud database might be too costly and not feasible without some sort of funding, as the maximum storage allowed for community/free versions of cloud databases would be easily exceeded.
