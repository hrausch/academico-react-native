IMAGE_NAME=react-app
APP_DIR=app

init:
	mkdir -p $(APP_DIR)
	docker run --rm -it -v "$$(pwd)/$(APP_DIR)":/app -w /app node:18-alpine \
		sh -c "npm install -g expo-cli && \
		       expo init . --template blank --npm --yes && \
		       npx expo install react-dom react-native-web @expo/metro-runtime"

build:
	docker build -t $(IMAGE_NAME) .

start:
	docker run -it --rm -p 8081:8081 -v "$$(pwd)/$(APP_DIR)":/app $(IMAGE_NAME)
