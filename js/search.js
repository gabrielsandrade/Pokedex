const search = document.querySelector('#searchIcon');
const searchBox = document.querySelector("#pokemon-search");
var autocomplete_results = document.getElementById("autoCompleteResults");
var listPokemons = [];
for (let pokemon of data){
    listPokemons.push(pokemon["Name"]);
}

//search.addEventListener("click", searchPokemon);
searchBox.addEventListener("keyup", (event) =>{
    if (event['key'] == "Enter"){
        searchPokemon();
    }else {
        const val = (event.target.value);
        if (val.length > 0) {
            const card = document.querySelector(".card");
            card.style.zIndex = -1;
            var pokeReturn = [];
            autocomplete_results.innerHTML = '';
            pokeReturn = autoComplete(val);
            
            for (i = 0; i < pokeReturn.length; i++) {
                const li = document.createElement('li');
                li.innerHTML = pokeReturn[i];
                li.addEventListener('click', (event)=> {
                    const value = event.target.textContent;
                    searchBox.value = value;
                    searchPokemon(value);
                    autocomplete_results.style.display = "none";
                    card.style.zIndex = 1;
                });
                autocomplete_results.appendChild(li);
                //autocomplete_results.innerHTML += '<li>' + pokeReturn[i] + '</li>';
    
            }
            autocomplete_results.style.display = 'block';
            const click = document.addEventListener('click', (event)=>{
                if (event.target.tagName != 'LI'){
                    autocomplete_results.style.display = "none";
                    card.style.zIndex = 1;
                };
            });

        } else {
            const card = document.querySelector(".card");
            card.style.zIndex = 0;
            pokeReturn = [];
            autocomplete_results.innerHTML = '';
        }
        
    }
})

function searchPokemon() {
    const pokeSearch = document.querySelector("#pokemon-search")
    const pokemon = pokeSearch.value;
    let encontrei = false;
    for (var poke of data){
        if (poke["Name"].toLowerCase().trim() == pokemon.toLowerCase().trim()){
            console.log("Encontrei");
            changeCard(poke);
            encontrei = true;
            break
        }
    }
    if (!encontrei) {
        console.log("Pokemon não foi encontrado");   
    }
    pokeSearch.value = "";
}

function changeCard(poke) {
    let bars = document.querySelectorAll(".bar");
    let name = document.querySelector("#pic").firstElementChild;
    let table = document.getElementsByTagName("tbody")[0].children;
    let hp = table[0].querySelector(".value");
    let atk = table[1].querySelector(".value");
    let def = table[2].querySelector(".value");
    let spAtk = table[3].querySelector(".value");
    let spDef = table[4].querySelector(".value");
    let speed = table[5].querySelector(".value");
    let pic = document.querySelector("#picture");
    let types = document.querySelectorAll("#type");
    let legendary = document.querySelector(".legendary").lastElementChild;
    pic['src'] = "sprites/" + poke["Name"] + ".png";

    name.innerHTML = poke["Name"];
    hp.innerHTML = poke["HP"];
    atk.innerHTML = poke["Attack"];
    def.innerHTML = poke["Defense"];
    spAtk.innerHTML = poke["Sp. Atk"];
    spDef.innerHTML = poke["Sp. Def"];
    speed.innerHTML = poke["Speed"];
    types[0].innerHTML = poke["Type 1"]
    types[1].innerHTML = poke["Type 2"]
    legendary.innerHTML = poke["Legendary"] == "False" ? "No" : "Yes";

    const values = [poke["HP"], poke["Attack"], poke["Defense"],poke["Sp. Atk"], poke["Sp. Def"],poke["Speed"]];
    
    for (var bar of bars) {
        bar.style.width = 0;
    }

    for (var st in values) {
        barChart(values, st)
    }
}

function autoComplete(val){
    var pokeReturn = [];

    for (var poke of data){
        //console.log(poke["Name"].toLowerCase().trim().slice(0, val.length), val);
        if (poke["Name"].toLowerCase().trim().slice(0, val.length) == val.toLowerCase().trim()){
            pokeReturn.push(poke["Name"]);
        }
    }

    return (pokeReturn);
}
