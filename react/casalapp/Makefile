IMAGE_NAME=react-app
APP_DIR=app

init-docker:
	mkdir -p $(APP_DIR)
	docker run --rm -it -v "$$(pwd)/$(APP_DIR)":/app -w /app node:18-alpine \
		sh -c "npm install -g expo-cli && \
		       expo init . --template blank --npm --yes && \
		       npx expo install react-dom react-native-web @expo/metro-runtime"

build-docker:
	docker build -t $(IMAGE_NAME) .

start-docker:
	docker run -it --rm \
		-v "$$(pwd)/$(APP_DIR)":/app \
		-w /app \
		-p 19000:19000 \
		-p 19001:19001 \
		-p 19002:19002 \
		node:18-alpine sh -c "\
			apk add --no-cache bash git && \
			npm install && \
			npx expo install && \
			npx expo start --tunnel"
	



# Cria um novo projeto Expo na pasta definida
init:
	mkdir -p $(APP_DIR)
	cd $(APP_DIR) && \
	npx create-expo-app . --template blank && \
	npm install && \
	npx expo install react-dom react-native-web @expo/metro-runtime @expo/ngrok

# Inicia o projeto Expo existente com suporte ao Expo Go (via túnel ou LAN)
start:
	cd $(APP_DIR) && \
	npm install && \
	npx expo start --lan

# Versão alternativa com --tunnel (caso LAN não funcione)
start-tunnel:
	cd $(APP_DIR) && \
	npm install && \
	npx expo start --tunnel --clear

# Limpa node_modules e reinstala (útil se tiver erros)
reinstall:
	cd $(APP_DIR) && \
	rm -rf node_modules package-lock.json && \
	npm install
