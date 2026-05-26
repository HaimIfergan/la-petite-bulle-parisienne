## Changement de couleur : jaune pâle → cyan néon

### Objectif
Remplacer la couleur d'accent jaune/or (`#FFD700`) par un **cyan néon moderne** (`#22D3EE`) sur l'ensemble du site, en conservant l'esthétique "Ligne Claire" (contours noirs marqués, fond crème, texte marine).

### Fichiers concernés
1. `src/index.css` — modifier la variable CSS `--primary` (et `--ring`, `--accent` si nécessaire)
2. `src/components/Footer.tsx` — vérifier que le fond sombre du footer s'accorde avec le nouveau bleu

### Détail technique
- `--primary` actuel : `51 100% 50%` (jaune/or HSL)
- `--primary` cible : `189 93% 53%` (cyan néon `#22D3EE`)
- `--ring` et `--accent` suivront la même teinte pour la cohérence
- Le fond crème (`--background`), le texte marine (`--foreground`) et les bordures noires restent inchangés
- Les boutons `.comic-button`, les liens actifs de la navbar, et tous les éléments utilisant `bg-primary`/`text-primary` seront automatiquement mis à jour via le design token

### Ajustement visuel du footer
Le footer actuel est sombre (`bg-secondary` = marine). Le cyan néon sur fond sombre sera très visible et moderne. Aucune modification structurelle du footer n'est nécessaire, seule la couleur primaire changera naturellement sur les icônes et éléments interactifs.

### Résultat attendu
- Boutons jaunes → boutons cyan néon avec contours noirs
- Accent jaune sur icônes et liens → cyan néon
- Contraste maintenu sur fond crème et fond marine
- Look 2026 fashion, énergique et pop