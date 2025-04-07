import random
import matplotlib.pyplot as plt
import time

# importanto algoritimos necessarios para a comparacao, use as importações quando fizer uma execução em máquina local
# from buscasLineares import busca_linear, busca_sentinela
# from buscasBinarias import insertion_sort, busca_binaria_rapida, busca_binaria

# intervalo de geracao dos numeros aleatorios
MIN_INTERVALO = 0
MAX_INTERVALO = 24000

# execucao principal
def main():
    escolha = input("1. Para inserir uma busca & 2. Para gerar aleatoriamente: ")
    print("")

    if escolha == '1':
        valor_procurado = input("Digite um valor a ser procurado: ")
        print(f"\nVocê quer buscar o valor: {valor_procurado}")

    elif escolha == '2':
        valor_procurado = random.randint(MIN_INTERVALO, MAX_INTERVALO)
        print(f"\nValor aleatório: {valor_procurado}")

    else:
        print("Escolha inválida. Tente novamente.")

    print("")

    exibir(int(valor_procurado))


# metodos de contagem do tempo - Representa um eixo do gráfico
def tempo_execucao(funcao, valor_procurado, vetor):
    iniciar_contagem = time.perf_counter()
    funcao(valor_procurado, vetor)
    terminar_contagem = time.perf_counter()

    return (terminar_contagem - iniciar_contagem)


# exibir dados no grafico
def exibir(valor_procurado):
    linear, sentinela, binaria, binaria_rapida, tamanhos = comparacoes(valor_procurado)

    fig, ax = plt.subplots()

    ax.plot(tamanhos, linear, label="Busca linear")
    ax.plot(tamanhos, sentinela, label="Busca linear sentinela")
    ax.plot(tamanhos, binaria, label="Busca binaria")
    ax.plot(tamanhos, binaria_rapida, label="Busca binaria rápida")

    ax.legend()
    plt.xlabel('Tamanho')
    plt.ylabel('Tempo')
    plt.title('Desempenho dos algoritimos')
    plt.grid(True)
    plt.show()


# computar as buscas
def comparacoes(valor_procurado):
    tamanhos, vetores = vetores_preenchidos()

    linear = []
    sentinela = []
    binaria = []
    binaria_rapida = []

    for vetor in vetores:

        tempo_linear = tempo_execucao(busca_linear, valor_procurado, vetor)
        linear.append(tempo_linear)

        tempo_sentinela = tempo_execucao(busca_sentinela, valor_procurado, vetor)
        sentinela.append(tempo_sentinela)

        vetor_organizado = insertion_sort(vetor)

        tempo_binario = tempo_execucao(busca_binaria, valor_procurado, vetor_organizado)
        binaria.append(tempo_binario)

        tempo_banario_rapido = tempo_execucao(busca_binaria_rapida, valor_procurado, vetor_organizado)
        binaria_rapida.append(tempo_banario_rapido)

    return linear, sentinela, binaria, binaria_rapida, tamanhos


# preenche um vetor com numeros aleatorios
def preencher_vetor(tamanho):
    vetor = []
    for _ in range(tamanho):
        vetor.append(random.randint(MIN_INTERVALO, MAX_INTERVALO))
    return vetor


# [1000, 3000, 6000, 9000, 12000, 15000, 18000, 21000, 24000]
def vetores_preenchidos():
    tamanhos = [1000, 3000, 6000, 9000, 12000, 15000, 18000, 21000, 24000]
    vetores = []

    for tamanho in tamanhos:
        vetor_preenchido = preencher_vetor(tamanho)
        vetores.append(vetor_preenchido)

    return tamanhos, vetores


if __name__ == "__main__":
    main()

# Algoritimos

# metodo de busca linear
def busca_linear(valor_procurado, vetor):
    indice = 0
    tamanho_vetor = len(vetor)
    comparacoes = 0

    while indice < tamanho_vetor and vetor[indice] != valor_procurado:
        indice += 1
        comparacoes += 1

    if indice == tamanho_vetor:
        return comparacoes
    else:
        comparacoes += 1
        return comparacoes

# metodo de busca linear com sentinela
def busca_sentinela(valor_procurado, vetor):
    tamanho = len(vetor)
    vetor.append(valor_procurado)
    indice = 0
    comparacoes = 0

    while vetor[indice] != valor_procurado:
        indice += 1
        comparacoes += 1

    if indice < tamanho:
        comparacoes += 1
        return comparacoes
    else:
        return comparacoes
    
# metodo de ordenação por força bruta
def insertion_sort(vetor):
    for i in range(1, len(vetor)):
        x = vetor[i]
        j = i - 1

        while j >= 0 and vetor[j] > x:
            vetor[j + 1] = vetor[j]
            j -= 1

        vetor[j + 1] = x
    return vetor

# metodo de busca binaria
def busca_binaria(valor_procurado, vetor):
    esquerda = 0
    direita = len(vetor) - 1
    comparacoes = 0

    while esquerda <= direita:
        meio = (esquerda + direita) // 2
        comparacoes += 1

        if vetor[meio] == valor_procurado:
            return comparacoes
        else:
            if vetor[meio] < valor_procurado:
                esquerda = meio + 1
            else:
                direita = meio - 1

    return comparacoes

# metodo de busca binária rapido
def busca_binaria_rapida(valor_procurado, vetor):
    esquerda = 0
    direita = len(vetor) - 1
    comparacoes = 0

    while esquerda <= direita:
        meio = (esquerda + direita) // 2
        comparacoes += 1

        if vetor[meio] < valor_procurado:
            esquerda = meio + 1
        else:
            direita = meio - 1

    if esquerda < len(vetor) and vetor[esquerda] == valor_procurado:
        return comparacoes
    else:
        return comparacoes
