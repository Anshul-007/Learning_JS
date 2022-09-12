//1. Ways to print in JavaScript
    //console.log("Hello World");
    //alert("me");
    //document.write("this is document write"); //AVOID USING THIS

//2. Javascript console API -> Application Programming Interface        console.log("Hello World", 4+6, "inside javascript environment");
    // console.warn("this is warning");
    // console.error("this is an error");
    //console.assert(4==4); //true
    //console.assert(4==1); //wrong thus assertion failed
    //console.clear()

// 3. JavaScript Variables
    //What are variables? - Container to store data values
    //like milk cartridge 
    //like container to store spices

    var nu,ber1 = 34;
    var Number2 = 56;
    // console.log(nu,ber1 + Number2);

    //ctrl + / to comment selected lines

//4. Data types in JavaScript
    
    //numbers
    var str1 = "This is a string";
    var str2 = 'This is also a string';

    //string
    var num1 = 659;
    var num2 = 753.3;

    //Objects
    var marks = {
        Shyam: 44,
        Ram: 78,
        Troy: 98
    }

    // console.log(marks);

    //Booleans
    var bool1 = true;
    var bool2 = false;
    // console.log(bool1, bool2);

    //by default the variables are undefined in nature
    //and the difference between undefined and null 
    //is a variable is yet to be defined whereas null says 
    //there is no value in the variable

    var truck;
    // console.log(truck);

    var car = null;
    // console.log(car);

    /*At a very high level, there are two types of data types in JavaScript
      1. Primitive data types: undefined, null, number, string, boolean, symbol
      2. Reference data types: Arrays and Objects
    */
    var arr = [1,2,"hello",4,5];
    // console.log(arr);
     
//5. Function in JavaScript
    //DRY = Do not Repeat Yourself
    //Number in console will be displayed by blue color
    //String in console will be displayed by black color
    function avg(a,b){
        return ((a+b)/2);
    }

    c1 = avg(5,15);
    c2 = avg(10,20);
        //console.log("Average of 5 & 15 is: ",c1," Average of 10 and 20 is: ",c2);

//6. Conditional in JavaScript
    // var marks = 86;
    // if(marks>80){
    //     console.log("marks greater than 80");
    // }
    // else{
    //     console.log("marks less than 80");
    // }

//7. looping
    var arr = [1,2,3,4,5,6];
    //console.log(arr);
    for(var i = 0; i<arr.length;i++){
        //console.log(arr[i]);
    }

    //preferably we can use for each to iterate
    arr.forEach(function(element){
        //console.log(element); //inbuilt function
    });

    //also the function can be used if created outside
    arr.forEach(index);
    function index(val, ind){
        //console.log(ind, ": ",val);
    }

//8. Array methods 
    let myArr = ["Fan", "Camera", 5,null, false];

    //lenght of an array
    //console.log(myArr.length);
    
    //popping an element  from last
    myArr.pop();

    //pushing an element inside 
    myArr.push("hello");

    //removing an element from front side
    myArr.shift(); //array length here is 4

    //unshift method
    myArr.unshift("jels"); //inserted jels at front new lenght is 5

    //console.log(myArr +"\nlength of array: " +myArr.length);

    //splice method
        /* -Splice method is much better than pop or delete
           -since delete method leave holes once the element is deleted
           -Also pop can only delete one element from behind
           -the shift method will delete from front 
           
           -Whereas in Splice we can specify position and simply tell how 
            many elements we want to delete
            e.g. myArr.splice(0,1); --means only one element from 0th index will be deleted

            -Also instead of deleting using splice we can also insert values from index
             e.g. myArr.splice(0,1,"hello","world") --will delete the first element and insert hello and world afterwards
        */
    
    //slice method 
        /*
            -Will create a new array 
            -doesn't affect the previous array
            -needs starting index or starting index + last index
             e.g. let myArr2 = myArr.slice(2,4) from 2 to 3 index 4 is not inclusive
             or console.log(myArr.slice(3));
        */

//9. String methods in JavaScript
    let myStr = "There is a peacock in the jungle";
    // console.log(myStr.length);
    // console.log(myStr.indexOf("is"));
    // console.log(myStr.lastIndexOf("i"));

    // console.log(myStr.slice(1,4)); //4 is not inclusive

    // d = myStr.replace("i","s");
    // console.log(d); //NOTE: replace() only replaced the first occurence of "i"

