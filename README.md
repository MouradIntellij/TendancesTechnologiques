# 🚀 TechTrends

> *"TechTrends est une plateforme web moderne qui permet aux utilisateurs de découvrir, rechercher et suivre les dernières tendances dans le domaine de la technologie : Intelligence artificielle."*

**TechTrends** est aussi un **portail d'auto-formation** pour le cours **420-TT4-AS — Les Tendances Technologiques** du Collège LaSalle. Il regroupe des aides-mémoires interactifs pour les principaux piliers techniques du programme :

| Technologie | Description | Emplacement |
|-------------|-------------|-------------|
| 📗 **JavaScript ES6+** | Bases du langage, DOM, asynchrone, modules modernes | `JS/index.html` |
| 📘 **TypeScript** | Types, interfaces, génériques, utilitaires, écosystème | `TS/index.html` |
| 🐳 **Docker** | Conteneurs, images, volumes, réseaux, Compose | `Docker/index.html` |
| 🐘 **PostgreSQL** | SQL, jointures, modélisation, index, transactions, Node.js | `PostgreSQL/index.html` |
| 🧡 **Redis** | Types, TTL, cache-first, sessions, client Node.js | `Redis/index.html` |
| 🤖 **Agents IA** | LLM, prompts, Ollama, intégration API, RAG, agents | `AgentIA/index.html` |

## ✨ Fonctionnalités

- 🏠 **Portail central** (`index.html`) : navigation entre toutes les technologies
- 🔎 **Recherche intégrée** sur chaque aide-mémoire
- 📋 **Boutons « Copier »** pour réutiliser les exemples de code
- 📚 **TP pédagogiques** : exercices progressifs avec étapes pour l'enseignant (`*.docx` dans chaque dossier)
- 🌍 **Hébergement 100 % statique** : fonctionne hors ligne en double-cliquant sur `index.html`

## 🚀 Utilisation

1. Clonez le dépôt (ou ouvrez le dossier en local)
2. Double-cliquez sur `index.html` pour lancer le portail
3. Choisissez une technologie pour ouvrir son aide-mémoire interactif

Ou servez-le avec n'importe quel serveur statique :

```bash
# avec Python
python -m http.server 8080

# avec Node.js
npx serve .
```

## 🎓 Contexte pédagogique

Créé dans le cadre du cours **420-TT4-AS « Les Tendances Technologiques »** (AEC, Collège LaSalle). Les étudiants maîtrisent déjà Docker, PostgreSQL, Redis, Adminer et l'architecture MVC ; ces ressources leur permettent de se former en autonomie et servent de support pendant les travaux pratiques.

## 📁 Structure

```
TendancesTechnologiques/
├── index.html          ← portail TechTrends (menu principal)
├── JS/index.html       ← aide-mémoire JavaScript ES6+
├── TS/index.html       ← aide-mémoire TypeScript
├── Docker/index.html   ← aide-mémoire Docker
├── PostgreSQL/index.html ← aide-mémoire PostgreSQL
├── Redis/index.html    ← aide-mémoire Redis
└── AgentIA/index.html  ← aide-mémoire Agents IA
```

## 📄 Licence

Documentation pédagogique — À usage éducatif uniquement.