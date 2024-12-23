/* input */

let herois  = [["Superman",10001],["Homem de Ferro",7000],["Pantera Negra",5000],["Homem Formiga",900]];
let classificacao  = ["Ferro","Bronze","Prata","Ouro","Platina","Ascendente","Imortal","Radiante"];


/*  processs */

for(let i =0;i<herois.length;i++){

    if(herois[i][1]<1000){
        console.log(`O heroi de Nome ${herois[i][0]} está no nivel ${classificacao[0]}`)
        
    }else if(herois[i][1]>1000 && herois[i][1]<=2000){
        console.log(`O heroi de Nome ${herois[i][0]} está no nivel ${classificacao[1]}`)
    }
    else if(herois[i][1]>2001 && herois[i][1]<=5000){
        console.log(`O heroi de Nome ${herois[i][0]} está no nivel ${classificacao[2]}`)
    }
    else if(herois[i][1]>5001 && herois[i][1]<=7000){
        console.log(`O heroi de Nome ${herois[i][0]} está no nivel ${classificacao[3]}`)
    }
    else if(herois[i][1]>7001 && herois[i][1]<=8000){
        console.log(`O heroi de Nome ${herois[i][0]} está no nivel ${classificacao[4]}`)
    }
    else if(herois[i][1]>8001 && herois[i][1]<=9000){
        console.log(`O heroi de Nome ${herois[i][0]} está no nivel ${classificacao[5]}`)
    }
    else if(herois[i][1]>9001 && herois[i][1]<=10000){
        console.log(`O heroi de Nome ${herois[i][0]} está no nivel ${classificacao[6]}`)
    }else{
        console.log(`O heroi de Nome ${herois[i][0]} está no nivel ${classificacao[7]}`)
    }

}




/* output */



