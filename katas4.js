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
    let output;
    const titleKata1 = document.createElement("h3");
    titleKata1.classList.add("titleStyle","subTitle");
    titleKata1.innerText = "Kata 1: cidades de GOT"
    

    const divKata1 = document.createElement("div");
    divKata1.classList.add("divStyle");
    let gotArr = gotCitiesCSV.split(",")
    divKata1.textContent = JSON.stringify(gotArr);

    output = showResults(titleKata1, divKata1);
    return output;
}
kata1();

// daqui em diante é contigo ;)

function kata2(){
    let output;
    const titleKata2 = document.createElement("h3");
    titleKata2.classList.add("titleStyle","subTitle");
    titleKata2.innerText = "Kata 2: Array da frase bestThing";
   

    const divKata2 = document.createElement("div");
    divKata2.classList.add("divStyle");

    let bestArr = bestThing.split(" ");
    divKata2.textContent = JSON.stringify(bestArr);

    output = showResults(titleKata2, divKata2);
    return output;
}
kata2();

function kata3(){
    let output;
    const titleKata3 = document.createElement("h3");
    titleKata3.classList.add("titleStyle","subTitle");
    titleKata3.innerText = "Kata 3: Array da frase bestThing";
    

    const divKata3 = document.createElement("div");
    divKata3.classList.add("divStyle");
    
    let newGot =  gotCitiesCSV.replace(/,/g,"; ")
     
    divKata3.innerHTML = JSON.stringify(newGot)

    output = showResults(titleKata3, divKata3);
    return output;
}
kata3();

function kata4(){
    let output;
    const titleKata4 = document.createElement("h3");
    titleKata4.classList.add("titleStyle","subTitle");
    titleKata4.innerText = "Kata 4: string do a array de LOTR";
    
    const divKata4 = document.createElement("div");
    divKata4.classList.add("divStyle");

    let lotrStr = lotrCitiesArray.join(", ")
    divKata4.textContent = lotrStr;

    output = showResults(titleKata4,divKata4);
    return output;
}
kata4();

function kata5(){
    let output;
    const titleKata5 = document.createElement("h3");
    titleKata5.classList.add("titleStyle","subTitle");
    titleKata5.innerText = "Kata 5: As 5 primeiras cidades do array de LOTR";

    const divKata5 = document.createElement("div");
    divKata5.classList.add("divStyle");

    let newLotr = lotrCitiesArray.slice(0,5)
    divKata5.textContent = JSON.stringify(newLotr);

    output = showResults(titleKata5, divKata5);
    return output;
}
kata5();

function kata6(){
    let output;
    const titleKata6 = document.createElement("h3");
    titleKata6.classList.add("titleStyle","subTitle");
    titleKata6.innerText = "Kata 6: As 5 últimas cidades do array de LOTR";

    const divKata6 = document.createElement("div");
    divKata6.classList.add("divStyle");

    let newLotr = lotrCitiesArray.slice(-5)
    divKata6.textContent = JSON.stringify(newLotr);

    output = showResults(titleKata6, divKata6);
    return output;
    
}
kata6();

function kata7(){
    let output;
    const titleKata7 = document.createElement("h3");
    titleKata7.classList.add("titleStyle","subTitle");
    titleKata7.innerText = "Kata 7: 3º,4º e 5º cidades do array de LOTR";

    const divKata7 = document.createElement("div");
    divKata7.classList.add("divStyle");

    let newLotr = lotrCitiesArray.slice(2,5)
    divKata7.textContent = JSON.stringify(newLotr);

    output = showResults(titleKata7, divKata7);
    return output;
}
kata7();

function kata8(){
    let output;
    const titleKata8 = document.createElement("h3");
    titleKata8.classList.add("titleStyle","subTitle");
    titleKata8.innerText = "Kata 8: tirando Rohan do array";

    const divKata8 = document.createElement("div");
    divKata8.classList.add("divStyle");

    let newLotr = lotrCitiesArray.splice(2,1)
    divKata8.textContent = JSON.stringify(lotrCitiesArray);

    output = showResults(titleKata8, divKata8);
    return output
}
kata8();

function kata9(){
    let output;
    const titleKata9 = document.createElement("h3");
    titleKata9.classList.add("titleStyle","subTitle");
    titleKata9.innerText = "Kata 9: Rerirando todas as cidades após Dead Marshes";

    const divKata9 = document.createElement("div");
    divKata9.classList.add("divStyle");

    let newLotr = lotrCitiesArray.splice(5);
    divKata9.textContent = JSON.stringify(lotrCitiesArray);

    output = showResults(titleKata9, divKata9);
    return output
}
kata9();

function kata10(){
    let output;
    const titleKata10 = document.createElement("h3");
    titleKata10.classList.add("titleStyle","subTitle");
    titleKata10.innerText = "Kata 10: Devolvendo Rohan ao array";

    const divKata10 = document.createElement("div");
    divKata10.classList.add("divStyle");

    let newLotr = lotrCitiesArray.splice(2,0,"Rohan");
    divKata10.textContent = JSON.stringify(lotrCitiesArray);

    output = showResults(titleKata10, divKata10);
    return output
}
kata10();

