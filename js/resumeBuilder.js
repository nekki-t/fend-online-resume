// ############################
// CONST
// ############################
const DATA = '%data%';
const CONTACT = '%contact%';
// ############################
// Object
// ############################
//--------------
// bio
//--------------
var bio = {
    'name': 'nekki t',
    'role': 'Senior Software Developer',
    'contacts': {
        'mobile': '816-1234-1234',
        'email': 'nekki.t.0317@gmail.com',
        'github': 'nekki_t',
        'twitter': '@fake',
        'location': 'Tokyo'
    },
    'welcomeMessage': 'Hello!! Stay hungry, stay foolish!',
    'skills': [
        'HTML/CSS/Javascript',
        'iOS(Swift)',
        'MEAN Stack - Angular 1 & 2',
        'Ruby On Rails',
        'ASP.NET/Windows Programming(C#)',
        'Python',
        'Java',
        'Perl',
        'Database Programming - Mongo/MySql/Postgres/Oracle/SQLServer',
        'Teaching - Computer Science for national qualifications'
    ],
    'biopic': 'images/picture.png'
};

bio.display = function () {
    // Setting values
    //basic
    var formattedName = HTMLheaderName.replace(DATA, bio.name);
    var formattedRole = HTMLheaderRole.replace(DATA, bio.role);
    var formattedPic = HTMLbioPic.replace(DATA, bio.biopic);
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace(DATA, bio.welcomeMessage);
    //contacts
    var formattedMobile = HTMLcontactGeneric.replace(CONTACT, 'mobile').replace(DATA, bio.contacts.mobile);
    var formattedEmail = HTMLcontactGeneric.replace(CONTACT, 'email').replace(DATA, bio.contacts.email);
    var formattedGithub = HTMLcontactGeneric.replace(CONTACT, 'Github').replace(DATA, bio.contacts.github);
    var formattedTwitter = HTMLcontactGeneric.replace(CONTACT, 'twitter').replace(DATA, bio.contacts.twitter);
    var formattedLocation = HTMLcontactGeneric.replace(CONTACT, 'location').replace(DATA, bio.contacts.location);

    // Add to HTML
    prependArray($('#header'), [formattedRole, formattedName, formattedPic]);
    appendArray($('#header'), [formattedWelcomeMsg]);
    appendArray($('#topContacts'), [formattedMobile, formattedEmail, formattedGithub, formattedTwitter, formattedLocation]);
    appendArray($('#footerContacts'), [formattedMobile, formattedEmail, formattedGithub, formattedTwitter, formattedLocation]);

    // Add skills
    $('#header').append(HTMLskillsStart);
    bio.skills.forEach(function (skill) {
        $('#skills').append(HTMLskills.replace(DATA, skill));
    });
};

//--------------
// work
//--------------
var work = {
    'jobs': [
        {
            'employer': 'Self',
            'title': 'Freelance Engineer',
            'location': 'Tokyo',
            'dates': 'Jun 2006 - Present',
            'description': 'Enterprise software engineer for a security service company - Web/Windows/Mobile/Database'
        },
        {
            'employer': 'Self',
            'title': 'Freelance Engineer',
            'location': 'Tokyo',
            'dates': 'Oct 2005 - May 2006',
            'description': 'ERP package software developing in a developer company - Windows/Mobile/Database'
        },
        {
            'employer': 'Self',
            'title': 'Teacher',
            'location': 'Tokyo',
            'dates': 'Apr 2004 - Sept 2005',
            'description': 'Teached computer science for national qualification'
        },
        {
            'employer': 'Self',
            'title': 'Software developer - Web/Windows/Mobile/Database',
            'location': 'Osaka',
            'dates': '1991 - Apr March',
            'description': 'Developed many web pages and mobile & windows apps by orders'
        }
    ]
};

work.display = function () {
    $('#workExperience').append(HTMLworkStart);
    var formattedEmployer = '';
    var formattedTitle = '';
    var target = null;

    work.jobs.forEach(function (job) {
        target = $('.work-entry:last');
        formattedEmployer = HTMLworkEmployer.replace(DATA, job.employer);
        formattedTitle = HTMLworkTitle.replace(DATA, job.title);
        target.append(formattedEmployer + formattedTitle);
        target.append(HTMLworkDates.replace(DATA, job.dates));
        target.append(HTMLworkLocation.replace(DATA, job.location));
        target.append(HTMLworkDescription.replace(DATA, job.description));
    });
};

