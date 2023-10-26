export class Pessoa {
    public id: string;
    public nome: string;
    public email: string;
    public admin: boolean;

    constructor(nome: string, email: string) {
        this.id = '12345'
        this.nome = nome
        this.email = email
        this.admin = false;
        this.validar()
    }

    alterarPerfil() {
        this.admin = !this.admin
    }

    validar() {
        if(!this.nome || this.nome.length <= 3) {
            throw new Error('Nome inválido')
        }

        if(!this.email || this.email.length <= 10) {
            throw new Error('Email inválido')
        }
    }
}