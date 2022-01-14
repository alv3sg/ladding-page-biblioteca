const slide = new Array ('imagens/fracesinhas.jpg', 'imagens/hot-dogs.jpg', 'imagens/hamburgers.jpg')
const legenda = new Array ('Francesinha', 'Hot-Dog', 'Hamburger')

document.getElementById('prato_').src = `${slide[0]}`
document.getElementById('leg').innerHTML = `${legenda[0]}`

let i = 0
function proximoc(){       
    if(i<slide.length){        
        i++
        document.getElementById('prato_').src = `${slide[i]}`    
        document.getElementById('leg').innerHTML = `${legenda[i]}`         
    }
    if(i===slide.length){        
        i = 0        
        document.getElementById('prato_').src = `${slide[i]}`
        document.getElementById('leg').innerHTML = `${legenda[i]}`       
    }
}
function anteriorc(){
    if(i!=0){
        i--
        document.getElementById('prato_').src = `${slide[i]}`
        document.getElementById('leg').innerHTML = `${legenda[i]}`
    }    
}

const slide2 = new Array ('imagens/drinks.jpg', 'imagens/caipirinhas.jpg', 'imagens/cafes.jpg')
const legenda2 = new Array ('Drink', 'Caipirinha', 'Café')

document.getElementById('drink_').src = `${slide2[0]}`
document.getElementById('leg2').innerHTML = `${legenda2[0]}`

let ii = 0
function proximob(){       
    if(ii<slide.length){        
        ii++
        document.getElementById('drink_').src = `${slide2[ii]}`    
        document.getElementById('leg2').innerHTML = `${legenda2[ii]}`
    }
    if(ii===slide.length){        
        ii = 0
        document.getElementById('drink_').src = `${slide2[ii]}`
        document.getElementById('leg2').innerHTML = `${legenda2[ii]}`       
    }
}
function anteriorb(){
    if(ii!=0){
        ii--
        document.getElementById('drink_').src = `${slide2[ii]}`
        document.getElementById('leg2').innerHTML = `${legenda2[ii]}`
    }
}