import PasVersLamourImg from '../../../public/pas_vers_amour.jpg'
import EcologieImg from '../../../public/ecologie.jpg'
import SyberImg from '../../../public/Sybernetics.jpg'
import BookVert from '../../../public/vert.jpg'

export const links = [
    {
        name: "Accueil",
        hash: "#accueil",
    },
    {
        name: "A propos",
        hash: "#apropos",
    },
    {
        name: "Notre collection",
        hash: "#collection",
    }
] as const;

export const productsData = [
    {
        title: "Les clés de l'amour: Un pas vers l'intime",
        description: "Il n'existe pas d'amour intense, profond et durable sans intime. Et contrairement à ce qu'on pourrait penser, ce n'est pas l'amour qui débouche sur l'intime, avec le temps. C'est bien plutôt l'intime qui rend l'amour possible.",
        imageUrl: PasVersLamourImg
    },
    {
        title: "Une écologie de l'enfance",
        description: "A chaque génération, des parents ont aimé leurs enfants, ont voulu le meilleur pour eux. Mais cela a échoué. A chaque génération, d'autres parents ont fait ce qu'ils ont pu, violemment non-aimants.",
        imageUrl: EcologieImg
    },
    {
        title: "Sybernetics",
        description: "Sybernetics est un parcours fléché, qui vous guide dans ce labyrinthe afin d'atteindre vos objectifs, en empruntant le chemin le plus rapide, le plus efficient. Rien n'est laissé au hasard dans une méthode complète, souple et qui s'adapte à votre vie, à vos contraintes, à vos goûts.",
        imageUrl: SyberImg
    },
    {
        title: "Methode Lafay - 110 exercices de musculation",
        description: "Il s'agit du premier ouvrage d'Olivier Lafay, paru en 2004. Il fut très vite un best seller en France en restant plus de 17 ans dans le top 10 Amazon des livres de sport.",
        imageUrl: BookVert
    }
] as const;