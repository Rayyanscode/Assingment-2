// ...........................21-25..............................................

// ....................q1.........................................

/*CHANGING CASE #1*/
// let myName=prompt('Enter your name');
// myName=myName.toUpperCase();
// alert(myName);

/*CHANGING CASE #2*/
// let str=prompt('enter your sentence:')
//     str = str.toLowerCase().split(' ');
//     for (var i = 0; i < str.length; i++) {
//       str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
//     }
//     call=str.join(' ');
//   alert(call);

// ......................................................................

// ..........................q2........................................

/*Strings: measuring length and extracting parts #1*/
// let mobile = prompt("Enter a Mobile phone model");
// let charsInMobile= mobile.length;
// alert(charsInMobile);

/*Strings: measuring length and extracting parts #2*/
// var str=prompt('enter your string');
// var lastCharOfStr=str.slice(-1);
// alert(lastCharOfStr);

// .........................................................................

// ............................................q3..............................

/*Strings: finding segments #1*/
// let country=('pakistani');
// alert(country.indexOf('n'));

// ................................................................................

// ...........................q4...................................................

// var country=("Hello WorLd");
// alert(country.indexOf("L"));

// .....................................................................................

// ..................................q5.................................................

// var str=("pakistani") 
// alert(str.charAt("3"))

// .....................................................................................

// ..............................q6............................................

// var myName=prompt("enter yur name")
// var lastname=prompt("enter your last name")
// var fullname=myName.concat(lastname)
// alert(fullname)

// ....................................................................................

// ........................................q7........................................

/*Strings: replacing characters #1*/
// let word=('hyderabad');
// let replacing=word.replace('hyder','Islam');
// alert(replacing);

// ..............................................................................

// ....................................q8......................................

// /*Strings: replacing characters #2*/
// let word=('Ali and Sami are best friends. They play cricket and football together');
// let replacing=word.replace(/and/g,'&');
// alert(replacing);

// ...................................................................................

// .......................................q9...........................................


/*Converting strings to numbers, numbers to strings #1*/
// let num=(472);
// document.write('Before conversion:'+"<br />");
// document.write(`${num}, ${typeof num} `+"<br />"+"<br />");
// document.write('After conversion:'+"<br />");
// num=num.toString();
// document.write(`${num}, ${typeof num} `+"<br />"+"<br />");

// ........................................................................................

// ........................................q10..........................................

// let myName=prompt('Enter peanuts');
// myName=myName.toUpperCase();
// alert(myName);

// ...................................................................................

// ..............................q11.....................................

// let str=prompt('enter javascript:')
//     str = str.toLowerCase().split(' ');
//     for (var i = 0; i < str.length; i++) {
//       str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
//     }
//     call=str.join(' ');
//   alert(call);
// .......................................................................

// ..........................q12..........................................


/*Converting strings to numbers, numbers to strings #2*/
// let num = 35.36;
// num=num.toString();
// let withoutDot = num.replace(".", "");
// document.write(withoutDot);

// ..................................................................

// ....................................q13.................................

/*Strings: finding segments #2*/
// let input=prompt('enter your username');
// for(let i=0;i<input.length;i++){
//     if(input[i]=='@' || input[i]=='!' || input[i]==',' || input[i]=='.'){
//         alert('enter a valid user name!!');
//         break;
//     }
//     else{
//         alert(input);
//         break;
//     }
// }

// ...........................................................................

// .......................q14.......................................

// var pro=prompt("Enter your item")
// var arry = ["cake", "apple pie", "cookie", "chips", "patties"]
// for(let i=0;i<pro.length;i++){
//     if(input[i]=='cake' || input[i]=='apple pie' || input[i]=='cookie' || input[i]=='chips' || input[i]=="patties"){
//         alert('items is in the list');
//     }
//     else{
//         alert("item is not in the list");
        
//     }
// }



// ................................................................

// ....................................q15............................

// let input=prompt('Enter your password');
// for(let i=0;i<input.length;i++){
//     if(input[i]=='1' || input[i]=='2' || input[i]=='3,44' || input[i]=='556666'){
//         alert('enter a valid password');
//         break;
//     }
//     else{
//         alert(a-z,A-z);
//         break;
//     }
// }

// ................................................................

// ...............................q16.............................

// var university = "üniversity of karachi"
// var all = "u</br>n</br>i</br>v</br>e</br>r</br>s</br>i</br>t</br>y</br></br>o</br>f</br></br>k</br>a</br>r</br>a</br>c</br>h</br>i"
// document.write(all)
// ..................................................................

// ...................................q17................................

// var str=("pakistan") 
// alert(str.charAt("7"))

// ...................................................................

// ........................................q18...........................

