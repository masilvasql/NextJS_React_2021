# Comando para gerar chave ssh

````
No git bash digitar o seguinte:

ssh-keygen -t rsa -f c:\marcelo\next_react_2021\nextJS_React_2021/projeto1/.ssh/github

O Caminho à cima é um caminho de exmplo, a pasta .ssh não vem por padrão e deverá ser criada.

github é o nome da chave ssh

após a chave criada, é necessário ativá-la

ainda no Git Bash, digitar o seguinte:

eval "$(ssh-agent -s)"

uma mensagem como Agent pid 941, indicará o sucesso.

Após isto, gerar a identidade da chave com o seguinte comando:

ssh-add  /c/marcelo/next_react_2021/nextJS_React_2021/projeto1/.ssh/github
