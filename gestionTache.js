export class TacheManager {
    constructor() {
        this.taches = [];
    }

    addTache(tache) {
        this.taches.push(tache);
        console.log(`La tache: ${tache.nom}  est ajouté.`);
    }

    getTaches() {
        console.log("Liste des taches:", this.taches);
        return this.taches;
    }

    destroyTache(nom) {
        const initialLength = this.taches.length;
        this.taches = this.taches.filter(task => task.nom !== nom );

        if (this.taches.length === initialLength) {
            console.log("La tache n'existe pas.");
        } else {
            console.log(`La tache: ${nom} est supprimé.`);
        }
    }

    editTache(nom, newtache) {
        const tache = this.taches.find(task => task.nom === nom );

        if (!tache) {
            console.log("La tache n'existe pas.");
            return;
        }

        Object.assign(tache, newtache);
        console.log(`La tache: ${tache.nom}  a été modifié.`);
    }
}