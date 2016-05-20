/*
This is empty on purpose! Your code to build the resume will go here.
 */

//------------------------------------
// bouton pour mettre nom en majuscule
//------------------------------------
$("#main").append(internationalizeButton);
function inName(prenom_nom) 
	{
		nom = prenom_nom.split(' ');
		nomMaj = nom[1].toUpperCase();
		prenom = nom[0].slice(0,1).toUpperCase() + nom[0].slice(1).toLowerCase();
		nomPrenom = prenom + " " + nomMaj;
		return nomPrenom ;
	}

//------------------
// Elements pour bio
//------------------
 var bio = {
 	"name" : "BRuNo Berrehuel",
 	"role" : "Data Scientist",
 	"contacts" : 
 		{
 			"mobile" : "+33 6 725 165 34",
 			"email" : "berrehuelbruno@gmail.com",
 			"github" : "Breenbo",
 			"linkedin" : "www.linkedin.com/in/brunoberrehuel",
 			"location" : "Paris, France"
 		},
 	"welcomeMessage" : "Salut mec ça va ?",
 	"skills" : 
 		[
 			"Nuclear", " Nuclear Safety", " Project Management", " Big Data", " Java Script", " Logistic", " Leadership", " Team Building", " Risk Management", " Steam machine", " diesel engine"," hydraulics"
 		],
 	"bioPic" : "images/photo_profil.jpg" 
 };

//------------------------------
// Affichage des éléments de bio
//------------------------------
 $("#header").append(HTMLheaderName.replace("%data%", bio.name));
 $("#header").append(HTMLheaderRole.replace("%data%", bio.role));
 $("#header").append(HTMLbioPic.replace("%data%", bio.bioPic));
 $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
 
 $("#header").append(HTMLemail.replace("%data%", bio.contacts.email));
 $("#header").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
 $("#header").append(HTMLlinkedin.replace("%data%", bio.contacts.linkedin));

 $("#footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
 $("#footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
 $("#footerContacts").append(HTMLlinkedin.replace("%data%", bio.contacts.linkedin));

 if (bio.skills.length != 0)
 {
	$("#header").append(HTMLskillsStart) ;
	for (skill in bio.skills) 
	{
		$("#skills").append(HTMLskills.replace("%data%", bio.skills[skill]));
	}
 }

//---------------
// Elements works
//---------------
 var work = {
 	"jobs" : 
 	[
 		{
 			"employer" : "French Navy",
 			"title" : "Officer in the Navy Headquarter",
 			"dates" : "septembre 2014 - septembre 2017",
 			"description" : " In charge of nuclear safety"
 		},
 	 	{
 			"employer" : "French Navy",
 			"title" : "Anti-Aircraft Frigate - Chief Engineer",
 			"dates" : "septembre 2012 - septembre 2014",
 			"description" : " a remplir"
 		},
 		{
 			"employer" : "French Navy",
 			"title" : "Nuclear Submarine - Chief Engineer",
 			"dates" : "septembre 2010 - septembre 2012",
 			"description" : " a remplir"
 		},
 	 	{
 			"employer" : "French Navy",
 			"title" : "Anti-Aircraft Frigate - Engineer",
 			"dates" : "septembre 2008 - septembre 2010",
 			"description" : " a remplir"
 		},
 		{
 			"employer" : "French Navy",
 			"title" : "Nuclear Submarine - Engineer",
 			"dates" : "septembre 2003 - septembre 2008",
 			"description" : " a remplir"
 		},
 		{
 			"employer" : "French Navy",
 			"title" : "Landing Platform Dock - junior Engineer",
 			"dates" : "septembre 2002 - septembre 2003",
 			"description" : " a remplir"
 		}	
 	]
 };

//-----------------------------
// Affichage des éléments works
//-----------------------------

function displayWork()
	 {
 		for (job in work.jobs)
 		{
 			$("#workExperience").append(HTMLworkStart);
 			formattedJob = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
 			formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
 			formattedJT = formattedJob + formattedTitle;
 			$(".work-entry:last").append(formattedJT);
 			formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
 			$(".work-entry:last").append(formattedDates);
 			formattedDes = HTMLworkDescription.replace("%data%",work.jobs[job].description);
 			$(".work-entry:last").append(formattedDes);
 		}
	}

displayWork();

//-------------------
// Elements éducation
//-------------------

 var education = 
 {
 	"schools" : 
 	[
		{
 			"name" : "Submarine Navigation School",
 			"city" : "Toulon, France",
 			"year" : "2005",
 			"degree" : "Nuclear Safety Certificate"	
 		},
		{ 
			"name" : "Military Application of the Nuclear Energy School",
 			"city" : "Cherbourg, France",
 			"year" : "2004",
 			"degree" : "Master of nuclear ingeniering"
 		},
 		{
			"name" : "Naval Academy",
 			"city" : "Brest, France",
 			"year" : "1998",
 			"degree" : "Master of general ingeniering"
 		}
 	],
 	
 	"onlineCourse" : 
 	[
 		{
 			"title" : "Data Science",
 			"school" : "Coursera",
 			"date" : "2016",
 			"url" : "https://www.coursera.org/specializations/jhu-data-science"
 		},
 		{
 			"title" : "Javascript Basic",
 			"school" : "Udacity",
 			"date" : "2016",
 			"url" : "www.classroom.udacity.com/courses/ud804"
 		},
 		{
 			"title" : "Projet Management" ,
 			"school" : "Ecole Centrale de Lille",
 			"date" : "2016",
 			"url" : "www.gestiondeprojet.pm"
 		}
 	]
 };

function displaySchool ()
	{	
		for (data in education.schools) 
			{
				$("#education").append(HTMLschoolStart);
				formattedName = HTMLschoolName.replace("%data%", education.schools[data].name);
				$(".education-entry:last").append(formattedName);
				formattedDate = HTMLschoolDates.replace("%data%", education.schools[data].year);
				$(".education-entry:last").append(formattedDate);
				formattedDeg = HTMLschoolDegree.replace("%data%", education.schools[data].degree);
				$(".education-entry:last").append(formattedDeg);
			}
	}
/*
function displayOnLine ()
	{	
		for (data in education.onlineCourse) 
			{
				formattedName = HTMLonlineTitle.replace("%data%", education.onlineCourse[data].title);
				$(".education-entry:last").append(formattedName);
				formattedDate = HTMLonlineDates.replace("%data%", education.onlineCourse[data].date);
				$(".education-entry:last").append(formattedDate);
				formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourse[data].school);
				$(".education-entry:last").append(formattedSchool);
				formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourse[data].url);
				$(".education-entry:last").append(formattedURL);
			}
	}
*/

displaySchool() ;
displayOnLine() ;


onlineCourse.display = function ()
	{	
		for (data in education.onlineCourse) 
			{
				formattedName = HTMLonlineTitle.replace("%data%", education.onlineCourse[data].title);
				$(".education-entry:last").append(formattedName);
				formattedDate = HTMLonlineDates.replace("%data%", education.onlineCourse[data].date);
				$(".education-entry:last").append(formattedDate);
				formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourse[data].school);
				$(".education-entry:last").append(formattedSchool);
				formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourse[data].url);
				$(".education-entry:last").append(formattedURL);
			}
	}