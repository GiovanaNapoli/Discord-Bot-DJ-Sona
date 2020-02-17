# Discord-Bot-DJ-Sona
 Repositorio para o meu bot de discord que toca musica usando uma API node do Youtube

 # Descrição:
 Com o objetivo de aprofundar meus estudos na linguagem Javascript, resolvi criar um bot para a plataforma Discord com o framework Node js, utilizando a biblioteca 'discord.js'.

 Este bot tem apenas o objetivo de tocar uma musica escolhida pelo membro do servidor, para isso é utilizada a biblioteca 'ytdl-core' que busca a musica no youtube e também a biblioteca 'opusscript' e 'ffmpeg'.

 # O desenvolvimento:
 Meu conhecimento em node e na biblioteca discord.js não são tão vastos, então recorri a alguns tutoriais no Youtube para processeguir com o desenvolvimento.

 LINK:[https://www.youtube.com/watch?v=LvErS58YoBM&t=210s]

 # Dependencias necessarias para o projeto:
 Irei listar como foi feita a instalação das dependencias e o que é necessarios para instala-las:

 1. Você precisa ter o node js instalado

    Para instalar o node não é necessario muito esforço, se você possiu um gerenciador de pacotes como o Chocolatey, é possivel instala-lo pelo prompt de comando.

    LINK CHOCOLATEY: [https://chocolatey.org/].

    Caso não tenha o chocolatey, ou simplismente não goste da telinha preta você pode baixar o node pelo proprio site dele.

    LINK NODE JS:[https://nodejs.org/pt-br/download/].

2. Instalando o Windows dev tools
    Algumas das bibliotecas irão precisar que o computador tenha algumas coisas instaladas, como o Python, para isso devemos instalar o dev tools do windows, para isso usaremos apenas um comando no prompt em modo de administrador:
    
    COMANDO - 'npm install --global windows-build-tools'


3. Instalando as bibliotecas necessarias
    Tendo o node já instalado(caso esteja em duvida se a instalação deu certo, vá até o prompt de comando e digite 'npm -v' e será exibido a versão do node), é necessario instalar as bibliotecas que serão usadas, são elas:

        Discord.js - 'npm install discord.js'
        Ytdl-core - 'npm install ytdl-core'
        Opus-Script - 'npm install opusscript'
        FFmpeg - 'npm install ffmpeg-binaries' ou 'ffbinaries'
        Mas nesse caso em especifico se tentarmos instalar dessa maneira ira ocorrer um erro na instalação, pois a biblioteca não esta mais sendo atualizada, então temos que fazer a instalação manualmente e colocar manualmente a variavel de ambiante FFmpeg no PATH do windows, há uma materia no wikihow do passo a passo de como fazer isso.
        
        LINK: [https://m.wikihow.com/Install-FFmpeg-on-Windows].

    Tendo tudo instalado já podemos começar a desenvolver.

# IDE usada:
VSCode