/*Strings: finding segments #3*/
// let temp = "The quick brown fox jumps over the lazy dog";
// let cont =(temp.slice(0,3));
// let occurrences=cont.length;
// alert(occurrences);

// .........................................................................

// .............................26-30........................................

// .............................q1........................................

/*Rounding numbers #1*/
// let num=parseFloat(prompt('enter your number'));
// final=Math.round(num);
// final=Math.floor(num);
// final=Math.ceil(num);
// alert(final);

// ............................................................................

// .......................................q2.............................

/*Rounding numbers #2*/
// let num=parseFloat(prompt('enter your number'));
// final=Math.round(num);
// final=Math.floor(num);
// final=Math.ceil(num);
// alert(final);

// ......................................................................

// .....................................q3...............................

// document.write("The absolut value of -4 is 4")

// .....................................................................

// ...........................................q4..............................

/*Generating random numbers #1*/
// let random=Math.random();
// let variable=(random*6)+1;
// let end=Math.floor(variable);
// alert(end);

// ...........................................................................

// .....................................q5...................................

/*Generating random numbers #2*/
// var a=prompt("Enter number")
// let random=Math.random();
// let variable=(random*2)+1;
// let end=Math.floor(variable);
// if(end==2){
//     alert('Heads');
// }
// else{
//     alert('Tales');
// }

// ...............................................................

// .............................q6.............................

// let random=Math.random();
// let variable=(random*100)+1;
// let end=Math.floor(variable);
// alert(end);

// ...............................................................

// .............................q7..................................


/*Converting strings to integers and decimals #1*/
// let weight=parseInt(prompt('enter your weight'));
// alert(weight);
// alert(weight+'kgs');
// let weight=parseFloat(prompt('enter your weight'));
// alert(weight+'kgs');
// alert(weight+'kilograms')

// ...................................................................

// ..................................q8.............................

/*Generating random numbers #3*/
// let random=Math.random();
// let variable=(random*10)+1;
// let end=Math.floor(variable);
// let num=parseInt(prompt('enter secret number'));
// if(num >=1 && num<=10){
//     alert('Congratulations You Guess The Correct Number');
// }
// else{
//     alert('Try again');
// }

// ...............................................................

// .................................31-34.............................

// ....................................q1.................................

// var date= new Date();
// document.write(date);

// ...........................................................................

// ..................................q2......................................

// var my_month=new Date()
// var month_name=new Array(12);
// month_name[0]="January"
// month_name[1]="February"
// month_name[2]="March"
// month_name[3]="April"
// month_name[4]="May"
// month_name[5]="June"
// month_name[6]="July"
// month_name[7]="August"
// month_name[8]="September"
// month_name[9]="October"
// month_name[10]="November"
// month_name[11]="December"

// alert ("Current month = " + month_name[my_month.getMonth()]); 

// .............................................................................

// .............................................q3............................

// var day=new Date();
// var my_day=["sun","mon","tue","wed","thu","fri","sat"];
// alert("Today is: "+my_day[day.getDay()])
// .............................................................................

// ........................................q4..................................

// var days=new Date();
// var my_day=days.getDay();
// if (my_day==0|| my_day==6) {
//     alert("Its fun day")
// }
// else{
//     alert("Working day")
// }

// ...........................................................................

// .........................................q5................................

// var month=new Date();
// var my_month=month.getDate();
// if (my_month>=0 && my_month<=15) {
//     alert("First fifteen days of the month")
// }
// else{
//     alert("Last days of the month")
// }

// ............................................................................

// ..................................q6.......................................

// var crnt=new Date()
// var stre=new Date("January 1 ,1970")
// var now=(crnt-stre)
// document.write("Elapsed milesecond since january 1,1970: "+now+"</br>");
// var min=now/60*60*60;
// document.write("Elapsed minutes since january 1,1970: "+min);

// .............................................................................

// ......................................q7....................................

// var a = new Date();
// var b = a.toString();
// var c = b.slice(16,19);
// if (c === "12:"){
//     document.write("It's PM")
// }else if(c === "13:"){
//     document.write("It's PM")
// }else if(c === "14:"){
//     document.write("It's PM")
// }else if(c === "15:"){
//     document.write("It's PM")
// }else if(c === "16:"){
//     document.write("It's PM")
// }else if(c === "17:"){
//     document.write("It's PM")
// }else if(c === "18:"){
//     document.write("It's PM")
// }else if(c === "19:"){
//     document.write("It's PM")
// }else if(c === "20:"){
//     document.write("It's PM")
// }else if(c === "21:"){
//     document.write("It's PM")
// }else if(c === "22:"){
//     document.write("It's PM")
// }else if(c === "23:"){
//     document.write("It's PM")
// }else if(c === "24:"){
//     document.write("It's AM")
// }else if(c === "01:"){
//     document.write("It's AM")
// }else if(c === "02:"){
//     document.write("It's AM")
// }else if(c === "03:"){
//     document.write("It's AM")
// }else if(c === "04:"){
//     document.write("It's AM")
// }else if(c === "05:"){
//     document.write("It's AM")
// }else if(c === "06:"){
//     document.write("It's AM")
// }else if(c === "07:"){
//     document.write("It's AM")
// }else if(c === "08:"){
//     document.write("It's AM")
// }else if(c === "09:"){
//     document.write("It's AM")
// }else if(c === "10:"){
//     document.write("It's AM")
// }else if(c === "11:"){
//     document.write("It's AM")
// }

