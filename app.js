/*const header = document.querySelector("header");

header.setAttribute("id", "header");
header.style.backgroundColor = "#000";
header.style.color = "#fff";
header.style.padding = "10px";

header.innerHTML = "<ul> <li> ITEM Novo </li> </ul>";

//

const bodyElemento = document.querySelector("body");
const novoElemento = document.createElement("main");
const articleElemento = document.createElement("article");
const p1Elemento = document.createElement("p");
p1Elemento.innerHTML = "TEXTO PRINCIPAL";

const p2Elemento = document.createElement("p");
p2Elemento.innerHTML = "TEXTO SECUNDARIO";

const sectionElemento = document.createElement("section");
const divElemento = document.createElement("div");
const footerElemento = document.createElement("footer");
const ulElemento = document.createElement("ul");
const liElemento = document.createElement("li");
liElemento.innerHTML = "Link rodapé";

const imgElemento = document.createElement("img");
imgElemento.setAttribute("src", "ft_logo.png");
imgElemento.setAttribute("alt", "");
imgElemento.setAttribute("srcset", "");

bodyElemento.appendChild(novoElemento);
bodyElemento.appendChild(footerElemento);
footerElemento.appendChild(ulElemento);
footerElemento.appendChild(imgElemento);
ulElemento.appendChild(liElemento);
novoElemento.appendChild(articleElemento);
novoElemento.appendChild(sectionElemento);
sectionElemento.appendChild(divElemento);
divElemento.appendChild(p2Elemento);
articleElemento.appendChild(p1Elemento);
*/

const inputNome = document.querySelector("input[name='Nome']");
const inputLink = document.querySelector("input[name='Link']");
const btnGerarLink = document.querySelector("#btn-gerar");
const links = document.querySelector(".links");


    btnGerarLink.addEventListener("click", gerarlink);

    const ulElemento = document.createElement("ul");
    links.appendChild(ulElemento);


function gerarlink() {

    const linkElemento = document.createElement("a");
    const liElemento = document.createElement("li");
    liElemento.appendChild(linkElemento);

    console.log(inputNome)

    linkElemento.innerHTML = inputNome.value;
    linkElemento.href = inputLink.value;
    linkElemento.target = "_blank";

    links.appendChild(liElemento)

}

//console.log(header);