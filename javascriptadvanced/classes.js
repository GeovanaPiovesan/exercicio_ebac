class Animal {

constructor(especie){
    this.especie = especie
}

    falar(){
        console.log(tihis.especie + 'fala')
    }

    comer(){
        console.log(tihis.especie + 'come')
    }

    dormir(){
        console.log(tihis.especie + 'dome')
    }
}

class cachorro extends Animal {
    falar(){
        console.log(this.especie + 'au,au, au')
    }
}

const cachorro = new cachorro('cachorro')
cachorro.falar()
cachorro.comer()
cachorro.dormir()