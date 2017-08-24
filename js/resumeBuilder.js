var bio = {
    "name": "Manikandan Athiappan",
    "role": "Web Developer",
    "contacts": {
        "mobile": "919487660336",
        "email": "manikandnmech@gmail.com",
        "github": "manikandanathiappan",
        "twitter": "Manikandan Athiappan",
        "location": "Srivilliputhur, TamilNadu, India"
    },
    "welcomeMessage": "Like to do web designing and make the webpages cool and styler. Love to travel and want to roam around the world",
    "skills": ["Typewriting", "Developer", "Designer", "Mathematics", "Self-Motivation", "Leadership", "Adaptability"],
    "biopic": "images/mani.jpg"
};

var work = {
    "jobs": [{
            "employer": "Infosys",
            "title": "System Engineer",
            "location": "Bangalore, India",
            "dates": "October 2005",
            "description": "I was hired in the post of System Engineer in the Campus recruitment process in Infosys.  My team successfully undertook many projects and our team work give us a great success.  Greatly worked with great potentiality and my career grows very well."
        },
        {
            "employer": "Google",
            "title": "Project Manager",
            "location": "Mumbai, India",
            "dates": "April 2010",
            "description": "I undertook an interview process in Google and selected as Project Manager to prepare, plan, maintain and to monitor the projects and get submitted.  I was also adopting and applying appropriate technical and quality strategies and standards.  I wish to develop and maintain a agreed project plans."
        },
        {
            "employer": "Microsoft",
            "title": "HR Manager",
            "location": "Delhi, India",
            "dates": "June 2017",
            "description": "In Microsoft, my responsibilites increased as I become HR Manager in the establishment.  I have the duty to oversee department functions and managing employees.  I must involve myself to become expert in training and development, employee relations and also in recruitment and selection."
        }
    ]
};

var projects = {
    "projects": [{
            "title": "Design and Fabrication of Manually Operated Animal Feed Cutter",
            "dates": "April 2002",
            "description": "Designed and Fabricated manually operated animal feed cutter.  Electricity is main problem in many parts of world and hence I altered elecrically operated feed cutter to manually operated feed cutter",
            "images": ["images/feedcutter.jpg"]
        },
        {
            "title": "Online portfolio",
            "dates": "July 2005",
            "description": "Created an online portfolio page as part of Udacity Front-end Web Developer Nanodegree",
            "images": ["images/portfolio.jpg"]
        }
    ]
};

var education = {
    "schools": [{
            "name": "Panimalar Institute of Technology",
            "location": "Chennai, India",
            "degree": "Bachelor of Engineering",
            "majors": ["Mechanical Engineering"],
            "dates": "April 2003",
            "url": "www.pit.ac.in"
        },
        {
            "name": "DePaul University",
            "location": "Chicago, Illinois",
            "degree": "Master of Science",
            "majors": ["Web Design"],
            "dates": "May 2005",
            "url": "www.depaul.edu"
        }
    ],
    "onlineCourses": [{
            "title": "Front-end Web developer Nanodegree",
            "school": "Udacity",
            "dates": "September 2005",
            "url": "https://www.udacity.com/course/nd001"
        },
        {
            "title": "Web development",
            "school": "Udacity",
            "dates": "September 2005",
            "url": "https://www.udacity.com/course/cs253"
        }
    ]
};

bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedbioPic = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedwelMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

    var formattedContacts = [];
    formattedContacts.push(HTMLmobile.replace("%data%", bio.contacts.mobile));
    formattedContacts.push(HTMLemail.replace("%data%", bio.contacts.email));
    formattedContacts.push(HTMLgithub.replace("%data%", bio.contacts.github));
    formattedContacts.push(HTMLlocation.replace("%data%", bio.contacts.location));

    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#header").append(formattedbioPic);
    $("#header").append(formattedwelMsg);

    for (i = 0; i < formattedContacts.length; i++) {
        $("#topContacts").append(formattedContacts[i]);
    }

    for (i = 0; i < formattedContacts.length; i++) {
        $("#footerContacts").append(formattedContacts[i]);
    }

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        for (i = 0; i < bio.skills.length; i++) {
            $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
        }
    }
};

bio.display();

work.display = function() {
    if (work.jobs.length > 0) {
        $("#workExperience").append(HTMLworkStart);

        for (i = 0; i < work.jobs.length; i++) {
            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
            var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
            var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
            var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

            $(".work-entry:last").append(formattedEmployer + formattedTitle);
            $(".work-entry:last").append(formattedLocation);
            $(".work-entry:last").append(formattedDates);
            $(".work-entry:last").append(formattedDescription);
        }
    }
};

work.display();

projects.display = function() {
    if (projects.projects.length > 0) {
        $("#projects").append(HTMLprojectStart);

        for (i = 0; i < projects.projects.length; i++) {
            var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
            var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
            var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

            $(".project-entry:last").append(formattedTitle);
            $(".project-entry:last").append(formattedDates);
            $(".project-entry:last").append(formattedDescription);

            for (var j = 0; j < projects.projects[i].images.length; j++) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[j]);
                $(".project-entry:last").append(formattedImage);
            }

        }
    }
};

projects.display();

education.display = function() {
    if (education.schools.length > 0 || education.onlineCourses.length > 0) {
        $("#education").append(HTMLschoolStart);

        for (i = 0; i < education.schools.length; i++) {
            var formattedName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
            var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
            var formattedDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
            var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);

            $(".education-entry:last").append(formattedName);
            $(".education-entry:last").append(formattedDegree);
            $(".education-entry:last").append(formattedDates);
            $(".education-entry:last").append(formattedLocation);
            for (var j = 0; j < education.schools[i].majors.length; j++) {
                var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors[j]);
                $(".education-entry:last").append(formattedMajor);
            }
        }
        if (education.onlineCourses.length > 0) {
            $("#education").append(HTMLonlineClasses);
            $("#education").append(HTMLschoolStart);

            for (i = 0; i < education.onlineCourses.length; i++) {
                var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
                var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
                var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
                var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url).replace("#", education.onlineCourses[i].url);

                $(".education-entry:last").append(formattedTitle + formattedSchool);
                $(".education-entry:last").append(formattedonlineDates);
                $(".education-entry:last").append(formattedURL);
            }
        }
    }
};

education.display();

function inName(name) {
    var iname = bio.name;
    iname = iname.split(" ");
    iname[1] = iname[1].toUpperCase();
    iname[0] = iname[0].slice(0, 1).toUpperCase() + iname[0].slice(1).toLowerCase();

    return iname[0] + " " + iname[1];
}

$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);
