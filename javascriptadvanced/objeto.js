const user01 = new Object()
user01.id = 1
user01.nome = "joão"
user01.idade = 25

const user02 = new Object()
user02.id = 2
user02.nome = "pedro"
user02.idade = 30

const user03 = new Object()
user03.id = 3
user03.nome = "maria"
user03.idade = 28

const car01 = new Object()
car01["marca"] = "lamborghini"

const car02 = new Object()
car02.marca = "nissan"

console.log(Object.keys(user01))
console.log(Object.keys(user02))
console.log(Object.keys(user03))
console.log(Object.keys(car01))
console.log(Object.keys(car02))

user01.idade = user01.idade + 1

console.log(Object.entries(user01))

Object.defineProperty(user01, 'cpf', {
    enumerable: false,
    whitable: false,
    value: '000.000.000 -00'
})