	function validation(frm,product,price){
        var amount = frm.quantity.value;
        var choice = frm.rad_button;
        var sample = true;
        var count = 0;
        var selection;
				
        if(amount == 0){
            alert("Please enter the quantity!");
            sample = "false";
        }
			
        for(i = 0; i < choice.length; i++){
            if(choice[i].checked){
            selection = choice[i].value;
            count = 1;
            }
        }
                
        if(count == 0){
            alert("Please select a colour/size!");
            sample = false;
        }
			
                
        if(sample){
            var sum = amount * price;
            total = total+sum;
            document.getElementById("products_details").innerHTML += "Product : "+product+"(" + selection + ")<br>";
            document.getElementById("products_details").innerHTML += "Number of products : " + amount + "<br>";
            document.getElementById("products_details").innerHTML += "<br>Price : " +sum+ " LKR<br><br>";
                    
            alert("Total : "+total +"LKR")
        }
    }
            
    function alert_message(frm){
        var amount = frm.quantity.value;
        if(amount == 0){
            alert("Please enter the quantity!");
        }
    } 
            
    function placeOrder(){
        var f_name = document.customerInfo.firstName.value;
        var email = document.customerInfo.emailAddress.value;
        var address = document.customerInfo.address.value;
        var l_name = document.customerInfo.lastName.value;
		var submit = true;
                 
        if(f_name.length == 0){
			alert("Please enter your first name: ");
            submit = false;
        }
				
        if(email.length == 0){
            alert("Please enter your email: ");
            submit = false;
        }
				
        if(address.length == 0){
			alert("Please enter your address ");
            submit = false;
        }
				
		if(l_name.length == 0){
            alert("Please enter your last name: ");
            submit = false;
        }
	     		 
        if(submit){
            document.getElementById("personal_details").innerHTML += "Name : " +f_name + " " + l_name +" <br>Email : " + email+"<br>Address : " +address +"<br>" ;
            document.getElementById("personal_details").innerHTML += ".......................................................................................";
            document.getElementById("products_details").style.display="block";
                    
			Total(); 
        }
    }
			
    function Total(){
        document.getElementById("total").innerHTML = "Total is : "+total+ " LKR "; 
    } 
			 
	var total = 0;
		
