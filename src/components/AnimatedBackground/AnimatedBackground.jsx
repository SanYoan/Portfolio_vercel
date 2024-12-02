import { useEffect } from 'react';

function AnimatedBackground() {
    useEffect(() => {
        const canvas = document.querySelector('.background');
        const ctx = canvas.getContext('2d');

        // Fonction de redimensionnement du canvas
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        // Appeler resizeCanvas avant de créer les points pour s'assurer que le canvas est correctement dimensionné
        resizeCanvas();

        const points = [];
        // Déterminer le nombre de points en fonction de la taille de l'écran
        const numPoints = window.innerWidth < 768 ? 20 : 80; // Moins de points sur mobile

        // Créer des points aléatoires
        for (let i = 0; i < numPoints; i++) {
            points.push({
                x: Math.random() * canvas.width, // Utiliser la largeur actuelle du canvas
                y: Math.random() * canvas.height, // Utiliser la hauteur actuelle du canvas
                // Réduire la vitesse sur mobile
                vx: window.innerWidth < 768 ? Math.random() * 0.25 - 0.25 : Math.random() * 0.5 - 0.8, // Vitesse en x
                vy: window.innerWidth < 768 ? Math.random() * 0.25 - 0.25 : Math.random() * 0.5 - 0.8  // Vitesse en y
            });
        }

        function drawPoint(x, y) {
            ctx.beginPath();
            ctx.arc(x, y, 3, 0, Math.PI * 2); // Dessiner un cercle de rayon 3
            // Changer la couleur des points en fonction de l'écran
            ctx.fillStyle = window.innerWidth < 768 ? 'black' : 'rgba(182, 54, 255, 0.8)'; // Couleur du point
            ctx.fill();
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height); // Effacer le canvas

            // Vérifier si l'écran est mobile pour changer la couleur des lignes
            const isMobile = window.innerWidth < 768;
            ctx.strokeStyle = isMobile ? 'black' : 'rgba(182, 54, 255, 0.8)'; // Couleur des lignes
            ctx.lineWidth = isMobile ? '0.5' : '2'; // largeur de la ligne

            // Dessiner des lignes entre les points
            for (let i = 0; i < points.length; i++) {
                const pointA = points[i];

                // Mise à jour de la position des points
                pointA.x += pointA.vx;
                pointA.y += pointA.vy;

                // Vérification des bords
                if (pointA.x < 0 || pointA.x > canvas.width) pointA.vx *= -1;
                if (pointA.y < 0 || pointA.y > canvas.height) pointA.vy *= -1;

                // Dessiner des lignes entre les points proches
                for (let j = 0; j < points.length; j++) {
                    const pointB = points[j];
                    const distance = Math.sqrt((pointA.x - pointB.x) ** 2 + (pointA.y - pointB.y) ** 2);

                    // Si la distance est inférieure à un certain seuil, dessiner une ligne
                    if (distance < 100) {
                        ctx.beginPath();
                        ctx.moveTo(pointA.x, pointA.y);
                        ctx.lineTo(pointB.x, pointB.y);
                        ctx.stroke();

                        // Dessiner les petits points aux extrémités des lignes
                        drawPoint(pointA.x, pointA.y);
                        drawPoint(pointB.x, pointB.y);
                    }
                }
            }

            requestAnimationFrame(animate); // Appel de la fonction d'animation
        }

        animate(); // Démarrer l'animation

        window.addEventListener('resize', resizeCanvas); // Mettre à jour la taille du canvas lors du redimensionnement
        return () => {
            window.removeEventListener('resize', resizeCanvas); // Nettoyer l'événement au démontage
        };
    }, []);

    return (
        <canvas className="background" style={{ position: 'absolute', top: 0, left: 0, zIndex: 0, opacity: "30%" }} />
    );
}

export default AnimatedBackground;
