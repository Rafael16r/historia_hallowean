print("Gerador de Historias de Terror ")

print()
print("Escolhe o local:")
print("1 - Casa abandonada")
print("2 - Floresta sombria")
print("3 - Cemiterio ")
print("4 - Hospital abandonado")

local = input("Escolhe uma opção :")

if local == "1":
    local = "casa abandonada"
elif local == "2":
    local = "floresta sombria"      
elif local == "3":
    local = "cemiterio"
elif local == "4":
    local = "hospital abandonado"
else:
    local = "local desconhecido"

print("Local escolhido:", local)

monstro = input("escolhe uma opção:")

if monstro == "1":
    monstro = "vampiro"
elif monstro == "2":
    monstro = "zumbie"
elif monstro == "3":
    monstro = "fantasma"
else:
    monstro = "monstro desconhecido"

print("Monstro escolhido:", monstro)

personagem = input(" escolhe uma opção:")

if personagem == "1":
    personagem = "estudante"
elif personagem == "2":
    personagem = "detetive"
elif personagem == "3":
    personagem = "criança"
elif personagem == "4":
    personagem = "explorador"
else:
    personagem = "personagem desconhecido"

print("personagem escolhido:", personagem)           

print()
print("escolhe o final da historia:")
print("1 - final feliz")
print("2 - final inesperado")
print("3 - final assustador")

final = input("Escolhe uma opção:")

if final == "1":
    final = "final feliz"
elif final == "2":
    final = "final inesperado"
elif final == "3":
    final = "final assustador"
else:
    final = "final desconhecido"
print("Final escolhido:", final)

print()
print("A historia escolhida é:")
print()
print(f"era uma noite escura quando um {personagem} entrou numa {local}. ")
print(f"De repente, ouviu um barulho vindo do corredor. Era um {monstro}.")