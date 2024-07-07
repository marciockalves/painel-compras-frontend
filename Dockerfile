# Etapa 1: Construir a aplicação Angular
FROM node:14 AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build --prod

# Etapa 2: Configurar o Nginx
FROM nginx:alpine
COPY --from=build /app/dist/seu-projeto-angular /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
