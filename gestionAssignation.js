class AssignationManager {
    constructor() {
       
        this.assignations = [];
    }

    addAssign(employeId, tacheId) {
        
        const existante = this.assignations.find(
            (assignation) => assignation.employeId === employeId && assignation.tacheId === tacheId
        );

        if (!existante) {
            this.assignations.push({ employeId, tacheId });
            console.log(`Tâche ${tacheId} assignée à l'employé ${employeId}.`);
        } else {
            console.log(`Tâche ${tacheId} est déjà assignée à l'employé ${employeId}.`);
        }
    }

    destroyAssign(employeId, tacheId) {
        const index = this.assignations.findIndex(
            (assignation) => assignation.employeId === employeId && assignation.tacheId === tacheId
        );

        if (index !== -1) {
            this.assignations.splice(index, 1);
            console.log(`Tâche ${tacheId} retirée de l'employé ${employeId}.`);
        } else {
            console.log(`Aucune assignation trouvée pour l'employé ${employeId} avec la tâche ${tacheId}.`);
        }
    }

    getAssignEmp(employeId) {
        const taches = this.assignations
            .filter((assignation) => assignation.employeId === employeId)
            .map((assignation) => assignation.tacheId);
        
        return taches;
    }

    getAssignTask(tacheId) {
        const employes = this.assignations
            .filter((assignation) => assignation.tacheId === tacheId)
            .map((assignation) => assignation.employeId);
        
        return employes;
    }
}