// .....................................................................

// ...............................q8..........................................

// var last=new Date("31 December 2020");
// document.write(last);

// ...............................................................................

// .............................................q9.............................

// var past_ramadan=new Date("june 18,2015")
// var crnt=new Date()
// var rem=crnt-past_ramadan
// var days=rem/(1000*60*60*24);
// document.write(days.toFixed()+" days have passed since 1st ramadan 2015");

// ..........................................................................

// ........................................q10.................................

// var pas=new Date("december 2,2015");
// var now=new Date();
// var all=now-pas;
// var se=all/1000;
// document.write(se.toFixed()+"seconds is passsed away since december 2 2015")

// ...................................................................................

// ..........................................q11.......................................
// var date = new Date();
// document.write(date);
// ..................................................................................

// ............................................q12......................................
// var crt=new Date(100)
// alert(crt);
// ....................................................................................

// ..............................................q13....................................

// var year=parseInt (prompt("Enter your birthyear"))
// var month=(prompt("Enter your birth month"))
// var date=parseInt (prompt("Enter your birth date"))
// var b=new Date(month+year+", "+date)
// var crnt=new date();
// var c= crnt.getTime()
// var o= b.getTime()
// document.write(o)
// var date=(c-o)
// var t=date/1000*60*60*24*30*12
// document.write("your age is: "+t.toFixed()+"</br>");
// document.write("your birth year is: "+year)
// ....................................................................................

// ....................................................q14...............................

// var head=document.write("<h1>K-Electric Bill</h1>"+"</br>")
// var name=prompt("Enter your name")
// document.write("Customer Name is: "+name+"</br>")
// document.write("Month is : july"+"</br>")
// document.write("NUmber of units is: 410"+"</br>")
// document.write("Late payment charges is: 350"+"</br>")
// document.write("Charges Per units is: 16"+"</br>")
// var a=410*16
// var b=a+350
// document.write("Net amount (within due date) is: "+a+"</br>")
// document.write("Gross amount payable after due date: "+b+"</br>")

// .....................................................................................


// ...................................................35-38.............................


// ..............................q1..............................


// function date() {
//     var crt=new Date();
//     document.write(crt);
    
// }
// date();

// ...........................................................

// ............................................q2...........................
// function fullname() {
//     prompt("Enter your first name")
//     prompt("Enter your last name")
//     alert("Have a nice day")
// }
// fullname();


// ..............................................................

// .............................q3................................

// var num1=+prompt("Enter first number")
// var num2=+prompt("Enter second number")
// var f=sum(num1,num2)
//  document.write(f)
// function sum(num1,num2) {
//     var sum= num1+num2
//     return sum;    
// }
// 
// .............................................................

// .......................................q4............................

// var num1=+prompt("Enter first number")
// var num2=+prompt("Enter second number")
// var op=prompt("Enter operator")
// if (op==="+") {
//     var f=sum(num1,num2)
//     document.write(f)
// }
// else if (op==="-") {
//     var m=min(num1,num2)
//     document.write(m)
// } 
// else if(op==="*"){
//     var mul=mul(num1,num2)
//     document.write(mul)
// }
// else if(op==="/") {
//     var d=divide(num1,num2)
//     document.write(d)
// }

// function sum(num1,num2) {
//     var sum= num1+num2
//     return sum;    
// }
// function mul(num1,num2) {
//     var mult= num1*num2
//     return mult;    
// }
// function divide(num1,num2) {
//     var div= num1/num2
//     return div;    
// }
// function min(num1,num2) {
//     var min= num1-num2
//     return min;    
// }
// var sq=+prompt("Enter any number")
// var a=square(sq)
// document.write(a)
// function square(num1) {
//     var sqre=num1*num1
//     return sqre;
// }

// ......................................................................

// ......................................q6................................

// function factorial(n){
//         if(n == 0 || n == 1){
//             return 1;
//         }else{
//             return n * factorial(n-1);
//         }
//     }
//     var n = 4;
//     answer = factorial(n)
//     console.log("The factorial of " + n + " is " + answer);
    
