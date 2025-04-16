const valorVar = document.querySelector(".valor");
valorVar.innerHTML = "sexo";
valorVar.style.color = "red";

valorVar.addEventListener('click', () => {
    let criaDiv = document.createElement('div');
    valorVar.insertAdjacentElement('afterend', criaDiv);
    criaDiv.innerHTML = "OLÁ MUNDO!";
    criaDiv.style.color = "black";

    if (criaDiv) {
        valorVar.style.backgroundColor = "blue";
    } else {
        valorVar.style.backgroundColor = "green";
    }

    

});