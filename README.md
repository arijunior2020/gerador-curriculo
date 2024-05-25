# Gerador de Currículo

Este é um aplicativo para gerar currículos em formato PDF a partir de informações fornecidas pelo usuário. A aplicação foi desenvolvida usando Node.js e Express, e pode ser implantada em um ambiente Docker.

## Funcionalidades

- Gerar currículos personalizados em PDF.
- Organizar informações de contato, objetivos, experiências profissionais, educação e cursos.
- Design simples e claro para fácil leitura.

## Pré-requisitos

- Node.js (versão 14 ou superior)
- Docker (para criação e execução do container)
- AWS CLI (para implantação em AWS)

## Instalação

1. Clone este repositório:

```sh
git clone https://github.com/seu-usuario/gerador-curriculo.git
cd gerador-curriculo

2. Instale as dependências:

npm install

Executando Localmente
Para executar a aplicação localmente:

```sh
Copiar código
npm start
A aplicação estará disponível em http://localhost:3000.

Usando Docker
Construir a Imagem Docker

```sh
Copiar código
docker build -t gerador-curriculo:v1.0 .

Executar o Container
```sh
Copiar código
docker run -p 80:3000 gerador-curriculo:v1.0
A aplicação estará disponível em http://localhost.

Implantação no AWS
Pré-requisitos
Conta AWS configurada
AWS CLI configurada
Passos
Crie um repositório no Amazon ECR (Elastic Container Registry).
Faça login no ECR:

```sh
Copiar código
aws ecr get-login-password --region <sua-regiao> | docker login --username AWS --password-stdin <seu-repositorio>
Tag a imagem Docker:

```sh
Copiar código
docker tag gerador-curriculo:v1.0 <seu-repositorio>:v1.0

Push a imagem para o ECR:

```sh
Copiar código
docker push <seu-repositorio>:v1.0

Crie um Cluster ECS e defina uma tarefa usando a imagem do ECR.

Configure um serviço ECS para executar a tarefa.

Certificado SSL
Para adicionar um certificado SSL, você pode usar o AWS Certificate Manager (ACM) e configurar um Application Load Balancer (ALB) para distribuir o tráfego HTTPS para sua instância EC2 ou ECS.

Tecnologias Utilizadas
- Node.js
- Express
- PDFKit
- Docker
- AWS (ECR, ECS, EC2, ACM)

Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

Licença
Este projeto está licenciado sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

Contato
Seu Arimatéia Júnior - arimateiajunior.tic@gmail.com

Link do Projeto: https://github.com/arimateiajunior2020/gerador-curriculo
