import timeit
import matplotlib.pyplot as plt

# Importando funções para gerar listas e classes de algoritmos de ordenação, use isso somente em teste local, na qual cada algoritimo de ordenação tem um arquivo separado
# from generate_list import generate_list

# from bubble_sort_class import BubbleSort
# from insertion_sort_class import InsertionSort
# from selection_sort_class import SelectionSort
# from counting_sort_class import CountingSort
# from radix_sort_class import RadixSort
# from shell_sort_class import ShellSort
# from heap_sort_class import HeapSort
# from merge_sort_class import MergeSort
# from bucket_sort_class import BucketSort
# from quick_sort_class import QuickSort

# Definindo os tamanhos das listas que serão testadas
# list_sizes = [1000, 3000, 6000, 9000, 12000, 15000, 18000, 21000, 24000]
list_sizes = [1000, 3000, 6000]

# Instanciando cada classe de algoritmos de ordenação
bubble_sort = BubbleSort()
insertion_sort = InsertionSort()
selection_sort = SelectionSort()
counting_sort = CountingSort()
radix_sort = RadixSort()
shell_sort = ShellSort()
heap_sort = HeapSort()
merge_sort = MergeSort()
bucket_sort = BucketSort()
quick_sort = QuickSort()

# Listas para armazenar os tempos de execução de cada algoritmo
bubble_sort_times = []
insertion_sort_times = []
selection_sort_times = []
counting_sort_times = []
radix_sort_times = []
shell_sort_times = []
heap_sort_times = []
merge_sort_times = []
bucket_sort_times = []
quick_sort_times = []



# Loop para testar cada tamanho de lista
for size in list_sizes:
  # Gerando a lista de tamanho 'size'
  generated_list = generate_list(size)

  # Copiando a lista gerada
  list_test_bubble = generated_list.copy()
  list_test_insertion = generated_list.copy()
  list_test_selection = generated_list.copy()
  list_test_couting = generated_list.copy()
  list_test_radix = generated_list.copy()
  list_test_shell = generated_list.copy()
  list_test_heap = generated_list.copy()
  list_test_merge = generated_list.copy()
  list_test_bucket = generated_list.copy()
  list_test_quick = generated_list.copy()

  # Medindo o tempo de execução do Bubble Sort
  bubble_sort_times.append(timeit.timeit('bubble_sort.execute({})'.format(list_test_bubble), setup='from __main__ import bubble_sort', number=1))
  print(f'Bubble Sort: Lista de tamanho {size} ordenada')


  # Medindo o tempo de execução do Insertion Sort
  insertion_sort_times.append(timeit.timeit('insertion_sort.execute({})'.format(list_test_insertion), setup='from __main__ import insertion_sort', number=1))
  print(f'Insertion Sort: Lista de tamanho {size} ordenada')


  # Medindo o tempo de execução do Selection Sort
  selection_sort_times.append(timeit.timeit('selection_sort.execute({})'.format(list_test_selection), setup='from __main__ import selection_sort', number=1))
  print(f'Selection Sort: Lista de tamanho {size} ordenada')


  # Medindo o tempo de execução do Counting Sort
  counting_sort_times.append(timeit.timeit('counting_sort.execute({})'.format(list_test_couting), setup='from __main__ import counting_sort', number=1))
  print(f'Counting Sort: Lista de tamanho {size} ordenada')


  # Medindo o tempo de execução do Radix Sort
  radix_sort_times.append(timeit.timeit('radix_sort.execute({})'.format(list_test_radix), setup='from __main__ import radix_sort', number=1))
  print(f'Radix Sort: Lista de tamanho {size} ordenada')


  # Medindo o tempo de execução do Shell Sort
  shell_sort_times.append(timeit.timeit('shell_sort.execute({})'.format(list_test_shell), setup='from __main__ import shell_sort', number=1))
  print(f'Shell Sort: Lista de tamanho {size} ordenada')


  # Medindo o tempo de execução do Heap Sort
  heap_sort_times.append(timeit.timeit('heap_sort.execute({})'.format(list_test_heap), setup='from __main__ import heap_sort', number=1))
  print(f'Heap Sort: Lista de tamanho {size} ordenada')


  # Medindo o tempo de execução do Merge Sort
  merge_sort_times.append(timeit.timeit('merge_sort.execute({},{},{})'.format(list_test_merge, 0, len(list_test_merge) -1), setup='from __main__ import merge_sort', number=1))
  print(f'Merge Sort: Lista de tamanho {size} ordenada ')


  # Medindo o tempo de execução do Bucket Sort
  bucket_sort_times.append(timeit.timeit('bucket_sort.execute({})'.format(list_test_bucket), setup='from __main__ import bucket_sort', number=1))
  print(f'Bucket Sort: Lista de tamanho {size} ordenada')


  # Medindo o tempo de execução do Quick Sort
  quick_sort_times.append(timeit.timeit('quick_sort.execute({},{},{})'.format(list_test_quick, 0, len(list_test_quick)-1), setup='from __main__ import quick_sort', number=1))
  print(f'Quick Sort: Lista de tamanho {size} ordenada \n')

