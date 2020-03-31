let tabFilm;
function chargerFilm(){
    let xhr=new XMLHttpRequest();
    xhr.open('get', 'http://localhost:8000/api/utilisateurs/', true); //on peut rajouter l'id de l'utilisateur apres la barre
    xhr.onerror= function erreur(){
        console.log(xhr.status+" "+ xhr.readyState);
    };
    xhr.onload= function placer(){
        tabFilm=JSON.parse(xhr.responseText);
        placer1();
    };
    xhr.onreadystatechange= function change(){
        console.log(xhr.status+" "+ xhr.readyState);
    };
    xhr.send();
    let xmr=new XMLHttpRequest();
    xmr.open('post', 'http://localhost:8000/api/annonces/');
    xmr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmr.send('texteannonce=bonjour blablbla &idutil=1');
    xmr.onerror= function erreur(){
        console.log(xmr.status+" "+ xmr.readyState);
    };
    xmr.onreadystatechange= function change(){
    	console.log(xmr.status+" "+ xmr.readyState);
    };
}
function placer1() {
    let place = document.getElementById("choixFilm");
    place.innerHTML="";
    for (let i = 0; i < tabFilm.length; i++) {
        place.innerHTML += "<option>" + tabFilm[i].nom + "</option>";
    }
}
/*
function chargerPers(place){
    let titre= place.value;
    let k=0;
    for(let i=0;i<tabFilm.results.length;i++){
        if(tabFilm.results[i].title==titre){
            k=i;
        }
    }
    let endroit= document.getElementById("listePersonnages");
    endroit.innerHTML="";
    for(let i=0;i<tabFilm.results[k].characters.length;i++){
        let xhr=new XMLHttpRequest();
        xhr.open('get',tabFilm.results[k].characters[i] , true);
        xhr.onload= function placerAct(){
            let tabAct=JSON.parse(xhr.responseText);
            endroit.innerHTML+="<li>"+tabAct.name+"</li>";

        };
        xhr.send();
    }
}
*/