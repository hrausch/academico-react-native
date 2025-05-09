# Use Node com Alpine para leveza
FROM node:18-alpine

# Define diretório dentro do container
WORKDIR /app

# Copia os arquivos da pasta local 'app/' para dentro do container
COPY app/package*.json ./
RUN npm install
COPY app .

EXPOSE 19006 8081 19000

CMD ["npx", "expo", "start", "--web", "--host", "localhost"]
