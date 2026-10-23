# INDEXEDDB

## Objetivo

Este documento descreve as regras de utilização do IndexedDB no projeto CONTROLE DE PAGAMENTOS PRO.

Toda alteração relacionada ao banco de dados deve respeitar este documento.

---

## Banco de Dados

O sistema utiliza IndexedDB como armazenamento principal.

O banco ativo é selecionado dinamicamente através da variável:

DB_NAME

Atualmente existem os seguintes bancos padrão:

- controle_pagamentos_pessoal
- controle_pagamentos_abel
- controle_pagamentos_luiz

---

## Object Store

Cada banco utiliza a Object Store:

lanc

Nenhuma IA poderá alterar este nome sem autorização explícita.

---

## Regras Obrigatórias

Nunca:

- alterar o nome da Object Store;
- apagar bancos existentes;
- recriar bancos existentes;
- modificar registros automaticamente;
- limpar registros existentes;
- alterar a versão do banco sem necessidade técnica.

---

## Retrocompatibilidade

Todos os registros gravados anteriormente devem continuar sendo aceitos.

Não alterar o formato dos registros já existentes.

Novos campos somente poderão ser adicionados de forma compatível.

Nunca remover campos utilizados por versões anteriores.

---

## Segurança dos Dados

A preservação dos dados possui prioridade máxima.

Nenhuma funcionalidade nova poderá causar perda de informações.

Antes de qualquer alteração estrutural, deve existir uma estratégia de compatibilidade com bancos antigos.

---

## Exclusão de Banco

A exclusão de um banco somente poderá ocorrer quando houver confirmação explícita do usuário.

Nunca excluir automaticamente um banco IndexedDB.

---

## Novos Bancos

Quando novas funcionalidades criarem bancos adicionais, estes deverão seguir o mesmo padrão utilizado pelo sistema.

Toda criação de banco deve preservar compatibilidade com os bancos existentes.

---

## Prioridade

Em caso de conflito entre implementação e segurança dos dados, a segurança dos dados possui prioridade máxima.
