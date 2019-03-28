// -----  Colorful Browser Console Message -----
var browserCStyle = [
    "background: linear-gradient(#D33106, #571402)"
    , "border: 1px solid #3E0E02"
    , "color: white"
    , "display: block"
    , "text-shadow: 0 1px 0 rgba(0, 0, 0, 0.3)"
    , "box-shadow: 0 1px 0 rgba(255, 255, 255, 0.4) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset"
    , "line-height: 40px"
    , "text-align: center"
    , "font-weight: bold"
].join(';');

console.log("%c FTIT Homework site. ", browserCStyle);
// ----- . -----

// The "master" variable. All exercises are to use this until specified otherwise!
var employees = [
	{
		"id": 1,
		"firstName": "Solly",
		"lastName": "Coon",
		"email": "scoon0@miitbeian.gov.cn",
		"gender": "Male",
		"salary": "293.27"
	},
    {
        "id": 2,
        "firstName": "Myron",
        "lastName": "Clissold",
        "email": "mclissold1@over-blog.com",
        "gender": "Male",
        "salary": "463.44"
    },
    {
        "id": 3,
        "firstName": "Perla",
        "lastName": "Fauguel",
        "email": "pfauguel2@discovery.com",
        "gender": "Female",
        "salary": "764.17"
    },
    {
        "id": 4,
        "firstName": "Aundrea",
        "lastName": "Kegan",
        "email": "akegan3@tripod.com",
        "gender": "Female",
        "salary": "574.63"
    },
    {
        "id": 5,
        "firstName": "Eadith",
        "lastName": "Chene",
        "email": "echene4@prnewswire.com",
        "gender": "Female",
        "salary": "417.37"
    },
    {
        "id": 6,
        "firstName": "Lorette",
        "lastName": "Tuther",
        "email": "ltuther5@admin.ch",
        "gender": "Female",
        "salary": "377.40"
    },
    {
        "id": 7,
        "firstName": "Robenia",
        "lastName": "Robins",
        "email": "rrobins6@networkadvertising.org",
        "gender": "Female",
        "salary": "206.26"
    },
    {
        "id": 8,
        "firstName": "Moe",
        "lastName": "Bottoms",
        "email": "mbottoms7@php.net",
        "gender": "Male",
        "salary": "425.70"
    },
    {
        "id": 9,
        "firstName": "Talia",
        "lastName": "Cutsforth",
        "email": "tcutsforth8@delicious.com",
        "gender": "Female",
        "salary": "711.72"
    },
    {
        "id": 10,
        "firstName": "Ives",
        "lastName": "Crennan",
        "email": "icrennan9@microsoft.com",
        "gender": "Male",
        "salary": "668.98"
    }
];

// TASK 1.) Create a function that returns only the firstName of each person.
function collectFirstName(employees) {
    console.info("employees: ", employees);
    if (!employees) {
        console.info("Missing values: \"employees\"!");
    }
    var firstNames = employees.map(function(employee) {
        //TODO - return firstName
		for (var i = 0; i < employees.length; i++) {
			return employee[Object.keys(employee)[1]];
		}
    });
    //TODO - log firstNames
	console.log(firstNames);
    //TODO - return firstNames
	return firstNames;
}
collectFirstName(employees);

// TASK 2.) Create a function that calculates the average female salary. Log the result in the console.
function calculateAverageSalary(employees) {
	var sum, count = 0;
	var salaries = [];
	
	employees.forEach(/*your code here*/ function(employee, i) {
		var x = employee.gender;
		console.info("genders", x);
		if (Object.keys(employees).gender == "female") {
			salaries = employees.map(function(employee) {
				for (var i = 0; i < employees.length; i++) {
					return employee[Object.keys(employee).salary];
				}
			});
			count++;
		}
	});
	
	console.info("salaries", salaries);
	console.info("fem sal count", count);
	
	/* for (var i = 0; i < employees.length; i++) {
		var femEmp = employees.filter(employees => employees.gender === "female");
		var femSal = femEmp.map(function (femE, index) {
			femEmp.map(femEmp.salary)
		});
		
		console.info("female Emp.", femEmp);
		console.info("sum", femSal[index]);
	}; */
	
	/* for( var i = 0; i < femSal.length; i++ ){
		sum += parseFloat( femSal[i], 10 );
	} */
	
	//return /* average */ sum / femSal.length;
}
calculateAverageSalary(employees);
// var average = calculateAverageSalary(employees);
// console.log("average", average);




// TASK 3.) As always, create a function that return 2 arrays, one of male and the other of female employees.
// function splitEmployees(employees) {
    // /* your code here: */
    // /* hint: maybe use array filter */
// }
// splitEmployees(employees);

// TASK 4.) Bonus! Convert the employee array into an object. Each key of that object should be the employee lastName.
//the object should look like this:
// var converted = {
    // Coon: {
        // id: 1,
        // firstName: "Solly",
        // lastName: "Coon",
        // email: "scoon0@miitbeian.gov.cn",
        // gender: "Male",
        // salary: "293.27"
    // },
    // Clissold: {
        // id: 2,
        // firstName: "Myron",
        // lastName: "Clissold",
        // email: "mclissold1@over-blog.com",
        // gender: "Male",
        // salary: "463.44"
    // }
    // and so on....
// };



