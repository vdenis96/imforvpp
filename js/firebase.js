// Initialize Firebase
var config = {
  apiKey: "AIzaSyBqswZw0ABzN10RjzdzvjeuLJEpUL946HY",
  authDomain: "imforvpp.firebaseapp.com",
  databaseURL: "https://imforvpp.firebaseio.com",
  projectId: "imforvpp",
  storageBucket: "imforvpp.appspot.com",
  messagingSenderId: "802432074524"
};
firebase.initializeApp(config);

//ref msg col
let messagesRef = firebase.database().ref('producatori');
console.log(messagesRef);

//form producatori
document.getElementById('adauga-producator').addEventListener('submit', submitFormProd);

let prod = document.querySelector('.prod-list');
let parcProd = document.querySelector('.parc-prod');
let listPark = document.querySelector('.list-parc');

//submit form producatori
function submitFormProd(e){
  e.preventDefault();
  //get values
  let modProdNume = getInputVal('mod-prod-nume');
  let modProdCui = getInputVal('mod-prod-cui');
  let modProdReg = getInputVal('mod-prod-nr-reg');
  let modProdAdresa = getInputVal('mod-prod-adresa');
  let modProdEic = getInputVal('mod-prod-eic');
  let modProdContract = getInputVal('mod-prod-nr-contract');
  let modProdSemnare = getInputVal('mod-prod-data-semnare');
  let modProdVigoare = getInputVal('mod-prod-data-vigoare');
  let modProdIncetare = getInputVal('mod-prod-data-incetare');
  let modProdValoare = getInputVal('mod-prod-valoare');
  let modProdEmail = getInputVal('mod-prod-email');
  let modProdTel = getInputVal('mod-prod-telefon');
  prod.innerHTML = " ";
  //send 
  saveMsg(modProdNume, modProdCui, modProdReg, modProdAdresa, modProdEic, modProdContract, modProdSemnare, modProdVigoare, modProdIncetare, modProdValoare, modProdEmail, modProdTel);

  //show alert
  document.querySelector('.alert').style.display = 'block';
  //hide alert in 3 sec
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  }, 3000);
  
}

//get form value
function getInputVal(id){
  return document.getElementById(id).value;
}

//save to fb
function saveMsg(modProdNume, modProdCui, modProdReg, modProdAdresa, modProdEic, modProdContract, modProdSemnare, modProdVigoare, modProdIncetare, modProdValoare, modProdEmail, modProdTel) {
  let newMsgRef = messagesRef.push();
  newMsgRef.set({
    'NumeProducator': modProdNume,
    'NrCUI': modProdCui,
    'NrComert': modProdReg,
    'Adresa': modProdAdresa,
    'CodEIC': modProdEic,
    'NrContract': modProdContract,
    'DataSemnare': modProdSemnare,
    'DataVigoare': modProdVigoare,
    'DataIncetare': modProdIncetare,
    'ValoareEstimativa': modProdValoare,
    'Email': modProdEmail,
    'Telefon': modProdTel
  })
}

//get data
firebase.database().ref().child('producatori').on('value', function (snapshot) {
  //clear to prevent dubplicates
  prod.innerHTML = " ";

  //get 
  snapshot.forEach(function (child) {
    let dbData = child.val();
    //jsn = JSON.stringify(dbData);
    
    prod.innerHTML += `
      <li>
        <div class="collapsible-header">
          <i class="fas fa-briefcase"></i>Producator: <span class="bold"> ${dbData.NumeProducator}</span>
        </div>

        <div class="collapsible-body">

          <div class="row">

            <ul class="col s5 collection">
              <h5>Date Companie</h5>
              <li class="collection-item"><i class="material-icons">assignment</i>${dbData.NumeProducator}</li>
              <li class="collection-item"><i class="material-icons">confirmation_number</i>CUI: ${dbData.NrCUI}</li>
              <li class="collection-item"><i class="material-icons">monetization_on</i>Nr. Inregistrare registrul comertului: ${dbData.NrComert}</li>
              <li class="collection-item"><i class="material-icons">home</i>${dbData.Adresa}</li>
              <li class="collection-item"><i class="material-icons">lightbulb_outline</i>Cod EIC: ${dbData.CodEIC}</li>
            </ul>

            <ul class="col s6 collection">
              <h5>Date Contractuale</h5>
              <div class="row">
                <div class="col s6">
                  <li class="collection-item"><i class="material-icons">book</i>Nr. Contract: ${dbData.NrContract}</li>
                  <li class="collection-item"><i class="material-icons">perm_contact_calendar</i>Data Semnare: <br> ${dbData.DataSemnare}</li>
                  <li class="collection-item"><i class="material-icons">perm_contact_calendar</i>Data Vigoare: <br> ${dbData.DataVigoare}</li>
                  <li class="collection-item"><i class="material-icons">perm_contact_calendar</i>Data Incetare: <br>${dbData.DataIncetare}</li>
                  <li class="collection-item"><i class="material-icons">attach_money</i>${dbData.ValoareEstimativa}</li>
                </div>
                <div class="col s6">
                  <li class="collection-item"><i class="material-icons">email</i>${dbData.Email}</li>
                  <li class="collection-item"><i class="material-icons">phone_android</i>${dbData.Telefon}</li>
                </div>
              </div>
            </ul>

          </div>

          <div class="row">
            <div class="actions">
              <a class="waves-effect waves-light btn spacing"><i class="material-icons">create</i></a>
              <a class="waves-effect waves-light btn spacing"><i class="material-icons">delete</i></a>
            </div>
          </div>

        </div>

      </li>
    `;
  
  });
});



firebase.database().ref().child('producatori').on('value', function (snapshot) {
  //clear to prevent duplicates
  parcProd.innerHTML = " ";
  listPark.innerHTML = " ";
  //get 
  snapshot.forEach(function (child) {
    let dbData = child.val();

    //add button
    parcProd.innerHTML += `
      <button class="tablinks" onclick="openCity(event, 'prod-${dbData.NrCUI}')">${dbData.NumeProducator}</button>
    `;

    //add tab
    listPark.innerHTML += `
      <div id="prod-${dbData.NrCUI}" class="tabcontent spacing">
        <div class="box z-depth-1">
          <h3>Producator: ${dbData.NumeProducator}</h3> <br>
          <a class="waves-effect waves-light btn modal-trigger" href="#modal1"><i class="material-icons right">add</i>Adauga
            parc</a>
        </div>
      </div>
    `;



  });
});


//pt parcuri
// send form data to new ref
// on value (firebase.database().ref().child('parcuri').on('value', function (snapshot))
// get id from form (prod-nr cui)
// compare to id on div (simple if statement)
// if it matches, update html with parc 
//hope it works !!