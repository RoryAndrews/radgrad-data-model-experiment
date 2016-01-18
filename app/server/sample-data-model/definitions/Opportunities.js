defineOpportunities = function() {
  let sampleOpportunities = [
    {
      name: "ATT Hackathon 2015",
      slug: "hack15",
      description: "Da best",
      opportunityType: "event",
      sponsor: "philipjohnson",
      tags: ["software-engineering"],
      startActive: moment("2015-01-12").toDate(),
      endActive: moment("2015-02-12").toDate()
    },
    {
      name: "ACM Manoa Membership",
      slug: "acm-manoa",
      description: "ACM Student Chapter",
      opportunityType: "club",
      sponsor: "henricasanova",
      tags: ["software-engineering", "silicon-valley"],
      startActive: moment("2015-01-12").toDate(),
      endActive: moment("2016-02-12").toDate()
    },
    {
      name: "IEEE Student Branch",
      slug: "ieee-student-branch",
      description: "Institute of Electrical and Electronics Engineers student branch.",
      opportunityType: "club",
      sponsor: "philipjohnson",
      tags: [],
      startActive: moment("2016-01-12").toDate(),
      endActive: moment("2017-02-12").toDate()
    },
    {
      name: "Po'oihe 2016",
      slug: "pooihe2016",
      description: "Po‘oihe 2016 Cyber Security Exercise. An event for students and industry professionals to participate in a simulated cyber attack.",
      opportunityType: "event",
      sponsor: "geraldlau",
      tags: ["cyber-security"],
      startActive: moment("2015-08-15").toDate(),
      endActive: moment("2016-06-15").toDate()
    }
  ];

  _.each(sampleOpportunities, RadGrad.opportunity.define);
};