function kata11(){
    let output;
    const titleKata11 = document.createElement("h3");
    titleKata11.classList.add("titleStyle","subTitle");
    titleKata11.innerText = "Kata 11: Dead Marshes --> Deadest Marshes"

    const divKata11 = document.createElement("div");
    divKata11.classList.add("divStyle");

    let newLotr = lotrCitiesArray.splice(5,1,"Deadest Marshes");
    divKata11.textContent = JSON.stringify(lotrCitiesArray)

    output = showResults(titleKata11, divKata11);
    return output;
}
kata11();

function kata12(){
    let output;
    const titleKata12 = document.createElement("h3");
    titleKata12.classList.add("titleStyle","subTitle");
    titleKata12.innerText = "Kata 12: 14 primeiros caracteres de bestThing"

    const divKata12 = document.createElement("div");
    divKata12.classList.add("divStyle");

    let newBest = bestThing.slice(0,14);
    divKata12.textContent = JSON.stringify(newBest)

    output = showResults(titleKata12, divKata12);
    return output;
}
kata12();

function kata13(){
    let output;
    const titleKata13 = document.createElement("h3");
    titleKata13.classList.add("titleStyle","subTitle");
    titleKata13.innerText = "Kata 13: 12 últimos caracteres de bestThing"

    const divKata13 = document.createElement("div");
    divKata13.classList.add("divStyle");

    let newBest = bestThing.slice(-12);
    divKata13.textContent = JSON.stringify(newBest)

    output = showResults(titleKata13, divKata13);
    return output;
}
kata13();

function kata14(){
    let output;
    const titleKata14 = document.createElement("h3");
    titleKata14.classList.add("titleStyle","subTitle");
    titleKata14.innerText = "Kata 14: Caracteres de bestThing entre as posições 23 e 38"

    const divKata14 = document.createElement("div");
    divKata14.classList.add("divStyle");

    let newBest = bestThing.slice(23, 38);
    divKata14.textContent = JSON.stringify(newBest)

    output = showResults(titleKata14, divKata14);
    return output;
}
kata14();

function kata15(){
    let output;
    const titleKata15 = document.createElement("h3");
    titleKata15.classList.add("titleStyle","subTitle");
    titleKata15.innerText = "Kata 15: 12 últimos caracteres de bestThing usando .substring"

    const divKata15 = document.createElement("div");
    divKata15.classList.add("divStyle");

    let newBest = bestThing.substring(bestThing.length -12);
    divKata15.textContent = JSON.stringify(newBest)

    output = showResults(titleKata15, divKata15);
    return output;
}
kata15();

function kata16(){
    let output;
    const titleKata16 = document.createElement("h3");
    titleKata16.classList.add("titleStyle","subTitle");
    titleKata16.innerText = "Kata 16: Caracteres de bestThing entre as posições 23 e 38 usando .substring"

    const divKata16 = document.createElement("div");
    divKata16.classList.add("divStyle");

    let newBest = bestThing.substring(23, 38);
    divKata16.textContent = JSON.stringify(newBest)

    output = showResults(titleKata16, divKata16);
    return output;
}
kata16();

function kata17(){
    let output;
    const titleKata17 = document.createElement("h3");
    titleKata17.classList.add("titleStyle","subTitle");
    titleKata17.innerText = "Kata 17: removendo a cidade na última posição do array de LOTR"

    const divKata17 = document.createElement("div");
    divKata17.classList.add("divStyle");

    lotrCitiesArray.pop();
    divKata17.textContent = JSON.stringify(lotrCitiesArray);

    output = showResults(titleKata17,divKata17)
    return output;
    
}
kata17();

function kata18(){
    let output;
    const titleKata18 = document.createElement("h3");
    titleKata18.classList.add("titleStyle","subTitle");
    titleKata18.innerText = "Kata 18: readicionando a cidade na última posição do array de LOTR"

    const divKata18 = document.createElement("div");
    divKata18.classList.add("divStyle");

    lotrCitiesArray.push('Deadest Marshes');
    divKata18.textContent = JSON.stringify(lotrCitiesArray);

    output = showResults(titleKata18,divKata18)
    return output;
    
}
kata18();

function kata19(){
    let output;
    const titleKata19 = document.createElement("h3");
    titleKata19.classList.add("titleStyle","subTitle");
    titleKata19.innerText = "Kata 19: retirando a primeira cidade do array de LOTR"

    const divKata19 = document.createElement("div");
    divKata19.classList.add("divStyle");

    lotrCitiesArray.shift();
    divKata19.textContent = JSON.stringify(lotrCitiesArray);

    output = showResults(titleKata19,divKata19)
    return output;
    
}
kata19();

function kata20(){
    let output;
    const titleKata20 = document.createElement("h3");
    titleKata20.classList.add("titleStyle","subTitle");
    titleKata20.innerText = "Kata 20: readicionando a primeira cidade do array de LOTR"

    const divKata20 = document.createElement("div");
    divKata20.classList.add("divStyle");

    lotrCitiesArray.unshift('Mordor');
    divKata20.textContent = JSON.stringify(lotrCitiesArray);

    output = showResults(titleKata20,divKata20)
    return output;
    
}
kata20();

// I will come back later to make the bonus