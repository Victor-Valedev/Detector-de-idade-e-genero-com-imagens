function verificar(){
    let data = new Date()
    let ano = data.getFullYear()
    let fano = window.document.querySelector('input#txtano')
    let res = window.document.querySelector('div#res')
    if(fano.value == 0 || Number(fano.value) > ano){    
        window.alert('[ERROR] Forneça seus dados com ATENÇÃO!')
    }else{
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade <= 10){
                //Criança
                img.setAttribute('src', '../img/foto-bebe-m.png')
            }else if(idade >= 10 && idade <= 21){
                //Jovem
                img.setAttribute('src','../img/foto-jovem-m.png')
            }else if(idade >= 22 && idade <= 50){
                //adulto
                img.setAttribute('src','../img/foto-adulto-m.png')
            }else{
                //idoso
                img.setAttribute('src','../img/foto-idoso-m.png')
            }
            
        }else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', '../img/foto-bebe-f.png')
            }else if(idade >= 10 && idade < 21){
                //Jovem
                img.setAttribute('src','../img/foto-jovem-f.png')
            }else if(idade >= 22 && idade < 50){
                //adulto
                img.setAttribute('src','../img/foto-adulto-f.png')
            }else{
                //idoso
                img.setAttribute('src','../img/foto-idoso-f.png')
            }
        }
        
        res.innerHTML = (`Detectamos ${genero} com ${idade} anos`)
        res.appendChild(img)
    }
}