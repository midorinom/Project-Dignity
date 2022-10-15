const dummyProfileData = [
  {
    about: {
      name: "Tan Li Choon",
      aspiration: "Librarian",
      brand:
        "I am a literature enthusiast whom hopes to pursue his passion as a career",
      email: "tanlichoon@gmail.com",
      mobile: "+65 9273 2719",
    },
    skills: [
      {
        skill: "Digital Marketing",
        //cert -> issueYear only input if user indicated available accreditation
        cert: "Google Certificate for Digital Marketing",
        issuer: "Google",
        issueMonth: "January",
        issueYear: "2020",
      },
    ],
    abilityDifferences: {
      diff: ["Hearing", "Autism"],
      diagnosis: "Autism Spectrum Disorder (Level 1)",
      diffDesc:
        "I am diagnsed with Level 1 Autism Spectrum Disorder. However, I am high functioning.",
      support: ["Shadowing by a Dedicated Job Coach"],
      supportDesc: "I hope to have a coach who can guide me",
      comm: "Verbal",
      //if comm: "others"
      //   commSpec: "",
      aids: "Hearing",
      //if aids: "others"
      //   aidsSpec: "",
      travel: true,
    },
    experience: {
      title: "Cataloguing Assistant",
      type: "Clerical",
      company: "Starbucks",
      startMonth: "January",
      startYear: "2019",
      //if not currently working
      //   endMonth: "",
      //   endYear: "",
      jobDesc: "Catalogue and inventorized over 100 items on a weekly basis",
    },
    education: [
      {
        school: "Dunman Secondary School",
        cert: 'GCE "O" Level Certificate',
        start: "January 2014",
        end: "December 2017",
        grade: "L1R5 16points, L1R4 12points",
        desc: "Completed 4 years course in express stream",
      },
    ],
  },
];

export default dummyProfileData;