//10. Dates in JavaScript
    let date = new Date;
    let newdate = new Date;
    // console.log(date);

    // console.log(date.getTime());
    // console.log(date.getFullYear());
    // console.log(date.getDay()); //sunday --0, monday --1
    // console.log(date.getMonth());
    // console.log(date.getHours());
    // console.log(newdate.setHours(12));
    // console.log(newdate);

//11. DOM manipulation Document Object Model --**

    //printing the info of an element by id 
    let elem = document.getElementById('click');    
    //console.log(elem);

    //printing the info of an element by class
    let elemClass = document.getElementsByClassName('container');
    //console.log(elemClass);
    
    //either we can change background style by this code
    //elemClass[0].style.background = "yellow";

    //or we can change the background adding class 
    //we search from classlist and add the required class
    elemClass[0].classList.add("bg-purple");
    elemClass[0].classList.add("text-color");

    //also we class remove the class from classlist 
    //elemClass[0].classList.remove("bg-purple");

    //we can see the inner HTML code of an element of a class
    //console.log(elemClass[0].innerHTML);

    //we can see the innerText of element of class
    //console.log(elemClass[0].innerText);
    
    tn = document.getElementsByTagName("div");
    //console.log(tn);


    createdElement = document.createElement('p'); //
    createdElement.innerText = "This is a created para";
    tn[0].appendChild(createdElement);
    createdElement2 = document.createElement('b');
    createdElement2.innerText = "This is a created bold";
    tn[0].appendChild(createdElement2);


    //now we want to replace the child bold with italics
    //creating element italics
    createdElement3 = document.createElement('i');
    createdElement3.innerText = "Italics"
    tn[0].replaceChild(createdElement3, createdElement2);

    //Selecting using QUery
    que = document.querySelector('.container');
    //console.log(que);

//12. Events in JavaScript
    //either we can call a function from HTML

    // function clicked(){
    //     console.log("You clicked me @1@1");
    // }

    // window.onload = function(){
    //     console.log('The document was loaded');
    // }
    
    // //Eventlistener
    // firstContainer.addEventListener('click', function(){
    //     //console.log("Clicked")
    // });

    // //on mouseover
    // firstContainer.addEventListener('mouseover', function(){
    //     console.log("Mouse on container")
    // });

    // //on mouseout
    // firstContainer.addEventListener('mouseout', function(){
    //     console.log("Mouse out of container")
    // });

    // //storing the previous HTML text
    // let prevHTMLText = document.querySelectorAll('.container')[1].innerHTML;
    
    // //on mouseup
    // firstContainer.addEventListener('mouseup', function(){
    //     document.querySelectorAll('.container')[1].innerHTML = prevHTMLText
    // });

    // //on mousedown
    // firstContainer.addEventListener('mousedown',function(){
    //     document.querySelectorAll('.container')[1].innerHTML = "<b>This is a paragraph</b>"
    // })

//Arrow functions
// function sum(a,b){
//     return a+b;
// }
sum = (a,b)=>{ //arrow function
    return a+b;
}

logKaro= ()=>{
    document.querySelectorAll('.container')[1].innerHTML = "<b> Set interval executed</b>"
    console.log("I am your log");
}
//12. SetTimeout and setinterval
    //set timeout is used for creating on a schedule
    //setTimeout(logKaro, 2000); 

    //if we want to do above repeatedly
    //setInterval(logKaro, 1000);


    //we can also use clearInterval to clear the Interval or timeout
    //e.g
    //clr = setInterval(logKaro,2000);
    //now in browser if we give clr id to clearInterval then repetition will stop

//13. JavaScript localStorage
    //localStorage.setItem('name','Ansh');
    //localStorage;
    //localStorage.getItem('Ansh');
    //localStorage.removeItem('name');
    //localStorage.clear();

//14. JSON
    //JSON standard accepts only double quotes
    obj = {name: "Ansh", lenght: 1, a:{this:"that"}}
    jso = JSON.stringify(obj);
    console.log(typeof jso);
    console.log(jso);
    
