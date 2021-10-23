var numfield1=document.getElementById('numfield1');//connected to the element numfield.. getelement by id is the eelement used to grab the eleemnt by its id name
//alert(numfield1.value);//.value is how we reference the text i.e inside the id

//numfield1.value="Hey Bob!";  to fill the value inside the numfield1

var numfield2=document.getElementById('numfield2');
var resultfield=document.getElementById('resultfield');
/*numfield1.value="Test";    //to test
resultfield.innerText= "Test2";   // it cannot be used as .value*/

var form=document.getElementById('xiswhatPercentOfY').addEventListener('submit',function()
{

});

//OR

var form=document.getElementById('xiswhatPercentOfY');
form.addEventListener('submit',function(event)         //inline function       
{
if(!numfield1.value || !numfield2.value)//if both are null or undefined
{
    alert("Please enter values in fields");

}

else{
   /* var x=numfield1.value;
    var y=numfield2.value; */ //not giving the correct ans
    //alert(x +"  " +y);
    var x=parseFloat(numfield1.value); //parsefloat fun is going to convert into floating point numberrrrrr
    var y=parseFloat(numfield2.value);
   // alert(x+y); to add
   var res=x/y;
   var percent=res*100;
  // alert(percent);
  //or
  resultfield.innerText="Answer:" +percent+"%";  //is not displaying bcoz whenver we use form submit the data a
                                                     //   always get refreshed ehich is a default behaviour the 
                                                     //way we have login and when we login it takes us to another page
//therefore pass event to the function as an identifier and do the following changes to avoid the default changes
event.preventDefault();//hey submission dont refresh my page
//if we would have been using button instead of forms the there wouldnt be any use of the above statment bcoz button
//doesnt refresh the page 

    

}


    //Or
 //   alert("We clickyclacked something");

});


/*we could have also done var a=function(){

}

form.addEventListener('submit',a);              


*/