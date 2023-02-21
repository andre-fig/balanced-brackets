# Validador de Sequência de Brackets

Esta função em JavaScript recebe como entrada uma string contendo brackets (parênteses, colchetes e chaves) e verifica se a ordem dos brackets é válida, seguindo as seguintes regras:

- A sequência de brackets não pode conter brackets sem correspondência (sem par);
- Os brackets dentro de um par devem formar também um par.

A função utiliza um objeto que associa cada bracket que fecha a sua respectiva abertura, e percorre a string de entrada, empilhando cada abertura encontrada e desempilhando a abertura correspondente quando encontra o bracket de fechamento correspondente. Se o bracket de fechamento encontrado não corresponder ao último bracket aberto, a sequência é considerada inválida. Ao final do processo, a função verifica se a pilha está vazia, o que significa que todas as aberturas foram fechadas corretamente.

Exemplos de uso:

```
console.log(bracketsAreBalanced("(){}[]")); // true
```

```
console.log(bracketsAreBalanced("[{()}](){}")); // true
```

```
console.log(bracketsAreBalanced("[]{()")); // false
```

```
console.log(bracketsAreBalanced("[{)]")); // false
```
