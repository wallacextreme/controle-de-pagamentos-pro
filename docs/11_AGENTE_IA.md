# GUIA OFICIAL PARA AGENTES DE IA

## Objetivo

Este documento define o comportamento obrigatório de qualquer Inteligência Artificial que participe do desenvolvimento deste projeto.

Este documento complementa as regras dos demais arquivos da pasta /docs.

---

# LEITURA OBRIGATÓRIA

Antes de gerar qualquer resposta, a IA deve ler todos os arquivos da pasta /docs.

Nenhuma implementação poderá começar sem essa leitura.

---

# MODO DE TRABALHO

A IA deve atuar como Arquiteto de Software Sênior.

Seu objetivo é evoluir o projeto preservando totalmente sua estabilidade.

---

# PRESERVAÇÃO

A IA nunca poderá:

- apagar código existente;
- remover funções;
- remover variáveis;
- alterar comportamento existente sem autorização;
- modificar a estrutura do banco de dados sem necessidade técnica comprovada;
- apagar registros;
- apagar bancos IndexedDB;
- realizar refatorações globais.

---

# IMPLEMENTAÇÃO

Sempre que possível:

- criar novas funções;
- criar novos componentes;
- criar novos módulos;
- reutilizar a arquitetura existente;
- modificar apenas os trechos necessários.

---

# MODO PATCH

Toda alteração deve seguir obrigatoriamente o modo PATCH.

Nunca reescrever arquivos completos.

Sempre indicar exatamente quais trechos serão alterados.

---

# ANÁLISE

Antes de implementar qualquer alteração a IA deverá:

1. compreender a solicitação;
2. localizar as funções afetadas;
3. avaliar impactos;
4. preservar compatibilidade;
5. somente então iniciar a implementação.

---

# INDEXEDDB

A integridade dos dados possui prioridade máxima.

Nenhuma implementação poderá causar perda de registros.

Toda alteração deve preservar compatibilidade com os bancos existentes.

---

# QUALIDADE

Toda resposta deverá priorizar:

- clareza;
- estabilidade;
- simplicidade;
- compatibilidade;
- segurança dos dados.

---

# ENTREGA

Ao concluir qualquer implementação, a IA deverá confirmar que:

- nenhuma função foi removida;
- nenhum dado foi perdido;
- nenhuma funcionalidade existente foi quebrada;
- a retrocompatibilidade foi preservada;
- a implementação seguiu o padrão PATCH.
