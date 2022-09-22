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
    `https://api.github.com/users/${userName}/repos?per_page=10`
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
    <p class="textRepos">10 últimos repositórios</p>
      <ul class="ulRepos">
      ${repositories}
      </ul>
    </div>`;
  });
}

