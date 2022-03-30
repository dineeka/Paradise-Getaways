var errormessage = " ";
let my_url = "queryfinal.html";
document.getElementById("editbtn").onclick = function(){
	window.location.replace(my_url);
}
function validateinputs(field) {
      if(field.name.value=="") {
         errormessage += "Enter your name\n";       //function to detct the empty feilds and give an alert if a feild is empty.
      }  
	  
      if(field.email.value=="") {
        errormessage += "Enter your Email Address\n";
	  }
	  
      if(field.theme.value=="default") {
        errormessage += "Enter the type of your query\n";
	  }
    
      if(field.details.value=="") {
        errormessage += "Enter the details of your query\n";
	  }
	  
	  if(errormessage != " "){
		alert(errormessage);
	    return false;
	}
	                                             //Display the form inputs if the form if it is filled succesfully.
      document.getElementById("nameid").innerHTML="Name :"+document.getElementById("username").value;
      document.getElementById("emailid").innerHTML="Email :"+document.getElementById("emailtype").value;
      document.getElementById("subjectid").innerHTML="Subject :"+document.getElementById("themetype").value;
      document.getElementById("displayid").innerHTML="Details :"+document.getElementById("displaydetails").value;
}