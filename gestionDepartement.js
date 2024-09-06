export class DepartementManager {
    constructor() {
        this.departements = [];
    }

    addDepartement(departement) {
        this.departements.push(departement);
        console.log(`Le département ${departement.nom} est ajouté.`);
    }

    getDepartements() {
        console.log("Liste des départements:", this.departements);
        return this.departements;
    }

    destroyDepartement(nom) {
        const initialLength = this.departements.length;
        this.departements = this.departements.filter(dep => dep.nom !== nom);

        if (this.departements.length === initialLength) {
            console.log("Le département n'existe pas.");
        } else {
            console.log(`Le département ${nom} est supprimé.`);
        }
    }

    editDepartement(nom, newDepartement) {
        const departement = this.departements.find(dep => dep.nom === nom);

        if (!departement) {
            console.log("Le département n'existe pas.");
            return;
        }

        Object.assign(departement, newDepartement);
        console.log(`Le département ${departement.nom} a été modifié.`);
    }
}