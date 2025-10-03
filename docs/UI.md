# Interface utilisateur

## Pages principales

### Page d'accueil

La page d'accueil permet de créer un Joueur (nom, niveau).
Il faut ensuite choisir entre créer une partie ou rejoindre une partie existante.
Problématiques : Envoyer l'objet joueur au backend ainsi que rediriger vers la page attente de joueur ou la page rejoindre un joueur.

### Page d'attente de joueurs

Page pour l'attente d'un joueur qui a créé une partie, la liste des joueurs rejoignant la partie doit être affichée.
Problématiques :
- Création d'un code unique pour chaque partie.
- Retour à la page d'accueil possible + annulation de la partie
- Récupérer la liste des joueurs depuis le backend et mettre à jour la liste en temps réel.
- Gérer le bouton "Démarrer la partie" qui doit être activé uniquement lorsque le nombre minimum de joueurs est atteint.

### Page de rejoindre une partie

Page qui propose de rentrer le code de la partie à rejoindre.
Problématiques :
- Retour à la page d'accueil possible.
- Vérification que le code entré correspond bien à une partie existante.
- Mise à jour de la liste des joueurs en temps réel.

###  Page de jeu

Page ou le jeu prend place.
Problématiques :
- Afficher le plateau de jeu et les éléments graphiques associés.
- Afficher les informations des joueurs (noms, scores, niveaux).
- Gérer les interactions de jeu (déplacements, actions, etc.).
- Mettre à jour l'état du jeu en temps réel en fonction des actions des joueurs.

### Page des résultats de la partie

La page donne les résultats des joueurs et propose de redémarrer une partie avec la même liste de joueurs.
Problématiques :
- Vérifier que les joueurs sont toujours connectés.