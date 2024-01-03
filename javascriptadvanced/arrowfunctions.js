
function pessoa() {
   
//const pessoa = this
        this.age = 0
    

    setInterval(() => {
        console.log(this.idade++)
    }, 2000);
}

const p1 = new pessoa()