let filterbyregion = document.getElementById("by_region");
let filterbyName = document.getElementById("by_name");
let countryData = [];
let container = document.getElementById("container");
filterbyregion.addEventListener("change", () => {
    container.innerHTML=null
    let filterdData = countryData.filter((country) => {
        if (country.region == filterbyregion.value) {
            return true;
        } else {
            return false
        }
    })
    if (filterdData.length != 0) {
        showData(filterdData)
    } else {
        showData(countryData)
    }

})

filterbyName.addEventListener("change", () => {
    container.innerHTML=null;
    if(filterbyName.value==="Ascending"){
        data=countryData
        data.sort((a, b) => a.name.localeCompare(b.name));
        showData(data);
    }else if(filterbyName.value==="Descending"){
        data=countryData
        data.sort((a, b) => b.name.localeCompare(a.name));
        showData(data);

    }else{
        showData(countryData);
    }
    });
fetch("https://restcountries.com/v3.1/all")
    .then((responsedata) => {
        return responsedata.json();

    })
    .then((response) => {
        let neededData = response.map((element) => {
            return {
                name: element.name.official,
                region: element.region,
                lattitude: element.latlng[0],
                longitude: element.latlng[1],
                area: element.area,
                map: element.maps.googleMaps,
                population: element.population,
                flag: element.flags.png,
            }

        })
        countryData = neededData;
        showData(neededData);



    })
    .catch((error) => {
        console.log(error);
    })
function showData(data) {
    container.innerHTML = null;
    data.forEach((country) => {
        let card = document.createElement("div");
        let flag = document.createElement("img");
        let name = document.createElement("h3")
        let region = document.createElement("h2");
        let lattitude = document.createElement("p");
        let longittude = document.createElement("p");
        let area = document.createElement("p");
        let location = document.createElement("a");
        let population = document.createElement("p");
        flag.setAttribute("src", country.flag);
        location.setAttribute("href", country.map)
        location.setAttribute("target", "_blank")
        region.textContent = country.region;
        name.textContent = country.name;
        lattitude.textContent = "Latittude" + ": " + country.lattitude;
        longittude.textContent = "longittude" + ": " + country.longitude;
        area.textContent = country.area + " Km";
        population.textContent = "population : " + country.population;
        location.textContent = "location";
        card.append(flag, region, name, lattitude, longittude, area, location, population);
        container.append(card);
    });
}
