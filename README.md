# NestJS Template
Ce projet est un modèle de base pour la gestion de l'authentification des utilisateurs avec NestJS. Il utilise JWT tokens, bcrypt pour le hachage des mots de passe, et comprend des fonctionnalités pour la manipulation des objets de transfert de données (DTO), ainsi que des modules dédiés aux utilisateurs et à l'authentification.

## Fonctionnalités
- **Authentification JWT** : Utilise JSON Web Tokens (JWT) pour gérer l'authentification des utilisateurs de manière sécurisée.

- **Bcrypt** : Intègre le bcrypt pour le hachage sécurisé des mots de passe des utilisateurs.

- **DTO** : Utilisation de DTO pour assurer une validation et une manipulation de données efficaces.

- **Module Utilisateur** : Un module dédié à la gestion des utilisateurs, y compris la création, la lecture, la mise à jour et la suppression (CRUD).

- **Module Authentification** : Gère les processus d'authentification, y compris l'émission de tokens JWT après la connexion réussie.

## Installation
Assurez-vous d'avoir [Node.js](https://nodejs.org/en) et [npm / yarn](https://www.npmjs.com/) installés sur votre machine.

### 1. Clonez ce dépôt.

```bash
git clone https://github.com/votre-utilisateur/nestjs-template-user-auth.git
```

### 2. Accédez au répertoire du projet.

```bash
cd nestjs-template-user-auth
```

### 3. Installez les dépendances du projet.

```bash
npm install
# or
yarn install
```

## Configuration
1. Dupliquez le fichier `.env.example` et renommez-le en `.env`.

2. Modifiez le fichier `.env` pour configurer les variables d'environnement nécessaires.

## Utilisation
Pour lancer l'application en mode développement, utilisez la commande suivante :

```bash
npm run start:dev
# or 
yarn start:dev
```

## Contributions
Les contributions sont les bienvenues ! N'hésitez pas à ouvrir des problèmes ou à soumettre des demandes d'extraction pour améliorer ce modèle.

## Licence
Ce projet est sous licence [MIT](https://fr.wikipedia.org/wiki/Licence_MIT).