FROM node:14

# Define o diretório de trabalho dentro do contêiner
WORKDIR /usr/src/app

# Copia o package.json e o package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instala as dependências do Node.js
RUN npm install

# Instala o pacote mysql
RUN npm install mysql

# Copia o restante do código-fonte para o diretório de trabalho
COPY . .

# Expõe a porta 3000 para acesso externo
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "start"]

