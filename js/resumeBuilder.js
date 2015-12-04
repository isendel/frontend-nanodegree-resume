//******************Bio section
var bio = {
    "name": "Iuliia Pishchulina",
    "role": "Front-end developer",
    "skills": ["HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap", "Git/Github"],
    "contacts": {
        "email": "yulia.pi@gmail.com",
        "skype": "yulia.pishchulina",
        "mobile": "xxx - xx- xx",
        "github": "yuliapi",
        "location": "Boston MA"
    },
    "welcomeMessage": "I am looking for new projects to improve my skillls",
    "photo": "images/fry.jpg",
    displayBio: function() {
      $("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
      $("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
      $("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
      $("#topContacts").append(HTMLcontactGeneric.replace("%data%", bio.contacts.skype).replace("%contact%", "skype"));
      $("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
      $("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
      $("#footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
      $("#footerContacts").append(HTMLcontactGeneric.replace("%data%", bio.contacts.skype).replace("%contact%", "skype"));
      $("#footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
      $("#footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
      $("#header").append(HTMLbioPic.replace("%data%", bio.photo));
      $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));

      if (bio.skills !== null && bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
          for (var i = 0; i < bio.skills.length; i++) {
            $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
          }
        }
    }
};

//*************Progect section
var projects = {
projectsArr: [
    {
        "title": "Project 1",
        "dates": "3/11/2015 - 6/16/2015",
        "description": "Facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.Corrupti quos dolores et quas molestias excepturi sint occaecati. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat",
        "images": ["https://placehold.it/250x250", "https://placehold.it/250x250", "https://placehold.it/250x250"]
    },
    {
        "title": "Project 2",
        "dates": "6/9/2015 - 9/21/2015",
        "description": "Accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo. Animi, id est laborum et dolorum fuga. Nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam. At vero eos et accusamus. Duis aute irure dolor in reprehenderit in voluptate velit. Nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam.",
        "images": ["https://placehold.it/250x250", "https://placehold.it/250x250", "https://placehold.it/250x250"]
    }
],
display: function() {
  console.log(projects.projectsArr);
  for (i in projects.projectsArr) {
    $("#projects").append(HTMLprojectStart);
    $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.projectsArr[i].title));
    $(".project-entry:last").append(HTMLprojectDates.replace("%data%", projects.projectsArr[i].dates));
    $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", projects.projectsArr[i].description));
    for (img in projects.projectsArr[i].images) {
      $(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.projectsArr[i].images[img]));
    }
    }
}
};

//**************Work section
var work = {
  "jobs": [  
      {
        "employer" : "Company 1",
        "title": "Position 1",
        "location": "New York, NY",
        "dates": "Dec 2013 - Nov 2015",
        "description": "Some description"
      },
      {
        "employer": "Company 2",
        "title": "Position 2",
        "location": "Stamford, CT",
        "dates": "Nov 2015 - Dec 2015",
        "description": "Some description"
      }
  ],
  displayWork: function() {
    for (job in work.jobs) {
      $("#workExperience").append(HTMLworkStart);
      $(".work-entry:last").append(HTMLworkEmployer.replace("%data%", work.jobs[job].employer) + 
         HTMLworkTitle.replace("%data%", work.jobs[job].title));
      $(".work-entry:last").append(HTMLworkDates.replace("%data%", work.jobs[job].dates));
      $(".work-entry:last").append(HTMLworkLocation.replace("%data%", work.jobs[job].location));
      $(".work-entry:last").append(HTMLworkDescription.replace("%data%", work.jobs[job].description));
    }
  }
};

//****************Education section

var education = {
    "schools": [
      {
        "name": "Kyiv Polytechnic Institute",
        "location": "Kyiv, Ukraine",
        "url": "www.ntukpi.com",
        "dates": "1999 - 2003",
        "degree": "BA",
        "major": ["Subject1", "Subject2", "Subject3", "Subject4"]
      }, 
      {
        "name": "Kyiv Polytechnic Institute",
        "location": "Kyiv, Ukraine",
        "url": "www.ntukpi.com",
        "dates": "2003 - 2005",
        "degree": "Master",
        "major": ["Subject1", "Subject5", "Subject6"]
      }
    ],
    
    "onlineCourses": [
      {
        "title": "Front-End Web Developer Nanodegree",
        "school": "Udacity",
        "dates": "Oct 2015 - May 2016",
        "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
      }
    ],
    
displayEducation : function() {
  for (i in education.schools) {
    $("#education").append(HTMLschoolStart);
    $(".education-entry:last").append(HTMLschoolName.replace("%data%", education.schools[i].name) +
       HTMLschoolDegree.replace("%data%", education.schools[i].degree)); 
    $(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[i].dates));
    $(".education-entry:last").append(HTMLschoolLocation.replace("%data%", education.schools[i].location));
    $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[i].major.join(", "))); 
  }
},
displayOnlineCourses: function() {
  for(i in education.onlineCourses) {
    $("#education").append(HTMLonlineClasses);
    $("#education").append(HTMLschoolStart);
    $(".education-entry:last").append(HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title) +
       HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school));
    $(".education-entry:last").append(HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates));
    $(".education-entry:last").append(HTMLonlineURL.replace("%data%", education.onlineCourses[i].url));
  }
}  
};
 


$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);

//******************Functions runing
bio.displayBio();
work.displayWork();
education.displayEducation();
education.displayOnlineCourses();
projects.display();
initializeMap();




