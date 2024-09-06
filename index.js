import express from "express";
import bodyParser from "body-parser";
import {EmployeManager} from "./gestionEmployes";
import { TacheManager } from "./gestionTache";
import { SalaireManager } from "./gestionSalaire";
import { DepartementManager } from "./gestionDepartement";


const app = express();
const port = 3000;

app.use(bodyParser.json());

const employeManager = new EmployeManager();
const departementManager = new DepartementManager();
const salaireManager = new SalaireManager();
const tacheManager = new TacheManager();


app.get("/", (req, res) => {
    res.send("Bienvenue dans mon application de gestion d'employés !");
});

// Routes pour Employes
app.post("/employes", (req, res) => {
    employeManager.addEmploye(req.body);
    res.send("Employé ajouté avec succès.");
});

app.get("/employes", (req, res) => {
    const employes = employeManager.getEmploye();
    res.json(employes);
});

app.put("/employes/:id", (req, res) => {
    const { id } = req.params;
    employeManager.editEmploye(id, req.body);
    res.send(`Employé ${id} modifié avec succès.`);
});

app.delete("/employes/:id", (req, res) => {
    const { id } = req.params;
    employeManager.destroyEmploye(id);
    res.send(`Employé ${id} supprimé avec succès.`);
});

// Routes pour Departements
app.post("/departements", (req, res) => {
    departementManager.addDepartement(req.body);
    res.send("Département ajouté avec succès.");
});

app.get("/departements", (req, res) => {
    const departements = departementManager.getDepartement();
    res.json(departements);
});

app.put("/departements/:id", (req, res) => {
    const { id } = req.params;
    departementManager.editDepartement(id, req.body);
    res.send(`Département ${id} modifié avec succès.`);
});

app.delete("/departements/:id", (req, res) => {
    const { id } = req.params;
    departementManager.destroyDepartement(id);
    res.send(`Département ${id} supprimé avec succès.`);
});

// Routes pour Salaires
app.post("/salaires", (req, res) => {
    salaireManager.addSalaire(req.body);
    res.send("Salaire ajouté avec succès.");
});

app.get("/salaires", (req, res) => {
    const salaires = salaireManager.getSalaire();
    res.json(salaires);
});

app.put("/salaires/:id", (req, res) => {
    const { id } = req.params;
    salaireManager.editSalaire(id, req.body);
    res.send(`Salaire ${id} modifié avec succès.`);
});

app.delete("/salaires/:id", (req, res) => {
    const { id } = req.params;
    salaireManager.destroySalaire(id);
    res.send(`Salaire ${id} supprimé avec succès.`);
});


app.post("/taches", (req, res) => {
    tacheManager.addTache(req.body);
    res.send("Tâche ajoutée avec succès.");
});

app.get("/taches", (req, res) => {
    const taches = tacheManager.getTache();
    res.json(taches);
});

app.put("/taches/:id", (req, res) => {
    const { id } = req.params;
    tacheManager.editTache(id, req.body);
    res.send(`Tâche ${id} modifiée avec succès.`);
});

app.delete("/taches/:id", (req, res) => {
    const { id } = req.params;
    tacheManager.destroyTache(id);
    res.send(`Tâche ${id} supprimée avec succès.`);
});


app.post("/assignations", (req, res) => {
    const { employeId, tacheId } = req.body;
    assignationManager.addAssign(employeId, tacheId);
    res.send(`Tâche ${tacheId} assignée à l'employé ${employeId}.`);
});


app.delete("/assignations", (req, res) => {
    const { employeId, tacheId } = req.body;
    assignationManager.destroyAssign(employeId, tacheId);
    res.send(`Tâche ${tacheId} retirée de l'employé ${employeId}.`);
});


app.get("/employes/:employeId/taches", (req, res) => {
    const { employeId } = req.params;
    const taches = assignationManager.getAssignEmp(employeId);
    res.json(taches);
});


app.get("/taches/:tacheId/employes", (req, res) => {
    const { tacheId } = req.params;
    const employes = assignationManager.getAssignTask(tacheId);
    res.json(employes);
});

app.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur le port ${port}`);
});
