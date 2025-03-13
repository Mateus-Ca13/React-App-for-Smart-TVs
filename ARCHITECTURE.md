# 📁 Estrutura de Pastas 

- `public` → Arquivos servidos diretamente ao HTML (imagens estáticas, favicon, etc.).
- `assets` → Arquivos estáticos, imagens e ícones usados em componentes (podem ser separados em subpastas).
- `components` → Componentes React.
- `contexts` → Contextos globais da aplicação.
- `features` → Funcionalidades do sistema. Subdivida entre escopos/interfaces.
- `hooks` → Hooks personalizados utilizados pela aplicação.
- `keyPressHandlers` → Funções reativas ao controle de navegação das interfaces  da aplicação.
- `pages` → Interfaces da aplicação.
- `layouts` → Componentes wrappers e de layout para a aplicação.
- `utils` → Funções utilitárias/reutilizáveis da aplicação.
- `api` → funções responsáveis pelas requisições HTTP.
- `api/core` → Função central para requisições + informações necessárias para requisições.
- `services` → Funções complementares que tratam os dados das funções da pasta api. Essas serão chamadas pelas interfaces.

# 🎛️  Fluxo de processos da aplicação

## 1. Interfaces (pages)

- Cada interface da aplicação possui seu próprio escopo de navegação. Na criação de uma interface chamamos o hook useNavigationHandler, passando a função de controle de navegação respectiva à interface como parametro do hook. Ex:

`useNavigationHandler(HomePageHandler)`

## 2. Hooks

- O hook useNavigationHandler é acionado na criação de uma interface e persiste até o final do ciclo de vida do componente. Em sua chamada, criamos um eventListener que aciona uma função de controle de navegação, que é definida pela função passada nos parâmetros do hook.

## 3. KeyPressHandlers

- Essas funções, que são passadas como parâmetro pro hook useNavigationHandler, recebem padronizadamente 4 parâmetros:

→ key (nome da tecla selecionada).
→ focusedElement (elemento selecionado no momento).
→ setFocusedElement (para definir o selectable que irá ser selecionado).
→ selectablesList (lista de selecionáveis disponíveis na interface ativa).

## 4. Componentes <Selectable/>

- Ao criar uma interface, definimos elementos do HTML que poderão ser acessados pelas KeyPressHandlers com o uso do componente <Selectable>.
Ele deve possuir as seguintes props:
→ id: string para identificação futura.
→ children: conteúdo que será selecionável.
→ initial (opcional): define que ele será selecionado como padrão dentro da interface atual.
Ex:

`<Selectable initial id={"reset_button"}><button></button></Selectable>`

- Ao invocarmos esse componente, ele é passado para o método global "configureAsSelectable" como um objeto com estrutura { id: id, ref: elementoHTML }.
Dessa forma, ele automaticamente será adicionado ao selectablesList no contexto global.

## 5. Contextos globais

- A aplicação conta com um contexto global navigationContext, possui os seguintes estados e métodos

→ `[focusedElement, setFocusedElement]` - Elemento Selectable que está em foco.
→ `[selectablesList, setSelectablesList]` - Hashmap de elementos Selectable disponíveis. 
→ `[keyHandler, setKeyHandler]` - Função que fará a lógica de seleção dos botões dentro de uma interface
→ `configureAsSelectable(ref)` - Através do componente <Selectable/>, recebe um objeto de estrutura { id: id, ref: elementoHTML } e adiciona ao state selectablesList.
→ `setInitialFocus(ref)` - Define um elemento como focado ao renderizar uma nova interface
→ `resetNavigationState()` - reseta as informações de focusedElement e selectablesList.

- O resetNavigationState() do navigationContext reseta a selectableList e o focusedElement dentro do <NavigationControllerWrapper/>

## 6. Fluxo e tratamento de requisições pela aplicação

- A chamada de requisições na aplicação parte da pasta /api, que contém diversas funções de requisição HTTP simples.
- Na subpasta api/core, temos a função mestra responsável por estruturar a requisição de acordo com as informações passadas. Junto a ela, permanece o arquivo de informações globais da sessão (caracteristicas do dispositivo, token da sessão e id de dispositivo).
- Na pasta /services, são chamadas as funções de requisição da pasta /api e os dados são tratados conforme necessário.
- Durante o uso da interface, serão chamadas as funções /services para coletar os dados necessários para a renderização.
