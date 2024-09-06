export class EmployeManager {
    constructor() {
        this.employes = [];
    }

    addEmploye(employe) {
        this.employes.push(employe);
        console.log(`L'employé: ${employe.nom} ${employe.prenom} est ajouté.`);
    }

    getEmployes() {
        console.log("Liste des employés:", this.employes);
        return this.employes;
    }

    destroyEmploye(nom) {
        const initialLength = this.employes.length;
        this.employes = this.employes.filter(emp => emp.nom !== nom || emp.prenom !== prenom);

        if (this.employes.length === initialLength) {
            console.log("L'employé n'existe pas.");
        } else {
            console.log(`L'employé: ${nom} ${prenom} est supprimé.`);
        }
    }

    editEmploye(nom, newEmploye) {
        const employe = this.employes.find(emp => emp.nom === nom && emp.prenom === prenom);

        if (!employe) {
            console.log("L'employé n'existe pas.");
            return;
        }

        Object.assign(employe, newEmploye);
        console.log(`L'employé: ${employe.nom} ${employe.prenom} a été modifié.`);
    }
}






