# FUNCIONALIDADES DO SISTEMA

## Objetivo

Este documento lista todas as funcionalidades existentes no sistema.

Antes de adicionar qualquer recurso novo, verificar se a funcionalidade já existe.

Nunca substituir funcionalidades existentes.

Sempre preservar compatibilidade.

---

# Cadastro

O sistema permite cadastrar registros de pagamento.

Os registros são gravados em IndexedDB.

---

# Edição

O sistema permite editar registros existentes.

A edição deve preservar o identificador do registro.

---

# Exclusão

O sistema permite excluir registros.

A exclusão deve ocorrer somente mediante ação do usuário.

---

# Pesquisa

O sistema possui mecanismos de pesquisa e filtros.

Novas funcionalidades não podem interferir nesses recursos.

---

# Comparativos

O sistema possui modo comparativo entre bancos.

Novas funcionalidades devem preservar esse comportamento.

---

# Relatórios

O sistema gera relatórios.

A estrutura atual deve permanecer compatível.

---

# Estatísticas

O sistema possui telas de estatísticas.

Qualquer melhoria deve preservar os cálculos atuais.

---

# Backup

O sistema possui exportação de dados.

Nunca alterar o formato de backup sem manter compatibilidade.

---

# Importação

O sistema permite importar dados.

A importação deve continuar aceitando arquivos gerados por versões anteriores.

---

# Impressão

O sistema possui modo de impressão.

Novos componentes não devem impedir a impressão existente.

---

# PWA

O sistema funciona como Progressive Web App.

Essa funcionalidade deve continuar operacional.

---

# Tauri

O sistema pode ser executado através do Tauri Desktop.

Toda alteração deve permanecer compatível.

---

# Offline First

O sistema deve continuar funcionando sem conexão com a Internet.

Nenhuma funcionalidade nova poderá tornar a Internet obrigatória.

---

# Compatibilidade

Toda funcionalidade existente possui prioridade sobre novas implementações.

Nenhum comportamento atual poderá ser removido.
