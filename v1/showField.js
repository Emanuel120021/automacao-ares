function mostra(id, id2){
    // document.getElementById(id).style.display === 'none' ? 'block' : 'none'
    if (document.getElementById(id).style.display === 'none' && document.getElementById(id2).style.display === 'none'){
        document.getElementById(id).style.display = 'block'
    } else {
        document.getElementById(id).style.display = 'none'
    }
}