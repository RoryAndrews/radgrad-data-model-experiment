defineCourses = function() {
  let sampleCourses = [
    {
      name: "Program Structure",
      slug: "ics212",
      number: "ICS 212",
      description: "Program organization paradigms, programming environments, implementation of a module from specifications, the C and C++ programming languages.",
      tags: ["software-engineering"]
    },
    {
      name: "nonICS 100-level course",
      slug: "nonICS-1xx",
      number: "nonICS 1xx",
      description: "Any non ICS course at the 100 level.",
      tags: []
    },
    {
      name: "Algorithms",
      slug: "ics311",
      number: "ICS 311",
      description: "Design and correctness of algorithms, including divide-and-conquer, greedy and dynamic programming methods.",
      tags: ["software-engineering", "silicon-valley"]
    },
    {
      name: "Software Engineering I",
      slug: "ics314",
      number: "ICS 314",
      description: "System specification, modeling and analysis, prototyping, hierarchal design, program design methods, cost estimation, project management, computer-aided software design. Team-oriented software-design project.",
      tags: ["software-engineering"]
    },
    {
      name: "Software Engineering II",
      slug: "ics414",
      number: "ICS 414",
      description: "Continuation of 314. Project management, quality, and productivity control, testing and validation, team management. Team-oriented software-implementation project.",
      tags: ["software-engineering"]
    },
    {
      name: "Operating Systems",
      slug: "ics332",
      number: "ICS 332",
      description: "Operating system concepts and structure, processes and threads, CPU scheduling, memory management, scheduling, file systems, inter-process communication, virtualization, popular operating systems.",
      tags: []
    },
    {
      name: "Artificial Intelligence",
      slug: "ics461",
      number: "ICS 461",
      description: "Survey of artificial intelligence: natural language processing, vision and robotics, expert systems. Emphasis on fundamental concepts: search, planning, and problem solving, logic, knowledge representation.",
      tags: []
    }
  ];

  _.each(sampleCourses, RadGrad.course.define);
};
