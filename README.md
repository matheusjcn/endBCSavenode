-----------------------------------
0) Extensoes VS Code::

- Color Highlight
- Dracula Official
- EditorConfig for VS Code
- ESLint
- AMaterial Icon Theme

-----------------------------------
1) Docker :

I - Criando um conteiners:
  - docker run --name database -e POSTGRES_PASSWORD=docker -p 5432:5432 postgres:11
  - docker run --name mongobarber -p 27017:27017 -d -t mongo
  - docker run --name redisbarber -p 6379:6379 -d -t redis:alpine


II - Comandos
  - docker stop nome_do_container // Parar Container
  - docker start nome_do_container // Iniar conteiner Container
  - docker ps -a // Lista de todos os containers criados
  - docker ps // Lista dos conteiners em execução


-----------------------------------
2) PostBird ::

I - configuracoes
- localhost
- 5432
- postgres
- docker
...

3) Multer ::
- upload de arquivos

