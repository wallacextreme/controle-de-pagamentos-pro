# CONVENÇÕES DE CÓDIGO

## Objetivo

Este documento define o padrão oficial de desenvolvimento do projeto.

Todo novo código deve seguir estas convenções.

---

# Linguagem

Utilizar exclusivamente:

- HTML5
- JavaScript ES2022
- TailwindCSS

Não adicionar frameworks sem autorização.

---

# Organização

O projeto utiliza arquitetura de arquivo único.

Sempre respeitar a organização existente.

Nunca mover grandes blocos de código.

---

# Nomes

Utilizar nomes claros e descritivos.

Evitar abreviações desnecessárias.

---

# Funções

Criar funções pequenas.

Cada função deve possuir uma única responsabilidade.

Não modificar funções existentes quando for possível criar uma nova.

---

# Variáveis

Preferir:

const

Sempre que possível.

Utilizar:

let

apenas quando houver necessidade de alteração.

Evitar criar variáveis globais.

---

# Comentários

Adicionar comentários apenas quando realmente melhorarem a compreensão do código.

Nunca remover comentários existentes.

---

# HTML

Preservar IDs existentes.

Preservar atributos utilizados pelo JavaScript.

Nunca alterar estrutura sem necessidade.

---

# TailwindCSS

Utilizar classes já adotadas pelo projeto.

Evitar alterar estilos existentes.

Novos componentes devem manter o padrão visual atual.

---

# JavaScript

Evitar duplicação de código.

Criar novas funções reutilizáveis.

Não alterar comportamento existente.

---

# IndexedDB

Toda operação deve preservar os registros existentes.

Nunca modificar a estrutura do banco sem autorização.

---

# Retrocompatibilidade

Toda alteração deve funcionar com versões anteriores do sistema.

Compatibilidade é obrigatória.

---

# Prioridade

Sempre priorizar:

1. Segurança dos dados

2. Retrocompatibilidade

3. Estabilidade

4. Clareza do código

5. Evolução do sistema
