document.querySelector("#add-time")
    // Quando clicar no botão
    .addEventListener('click', cloneField)




// Executar uma ação
function cloneField(){
        // Duplicar os campos. Que campos?
        const newFieldsContainer = document.querySelector(".data").cloneNode(true);

// Limpar os campos. Qua campos?
        const fields =  newFieldsContainer.querySelectorAll("input")

        fields.forEach(function(field){
            field.value=""
        })

        // Colocar na página. Onde?
        document.querySelector(".geral-agendamentos").appendChild(newFieldsContainer)
}