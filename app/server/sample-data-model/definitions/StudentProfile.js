defineStudentProfile = function() {
  let acID = RadGrad.user.findBySlug("anthonychriste")._id;

  let sampleWorkInstanceData = [
    {semesterID: RadGrad.semester.get("Fall", 2015), hrswk: 10, studentID: acID},
    {semesterID: RadGrad.semester.get("Spring", 2016), hrswk: 20, studentID: acID}
  ];

  let sampleWorkInstanceIDs = _.map(sampleWorkInstanceData, RadGrad.workinstance.define);

  let sampleCourseInstanceData = [
    {semesterID: RadGrad.semester.get("Fall", 2015), course: "ics311", verified: false, grade: "B", studentID: acID},
    {semesterID: RadGrad.semester.get("Fall", 2014), course: "nonICS-1xx", verified: false, grade: "B", studentID: acID, note: "Art 132"},
    {semesterID: RadGrad.semester.get("Spring", 2016), course: "ics212", verified: true, grade: "A", studentID: acID}
  ];

  let sampleCourseInstanceIDs = _.map(sampleCourseInstanceData, RadGrad.courseinstance.define);

  let sampleOpportunityInstanceData = [
    {semesterID: RadGrad.semester.get("Fall", 2015), opportunity: "hack15", verified: true, hrswk: 10, studentID: acID},
    {
      semesterID: RadGrad.semester.get("Spring", 2016),
      opportunity: "acm-manoa",
      verified: false,
      hrswk: 20,
      studentID: acID
    }
  ];

  let sampleOpportunityInstanceIDs = _.map(sampleOpportunityInstanceData, RadGrad.opportunityinstance.define);

  let sampleDegreePlan = RadGrad.degreeplan.define({
    courseInstanceIDs: sampleCourseInstanceIDs,
    opportunityInstanceIDs: sampleOpportunityInstanceIDs,
    workInstanceIDs: sampleWorkInstanceData,
    studentID: acID
  });

  RadGrad.user.setDegreePlanID(acID, sampleDegreePlan);
  RadGrad.user.setDegreeGoalIDs(acID, [RadGrad.slug.getEntityID("degree-goal-sv-tech", "DegreeGoal")]);
  RadGrad.user.setInterestTagIDs(acID, [RadGrad.slug.getEntityID("software-engineering", "Tag")]);
  RadGrad.user.setPicture(acID, "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/3/000/1eb/082/154da42.jpg");
  RadGrad.user.setAboutMe(acID, "I am a student at the [University of Hawaii](http://www.hawaii.edu/).");
  RadGrad.user.setSemesterID(acID, RadGrad.semester.get("Fall", 2018));

  //Bob Bobert
  let bbID = RadGrad.user.findBySlug("bobbobert")._id;

  let sampleWorkInstanceDataBob = [
    {semesterID: RadGrad.semester.get("Fall", 2015), hrswk: 10, studentID: bbID},
    {semesterID: RadGrad.semester.get("Spring", 2016), hrswk: 20, studentID: bbID}
  ];

  let sampleWorkInstanceIDsBob = _.map(sampleWorkInstanceDataBob, RadGrad.workinstance.define);

  let sampleCourseInstanceDataBob = [
    {semesterID: RadGrad.semester.get("Fall", 2015), course: "ics314", verified: true, grade: "B", studentID: bbID},
    {semesterID: RadGrad.semester.get("Spring", 2016), course: "ics414", verified: false, grade: "B", studentID: bbID},
    {semesterID: RadGrad.semester.get("Fall", 2015), course: "ics311", verified: true, grade: "B", studentID: bbID},
    {semesterID: RadGrad.semester.get("Fall", 2015), course: "ics212", verified: true, grade: "B", studentID: bbID}
  ];

  let sampleCourseInstanceIDsBob = _.map(sampleCourseInstanceDataBob, RadGrad.courseinstance.define);

  let sampleOpportunityInstanceDataBob = [
    {semesterID: RadGrad.semester.get("Fall", 2015), opportunity: "hack15", verified: true, hrswk: 10, studentID: bbID},
    {semesterID: RadGrad.semester.get("Fall", 2015), opportunity: "acm-manoa", verified: true, hrswk: 15, studentID: bbID},
    {semesterID: RadGrad.semester.get("Fall", 2015), opportunity: "ieee-student-branch", verified: true, hrswk: 10, studentID: bbID},
    {semesterID: RadGrad.semester.get("Spring", 2016), opportunity: "pooihe2016", verified: true, hrswk: 15, studentID: bbID}
  ];

  let sampleOpportunityInstanceIDsBob = _.map(sampleOpportunityInstanceDataBob, RadGrad.opportunityinstance.define);

  let sampleDegreePlanBob = RadGrad.degreeplan.define({
    courseInstanceIDs: sampleCourseInstanceIDsBob,
    opportunityInstanceIDs: sampleOpportunityInstanceIDsBob,
    workInstanceIDs: sampleWorkInstanceDataBob,
    studentID: bbID
  });

  RadGrad.user.setDegreePlanID(bbID, sampleDegreePlanBob);
  RadGrad.user.setDegreeGoalIDs(bbID, [RadGrad.slug.getEntityID("web-developer", "DegreeGoal")]);
  RadGrad.user.setInterestTagIDs(bbID, [RadGrad.slug.getEntityID("software-engineering", "Tag"), RadGrad.slug.getEntityID("free-food", "Tag")]);
  RadGrad.user.setAboutMe(bbID, "I am a student at the [University of Hawaii](http://www.hawaii.edu/).");
  RadGrad.user.setSemesterID(bbID, RadGrad.semester.get("Fall", 2018));

  //Sally Sue
  let ssID = RadGrad.user.findBySlug("sallysue")._id;


  let sampleWorkInstanceDataSally = [
    {semesterID: RadGrad.semester.get("Fall", 2015), hrswk: 10, studentID: ssID},
    {semesterID: RadGrad.semester.get("Spring", 2016), hrswk: 20, studentID: ssID}
  ];

  let sampleWorkInstanceIDsSally = _.map(sampleWorkInstanceDataSally, RadGrad.workinstance.define);

  let sampleCourseInstanceDataSally = [
    {semesterID: RadGrad.semester.get("Fall", 2015), course: "ics311", verified: true, grade: "A", studentID: ssID},
    {semesterID: RadGrad.semester.get("Spring", 2015), course: "ics212", verified: true, grade: "A", studentID: ssID},
    {semesterID: RadGrad.semester.get("Fall", 2014), course: "ics314", verified: true, grade: "A", studentID: ssID},
    {semesterID: RadGrad.semester.get("Spring", 2015), course: "ics414", verified: true, grade: "A", studentID: ssID}
  ];

  let sampleCourseInstanceIDsSally = _.map(sampleCourseInstanceDataSally, RadGrad.courseinstance.define);

  let sampleOpportunityInstanceDataSally = [
    {semesterID: RadGrad.semester.get("Fall", 2015), opportunity: "hack15", verified: true, hrswk: 10, studentID: ssID},
    {semesterID: RadGrad.semester.get("Fall", 2015), opportunity: "acm-manoa", verified: true, hrswk: 15, studentID: ssID},
    {semesterID: RadGrad.semester.get("Spring", 2015), opportunity: "ieee-student-branch", verified: true, hrswk: 10, studentID: ssID},
    {semesterID: RadGrad.semester.get("Spring", 2016), opportunity: "pooihe2016", verified: true, hrswk: 15, studentID: ssID}
  ];

  let sampleOpportunityInstanceIDsSally = _.map(sampleOpportunityInstanceDataSally, RadGrad.opportunityinstance.define);

  let sampleDegreePlanSally = RadGrad.degreeplan.define({
    courseInstanceIDs: sampleCourseInstanceIDsSally,
    opportunityInstanceIDs: sampleOpportunityInstanceIDsSally,
    workInstanceIDs: sampleWorkInstanceDataSally,
    studentID: ssID
  });

  RadGrad.user.setDegreePlanID(ssID, sampleDegreePlanSally);
  RadGrad.user.setDegreeGoalIDs(ssID, [RadGrad.slug.getEntityID("degree-goal-security", "DegreeGoal")]);
  RadGrad.user.setInterestTagIDs(ssID, [RadGrad.slug.getEntityID("software-engineering", "Tag"), RadGrad.slug.getEntityID("study-group", "Tag")]);
  RadGrad.user.setAboutMe(ssID, "I am a student at the [University of Hawaii](http://www.hawaii.edu/).");
  RadGrad.user.setSemesterID(ssID, RadGrad.semester.get("Spring", 2018));
};

