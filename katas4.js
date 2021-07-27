//Arrays para usar nos katas
const gotCitiesCSV = "King's Landing,Braavos,Volantis,Old Valyria,Free Cities,Qarth,Meereen";

const lotrCitiesArray = ["Mordor","Gondor","Rohan","Beleriand","Mirkwood","Dead Marshes","Rhun","Harad"];

const bestThing = "The best thing about a boolean is even if you are wrong you are only off by a bit";

//Declaração de variével e função para inserir o conteúdo na página
const mainContent = document.getElementById("mainContent");

function showResults(title, content){
    mainContent.appendChild(title);
    mainContent.appendChild(content);
}

function kata1() {
    const titleKata1 = document.createElement("h3");
    titleKata1.classList.add("titleStyle","subTitle");
    titleKata1.innerText = "Kata 1: cidades de GOT"
    

    const divKata1 = document.createElement("div");
    divKata1.classList.add("divStyle");
    let gotArr = gotCitiesCSV.split(",")
    divKata1.textContent = JSON.stringify(gotArr);

    return showResults(titleKata1, divKata1);
}

kata1();

// daqui em diante é contigo ;)

function kata2(){
    const titleKata2 = document.createElement("h3");
    titleKata2.classList.add("titleStyle","subTitle");
    titleKata2.innerText = "Kata 2: Array da frase bestThing";
   

    const divKata2 = document.createElement("div");
    divKata2.classList.add("divStyle");

    let bestArr = bestThing.split(" ");
    divKata2.textContent = JSON.stringify(bestArr);
    return showResults(titleKata2, divKata2);
}
kata2();

function kata3(){
    const titleKata3 = document.createElement("h3");
    titleKata3.classList.add("titleStyle","subTitle");
    titleKata3.innerText = "Kata 3: Array da frase bestThing";
    

    const divKata3 = document.createElement("div");
    divKata3.classList.add("divStyle");
    
    let newGot =  gotCitiesCSV.replace(/,/g,"; ")
     
    divKata3.innerHTML = JSON.stringify(newGot)

    return showResults(titleKata3, divKata3)
}
kata3();

function kata4(){
    const titleKata4 = document.createElement("h3");
    titleKata4.classList.add("titleStyle","subTitle");
    titleKata4.innerText = "Kata 4: string do a array de LOTR";
    
    const divKata4 = document.createElement("div");
    divKata4.classList.add("divStyle");

    let lotrStr = lotrCitiesArray.join(", ")
    divKata4.textContent = lotrStr;

    return showResults(titleKata4,divKata4);
}
kata4();

function kata5(){
    const titleKata5 = document.createElement("h3");
    titleKata5.classList.add("titleStyle","subTitle");
    titleKata5.innerText = "Kata 5: As 5 primeiras cidades do array de LOTR";

    const divKata5 = document.createElement("div");
    divKata5.classList.add("divStyle");

    let newLotr = lotrCitiesArray.slice(0,5)
    divKata5.textContent = JSON.stringify(newLotr);

    return showResults(titleKata5, divKata5);
}
kata5();

function kata6(){
    const titleKata6 = document.createElement("h3");
    titleKata6.classList.add("titleStyle","subTitle");
    titleKata6.innerText = "Kata 6: As 5 últimas cidades do array de LOTR";

    const divKata6 = document.createElement("div");
    divKata6.classList.add("divStyle");

    let newLotr = lotrCitiesArray.slice(-5)
    divKata6.textContent = JSON.stringify(newLotr);

    return showResults(titleKata6, divKata6);
}
kata6();

function kata7(){
    const titleKata7 = document.createElement("h3");
    titleKata7.classList.add("titleStyle","subTitle");
    titleKata7.innerText = "Kata 7: 3º,4º e 5º cidades do array de LOTR";

    const divKata7 = document.createElement("div");
    divKata7.classList.add("divStyle");

    let newLotr = lotrCitiesArray.slice(2,5)
    divKata7.textContent = JSON.stringify(newLotr);

    return showResults(titleKata7, divKata7);
}
kata7();

function kata8(){
    const titleKata8 = document.createElement("h3");
    titleKata8.classList.add("titleStyle","subTitle");
    titleKata8.innerText = "Kata 8: tirando Rohan do array";

    const divKata8 = document.createElement("div");
    divKata8.classList.add("divStyle");

    let newLotr = lotrCitiesArray.splice(2,1)
    divKata8.textContent = JSON.stringify(lotrCitiesArray);

    let output = showResults(titleKata8, divKata8);
    return output
}
kata8();

function kata9(){
    const titleKata9 = document.createElement("h3");
    titleKata9.classList.add("titleStyle","subTitle");
    titleKata9.innerText = "Kata 9: Rerirando todas as cidades após Dead Marshes";

    const divKata9 = document.createElement("div");
    divKata9.classList.add("divStyle");

    let newLotr = lotrCitiesArray.splice(5);
    divKata9.textContent = JSON.stringify(lotrCitiesArray);

    let output = showResults(titleKata9, divKata9);
    return output
}
kata9();

function kata10(){
    const titleKata10 = document.createElement("h3");
    titleKata10.classList.add("titleStyle","subTitle");
    titleKata10.innerText = "Kata 10: Devolvendo Rohan ao array";

    const divKata10 = document.createElement("div");
    divKata10.classList.add("divStyle");

    let newLotr = lotrCitiesArray.splice(2,0,"Rohan");
    divKata10.textContent = JSON.stringify(lotrCitiesArray);

    let output = showResults(titleKata10, divKata10);
    return output
}
kata10();

function kata11(){
    const titleKata11 = document.createElement("h3");
    titleKata11.classList.add("titleStyle","subTitle")
}
kata11();