# Criando o gráfico para exibir os resultados
fig, ax = plt.subplots()

# Plotando os tempos de execução de cada algoritmo
# ax.plot(list_sizes, bubble_sort_times, label='Bubble Sort', color='blue')
# ax.plot(list_sizes, insertion_sort_times, label='Insertion Sort', color='red')
# ax.plot(list_sizes, selection_sort_times, label='Selection Sort', color='green')
# ax.plot(list_sizes, counting_sort_times, label='Counting Sort', color='yellow')
# ax.plot(list_sizes, radix_sort_times, label='Radix Sort', color='purple')
# ax.plot(list_sizes, shell_sort_times, label='Shell Sort', color='orange')
# ax.plot(list_sizes, heap_sort_times, label='Heap Sort', color='brown')
# ax.plot(list_sizes, merge_sort_times, label='Merge Sort', color='pink')
# ax.plot(list_sizes, bucket_sort_times, label='Bucket Sort', color='cyan')
# ax.plot(list_sizes, quick_sort_times, label='Quick Sort', color='violet')


ax.loglog(list_sizes, bubble_sort_times, label='Bubble Sort', color='blue')
ax.loglog(list_sizes, insertion_sort_times, label='Insertion Sort', color='red')
ax.loglog(list_sizes, selection_sort_times, label='Selection Sort', color='green')
ax.loglog(list_sizes, counting_sort_times, label='Counting Sort', color='yellow')
ax.loglog(list_sizes, radix_sort_times, label='Radix Sort', color='purple')
ax.loglog(list_sizes, shell_sort_times, label='Shell Sort', color='orange')
ax.loglog(list_sizes, heap_sort_times, label='Heap Sort', color='brown')
ax.loglog(list_sizes, merge_sort_times, label='Merge Sort', color='pink')
ax.loglog(list_sizes, bucket_sort_times, label='Bucket Sort', color='cyan')
ax.loglog(list_sizes, quick_sort_times, label='Quick Sort', color='violet')

#ax.semilogx(tamanhos, temposBurbbleSort, label="Bubble Sort")
#ax.loglog(tamanhos, temposBurbbleSort, label="Bubble Sort")

# Definindo rótulos dos eixos e título do gráfico
ax.set(xlabel='Tamanho do array', ylabel='Tempo (s)', title='Algoritmos de Ordenação')

ax.legend()
plt.title('Algoritmos de Ordenação')
plt.grid(True)
plt.show()

# Lista de algoritimos

class BubbleSort:
  def __init__(self):
    pass


  def execute(self, random_list: list):
    # Inicializa o índice 'i' para controlar o número de iterações
    i = 0

    # Percorre a lista até o último elemento
    while i < len(random_list):

      # Inicializa o índice 'c' para controlar as comparações de elementos
      c = 0

      # Percorre a lista até o penúltimo elemento
      # Comparando elementos adjacentes
      while c < len(random_list) - 1:

        # Se o elemento atual for maior que o próximo, realiza a troca
        if random_list[c] > random_list[c + 1]:
          # Troca de posição entre os elementos
          temp = random_list[c]
          random_list[c] = random_list[c + 1]
          random_list[c + 1] = temp

        # Avança para a próxima comparação
        c += 1

      # Incrementa o índice 'i' para a próxima iteração do loop externo
      i += 1


class BucketSort:
  def __init__(self):
    pass


  def execute(self, random_list: list):
    # Determina o número de baldes
    num_buckets = len(random_list)
    max_value = max(random_list)
    size = max_value / num_buckets

    # Cria baldes vazios
    buckets = [[] for _ in range(num_buckets)]

    # Distribui os elementos nos baldes
    for num in random_list:
      index = int(num / size)
      if index != num_buckets:
          buckets[index].append(num)
      else:
          buckets[num_buckets - 1].append(num)

    # Ordena os elementos dentro de cada balde
    for bucket in buckets:
      bucket.sort()

    # Junta todos os baldes em uma lista ordenada
    sorted_array = []
    for bucket in buckets:
      sorted_array.extend(bucket)


