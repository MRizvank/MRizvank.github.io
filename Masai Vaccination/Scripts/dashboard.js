let userData=JSON.parse(localStorage.getItem("user-data"))||[];
let vaccinatedUsers=JSON.parse(localStorage.getItem("vaccinated"))||[];
let tbody=document.getElementById("dash_Board")
function showData(){
    tbody.innerHTML=null;
    userData.forEach(function (user,index){
        let tr=document.createElement("tr");
        let id=document.createElement("td");
        let Name=document.createElement("td");
        let age=document.createElement("td");
        let designation=document.createElement("td");
        let priority=document.createElement("td");
        let vType=document.createElement("td");
        let otp=document.createElement("td");
        let vaccine=document.createElement("td");
        let Delete=document.createElement("td");
        id.textContent=user.id;
        Name.textContent=user.name;
        age.textContent=user.age;
        designation.textContent=user.designation;
        priority.textContent=user.priority;
        vType.textContent=user.vaccine;
        otp.textContent=+otpGenerator()
        vaccine.textContent="Vaccinate";
        vaccine.style.color="green";
        vaccine.addEventListener("click",()=>{
            let a =prompt("enter OTP");
            if(a===otp.textContent){
                alert("successfull")
                alert(`${user.name}  Added to Queue`);
                setTimeout(() => {
                    alert(`Vaccinating ${user.vaccine}`);
                  }, 5000);
                  setTimeout(() => {
                    alert(`${user.name} Vaccinated`);
                  }, 10000)
                  setTimeout(() => {
                    vaccinatedUsers.push(user);
                    localStorage.setItem("vaccinated",JSON.stringify(vaccinatedUsers));
                    userData.splice(index,1);
                    localStorage.setItem("user-data",JSON.stringify(userData));
                    showData();
                  }, 10005)

                
            }else{
                alert("wrong otp")
            }

        })
        Delete.textContent="Delete";
        Delete.style.color="red";
        Delete.addEventListener("click",()=>{
            userData.splice(index,1);
            localStorage.setItem("user-data",JSON.stringify(userData));
            showData();
        })
        tr.append(id,Name,age,designation,priority,vType,otp,vaccine,Delete)
        tbody.append(tr)
        
    });
}

function otpGenerator(){
    let numbers=[1,2,3,4,5,6,7,8,9,0]
    let str="";
    for(let i=0;i<4;i++){
        const randomIndex = Math.floor(Math.random() * numbers.length); 
        const item = numbers[randomIndex];
        str+=item;
    }
    return str
}
showData();

