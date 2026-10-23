# BACKUP E SEGURANÇA

## Objetivo

Este documento define as regras oficiais de backup, restauração e segurança dos dados do projeto.

A preservação dos dados possui prioridade máxima.

---

# BACKUP

Todo recurso de backup existente deve permanecer funcionando.

Nunca alterar o formato do backup sem manter compatibilidade com versões anteriores.

Sempre que possível, novos campos devem ser opcionais para preservar a importação de backups antigos.

---

# RESTAURAÇÃO

A restauração deve preservar integralmente os dados do usuário.

Nenhum registro poderá ser descartado automaticamente durante a importação.

---

# INDEXEDDB

O banco de dados é considerado um recurso crítico.

Nunca:

- apagar bancos automaticamente;
- recriar bancos existentes;
- limpar registros sem autorização explícita do usuário;
- alterar Object Stores existentes sem necessidade técnica comprovada.

---

# SEGURANÇA DOS DADOS

Toda alteração deve priorizar:

1. Integridade dos dados.
2. Compatibilidade.
3. Estabilidade.

Qualquer funcionalidade nova deve preservar os registros já existentes.

---

# RECUPERAÇÃO

Sempre que possível, alterações estruturais devem permitir recuperação de dados existentes.

Caso exista risco de perda de informações, a implementação deve ser interrompida até que exista uma estratégia segura.

---

# RESPONSABILIDADE

Nenhuma Inteligência Artificial poderá implementar alterações que coloquem em risco os dados do usuário.

Em caso de dúvida, deve prevalecer a preservação dos dados.

---

# PRIORIDADE

Segurança dos dados sempre possui prioridade sobre novas funcionalidades.
