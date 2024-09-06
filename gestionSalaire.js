
export class SalaireManager {
    constructor() {
        this.salaires = [];
    }

    addSalaire(salaire) {
        this.salaires.push(salaire);
        console.log(`Le salaire de ${salaire.montant} est ajouté.`);
    }

    getSalaires() {
        console.log("Liste des salaires:", this.salaires);
        return this.salaires;
    }

    destroySalaire(montant) {
        const initialLength = this.salaires.length;
        this.salaires = this.salaires.filter(sal => sal.montant !== montant);

        if (this.salaires.length === initialLength) {
            console.log("Le salaire n'existe pas.");
        } else {
            console.log(`Le salaire de ${montant} est supprimé.`);
        }
    }

    editSalaire(montant, newSalaire) {
        const salaire = this.salaires.find(sal => sal.montant === montant);

        if (!salaire) {
            console.log("Le salaire n'existe pas.");
            return;
        }

        Object.assign(salaire, newSalaire);
        console.log(`Le salaire de ${salaire.montant} a été modifié.`);
    }
}