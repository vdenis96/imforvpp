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
let prodRef = firebase.database().ref('producatori');

//form producatori
document.getElementById('adauga-producator').addEventListener('submit', submitFormProd);

let prod = document.querySelector('.prod-list');
let parcProd = document.querySelector('.parc-prod');
let listPark = document.querySelector('.list-parc');

//submit form producatori
function submitFormProd(e) {
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
  saveProd(modProdNume, modProdCui, modProdReg, modProdAdresa, modProdEic, modProdContract, modProdSemnare, modProdVigoare, modProdIncetare, modProdValoare, modProdEmail, modProdTel);
  //reset form
  this.reset();
  //show alert
  document.querySelector('.alert').style.display = 'block';
  //hide alert in 3 sec
  setTimeout(function () {
    document.querySelector('.alert').style.display = 'none';
  }, 3000);

}

//get form value
function getInputVal(id) {
  return document.getElementById(id).value;
}

//save to fb
function saveProd(modProdNume, modProdCui, modProdReg, modProdAdresa, modProdEic, modProdContract, modProdSemnare, modProdVigoare, modProdIncetare, modProdValoare, modProdEmail, modProdTel) {
  //let newProdRef = prodRef.push();
  //newProdRef.set({
  firebase.database().ref('producatori/' + modProdNume).set({
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

    //taburi producatori
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
              <a class="waves-effect waves-light btn spacing el-btn"><i class="material-icons">create</i></a>
              <a class="waves-effect waves-light btn spacing del-btn" id="del-${dbData.NrCUI}" onClick="getID(this.id)"><i class="material-icons">delete</i></a>
            </div>
          </div>

        </div>

      </li>
    `;

    //lista producatori pt parcuri
    let listaProducatori = document.querySelector('#mod-parc-prod');
    listaProducatori.innerHTML += `<option value="${dbData.NumeProducator}">${dbData.NumeProducator}</option>`;

    //init form
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, options);;


  });
});


//taburi pt parcuri
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
          <div class="lista-parcuri">
              <div class="row parc-row" id="${dbData.NumeProducator}">
                
              </div>
          </div>
        </div>
      </div>
    `;
  });
});



//get parcuri
firebase.database().ref().child('parcuri').on('value', function (snapshot2) {
  snapshot2.forEach(function (child2, n) {
    let pData = child2.val();
    let target = `#${pData.Producator}`;
    console.log(target);
    document.querySelector(target).innerHTML += `
      <ul class="col s4 collection">
        <h5>${pData.NumeParc}</h5>
        <li class="collection-item ext-list">
          Surse de productie 
          <span>(TO DO: functie pt checkmarks)</span>
        </li>
        <li class="collection-item">Cod producator transelectrica: ${pData.CodProducator}</li>
        <li class="collection-item">Adresa: ${pData.Adresa}</li>
        <li class="collection-item">Putere instalata totala: ${pData.PutereInstalataTotala} </li>
        <li class="collection-item">Putere maxima debitata: ${pData.PutereInstalataTotala} </li>
        <li class="collection-item">Putere aprobata ATR: ${pData.PutereAprobataATR}</li>
        <li class="collection-item">Capacitate acumulatori: ${pData.ca}</li>
        <li class="collection-item">Observatii: ${pData.Observatii}</li>
      </ul>
    `;
  })
})




let parcRef = firebase.database().ref('parcuri');
document.getElementById('adauga-parc').addEventListener('submit', submitFormParc);

function submitFormParc(e) {
  e.preventDefault();
  //get values
  let modParcNume = getInputVal('mod-parc-nume');
  let modParcProd = getInputVal('mod-parc-prod');
  let modParcCodProd = getInputVal('mod-parc-codProd');
  let modParcAdresa = getInputVal('mod-parc-adresa');
  let modParcPit = getInputVal('mod-parc-pit');
  let modParcPmd = getInputVal('mod-parc-pmd');
  let modParcPaATR = getInputVal('mod-parc-paATR');
  let modParcCa = getInputVal('mod-parc-ca');
  let modParcObs = getInputVal('mod-parc-obs');

  // prod.innerHTML = " ";
  saveParc(modParcNume, modParcProd, modParcCodProd, modParcAdresa, modParcPit, modParcPmd, modParcPaATR, modParcCa, modParcObs);

  this.reset();
}

function saveParc(modParcNume, modParcProd, modParcCodProd, modParcAdresa, modParcPit, modParcPmd, modParcPaATR, modParcCa, modParcObs) {
  let newParcRef = parcRef.push();
  // newParcRef.set({
  // firebase.database().ref('producatori/' + modParcProd + '/' + 'parcuri/' + modParcNume).set({
  firebase.database().ref('parcuri/' + modParcNume).set({
    'NumeParc': modParcNume,
    'Producator': modParcProd,
    'CodProducator': modParcCodProd,
    'Adresa': modParcAdresa,
    'PutereInstalataTotala': modParcPit,
    'PutereMaximaDebitata': modParcPmd,
    'PutereAprobataATR': modParcPaATR,
    'CapacitateAcumulatori': modParcCa,
    'Observatii': modParcObs
  })
}























//delete function
function getID(clicked_id) {
  alert(clicked_id);
}