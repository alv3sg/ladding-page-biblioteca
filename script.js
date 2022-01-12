const slide = new Array ('imagens/fracesinhas.jpg', 'imagens/hot-dogs.jpg', 'imagens/hamburgers.jpg')
document.getElementById('prato_').src = `${slide[0]}`
let i = 0
function proximoc(){       
    if(i<slide.length){        
        i++
        document.getElementById('prato_').src = `${slide[i]}`    
             
    }
    if(i===slide.length){        
        i = 0
        document.getElementById('prato_').src = `${slide[i]}`       
    }
}
function anteriorc(){
    if(i!=0){
        i--
        document.getElementById('prato_').src = `${slide[i]}`
    }
}

const slide2 = new Array ('imagens/drinks.jpg', 'imagens/caipirinhas.jpg', 'imagens/cafes.jpg')
document.getElementById('drink_').src = `${slide2[0]}`
let ii = 0
function proximob(){       
    if(ii<slide.length){        
        ii++
        document.getElementById('drink_').src = `${slide2[ii]}`    
             
    }
    if(ii===slide.length){        
        ii = 0
        document.getElementById('drink_').src = `${slide2[ii]}`       
    }
}
function anteriorb(){
    if(ii!=0){
        ii--
        document.getElementById('drink_').src = `${slide2[ii]}`
    }
}