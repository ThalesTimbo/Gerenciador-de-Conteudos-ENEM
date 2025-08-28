# 📘 Quiz de Estudos — Diagnóstico ENEM

**Autor:** Thales (ThalesTimbo)  
**Contato:** [GitHub: ThalesTimbo](https://github.com/ThalesTimbo) · [Instagram: @thales_timbo](https://www.instagram.com/thales_timbo/)  
🌐 [Teste online (deploy)](https://thalestimbo.github.io/Gerenciador-de-Conteudos-ENEM/)


Um simulador **local & offline** com 40 questões inspiradas no estilo ENEM. Roda direto no navegador, salva tuas respostas no LocalStorage, gera um relatório por área e por habilidade, e exporta tudo em `.json` para tu guardar ou analisar depois.

---

# 🔥 Destaques
- 40 questões autorais cobrindo: **Linguagens**, **Matemática**, **Humanas** e **Natureza**.  
- Relatório com:
  - Desempenho por **área** (Linguagens, Matemática, Humanas, Natureza).
  - Top **habilidades/franquezas** (ex.: interpretação, porcentagem, ecologia).
  - **Plano de ação** de 2 semanas com metas e sugestões.
- Salva automaticamente no navegador (LocalStorage).
- Exporta diagnóstico em `.json`.
- Funciona 100% offline — sem servidor.

---

# ▶️ Como usar (rápido)
1. Abre o arquivo `Quiz de Estudos.html` no teu navegador (duplo clique ou arrasta pro browser).  
   *Se preferir servir localmente:* `python -m http.server 8000` e acessa `http://localhost:8000/Quiz%20de%20Estudos.html`.
2. Responde as questões no teu ritmo. Sem tempo limite.
3. Quando quiser, clica **Finalizar e Ver Diagnóstico**.
4. Para salvar/compartilhar: clique em **Exportar resultados (.json)**.
5. Para recomeçar: **Reiniciar** → confirma e apaga LocalStorage.

---

# 🧭 Estrutura do projeto (arquivo principal)
- `Quiz de Estudos.html` — HTML + CSS + JS (tudo embarcado).
  - Array `questions` → onde estão todas as questões.
  - `skillLabels` → mapeamento tag → nome legível da habilidade.
  - `suggestions` → dicas de estudo para cada habilidade.
  - Constante `KEY = 'enem_diag_respostas_v1'` → chave usada no LocalStorage.
  - Funções: render, salvar, exportar, diagnosticar, reset.

---

# ✍️ Como editar / adicionar questões
No `Quiz de Estudos.html`, localiza a constante `questions` (array de objetos). Cada item tem esta estrutura:

```js
{
  id: 1,
  area: "Linguagens",
  tag: "interpretacao",
  enunciado: "Texto da questão...",
  alternativas: ["A alternativa A", "B ...", "C ...", "D ..."],
  correta: 1 // índice (0..3)
}