//--------------
// projects
//--------------
var projects = {
    'projects': [
        {
            'title': 'PrashCard',
            'dates': 'Feb 2016 - Nov 2016',
            'description': 'Capstone project for iOS Nanodegree!!!',
            'images': ['images/prashcard-small.png']
        },
        {
            'title': 'Virtual Tourist',
            'dates': 'Dec 2015 - Jan 2016',
            'description': '4th project for iOS Nanodegree!!',
            'images': ['images/virtual_tourist-small.png']
        },
        {
            'title': 'On the map',
            'dates': 'Sep 2015 - Nov 2015',
            'description': '3rd project for iOS Nanodegree!',
            'images': ['images/onthemap-small.png']
        }
    ]
};

projects.display = function () {
    var target = null;
    var idx = 0;
    projects.projects.forEach(function (project) {
        $('#projects').append(HTMLprojectStart);
        target = $('.project-entry:last');

        if (idx % 2 === 0) {
            target.addClass('row-even');
        } else {
            target.addClass('row-odd');
        }

        target.append(HTMLprojectTitle.replace(DATA, project.title));
        target.append(HTMLprojectDates.replace(DATA, project.dates));
        target.append(HTMLprojectDescription.replace(DATA, project.description));
        project.images.forEach(function (image) {
            target.append(HTMLprojectImage.replace(DATA, image));
        });
        idx += 1;
    });
};

//--------------
// education
//--------------
var education = {
    'schools': [
        {
            'name': 'Some College',
            'location': 'Tokyo',
            'dates': 'Oct 2008 - Present',
            'degree': 'SwitchToNano-Degree',
            'majors': ['Commerce - Correspondence', 'Finance'],
            'url': 'http://fake.edu'
        }
    ],
    'onlineCourses': [
        {
            'title': 'Front End Web Developer - Nanodegree',
            'school': 'Udacity',
            'dates': 'Aug 2016 - Present',
            'url': 'https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001'
        },
        {
            'title': 'iOS Developer - Nanodegree',
            'school': 'Udacity',
            'dates': 'Aug 2015 - Nov 2016',
            'url': 'https://www.udacity.com/course/ios-developer-nanodegree--nd003'
        },
        {
            'title': 'MITx: 15.390x Entrepreneurship 101: Who is your customer?',
            'school': 'edx',
            'dates': 'Aug 2015 - Nov 2016',
            'url': 'https://courses.edx.org/courses/MITx/15.390x/1T2014/info'
        },
        {
            'title': 'CS169.2x: Engineering Software as a Service',
            'school': 'edx',
            'dates': 'Nov 2013 - Dec 2013',
            'url': 'https://www.edx.org/course/engineering-software-service-saas-part-2-uc-berkeleyx-cs169-2x'
        },
        {
            'title': 'CS169.1x: Engineering Software as a Service',
            'school': 'edx',
            'dates': 'Sep 2013 - Nov 2013',
            'url': 'https://www.edx.org/course/engineering-software-service-saas-part-1-uc-berkeleyx-cs169-1x'
        }
    ]
};

education.display = function () {
    var eduRoot = $('#education');

    education.schools.forEach(function (school) {
        eduRoot.append(HTMLschoolStart);
        var target = $('.education-entry:last');
        target.append(HTMLschoolName.replace(DATA, school.name).replace('#', school.url));
        target.append(HTMLschoolDegree.replace(DATA, school.degree));
        target.append(HTMLschoolDates.replace(DATA, school.dates));
        target.append(HTMLschoolLocation.replace(DATA, school.location));
        target.append(HTMLschoolMajor.replace(DATA, school.majors));
    });
    eduRoot.append(HTMLonlineClasses);
    eduRoot.append(HTMLschoolStart);

    education.onlineCourses.forEach(function (os) {
        var target = $('.education-entry:last'); //refresh
        target.append(HTMLonlineTitle.replace(DATA, os.title).replace('#', os.url) + HTMLonlineSchool.replace(DATA, os.school));
        target.append(HTMLonlineDates.replace(DATA, os.dates));
        target.append(HTMLonlineURL.replace(DATA, os.url).replace('#', os.url));
    });
};

// ############################
// Shared functions
// ############################
function prependArray(target, contentArray) {
    contentArray.forEach(function (item) {
        target.prepend(item);
    });
}

function appendArray(target, contentArray) {
    contentArray.forEach(function (item) {
        target.append(item);
    });
}

// ############################
// Display ALL
// ############################
$('#mapDiv').append(googleMap);
bio.display();
work.display();
projects.display();
education.display();



