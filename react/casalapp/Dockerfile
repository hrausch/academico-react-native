# Use Node com Alpine para leveza
FROM node:18-alpine

# Define diretório dentro do container
WORKDIR /app

# Copia os arquivos da pasta local 'app/' para dentro do container
COPY app/package*.json ./
RUN npm install
COPY app .

EXPOSE 8081

CMD ["npx", "expo", "start", "--web"]
