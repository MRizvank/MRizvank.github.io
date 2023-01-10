let vaccinatedUsers=JSON.parse(localStorage.getItem("vaccinated"))||[];
let tbody=document.getElementById("vaccinated")
function showData(){
    tbody.innerHTML=null;
    vaccinatedUsers.forEach(function (user,index){
        let tr=document.createElement("tr");
        let id=document.createElement("td");
        let Name=document.createElement("td");
        let age=document.createElement("td");
        let designation=document.createElement("td");
        let priority=document.createElement("td");
        let vType=document.createElement("td");
        id.textContent=user.id;
        Name.textContent=user.name;
        age.textContent=user.age;
        designation.textContent=user.designation;
        priority.textContent=user.priority;
        vType.textContent=user.vaccine;
        tr.append(id,Name,age,designation,priority,vType)
        tbody.append(tr)
    });
}
showData()