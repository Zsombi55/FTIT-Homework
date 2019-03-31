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

console.log("--- TASK 1 ---");
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

console.log("--- TASK 2 ---");
// TASK 2.) Create a function that calculates the average female salary. Log the result in the console.
var femEmp, malEmp = [];

function calculateAverageSalary(employees) {
	var sum, count = 0;
	var femSal = [];
	
	employees.forEach(/*your code here*/ function(employee, i) {	// array element, element index, array
		var x = employee.gender;
		
		femEmp = employees.filter(employee => employee.gender == "Female");
		
		
		if (employee.gender == "Female") {
			femSal = femEmp.map(emp => emp.salary);
			count++;
		}
	});
	
	var f = (femSal.map(function(i) { // onverted all array elements into a floating point numbers
		return parseFloat(i);
	}));
	sum = f.reduce(function(a, b) { // sum all resulting numbers
		return (a + b)
	});
	
	console.info("fE", femEmp);
	console.info("fem count", count);
	console.info("salaries", femSal);
	console.info("sal sum", sum);
	
	return /* average */ sum / femSal.length;
}

//calculateAverageSalary(employees);
var average = calculateAverageSalary(employees);
console.log("average", average);

console.log("--- TASK 3 ---");
// TASK 3.) Create a function that returns 2 arrays, one of male and the other of female employees.
function splitEmployees(employees) {
    /* your code here: */
	malEmp = employees.filter(employee => employee.gender == "Male");
	
	return [femEmp, malEmp];	// the easiest way to simulate returning multiple things at once in JS.
}
//splitEmployees(employees);
var sepGen = splitEmployees(employees);
console.log("sep gen", sepGen);

console.log("--- TASK 4 ---");
// TASK 4.) Convert the employee array into an object. Each key of that object should be the employee lastName.
//the object should look like this:
/* var converted = {	// object, tier 1
		Coon: {				// tier 1 property ,, object, tier 2
			id: 1,				// tier 2 property
			firstName: "Solly",
			lastName: "Coon",
			email: "scoon0@miitbeian.gov.cn",
			gender: "Male",
			salary: "293.27"
		},
    etc..
}; */
function convetToObj(employees) {
	Object.assign({}, employees);
	
	// -- "employees" is an array of arrays, so could just perform a double iteration to build the object array of objects.
	// -- or iterate the array and make a new object with other objects as properties each of them "named" by 
	//	the array elements' 3rd ID, while their properties are the same as that of the array's objects.
		
	var key = "name";
    var person = {[key]:"John"};
    console.log(person); // should print  Object { name="John"}
}
convetToObj(employees);

