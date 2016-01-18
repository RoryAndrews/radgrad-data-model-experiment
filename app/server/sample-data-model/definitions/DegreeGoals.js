defineDegreeGoals = function() {
  let sampleDegreeGoals = [
    {name: "Silicon Valley Tech", slug: "degree-goal-sv-tech", description: "TBD"},
    {name: "Ph.D. Prep", slug: "degree-goal-phd-prep", description: "TBD"},
    {name: "security", slug: "degree-goal-security", description: "TBD"},
    {name: "Network Engineer", slug: "network-engineer", description: "Design and implement computer networks."},
    {name: "Web Developer", slug: "web-developer", description: "Design and implement websites and web apps."}

  ];

  _.each(sampleDegreeGoals, RadGrad.degreegoal.define);
};