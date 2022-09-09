document.getElementById("buttonPesquisa").addEventListener("click", () => {
  const userName = document.getElementById("inp").value;
  getUsersGit(userName);
});

document.getElementById("inp").addEventListener("keyup", (e) => {
  const userName = e.target.value;
  const Key = e.which || e.keyCode;
  const isEnterKeyPressed = Key === 13;
  if (isEnterKeyPressed) {
    getUsersGit(userName);
  }
});

async function usersGit(userName) {

  const url = `https://api.github.com/users/${userName}`;
  const respostaApiGit = await fetch(url);
  return await respostaApiGit.json();
}

function getUsersGit(userName) {
  usersGit(userName).then((dataUser) => {
    let infos = `
    
            <div class="container-user">
            <img src="${dataUser.avatar_url}" alt="Foto perfil" class="imgPerfil" />
    <div class="container-dados">
              <div class="user-name">
                <p class="nick-name">${dataUser.login}</p>
                <p class="name">${
                  dataUser.name ?? "Usuário não possui o nome cadastrado🔴 "
                }</p>
              </div>
            </div>
            <div class="container-data">
              <p class="date-created">${dataUser.created_at}</p>
              <div class="data">
                <p class="public_repos">Public_repos<span>${
                  dataUser.public_repos
                }</span></p>
                <p class="followers">Followers<span>${
                  dataUser.followers
                }</span></p>
                <p class="following">Following<span>${
                  dataUser.following
                }</span></p>
              </div>
            </div>
          </div>
    `;
    document.querySelector(".campo-dados").innerHTML = infos;

    getReposGit(userName);
  });
}

async function reposGit(userName) {
  const respostaApiGit = await fetch(
    `https://api.github.com/users/${userName}/repos`
  );
  return await respostaApiGit.json();
}

function getReposGit(userName) {
  reposGit(userName).then((dataRepos) => {
    let repositories = "";
    dataRepos.map((repo) => {
      repositories += `<li class="liResp">
      <a href="${repo.html_url}" class="linkResp" target="_blank">${repo.name}</a>
      <span class="spanPrincipal">
      <span class="span"><img src="img/fork.png" class="imgr"> ${repo.forks}</span>
      <span class="span"><img src="img/estrela.png" class="imgr"> ${repo.stargazers_count}</span>
      <span class="span"><img src="img/cuidados-com-os-olhos.png" class="imgr"> ${repo.watchers}</span>
      <span class="span"><img src="img/pessoa.png" class="imgr"> ${repo.language}</span>
      </span>
      </li>`;
    });
    document.querySelector(".campo-dados").innerHTML += `
    <div class="container-repos">
      <ul class="ulRepos">
      ${repositories}
      </ul>
    </div>`;
  });
}

// const divRepos = document.getElementById("divRepos");
// const ulRepos = document.getElementById("ulRepos");
// divRepos.appendChild(ulRepos);

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
// //buttonPesquisa.addEventListener("click", getUsersGit);
