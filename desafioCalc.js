(function(){
    let lvl

    const checkWins = (wins = 0, losses = 0) => wins - losses
    
    _wins = checkWins(90)
    
    if(_wins <= 10){
    
        lvl = "Ferro"
    
    }else if(_wins <= 20){
    
        lvl = "Bronze"
    
    }else if(_wins <= 50){
    
        lvl = "Prata"
    
    }else if(_wins <= 80){
    
        lvl = "Ouro"
    
    }else if(_wins <= 90){
    
        lvl = "Diamante"
    
    }else if(_wins <= 100){
    
        lvl = "Lendário"
    
    }else{
    
        lvl = "Imortal"
    
    }
    
    console.log(`O Herói tem saldo: **${_wins}**, e está no nível: **${lvl}**`)
})()
