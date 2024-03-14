let categoria
let produto
let congelados = []
let doces = []
let frutas = []
let laticinios = []
let itemParaRemover
let elementosSeparadosPorVirgula

console.log("1 - Adicionar uma comida na lista de compras")
console.log("2 - Remover algum item da lista")
console.log("3 - Encerrar lista")
let item = parseInt(prompt("Digite a opção desejada: "))

while(true)
{
    //Caso o usuário digitar um dado inválido cairá nessa condição que informara o erro e pedirá o dado novamente
    if(item != 1 && item != 2 && item != 3)
    {
        console.log("Opção desejada inválida.")
        console.log("1 - Adicionar uma comida na lista de compras")
        console.log("2 - Remover algum item da lista")
        console.log("3 - Encerrar lista")
        item = parseInt(prompt("Digite a opção desejada: "))
    }
    else
    {
        //Se usuário não quiser digitar mais item sai do loop
        if(item == 3)
        {
            break
        }
        else if(item == 1)
        {
            console.log("Segue a lista de cateogria disponíveis: ")
            console.log("1 - Congelados")
            console.log("2 - Doces")
            console.log("3 - Frutas")
            console.log("4 - Laticínios")
            categoria = prompt("Qual a categoria desse produto? ")
            
            //caso o usuário digitar uma opção inválida esse while irá tratar o caso. Pedindo nova opção
            while(categoria != 1 && categoria != 2 && categoria != 3 && categoria != 4)
            {
                console.log("Você digitou uma opção inválida.")
                console.log("Segue a lista de cateogria disponíveis: ")
                console.log("1 - Congelados")
                console.log("2 - Doces")
                console.log("3 - Frutas")
                console.log("4 - Laticínios")
                categoria = prompt("Qual a categoria desse produto? ")
            }
            
            if(categoria == 1)
            {
                produto = prompt("Qual produto você deseja adicionar na lista? ")
                congelados.push(produto)
            }
            else if(categoria == 2)
            {
                produto = prompt("Qual produto você deseja adicionar na lista? ")
                doces.push(produto)
            }
            else if(categoria == 3)
            {
                produto = prompt("Qual produto você deseja adicionar na lista? ")
                frutas.push(produto)
            }
            else if(categoria == 4)
            {
                produto = prompt("Qual produto você deseja adicionar na lista? ")
                laticinios.push(produto)
            }
            
        }
        else
        {
            if(congelados.length === 0 && doces.length === 0 && frutas.length === 0 && laticinios.length === 0)
            {
                console.log("A lista está fazia.")
            }
            else
            {
                itemParaRemover = prompt("Digite o item que deseja remover: ");
                removerItemEspecifico(itemParaRemover);
            }
        }
        
        console.log("1 - Adicionar uma comida na lista de compras")
        console.log("2 - Remover algum item da lista")
        console.log("3 - Encerrar lista")
        item = parseInt(prompt("Digite a opção desejada: "))
    }
}

//Aqui iremos tratar e imprimir a lista de compras. Neste caso (if) ele verifica se a listas estão fazias. Se estiverem quer dizer que não tem nenhum produto na lista e o sistema informará ao usuário
if(congelados.length === 0 && doces.length === 0 && frutas.length === 0 && laticinios.length === 0)
{
    console.log("Você não quis adicionar nenhum produto na lista. Portanto a lista está fazia.")
}
else
{
    //Aqui imprimi a lista de compras separadas por categoria
    console.log("\nLista de compras: ")
    elementosSeparadosPorVirgula = congelados.join(', ')
    console.log(`Congelados: ${elementosSeparadosPorVirgula}`)
    elementosSeparadosPorVirgula = doces.join(' ,')
    console.log(`Doces: ${elementosSeparadosPorVirgula}`)
    elementosSeparadosPorVirgula = frutas.join(', ')
    console.log(`Frutas: ${elementosSeparadosPorVirgula}`)
    elementosSeparadosPorVirgula = laticinios.join(', ')
    console.log(`laticínios: ${elementosSeparadosPorVirgula}`)
}

// Função para remover um item específico com confirmação
function removerItemEspecifico(itemParaRemover) {
    // Listas disponíveis
    let listas = [congelados, doces, frutas, laticinios];

    // Percorrer todas as listas
    for (let i = 0; i < listas.length; i++)
    {
        let listaAtual = listas[i];
        let indiceDoItem = listaAtual.indexOf(itemParaRemover);

        // Se o item estiver na lista, remova-o
        if (indiceDoItem !== -1)
        {
            // Remover o item do array
            listaAtual.splice(indiceDoItem, 1);

            // Exibir a confirmação de remoção
            console.log("'" + itemParaRemover + "' removido com sucesso da Lista " + (i + 1) + ".");

            // Encerrar o loop, pois o item foi encontrado e removido
            return;
        }
    }

    // Se o item não foi encontrado em nenhuma lista
    console.log("'" + itemParaRemover + "' não encontrado em nenhuma lista.");
}

