import Pyro4
from datetime import datetime

class Tarefa:
    def __init__(self, usuario, descricao, data_hora):
        self.usuario = usuario
        self.descricao = descricao
        self.data_hora = data_hora

    def __str__(self):
        return f"Tarefa: {self.descricao}, Usuário: {self.usuario}, Data e Hora: {self.data_hora}"

@Pyro4.expose
class ListaTarefas:
    def __init__(self):
        self.tarefas = []

    def adicionar_tarefa(self, usuario, descricao, data_hora):
        tarefa = Tarefa(usuario, descricao, data_hora)
        self.tarefas.append(tarefa)
        return f"Tarefa '{descricao}' adicionada com sucesso."

    def listar_tarefas(self):
        return [str(tarefa) for tarefa in self.tarefas]

    def remover_tarefa(self, usuario, descricao):
        for tarefa in self.tarefas:
            if tarefa.usuario == usuario and tarefa.descricao == descricao:
                self.tarefas.remove(tarefa)
                return f"Tarefa '{descricao}' removida com sucesso."
        return f"Tarefa '{descricao}' não encontrada."
