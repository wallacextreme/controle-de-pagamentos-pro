# CHANGELOG

Todas as alterações realizadas neste projeto devem ser registradas neste arquivo.

---

## Versão 1.0.0

Data: 03/08/2026

### Documentação Inicial

Criada a documentação oficial do projeto contendo:

- README
- Regras do Projeto
- Arquitetura
- IndexedDB
- Funcionalidades
- Padrão de Patch
- Convenções de Código
- Fluxo de Desenvolvimento
- Checklist
- Plano de Testes
- Backup e Segurança
- Prompt Mestre
- Guia Oficial para Agentes de IA

---

## Versão 1.1.0

Data: 11/09/2026

### Fase 1 — Correções Técnicas Seguras

Alterações:

- Correção do Bug do CSV: Adicionada constante ABAS e verificação compatível em exportarCSV() eliminando ReferenceError ao exportar no modo comparativo
- Tratamento de Erros do IndexedDB: Implementado tratamento de onerror e rejeição explícita de Promise em salvarRegistro, atualizarRegistro e excluirRegistro, com try/catch e alerta visual nas funções chamadoras
- Correção de Fuso Horário e Datas Locais: Implementada função formatarDataISO(data) baseada no horário local do Brasil, eliminando anomalias noturnas de conversão UTC
- Segurança de Renderização: Implementada função escapeHTML(str) e aplicada nas interpolações dinâmicas de descrição, nota fiscal, parcelas e nomes de bancos

Compatibilidade:

- Retrocompatibilidade preservada: Sim

Impacto:

- Estabilidade no CSV em modo comparativo, integridade de datas locais no fuso horário do Brasil, tratamento robusto de erros no IndexedDB e sanitização de dados dinâmicos em tela

Observações:

- Nenhuma função existente foi removida
- Nenhum ID ou classe Tailwind foi alterado
- Estrutura da Object Store 'lanc' permanece 100% inalterada

---

## Versão 1.2.0

Data: 12/09/2026

### Fase 2 — Robustez do IndexedDB, PWA Real e Fim da Dependência Externa

Alterações:

- Robustez do IndexedDB: Rejeição explícita e tratamento de `onerror`/`onblocked`/`onabort` em `openDB()` e `listarRegistros()`, eliminando supressão silenciosa de erros de disco/quota
- Try/Catch interno em `carregar()`: Tratamento de exceção dentro do próprio corpo da função envolvendo `listarRegistros()`, exibindo alerta amigável ao usuário (`mostrarAlertaCustomizado`) e prevenindo quebras em chamadas não-aguardadas (unawaited)
- Gerenciamento Seguro de Conexões: Implementada função auxiliar `obterRegistrosBanco(bancoId)` com garantia de fechamento de conexões temporárias (`try/finally { dbTemp.close(); }`)
- Tratamento defensivo em todas as funções de leitura: `mudarAmbiente()`, `renderGlobal()`, `showResumoProfessional()`, `exportarCSVComparativo()`, `gerarRelatorioImpressao()` e IIFE inicial envolvidas em `try/catch` com alertas visuais
- Ordenação Segura com Fallback: Aplicado `(a.vencimento || '').localeCompare(b.vencimento || '')` em `aplicarFiltros()` e `exportarCSVComparativo()`, prevenindo exceções em dados legados sem vencimento
- PWA Completo: Implementados `manifest.json`, `service-worker.js` (estratégia Network-First para HTML e Stale-While-Revalidate para assets locais), ícones PNG 192x192 e 512x512, e botão de instalação `#btnInstalarPwa`
- Fim da Dependência Externa: Tailwind CSS incorporado localmente em `tailwind.js`, eliminando requisições à CDN externa e viabilizando operação 100% offline
- Compatibilidade Desktop/Tauri: Registro condicional e defensivo do Service Worker ignorando webviews desktop (`window.__TAURI__`), garantindo que WebView2 do Tauri e PWA coexistam perfeitamente sem conflitos de cache ou de protocolo

Compatibilidade:

- Retrocompatibilidade preservada: Sim

Impacto:

- Operação 100% autônoma offline (sem requisições externas CDN), robustez e alertas visuais transparentes para o usuário em falhas de banco de dados, conformidade PWA para instalação no Android e compatibilidade total com Tauri Desktop

Observações:

- Nenhuma função existente foi removida
- Nenhum ID ou classe CSS existente foi removido
- Estrutura da Object Store 'lanc' permanece 100% inalterada

---

## Versão 1.3.0

Data: 12/09/2026

### Fase 3 — UUID, Backup Geral Unificado e Importação Inteligente

Alterações:

- Identificadores Universais (UUID): Novos lançamentos recebem UUID v4 via `crypto.randomUUID()` com fallback, eliminando conflitos de ID entre dispositivos diferentes (desktop/celular). Registros antigos com IDs numéricos permanecem 100% funcionais
- Backup Geral Unificado: Função `exportarBackupGeral()` substitui `exportarBackup()`, exportando todos os bancos/abas em um único arquivo JSON com metadados (versão, tipo, data). Botão disponível inclusive no modo comparativo
- Importação Inteligente com Modal de Escolha: Ao importar, o usuário escolhe entre "Mesclar / Acrescentar" (mantém dados existentes e adiciona novos) ou "Substituir Tudo" (comportamento destrutivo anterior). Modal visual com opções claras
- Mesclagem Multi-Banco: Importação com mesclagem funciona tanto para backups gerais (multi-banco) quanto para backups individuais antigos (array simples). Cria bancos automaticamente se não existirem no destino
- Detecção Inteligente de Duplicatas: Para registros com UUID, comparação direta por ID. Para registros legados (ID numérico), comparação por combinação de `descricao + valor + vencimento + parcela`. Registros duplicados são ignorados; contas marcadas como "Pago" no backup atualizam o status no destino
- Função `gerarUUID()` e `exibirIdAbreviado()` para geração e exibição condensada de identificadores
- Função `gerarChaveDuplicata()` para detecção de registros equivalentes em importações legadas
- `grupoId` de parcelamentos agora usa UUID em vez de `Date.now()`
- Compatibilidade total com `onclick` de ações (editar, pagar, excluir, duplicar) usando IDs string (UUID) e numéricos
- Coluna ID na tabela exibe UUID abreviado (8 chars) com tooltip completo

Compatibilidade:

- Retrocompatibilidade preservada: Sim
- Backups antigos (formato array individual) continuam sendo reconhecidos e importáveis
- Registros existentes com IDs numéricos permanecem intactos

Impacto:

- Permite uso simultâneo em Desktop e Celular com mesclagem segura de dados ao final do período, operação unificada de backup/restauração em um único arquivo, e eliminação de conflitos de identificadores entre dispositivos

Observações:

- Nenhuma função existente foi removida (apenas substituída por versão aprimorada)
- Nenhum ID ou classe CSS existente foi removido
- Estrutura da Object Store 'lanc' permanece 100% inalterada (keyPath: 'id', autoIncrement: true)

---

## Como registrar novas alterações

Sempre adicionar uma nova entrada seguindo este modelo:

### Versão X.Y.Z

Data: DD/MM/AAAA

Alterações:

- descrição da alteração 1
- descrição da alteração 2
- descrição da alteração 3

Compatibilidade:

- Retrocompatibilidade preservada: Sim/Não

Impacto:

- descrição do impacto

Observações:

- informações adicionais
