let userData=JSON.parse(localStorage.getItem("user-data"))||[];

/**  Values**/
let id=document.getElementById("id");
let name=document.getElementById("name");
let age=document.getElementById("age");
let designation=document.getElementById("designation");
let priority=document.getElementById("priority");
let vaccine=document.getElementById("vaccine");
let submit=document.getElementById("submit");
submit.addEventListener("click",(e)=>{
e.preventDefault();
let obj={
    id:id.value,
    name:name.value,
    age:age.value,
    designation:designation.value,
    priority:priority.value,
    vaccine:vaccine.value,
}
console.log(obj);
userData.forEach(element => {
    if(element.id===obj.id){
        /// call some function here 
    }
});
if(obj.id!==""&&obj.name!==""&&obj.age!==""&&obj.designation!==""&&obj.priority!==""&&obj.vaccine!==""){
    userData.push(obj)
    localStorage.setItem("user-data",JSON.stringify(userData))
    alert("successfully registerd");
    window.location.replace("./Dashboard.html");
}

})