// ..........................................................................

// ...................................q7...........................
// function count() {
//     var first=+prompt("Enter start of the counting")
//     var end=+prompt("Enter end of counting")
//     for (var i= first; i<=end; i++) {
//         document.write(i +"  ")
//     }   
// }
// count();


// .....................................................................

// .........................................q8..............................
// function hyp() {
//         var base =+prompt("ENter base")
//         var prep=+prompt("Enter perpendicular")
//         var squ=(base*base)*(prep*prep)
//         var sec=sq(squ)
//         document.write(sec)
//         function sq(num) {
//             var result=num*num
//             return result
//         }
     
//     }
//     hyp();


// ..........................................................................

// .....................................q9......................................

// function check_Palindrome(str_entry){
    //        var cstr = str_entry.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
    //         var ccount = 0;
    //         if(cstr==="") {
    //             console.log("Nothing found!");
    //             return false;
    //         }
    //         if ((cstr.length) % 2 === 0) {
    //             ccount = (cstr.length) / 2;
    //         } else {
    //             if (cstr.length === 1) {
    //                 console.log("Entry is a palindrome.");
    //                 return true;
    //             } else {
    //                 ccount = (cstr.length - 1) / 2;
    //             }
    //         }
    //         for (var x = 0; x < ccount; x++) {
    //             if (cstr[x] != cstr.slice(-1-x)[0]) {
    //                 console.log("Entry is not a palindrome.");
    //                 return false;
    //             }
    //         }
    //         console.log("The entry is a palindrome.");
    //         return true;
    //     }
    //     var v=prompt("Enter any thing")
    //     var a=check_Palindrome(v)
    // 

// .............................................................................

// ......................................................q10..........................

// function tt() {
//     var a ="word"
//     if (a) {
//         alert(" palindrome")
        
//     }
//     else{
//         alert(" palindrome is not")
//     }
    
// }
// tt();

// .....................................................................................

// ...............................................q11......................................
// let str=prompt('enter your sentence:')
//     str = str.toLowerCase().split(' ');
//     for (var i = 0; i < str.length; i++) {
//       str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
//     }
//     call=str.join(' ');
//   alert(call);

// .....................................................................................

// ...........................................q12............................................

// function tt() {
//     var all=prompt("enter sentence")
//     if (all && "Web Development Tutorial") {
//         alert(" long sentence ")
        
//     }
//     else{
//         alert("Development")
//     }
    
// }
// tt();


// ..........................................................................................

// ..................................................q13.....................................
// function uppercase(str)
// {
//   var array1 = str.split(' ');
//   var newarray1 = [];

//   for(var x = 0; x < array1.length; x++){
//       newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
//   }
//   return newarray1.join(' ');
// }
// var a=prompt("Enter string")
// var b=uppercase(a)
// document.write(b)

// ..........................................................................................

// ......................................................q14.....................................

// function calcCircumfrence(radius) {
//     var y = (Math.PI * radius) * 2;
//   console.log("The circumfrence is " + y + ".");
//   }
//   function calcArea(radius) {
//     var x = (Math.PI * radius) * radius;
//   console.log("The area is " + x + ".");
//   }

//   calcCircumfrence(90);
//   calcArea(20);


// ............................................................................................

// ..................................................38-42.................................

// ................................q1........................
// function power(base, exponent) {
// 	var result = 1;
// 	if(exponent == undefined)
// 		exponent = 2;
// 	for(var i=1; i<=exponent; i++) {
// 		result = result * base;
// 	}
// 	return result;
// }

// console.log(power(2,4));


// ...................................q2..............................
// var year = +prompt("enter year")
// var a=leapYear(year)
// alert(a)
// function leapYear(year) {
//     var result;
//     year = parseInt(document.getElementById("isYear").value);
//     if (years / 400) {
//         result = true
//     }
//     else if (years / 100) {
//         result = false
//     }
//     else if (years / 4) {
//         result = true
//     }
//     else {
//         result = false
//     }
//     return result
// }


// ......................................................q3
// var a = 5; 
// var b = 6; 
// var c = 7; 
// var s = (a + b + c)/2;
// var area =  Math.sqrt(s*((s-a)*(s-b)*(s-c)));
// console.log(area);

// .............................q10
// {
//     var a=prompt("Please input amount for withdraw : ");
//     document.write(a)
// 	document.write("\n\nRequired notes of Rs. 100  :  %d", amount / 100);
// 	document.write("\n\nRequired notes of Rs. 50   :  %d", (amount % 100) / 50);
// 	document.write("\n\nRequired notes of Rs. 10   :  %d", (((amount % 100) % 50) / 10));
// 	document.write("\n\nAmount still remaining Rs. :  %d", (((amount % 100) % 50) % 10));
// }
