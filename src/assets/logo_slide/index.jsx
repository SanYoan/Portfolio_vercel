// Fonction pour importer toutes les images d'un répertoire donné
function importAll(r) {
    let images = {};
    // Utiliser map pour itérer sur les clés et charger les images
    r.keys().forEach((item) => {
        // Remplacer './' par une chaîne vide pour obtenir le nom du fichier
        images[item.replace('./', '')] = r(item);
    });
    return images;
}

// Importe toutes les images dans le dossier actuel
// Utilise require.context pour charger les fichiers d'image au format .png, .jpeg, .jpg ou .svg
const images = importAll(require.context('./', false, /\.(png|jpe?g|svg)$/));


// Exporter l'objet d'images pour pouvoir l'utiliser dans d'autres fichiers
export default images;
