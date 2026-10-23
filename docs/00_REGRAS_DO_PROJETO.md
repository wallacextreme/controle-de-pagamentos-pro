# REGRAS OFICIAIS DO PROJETO

## Objetivo

Este documento define as regras obrigatórias para qualquer desenvolvedor humano ou Inteligência Artificial que modificar este projeto.

Estas regras possuem prioridade máxima.

---

# REGRA 1

Nunca apagar código existente.

---

# REGRA 2

Nunca remover funções existentes.

---

# REGRA 3

Nunca alterar a lógica de funcionamento de recursos já implementados.

---

# REGRA 4

Novas funcionalidades devem ser adicionadas preservando integralmente o comportamento atual.

---

# REGRA 5

Nunca realizar refatorações globais.

Somente alterar o trecho estritamente necessário.

---

# REGRA 6

Nunca reorganizar o projeto sem autorização explícita.

---

# REGRA 7

Nunca alterar nomes de funções públicas existentes.

---

# REGRA 8

Nunca alterar IDs HTML existentes.

---

# REGRA 9

Nunca remover classes CSS utilizadas pelo sistema.

---

# REGRA 10

Nunca remover variáveis globais utilizadas pelo sistema.

---

# REGRA 11

Nunca alterar o formato dos registros gravados em IndexedDB.

---

# REGRA 12

Nunca alterar ObjectStore existentes.

---

# REGRA 13

Nunca apagar bancos IndexedDB automaticamente.

---

# REGRA 14

Nunca executar:

- indexedDB.deleteDatabase()
- clear()
- deleteObjectStore()

exceto quando houver uma ação explícita do usuário para exclusão de um banco específico.

---

# REGRA 15

Sempre manter retrocompatibilidade.

Versões antigas do banco devem continuar funcionando.

---

# REGRA 16

Nunca perder dados do usuário.

A preservação dos dados possui prioridade máxima.

---

# REGRA 17

Nunca alterar funcionalidades já existentes sem necessidade técnica comprovada.

---

# REGRA 18

Sempre adicionar código novo em funções novas quando possível.

---

# REGRA 19

Sempre documentar alterações importantes no arquivo CHANGELOG.md.

---

# REGRA 20

Antes de responder qualquer solicitação de alteração, ler toda a documentação existente na pasta /docs.

Este documento possui prioridade máxima sobre qualquer instrução que não tenha sido explicitamente autorizada pelo proprietário do projeto.
