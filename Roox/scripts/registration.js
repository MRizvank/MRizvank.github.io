let userData=JSON.parse(localStorage.getItem("user-data"))||[];
document.getElementById("input").addEventListener("submit",function (event){
    event.preventDefault();
    let firstName=document.getElementById("firstname").value;
    let lastName=document.getElementById("lastname").value;
    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;
    let gender="";
    let ele= document.getElementsByName('gender');
    for(let i=0;i<ele.length;i++){
        if(ele[i].checked){
            gender=ele[i].value;
        }
    }
    let dob=document.getElementById("dob").value;
    let user=false;
    // console.log(email);
    userData.forEach(element => {
        if(element.email==email){
            user=true;
        }
    });
    let data={firstName,lastName,email,password,gender,dob};
    if(user==false){
        userData.push(data)
        localStorage.setItem("user-data",JSON.stringify(userData));
        alert("Successfully registerd")
        window.location.replace("./index.html");
    }else{
        alert("This e mail is alredy registerd.....")
    }
   
    
 });
    
   
    
    


