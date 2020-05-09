const search = document.querySelector('#searchIcon');
search.addEventListener("click", searchPokemon);

function searchPokemon() {
    const pokeSearch = document.querySelector("#pokemon-search")
    const pokemon = pokeSearch.value;
    let encontrei = false;
    for (var poke of data){
        if (poke["Name"] == pokemon){
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
    pic['src'] = "sprites/" + poke["Name"] + ".png";

    name.innerHTML = poke["Name"];
    hp.innerHTML = poke["HP"];
    atk.innerHTML = poke["Attack"];
    def.innerHTML = poke["Defense"];
    spAtk.innerHTML = poke["Sp. Atk"];
    spDef.innerHTML = poke["Sp. Def"];
    speed.innerHTML = poke["Speed"];

    const values = [poke["HP"], poke["Attack"], poke["Defense"],poke["Sp. Atk"], poke["Sp. Def"],poke["Speed"]];
    
    for (var bar of bars) {
        bar.style.width = 0;
    }

    for (var st in values) {
        console.log(stats[st]);
        barChart(values, st)
    }
}