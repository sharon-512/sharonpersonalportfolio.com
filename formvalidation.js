function validatename(){

    var name=document.getElementById('name').value 
    var nameformat = /^[A-Za-z ]+$/;
  
    if (name==null || name==""){
      document.getElementById("neme").innerHTML = "Name can't be blank";
      return false;
    }
      if(!name.match(nameformat))
      {
      document.getElementById("neme").innerHTML = "You have entered an invalid Name!";
      return false;
      }
      document.getElementById("neme").innerHTML = " ";
    }  
  
    
  function validateemail(){
  
  var email=document.getElementById('email').value
  var mailformat = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
  if(email==null || email==""){
    document.getElementById("emeil").innerHTML ="Email can't be blank";
    return false;
  }else if(!email.match(mailformat)){
      document.getElementById("emeil").innerHTML ="You have entered an invalid email address!";
      return false;
  }else{
    document.getElementById("emeil").innerHTML ="";
  }
  }