defineTags = function() {

  let sampleTags = [
    {
      name: "Software Engineering",
      slug: "software-engineering",
      description: "The systematic application of scientific and technological knowledge, methods, and experience to the design, implementation, testing, and documentation of software",
      tagType: "cs-disciplines"
    },
    {
      name: "Psychology",
      slug: "psychology",
      description: "The scientific study of the human mind and its functions, especially those affecting behavior in a given context",
      tagType: "non-cs-disciplines"
    },
    {
      name: "Silicon Valley",
      slug: "silicon-valley",
      description: "the southern portion of the San Francisco Bay Area, centering on the Santa Clara valley.",
      tagType: "locations"
    },
    {
      name: "Data Scientist",
      slug: "data-scientist",
      description: "Combine statistics, data mining, and predictive analytics to gain insight from large data sets.",
      tagType: "professional-goals"
    },
    {
      name: "Cyber Security",
      slug: "cyber-security",
      description: "Cyber attacks and their prevention.",
      tagType: "cs-disciplines"
    },
    {
      name: "Free Food",
      slug: "free-food",
      description: "Free food will be available.",
      tagType: "event-tag"
    },
    {
      name: "Prizes",
      slug: "prizes",
      description: "Prizes may be won.",
      tagType: "event-tag"
    },
    {
      name: "Free Stuff",
      slug: "free-stuff",
      description: "Free stuff may be available.",
      tagType: "event-tag"
    },
    {
      name: "Study Group",
      slug: "study-group",
      description: "This is a study group.",
      tagType: "event-tag"
    }
  ];

  _.each(sampleTags, RadGrad.tag.define);
};