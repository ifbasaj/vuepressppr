(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{391:function(e,o,a){"use strict";a.r(o);var s=a(29),i=Object(s.a)({},(function(){var e=this,o=e.$createElement,a=e._self._c||o;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("ol",[a("li",[e._v("OCP — Open-Closed Principle:")]),e._v(" "),a("li",[e._v("LSP— Liskov Substitution Principle:\nPrincípio da substituição de Liskov — Uma classe derivada deve ser substituível por sua classe base.\nO princípio da substituição de Liskov foi introduzido por Barbara Liskov em sua conferência “Data abstraction” em 1987. A definição formal de Liskov diz que:\nSe para cada objeto o1 do tipo S há um objeto o2 do tipo T de forma que, para todos os programas P definidos em termos de T, o comportamento de P é inalterado quando o1 é substituído por o2 então S é um subtipo de T\nUm exemplo mais simples e de fácil compreensão dessa definição. Seria:\nse S é um subtipo de T, então os objetos do tipo T, em um programa, podem ser substituídos pelos objetos de tipo S sem que seja necessário alterar as propriedades deste programa. — Wikipedia.\nPara facilitar o entendimento, veja esse princípio na prática neste simples exemplo:")])]),e._v(" "),a("p",[e._v("Estamos passando como parâmetro tanto a classe pai como a classe derivada e o código continua funcionando da forma esperada.\nExemplos de violação do LSP:\nSobrescrever/implementar um método que não faz nada;\nLançar uma exceção inesperada;\nRetornar valores de tipos diferentes da classe base;")]),e._v(" "),a("p",[e._v("Para não violar o Liskov Substitution Principle, além de estruturar muito bem as suas abstrações, em alguns casos, você precisara usar a injeção de dependência e também usar outros princípios do SOLID, como por exemplo, o Open-Closed Principle e o Interface Segregation Principle — será abordado no próximo tópico.\nSeguir o LSP nos permite usar o polimorfismo com mais confiança. Podemos chamar nossas classes derivadas referindo-se à sua classe base sem preocupações com resultados inesperados.\n4. ISP — Interface Segregation Principle:\nPrincípio da Segregação da Interface — Uma classe não deve ser forçada a implementar interfaces e métodos que não irão utilizar.\nEsse princípio basicamente diz que é melhor criar interfaces mais específicas ao invés de termos uma única interface genérica.\nVamos ver o ISP na prática através de códigos:\nEm um cenário fictício para criação de um game de animais, teremos algumas aves que serão tratadas como personagens dentro do jogo. Sendo assim, criaremos uma interface Aves para abstrair o comportamento desses animais, depois faremos que nossas classes implementem essa interface, veja:")]),e._v(" "),a("p",[e._v("Percebam que ao criar a interface Aves, atribuímos comportamentos genéricos e isso acabou forçando a classe Pinguim a implementar o método setAltitude()do qual ela não deveria ter, pois pinguins não voam! Dessa forma, estamos violando o Interface Segregation Principle — E o LSP também!\nPara resolver esse problema, devemos criar interfaces mais específicas, veja:")]),e._v(" "),a("p",[e._v("No exemplo acima, retiramos o método setAltitude() da interface Aves e adicionamos em uma interface derivada AvesQueVoam. Isso nos permitiu isolar os comportamentos das aves de maneira correta dentro do jogo, respeitando o princípio da segregação das interfaces.\nPoderíamos melhorar ainda mais esse exemplo, criando uma interface Renderizavel pra abstrair esse comportamento, mas o foco aqui é explicar o conceito e não desenvolver o game, então vamos para o próximo princípio.\n5. DIP — Dependency Inversion Principle:\nPrincípio da Inversão de Dependência — Dependa de abstrações e não de implementações.\nDe acordo com Uncle Bob, esse princípio pode ser definido da seguinte forma:")]),e._v(" "),a("ol",[a("li",[e._v("Módulos de alto nível não devem depender de módulos de baixo nível. Ambos devem depender da abstração.")]),e._v(" "),a("li",[e._v("Abstrações não devem depender de detalhes. Detalhes devem depender de abstrações.\nNo contexto da programação orientada a objetos, é comum que as pessoas confundam a Inversão de Dependência com a Injeção de Dependência, porém são coisas distintas, mas que relacionam entre si com um proposito em comum, deixar o código desacoplado.\nImportante: Inversão de Dependência não é igual a Injeção de Dependência, fique ciente disso! A Inversão de Dependência é um princípio (Conceito) e a Injeção de Dependência é um padrão de projeto (Design Pattern).\nVamos entender tudo isso na prática através de exemplos:")])]),e._v(" "),a("p",[e._v("Para recuperar a senha, a classe PasswordReminder, precisa conectar na base de dados, por tanto, ela cria um instancia da classe MySQLConnection em seu método construtor para realizar as respectivas operações.\nNesse pequeno trecho de código temos um alto nível de acoplamento, isso acontece porque a classe PasswordReminder tem a responsabilidade de criar uma instância da classe MySQLConnection! Se quiséssemos reaproveitar essa classe em outro sistema, teriamos obrigatoriamente de levar a classe MySQLConnection junto, portanto, temos um forte acoplamento aqui.\nPara resolver esse problema de acoplamento, podemos refatorar nosso código da seguinte forma. Veja:")]),e._v(" "),a("p",[e._v("Com o código refatorado, a criação do objeto MySQLConnection deixa de ser uma responsabilidade da classe PasswordReminder, a classe de conexão com o banco de dados virou uma dependência que deve ser injetada via método construtor. Olha o que apareceu para nós: Injeção de Dependência!\nApesar de termos usado a injeção de dependência para melhorar o nível de acoplamento do nosso código, ele ainda viola o princípio da inversão de dependência! — lembre-se, um não é igual ao outro.\nAlém de violar o DIP, se você prestar atenção na forma que o exemplo foi codificado irá perceber que ele também viola o Open-Closed Principle. Por exemplo, se precisarmos alterar o banco de dados de MySQL para Oracle teríamos que editar a classe PasswordReminder.\nPor que nosso exemplo refatorado viola o Dependency Inversion Principle?\nPorque estamos dependendo de uma implementação e não de uma abstração, simples assim.\nDe acordo com a definição do DIP, um módulo de alto nível não deve depender de módulos de baixo nível, ambos devem depender da abstração. Então, a primeira coisa que precisamos fazer é identificar no nosso código qual é o módulo de alto nível e qual é o módulo de baixo nível. Módulo de alto nível é um módulo que depende de outros módulos.\nNo nosso exemplo ,PasswordReminder depende da classe MySQLConnection. Sendo assim, PasswordReminder é o módulo de alto nível e MySQLConnection é o módulo de baixo nível. Mas, MySQLConnection é uma implementação e não uma abstração!\nComo refatoramos nosso exemplo para utilizar o DIP?\nSe tratando de POO, você já ouviu aquela frase:\n“Programe para uma interface e não para uma implementação.”\nPois bem, é exatamente o que iremos fazer, criar uma interface!\ninterface DBConnectionInterface\n{\npublic function connect();\n}\nAgora, vamos refatorar nosso exemplo fazendo que nossos módulos de alto e baixo nível dependam da abstração proposta pela interface que acabamos de criar. Veja:")]),e._v(" "),a("p",[e._v("Perfeito! Agora a classe PasswordReminder não tem a mínima ideia de qual banco de dados a aplicação irá utilizar. Dessa forma, não estamos mais violando o DIP, ambas as classes estão desacopladas e dependendo de uma abstração. Além disso, estamos favorecendo a reusabilidade do código e como “bônus” também estamos respeitando o SRP e o OCP.\nConclusão\nA sistemática dos princípios SOLID tornam o software mais robusto, escalável e flexível, deixando-o tolerante a mudanças, facilitando a implementação de novos requisitos para a evolução e manutenção do sistema.\nLevando em consideração algumas experiências vividas ao longo da minha história no mundo da tecnologia, acredito que os princípios SOLID, juntamente com algumas técnicas e boas praticas de Clean Code, são fatores essenciais que todos os desenvolvedores deveriam aplicar em seus códigos.\nPode ser um pouco assustador no início usar todos esses princípios — nem sempre conseguiremos aplicar todos em nosso projeto — mas com a prática e constância, aos poucos vamos adquirindo a experiência necessária para escrever códigos cada vez mais maduros, os princípios SOLID servem como guias pra isso.\nObrigado por ler! Se você gostou do artigo, dê um clap 👏.\nReferências:\nhttp://butunclebob.com/ArticleS.UncleBob.PrinciplesOfOod\nhttps://en.wikipedia.org/wiki/SOLID\nhttps://laracasts.com/series/solid-principles-in-php\nhttps://www.tomdalling.com/blog/software-design/solid-class-design-the-liskov-substitution-principle")]),e._v(" "),a("h1",{attrs:{id:"solid-🚧"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#solid-🚧"}},[e._v("#")]),e._v(" SOLID 🚧")]),e._v(" "),a("p",[e._v("SOLID são cinco princípios da programação orientada a objetos que facilitam no desenvolvimento de softwares, tornando-os fáceis de manter e estender. Esses princípios podem ser aplicados a qualquer linguagem de POO.")]),e._v(" "),a("p",[e._v("Princípios SOLID")]),e._v(" "),a("ul",[a("li",[e._v("S - Sigle Responsability Principle")]),e._v(" "),a("li",[e._v("O - Open Close Principle")]),e._v(" "),a("li",[e._v("L - Liskov substitution Principle")]),e._v(" "),a("li",[e._v("I - Interface segregation principle")]),e._v(" "),a("li",[e._v("D – Dependency inversion principle")])]),e._v(" "),a("h2",{attrs:{id:"srp-single-reponsibility-principle-principio-da-responsabilidade-unica"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#srp-single-reponsibility-principle-principio-da-responsabilidade-unica"}},[e._v("#")]),e._v(" SRP – Single reponsibility principle – Princípio da Responsabilidade Única;")]),e._v(" "),a("h2",{attrs:{id:"ocp-open-closed-principle-principio-do-aberto-e-fechado"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ocp-open-closed-principle-principio-do-aberto-e-fechado"}},[e._v("#")]),e._v(" OCP – Open/closed principle – Princípio do Aberto e Fechado;")]),e._v(" "),a("h2",{attrs:{id:"lsp-liskov-substitution-principle-principio-da-substituicao-de-liskov"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lsp-liskov-substitution-principle-principio-da-substituicao-de-liskov"}},[e._v("#")]),e._v(" LSP – Liskov substitution principle – Princípio da Substituição de Liskov;")]),e._v(" "),a("h2",{attrs:{id:"isp-interface-segregation-principle-principio-da-segregacao-de-interface"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#isp-interface-segregation-principle-principio-da-segregacao-de-interface"}},[e._v("#")]),e._v(" ISP – Interface segregation principle – Princípio da Segregação de Interface;")]),e._v(" "),a("h2",{attrs:{id:"dip-dependency-inversion-principle-principio-da-inversao-de-dependencia"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dip-dependency-inversion-principle-principio-da-inversao-de-dependencia"}},[e._v("#")]),e._v(" DIP – Dependency inversion principle – Princípio da Inversão de Dependência;")]),e._v(" "),a("p",[e._v("Estes princípios, quando bem aplicados, ajudam a eliminar os design-smells do nosso código, permitindo maior facilidade de manutenção e extensão.")]),e._v(" "),a("p",[e._v("https://medium.com/desenvolvendo-com-paixao/o-que-%C3%A9-solid-o-guia-completo-para-voc%C3%AA-entender-os-5-princ%C3%ADpios-da-poo-2b937b3fc530")])])}),[],!1,null,null,null);o.default=i.exports}}]);