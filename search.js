const search = document.querySelector('#searchIcon');
const searchBox = document.querySelector("#pokemon-search");
search.addEventListener("click", searchPokemon);
searchBox.addEventListener("keydown", (event) =>{
    console.log(event['key']);
    if (event['key'] == "Enter"){
        searchPokemon();
    }    
})

function searchPokemon() {
    const pokeSearch = document.querySelector("#pokemon-search")
    const pokemon = pokeSearch.value;
    let encontrei = false;
    for (var poke of data){
        if (poke["Name"].toLowerCase().trim() == pokemon.toLowerCase().trim()){
            console.log("Encontrei");
            console.log(poke);
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
    console.log(poke);
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
        console.log(stats[st]);
        barChart(values, st)
    }
}