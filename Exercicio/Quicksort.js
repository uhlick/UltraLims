//COMECEI CRIANDO UMA FUNCAO QUICKSORT//
function quicksort(array) {
    if (array.length <= 0) return []; //SE TIVER TAMANHO VAZIO, RETORNA ARRAY VAZIO//
    if (array.length <= 1) return array; //SE SO TEM TAMANHO 1 OU 1 ELEMENTO, RETORNA 1 ARRAY//
  
    const pivot = array[0] // O PIVOT EH O PRIMEIRO ELEMENTO DO ARRAY, O ARRAY NAO EH VAZIO E NAO TEM 1//


    //COM FILTER FILTREI UMA FUNCAO PRA SELECIONAR OS ELEMENTOS QUE FOREM MENOR, IGUAL OU MAIOR A ARRAY//
    const menores = array.filter( n => n < pivot) //TEMOS QUE SELECIONAR TODOS OS ELEMENTOS QUE FOREM MENORES DO Q O PIVOT//
    const iguais = array.filter( n => n === pivot) //IGUAIS AO PIVOT//
    const maiores = array.filter( n => n > pivot) //MAIORES QUE O PIVOT//

  
    return quicksort(menores).concat(iguais).concat(quicksort(maiores));
    //AQUI RETORNAMOS A FORMULA DO QUICKSORT, QUE SERIA//
    //TODOS OS ELEMENTOS MENORES DO QUE O PIVOT ORDENADOS//
    //CONCATENADOS COM TODOS OS ELEMENTOS QUE SAO IGUAIS AO PIVOT //
    //CONCATENADO COM TODOS OS ELEMENTOS MAIORES DO QUE O PIVOT//
  }
  
  console.log(quicksort([9, 2, 5, 10, 235, 5742, 12, 67, 52]))
  // FUNCAO PARA CHAMAR OS ALGORITMOS QUE GOSTARIAMOS DE ORDENAR//