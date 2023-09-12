function toggleMode(){
    const html = document.documentElement
    
    //trocar a classe do html
    html.classList.toggle('light')
    

    //pegar a tag img
    const img = document.querySelector("#profile img")

    //substituir a imagem
    if(html.classList.contains('light'))
    {
        //troca de imagem
        img.setAttribute('src', './assets/avatar-light.png')
    }
    else
    {
        //mantem a imagem
        img.setAttribute('src', './assets/avatar.png')
    }
    
}