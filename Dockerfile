# Usar uma imagem base com Node.js
FROM node:18

# Definir o diretório de trabalho dentro do container
WORKDIR /code

# Copia os arquivos da raiz para o diretório
COPY . /code/

# Expor a porta (caso precise usar um servidor Node.js)
EXPOSE 3000
