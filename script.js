/*Viene fornito un layout di base. Come prima cosa nel file js definitevi un array di oggetti che rappresentano i membro del team (prendete i dati dallo screen fornito). Ogni membro deve avere le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
Prendendo come riferimento la card di esempio presente nell'html, stampiamo dinamicamente una card per ogni membro del team.*/
const teamCardContainer = document.querySelector('.team-container');

const arrTeamMember = [
    {
        name: 'Wayne Barnet',
        role: 'Founder & CEO',
        picture: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        picture: 'angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        picture: 'walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        picture: 'angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        picture: 'scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        picture: 'barbara-ramos-graphic-designer.jpg'
    }
];

for (let i = 0; i < arrTeamMember.length; i++){
    teamCardContainer.innerHTML += `
    <div class="team-card">
            <div class="card-image">
              <img
                src="img/${arrTeamMember[i].picture}"
                alt="${arrTeamMember[i].name}"
              />
            </div>
            <div class="card-text">
              <h3>${arrTeamMember[i].name}</h3>
              <p>${arrTeamMember[i].role}</p>
            </div>
          </div>
    `
}


// parte bonus
// seleziono gli oggetti del form
const newMemberName = document.querySelector('#name')
const newMemberRole = document.querySelector('#role')
const newMemberPic = document.querySelector('#image')
const btnAdd = document.querySelector('#addMemberButton')

// creo la funzione
btnAdd.addEventListener('click', function(){
    let newNameValue = newMemberName.value
    let newRoleValue = newMemberRole.value
    let newPicValue = newMemberPic.value
    let newObjUser = {
        name: newNameValue,
        role: newRoleValue,
        picture: newPicValue
    }
    arrTeamMember.push(newObjUser)
    cardGenerator();
})


function cardGenerator() {
    teamCardContainer.innerHTML = ''
    for (let i = 0; i < arrTeamMember.length; i++){
        teamCardContainer.innerHTML += `
        <div class="team-card">
                <div class="card-image">
                  <img
                    src="img/${arrTeamMember[i].picture}"
                    alt="${arrTeamMember[i].name}"
                  />
                </div>
                <div class="card-text">
                  <h3>${arrTeamMember[i].name}</h3>
                  <p>${arrTeamMember[i].role}</p>
                </div>
              </div>
        `
    }
}

