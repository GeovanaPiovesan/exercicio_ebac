class movimentacao {
    constructor(banco = 'padrao', nome = '', saldo = 0){
        this.banco = banco,
        this.nome = nome,
        this.saldo = saldo

    }
}

class registro {
    constructor(dia, mes, ano){
        this.dia = dia,
        this.mes = mes,
        this.ano = ano,
        this.movimentacoes = []
    }
    
    novaMovimentacao(...){
        movimentacoes.forEach(
            lancamento => this.movimentacoes.push(lancamento)
        )
    }

    resumo(){
        let valoratualizado = 0
        let tipo = ''
        this.movimentacoes.forEach(lancamento =>{
            if (!lancamento.nome.match(/imposto/)) {
                valoratualizado += lancamento.saldo
                tipo += lancamento.nome + ''
            }
           
        })
        return tipo + valoratualizado
    }
}

const m01 = new movimentacao ( 'bank X', 'salario', 20000)

const m02 = new movimentacao ( 'bank X', 'comissao', 2000)

const m03 = new movimentacao ( 'bank X', 'imposto', -5000)

const registro01 = new registro(
20/12/23
)
registro01.novaMovimentacaomovimentacoes(m01, m02, m03)
console.log(registro01.resumo())