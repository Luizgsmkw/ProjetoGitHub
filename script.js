// const img = document.getElementById("image");
// const nickName = document.getElementById("nick_name");
// const nameUser = document.getElementById("name");
// const dateCreated = document.getElementById("created");
// const quantidadeRepos = document.getElementById("repos");
// const followers = document.getElementById("followers");
// const following = document.getElementById("following");
const buttonPesquisa = document.getElementById("buttonPesquisa").addEventListener("click", getUsersGit);
const inputPesquisa = document.getElementById("inp")
inputPesquisa.addEventListener('keyup', (e) => {
  const Key = e.which || e.keyCode;
  const isEnterKeyPressed = Key === 13
  if(isEnterKeyPressed){
     getUsersGit()
  }
})


async function usersGit() {
  const respostaInput = inputPesquisa.value;
  const url = `https://api.github.com/users/${respostaInput}`;
  const respostaApiGit = await fetch(url);
  return await respostaApiGit.json()
}

async function getUsersGit(){
  usersGit().then((dataUser) => {
    let infos = `
    <img src="${dataUser.avatar_url}" alt="Foto perfil" />
    <div class="container-dados">
            <div class="container-user">
              <div class="user-name">
                <p class="nick-name">${dataUser.login}</p>
                <p class="name">${dataUser.name ?? "Usuário não possui o nome cadastrado🔴 "}</p>
              </div>
              <p class="date-created">${dataUser.created_at}</p>
            </div>
            <div class="data">
              <p class="public_repos">Public_repos<span>${dataUser.public_repos}</span></p>
              <p class="followers">Followers<span>${dataUser.followers}</span></p>
              <p class="following">Following<span>${dataUser.following}</span></p>
            </div>
          </div>
    `
    document.querySelector('.campo-dados').innerHTML = infos
  })
}


// async function usersGitHub() {
//   const respostaInput = inputPesquisa.value;
//   const url = `https://api.github.com/users/${respostaInput}`;
//   const respostaApiGit = await fetch(url);
//   const respostaJsonGit = await respostaApiGit.json();
//   const respostaImg = await respostaJsonGit.avatar_url;
//   const respostaNickName = await respostaJsonGit.login;
//   const respostaName = await respostaJsonGit.name;
//   const respostaDateCreated = await respostaJsonGit.created_at;
//   const respostaQuantidadeRepos = await respostaJsonGit.public_repos;
//   const respostaFollowers = await respostaJsonGit.followers;
//   const respostaFollowing = await respostaJsonGit.following;
//   img.setAttribute("src", `${respostaImg}`);
//   nickName.innerText = respostaNickName;
//   nameUser.innerText = respostaName;
//   dateCreated.innerText = respostaDateCreated;
//   quantidadeRepos.innerText = respostaQuantidadeRepos;
//   followers.innerText = respostaFollowers;
//   following.innerText = respostaFollowing;
//   inputPesquisa.value = ''
// }

const divRepos = document.getElementById("divRepos");
const ulRepos = document.getElementById("ulRepos");
divRepos.appendChild(ulRepos);

// async function reposGitHub() {
//   let respostaInputrs = inputPesquisa.value;
//   const url =  `https://api.github.com/users/${respostaInputrs}/repos`;
//   const respostaApiGit = await fetch(url);
//   const respostaJsonGit = await respostaApiGit.json();
//   respostaJsonGit.map((item) => {
//     const liResp = document.createElement("li");
//     liResp.classList.add("liResp");

//     const textoLi = document.createTextNode(item.name);
//     const linkResp = document.createElement("a");

//     const spanPrincipal = document.createElement("span");
//     spanPrincipal.classList.add("spanPrincipal");

//     const spanForks = document.createElement("span");
//     spanForks.classList.add("span");
//     const spanForksData = document.createElement("span");

//     const spanStars = document.createElement("span");
//     spanStars.classList.add("span");
//     const spanStarsData = document.createElement("span");

//     const spanWatchers = document.createElement("span");
//     spanWatchers.classList.add("span");
//     const spanWatchersData = document.createElement("span");

//     const spanLanguage = document.createElement("span");
//     spanLanguage.classList.add("span");
//     const spanLanguageData = document.createElement("span");

//     const imgForks = document.createElement("img");
//     imgForks.setAttribute("src", `img/fork.png`);
//     imgForks.classList.add("img");

//     const imgStars = document.createElement("img");
//     imgStars.setAttribute("src", `img/estrela.png`);
//     imgStars.classList.add("img");

//     const imgWatchers = document.createElement("img");
//     imgWatchers.setAttribute("src", `img/cuidados-com-os-olhos.png`);
//     imgWatchers.classList.add("img");

//     const imgLanguage = document.createElement("img");
//     imgLanguage.setAttribute("src", `img/pessoa.png`);
//     imgLanguage.classList.add("img");

//     linkResp.classList.add("linkResp");
//     linkResp.setAttribute("href", `${item.html_url}`);
//     linkResp.setAttribute("target", "_blank");
//     linkResp.appendChild(textoLi);
//     linkResp.appendChild(spanPrincipal);

//     liResp.appendChild(linkResp);

//     ulRepos.appendChild(liResp);

//     spanPrincipal.appendChild(spanForks);
//     spanPrincipal.appendChild(spanStars);
//     spanPrincipal.appendChild(spanWatchers);
//     spanPrincipal.appendChild(spanLanguage);

//     spanForks.appendChild(imgForks);
//     spanStars.appendChild(imgStars);
//     spanWatchers.appendChild(imgWatchers);
//     spanLanguage.appendChild(imgLanguage);

//     spanForks.appendChild(spanForksData);
//     spanStars.appendChild(spanStarsData);
//     spanWatchers.appendChild(spanWatchersData);
//     spanLanguage.appendChild(spanLanguageData);

//     spanForksData.innerText = item.forks;
//     spanStarsData.innerText = item.stargazers_count;
//     spanWatchersData.innerText = item.watchers;
//     spanLanguageData.innerText = item.language;
//   })
// }
// buttonPesquisa.addEventListener("click", reposGitHub);
//buttonPesquisa.addEventListener("click", getUsersGit);