class CountingSort:
  def __init__(self):
    pass

  def execute(self, random_list: list):
    # Encontra o maior valor na lista (k), que define o intervalo dos valores
    k = max(random_list)

    # Cria a lista B, que será a lista ordenada, com o mesmo tamanho da lista original
    B = [0 for w in range(len(random_list))]

    # Cria a lista C, que armazenará as contagens dos elementos. O tamanho de C é k+1
    C = [0 for w in range(k+1)]

    # Conta quantas vezes cada elemento aparece na lista original
    for j in range(0, len(random_list)):
      C[random_list[j]] = C[random_list[j]] + 1

    # Calcula as posições acumuladas, transformando C em uma lista de posições
    for i in range(1, k+1):
      C[i] += C[i-1]

    # Constrói a lista ordenada colocando cada elemento na posição correta em B
    for j in range(len(random_list)-1, -1, -1):  # Percorre a lista original de trás para frente
      B[C[random_list[j]]-1] = random_list[j]
      C[random_list[j]] = C[random_list[j]] - 1  # Decrementa a contagem em C após usar o elemento

    # Retorna a lista ordenada
    return B


import random

def generate_list(list_size: int):
  random.seed()
  i = 0
  random_list = []
  while i < list_size:
    random_list.append(random.randint(1, list_size))
    i += 1
  return random_list


class HeapSort:
  def __init__(self):
    pass

  #organiza os elemento do heap de maneira que a raiz seja o maior elemento
  def heapify(self,array, parent_node, size):
      #guardando a informacao do node pai
      root = array[parent_node]

      #definindo o indice do node filho
      child_node = 2 * parent_node
      while child_node <= size:
          #verifica qual dos dois filhos é o maior
          if child_node < size and array[child_node] < array[child_node + 1]:
              child_node += 1

          #se a informacao do node pai for maior que a do filho, fecha o while
          if root >= array[child_node]:
              break

          #caso contrario as informacoes são trocadas
          array[parent_node] = array[child_node]
          #definindo o indice do novo node pai
          parent_node = child_node
          #definindo o indice do novo node filho
          child_node = 2 * parent_node
      #por fim o node pai recebe a informacao (atualizada)
      array[parent_node] = root

  def execute(self, random_list: list):
    size = len(random_list)

    #corrigindo os indices
    root_array = [None] + random_list

    #roda o metodo heapify na primeira metade do vetor
    i = int(size / 2)
    while i > 0:
        self.heapify(root_array, i, size)
        i -= 1

    #roda o metodo no vetor inteiro porem decrementando o tamanho total a fim de liberar os ultimos indices
    while size > 1:
        #troca o primeiro elemento com o ultimo
        root_array[1], root_array[size] = root_array[size], root_array[1]
        size -= 1
        self.heapify(root_array, 1, size)

    #remove o primeiro indice
    root_array.pop(0)

    # return root_array



class InsertionSort:
  def __init__(self):
    pass

  def execute(self, random_list: list):
    # Começa a partir do segundo elemento (índice 1), pois o primeiro já é considerado ordenado
    for i in range(1, len(random_list)):
      # Armazena o valor do elemento atual (auxiliar) que será comparado e inserido no lugar correto
      aux = random_list[i]
      # Define o índice do elemento anterior (comparador)
      c = i - 1

      # Move os elementos da lista que são maiores que 'aux' para uma posição à frente
      while c >= 0 and random_list[c] > aux:
        random_list[c + 1] = random_list[c]  # Desloca o elemento para a direita
        c -= 1

      # Insere o elemento auxiliar na posição correta, após mover os elementos maiores
      random_list[c + 1] = aux


class MergeSort:
  def __init__(self):
    pass

  def merge(self, array: list, e: int, q: int, d: int):
    """
    Combina duas metades ordenadas do array.
    e: índice inicial do subarray
    q: índice do meio
    d: índice final do subarray
    """
    # Tamanho do subarray que será combinado
    size = d - e + 1
    temp = [0] * size  # Criação de um array temporário

    # Ponteiros para as duas metades
    p1 = e      # Ponteiro para o início da primeira metade
    p2 = q + 1  # Ponteiro para o início da segunda metade

    # Flags para indicar se chegamos ao fim de alguma metade
    end1 = end2 = False

    # Variável de controle para preencher o array temporário
    i = 0
    while i < size:
        if not end1 and not end2:  # Nenhuma das metades foi completamente processada
            if array[p1] < array[p2]:  # Escolhe o menor elemento entre as duas metades
                temp[i] = array[p1]
                p1 += 1
            else:
                temp[i] = array[p2]
                p2 += 1

            # Verifica se a primeira metade foi completamente processada
            if p1 > q:
                end1 = True
            # Verifica se a segunda metade foi completamente processada
            if p2 > d:
                end2 = True
        else:
            # Se uma das metades acabou, copia o restante da outra metade
            if not end1:
                temp[i] = array[p1]
                p1 += 1
            else:
                temp[i] = array[p2]
                p2 += 1
        i += 1

    # Copia o array temporário de volta para o array original
    for j in range(size):
        array[e + j] = temp[j]


  def execute(self, random_list: list, e: int, d: int):
    """
    Implementação recursiva do Merge Sort.
    random_list: array a ser ordenado
    e: índice inicial do subarray
    d: índice final do subarray
    """

    if e < d:
        # Calcula o ponto médio do array
        q = (e + d) // 2

        # Ordena a primeira metade
        self.execute(random_list, e, q)

        # Ordena a segunda metade
        self.execute(random_list, q + 1, d)

        # Combina as duas metades já ordenadas
        self.merge(random_list, e, q, d)


