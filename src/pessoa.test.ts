import { expect, test } from 'vitest'
import { Pessoa } from './pessoa'

test('Instanciar classe Pessoa', () => {
    // Criar o cenário
    const nome = 'João'
    const email = 'joao@email.com'

    // Executar ação
    const pessoa = new Pessoa(nome, email);

    // Expectativa de saída
    expect(pessoa.id).not.toBeNull();
    expect(pessoa.nome).toBe(nome)
    expect(pessoa.email).toBe(email)
    expect(pessoa.admin).toBeFalsy()
})

test('Testar nome inválido ao instanciar pessoa', () => {
    // Criar cenário
    const nome = 'Jao'
    const email = 'joao@email.com'

    // Expectativa de saída
    expect(() => {
        new Pessoa(nome, email);
    }).toThrow(new Error('Nome inválido'))
})

test('Testar email inválido ao instanciar pessoa', () => {
    // Criar cenário
    const nome = 'Joao'
    const email = 'jao@e.com'

    // Expectativa de saída
    expect(() => {
        new Pessoa(nome, email);
    }).toThrow(new Error('Email inválido'))
})

test('Testar alteração de perfil de pessoa', () => {
    const pessoa = new Pessoa('João', 'joão@email.com')
    expect(pessoa.admin).toBeFalsy()
    pessoa.alterarPerfil()
    expect(pessoa.admin).toBeTruthy()
})