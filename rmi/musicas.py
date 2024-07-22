import Pyro4
import pygame
import os

@Pyro4.expose
class Musicas(object):
    def __init__(self):
        pygame.mixer.init()
        self.playlist = [
            "Crystal Castles - Vanished_.mp3",
            "musica2.mp3",
            "musica3.mp3"
        ]
        self.directory = "./musicas/"  # Atualize para o diretório correto onde as músicas estão armazenadas

    def listar_musicas(self):
        return {self.playlist.index(i): os.path.basename(i) for i in self.playlist}

    def tocar_musica(self, musica_id):
        if musica_id in self.playlist:
            musica_path = os.path.join(self.directory, self.playlist[musica_id])
            try:
                pygame.mixer.music.load(musica_path)
                pygame.mixer.music.play()
                return f"Tocando {self.playlist[musica_id]}"
            except pygame.error as e:
                return f"Erro ao tentar tocar a música: {str(e)}"
        else:
            return "Música não encontrada."
