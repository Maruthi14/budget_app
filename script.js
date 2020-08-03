/*
console.log('Hello again');
var name ='Maruthi';
console.log(name);
var age=24;
console.log(age);
var fullAge=true;
console.log(fullAge);
var color;
console.log(color);
//type coercion
console.log(name+' '+age+' '+fullAge+' '+color);
//variable mutation
age='twent three';
alert(name+' '+age+' '+fullAge+' '+color);
var lastName=prompt('enter last name');
console.log(name+' '+lastName+age+' '+fullAge+' '+color);
//typeof
*/
/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 

GOOD LUCK 😀
*/

/*
var ageJohn=67;
var ageMark=78;
var htJohn=1.72;
var htMark=1.84;
var markBMI,johnBMI,isJohn;
markBMI=ageMark/(htMark*htMark);
johnBMI=ageJohn/(htJohn*htJohn);
var isJohn=markBMI<johnBMI;
console.log('Is Marks BMI higher than Johns?'+isJohn);

*/
/*
var john={firstName:'Jon',
			lastName:'snow',
			birthYear:1994,
			job:'teacher',
			curAge:function(){
				this.age= 2020-this.birthYear
			}
}
john.curAge()
console.log(john)
*/

/*
Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.

Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

GOOD LUCK 😀
*/

/*
var Mark={
	firstName:'Mark',
	mass:65,
	height:1.82,
	BMI:function(){
		this.bmi=this.mass/(this.height*this.height)
	}
	
}

var Jon={
	firstName:'Jon',
	mass:65,
	height:1.82,
	BMI:function(){
		this.bmi=this.mass/(this.height*this.height)
	}
	
}
Mark.BMI()
Jon.BMI()

if (Jon.bmi > Mark.bmi){
	console.log(Jon)
}
else if(Mark.bmi >Jon.bmi){
	console.log(Mark)
}
else{
	console.log(Jon,Mark)
}

*/

/*
Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!

This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the loop.


EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill is more than $300 (different than John).

5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average

GOOD LUCK 😀
*/

/*
var jon={
	firstName:'Jon',
	bills:[124,48,268,180,42],
	tips:[],
	fBill:[],
	tip:function(){
		//this.tips=[]
		//this.fBill=[]
		for(var i=0;i<this.bills.length;i++)
		{
			var bill=this.bills[i]
			if (bill<50) 
			{this.tips.push(bill*0.2) 
			this.fBill.push(bill+this.tips[i])} 
			else if (bill>=50 && bill<200)
			{this.tips.push(bill*0.15) 
			this.fBill.push(bill+this.tips[i])}
			else 
			{ this.tips.push(bill*0.1)  
			this.fBill.push(bill+this.tips[i])}
		}
	}
	
}

jon.tip()
function avg_tips(tips){
	var s=0
	for(var i=0;i<tips.length;i++)
	{
		s+=tips[i]
	}
	return s/tips.length
}
var avg=avg_tips(jon.tips)
console.log(avg,jon)
*/

//advanced java script concepts

var Person= function (name,age,job){
	this.name=name
	this.age=age
	this.job=job
	this.year=-1
}

Person.prototype.calculateyear=function(){
	this.year=2020-this.age
	//console.log(this.year)
}
var maruthi =new Person('maruthi','25','softwareEngineer')
maruthi.calculateyear()
var alamuri = new Person('alamuri','21','MS')
alamuri.calculateyear()
console.log(maruthi,alamuri)

//console.info in console shows all functions that can be performed on that object
//object.create 
/*
var protoPerson={
	calculateAge :function(){
		console.log(2020-this.age)
	}
}
var maruthi =Object.create(protoPerson,{
	name:{value:'maruthi'},
	age:{value:'21'},
	job:{value:'MS'}
})
//other way
var alamuri=Object.create(protoPerson)
alamuri.name='alamuri'
alamuri.age='24'
alamuri.job='softwareEngineer'
*/
//functions returning function
/*
function interviewQuestion(job){
	if (job ==='teacher'){
		a='what subject you teach'
		return function(name){
			console.log(a+' '+name)
		}
	}
	else{
		a='what you feel about your job'
		return function(name){
			console.log(a+' '+name)
		}
		
	}
	
}
var teachq=interviewQuestion('teacher')
teachq('alamuri')
//var teachq=interviewQuestion('teacher')('alamuri')
var desq=interviewQuestion('design')('maruthi')
*/

//immediately invoked function expressions IIFE
/*
(function (goodLuck){
	score=Math.random() * 10+goodLuck
	
	console.log(score>=5)	
})(2)
*/


//closures

/*
function interviewQuestion(job){
	return function(name){
	if (job ==='teacher'){
		a='what subject you teach'
		
			console.log(a+' '+name)
		}
	
	else{
		a='what you feel about your job'
		
			console.log(a+' '+name)
		}
		
	}
	
}
var teachq=interviewQuestion('teacher')
teachq('alamuri')
//var teachq=interviewQuestion('teacher')('alamuri')
var desq=interviewQuestion('design')('maruthi')
*/

//bind,call,apply methods

/*years=[1990,1975,2002,2006,1985]
function calculatearr(person,fn){
	var arrRes=[]
	for(var i=0;i<person.length;i++){
		arrRes.push( fn(person[i]))
	}
	return arrRes
}
function calculateAge(year){
	return 2020-year
}
ages=calculatearr(years,calculateAge)
console.log(ages)
function fullAge(limit,age){
	return age>=limit
}
var fullAgeIndia=calculatearr(ages,fullAge.bind(this,18))
console.log(fullAgeIndia)*/

//bind,call,apply methods  
//we can use apply method when the input is  an array in the place of call
/*var maruthi = {
	name:'maruthi',
	age:25,
	job:'softwareEngineer',
	presentation:function(style,timeofday){
		if (style==='formal'){
			console.log('Hi welcome to the presentation'+ ' I\'m ' +this.name +' I\'m'+this.age+'yearsold'+'I\'m currently working as '+this.job+'    Good'+timeofday+'.')			
		}
		else if(style==='friendly'){
			console.log('Hey what\'s up guys'+ ' I\'m ' +this.name +' I\'m'+this.age+'yearsold'+'I\'m currently working as '+this.job+ '    '+'Good'+timeofday+'.')
		}
	}		
}	

var alamuri={
	name:'alamuri',
	age:21,
	job:'teacher'
}

maruthi.presentation.call(alamuri,'formal','morning')
var friendlyMaruthi=maruthi.presentation.bind(maruthi,'friendly')
friendlyMaruthi('night')*/
