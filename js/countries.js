const loadCountries = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(rest => rest.json())
    .then(data => displaCountries(data))
}

const displaCountries = countries =>{
    console.log(countries[0])
    const allCountriesHTML = countries.map(country => getCountryHTML(country))
    // console.log(allCountriesHTML)
    const containar = document.getElementById("countries")
    containar.innerHTML = allCountriesHTML.join(' ')
}
const getCountryHTML = country =>{
    return `
    <div class="country">
        <h1>
            ${country.name.common}
        </h1>
        <img src="${country.flags.png}" alt="">
        
    </div>
    
    `
}


loadCountries()