class QuickSort:
  def __init__(self):
    pass

  def partition(self, array, left, right):
    # Define o pivô como o primeiro elemento do subarray
    pivot = array[left]
    i = left

    # Percorre o subarray da esquerda para a direita
    for j in range(left + 1, right + 1):
      # Se o elemento atual for menor que o pivô, incrementa i e troca os elementos
      if array[j] < pivot:
        i += 1
        array[i], array[j] = array[j], array[i]

    # Coloca o pivô na posição correta
    array[i], array[left] = array[left], array[i]
    return i

  def execute(self, random_list: list, left: int, right: int):
    # left: inicio do subarray
    # right: fim do subarray

    # Verifica se o subarray tem mais de um elemento
    if left < right:
      # Particiona o array e obtém o índice do pivô
      r = self.partition(random_list, left, right)

      # Ordena recursivamente os subarrays à esquerda e à direita do pivô
      self.execute(random_list, left, r - 1)
      self.execute(random_list, r + 1, right)


class RadixSort:
  def __init__(self):
    pass

  def digit(self, value: int, qtde_digits, base: int):
    i = 0
    while( i != qtde_digits ):
      i = i + 1
      value = value/base

    return value % base #retorna um número float arredondado para baixo


  def execute(self, random_list: list):
    num_digitos = len(str(max(abs(x) for x in random_list)))
    tamanho_lista = len(random_list)
    base = 10

    count = [0] * base
    posicao = [0] * base
    aux = [0] * (tamanho_lista+1)

    for w in range(0, num_digitos):
      # Contagem dos dígitos
      for i in range(tamanho_lista):
        d = self.digit(random_list[i], w, base)
        count[d] += 1


      for j in range(1, base):
        posicao[j] = posicao[j-1] + count[j-1]

      # Distribui os elementos de acordo com o dígito atual
      for i in range(0, tamanho_lista):
        d = self.digit(random_list[i], w, base)
        aux[posicao[d]] = random_list[i]
        posicao[d] = posicao[d] + 1

      # Copia os elementos de volta para a lista original
      for i in range(0, tamanho_lista):
        random_list[i] = aux[i]

      return random_list


class SelectionSort:
  def __init__(self):
    pass

  def execute(self, random_list: list):
    # Percorre cada posição da lista
    for i in range(len(random_list)):
      # Define o índice atual como o menor valor inicialmente
      index = i

      # Encontra o menor elemento no subarray à direita de 'i'
      for c in range(i + 1, len(random_list)):
        # Se encontrar um elemento menor, atualiza o índice do menor valor
        if random_list[c] < random_list[index]:
          index = c

      # Realiza a troca entre o menor valor encontrado e o valor na posição 'i'
      aux = random_list[i]
      random_list[i] = random_list[index]
      random_list[index] = aux


class ShellSort:
  def __init__(self):
    pass

  def execute(self, random_list: list):
    # Obtém o tamanho da lista a ser ordenada
    n = len(random_list)
    # Define o gap inicial (metade do tamanho da lista)
    gap = n // 2

    # Continua o processo enquanto o gap for maior que 0
    while gap > 0:

      # Percorre a lista, começando do índice igual ao valor do gap até o final
      for i in range(gap, n):
        # Armazena o valor atual em uma variável temporária
        temp = random_list[i]

        # Define a posição de início da verificação (índice atual)
        j = i

        # Realiza a inserção direta considerando o valor do gap, deslocando elementos
        # maiores para a direita até encontrar a posição correta
        while j >= gap and random_list[j - gap] > temp:
          random_list[j] = random_list[j - gap]
          j -= gap

        # Coloca o valor temporário na posição correta
        random_list[j] = temp

      # Reduz o gap pela metade para as próximas iterações
      gap //= 2