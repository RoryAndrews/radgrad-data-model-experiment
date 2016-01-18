defineUsers = function() {
  let sampleUsers = [
    {
      firstName: "Philip",
      middleName: "Meadows",
      lastName: "Johnson",
      slug: "philipjohnson",
      password: "foo",
      uhEmail: "johnson@hawaii.edu",
      role: RadGrad.role.admin
    },
    {
      firstName: "Henri",
      middleName: "",
      lastName: "Casanova",
      slug: "henricasanova",
      password: "foo",
      uhEmail: "henric@hawaii.edu",
      role: RadGrad.role.faculty
    },
    {
      firstName: "Gerald",
      middleName: "",
      lastName: "Lau",
      slug: "geraldlau",
      password: "foo",
      uhEmail: "glau@hawaii.edu",
      role: RadGrad.role.faculty
    },
    {
      firstName: "Sergey",
      middleName: "",
      lastName: "Negrashov",
      slug: "sergeynegrashov",
      password: "foo",
      uhEmail: "sin8@hawaii.edu",
      role: RadGrad.role.student
    },
    {
      firstName: "Anthony",
      middleName: "",
      lastName: "Christe",
      slug: "anthonychriste",
      password: "foo",
      uhEmail: "achriste@hawaii.edu",
      role: RadGrad.role.student
    },
    {
      firstName: "Bob",
      middleName: "",
      lastName: "Bobert",
      slug: "bobbobert",
      password: "foo",
      uhEmail: "bobb@hawaii.edu",
      role: RadGrad.role.student
    },
    {
      firstName: "Sally",
      middleName: "",
      lastName: "Sue",
      slug: "sallysue",
      password: "foo",
      uhEmail: "ssue@hawaii.edu",
      role: RadGrad.role.student
    }
  ];

  _.each(sampleUsers, RadGrad.user.define);
}