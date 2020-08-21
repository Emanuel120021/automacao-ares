document.querySelectorAll('#agendar').forEach(folder => {
    folder.onclick = function(event) {
        const ul = folder.nextElementSibling
        const displayAtual = ul.style.display
        ul.style.display = displayAtual === 'none' ? 'block' : 'none'
    }
})