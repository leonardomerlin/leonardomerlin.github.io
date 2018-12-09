<!-- 
Título: Dominando o Chrome DevTools

Descrição:
Conhecer e dominar as ferramentas disponíveis no seu navegador é essencial para uma boa produtividade frontend (além de facilitar o debugging). Encontrar exatamente o que está causando problema na sua aplicação, mesmo em produção, não precisa ser uma tarefa difícil.

Essa talk é pra você que quer detectar Memory Leak antes dos seus usuários e pra quem quer finalmente entender os Flame Charts ou perder o medo deles.

O Ministério dos Frontenders Adverte: você pode querer largar o seu editor/IDE - just kidding

X-X

O que eu quero que meu público aprenda?
- detecar memory leak... e resolver!
- fazer LocalOverrides
- prestar atenção na cobertura: o que seu site realmente está usando?
- se necessário, workspace
- testar mobile
- ferramentas disponíveis no seu browser (sem extensões)
- O que vamos ver e não vamos
- Recap? Dúvidas


Ideias:
# Básico (até 5min) - mostrar um botão
- chrome version
- $0 - acessa o elemento selecionado
- copy(...)
- force state: hover/focus, active
- acessibilidade
- ev on element, event listener frameworks
- color picker + RGB/HEX + color palete + color a11y
- box model: margin, border, padding
- scroll to view
- media query, 
- (tabs "escondidas") coverage

Snippets
- loadJquery
- loadLodash
- loadMoment
- debugUtils
- counters: assets, icons, etc.
- sniffer: detect libs
- heuristic: problemas comuns (a11y) lang="en", <i class="fa fa-user"></i> (sem aria-hidden)
- 
- https://glebbahmutov.com/blog/performance-profiling-using-devtools-code-snippets/
- https://glebbahmutov.com/blog/improving-angular-web-app-performance-example/
- 
- Persistent Snippet Hack
    - DevTools in DevTools
    - InspectorFrontendHost.getPreferences(_ => console.log(JSON.parse(_.scriptSnippets)))
    - InspectorFrontendHost.setPreference("scriptSnippets", JSON.stringify(yourSnippets))




Não vai dar tempo:
- Network?
- Layers


# Outros
- workspaces
- local overrides

# Memory Leak

# FlameChart

X-X

CTA - Me chama ;-)

-->

# Título

conteúdo

![](../images/i-have-no-idea.gif)


---

## titulo 2

conteúdo

--

### Título 3

conteúdo

---

# CASE: Migração da v5 para v6

<!-- vúlnerável:
    - "No FF não trava e no Chrome consome toda a RAM e trava"
    - desconfie!
    - Pedi para o usuário gravar um profile... e? ele não sabia oq era"
    - conectei na máquina dele, gerei e me enviei por email...
    - analisei e foi o meu primeiro loop com um try catch abafado.
    - algo do tipo:
    ```js
    // exemplo conceitual
    async function tentaBaixarOsDados() {
        try {
            return await fetch('api/dado.xml')
        } catch() {}
    }

    { // main()
        let dados = null;
        while(!dados) {
            dados = await tentaBaixarOsDados()
        }
    }
    ```
-->


---

# CASE: Ganhando dinheiro?


---

# REACAP

<!-- O que vimos? Alguma dúvida? -->

---

#### Próximo passo?

Isso foi só o começo...

Quer ver mais?
Me chama no LinkedIn / Twitter: Leonardo Merlin

Obrigado.
