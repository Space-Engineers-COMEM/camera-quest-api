import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import Translation from 'App/Models/Translation';

export default class TranslationSeeder extends BaseSeeder {
  public async run() {
    await Translation.createMany([
      {
        key: 'subtitle',
        value:
          '[Personne qui parle en italien]<br>[Cri de mouette]<br>[Ambiance Venise (bruit eau, personne qui parle italien)]<br>Rendons-nous sous le soleil italien, en 1857 pour partir à la rencontre de 2 photographes : Carlo Ponti, qui est l’inventeur du mégaletoscope [Bruit boite] et Carlo Naya, un pionnier de la photographie en Italie [Son décl. app. photo]. Ensemble, ils créeront un studio de photo à Venise [Son cloche]. Ponti édite les œuvres de Naya et lui publie et distribue ses vues de Venise. Les deux associés deviennent les plus célèbres photographes de la Ville. Cette collaboration qui a été fructueuse dans un premier temps finira mal en 1868 due à une controverse.<br>[Fin ambiance Venise]<br>[Musique suspens]<br>Tout commença quand Ponti développa une version XXL de l’aletoscope nommé le mégaletoscope. Il permet de visualiser des photos avec un filtre simulant un effet de jour ou un effet de nuit tout en ayant la possibilité de les agrandir. Les 2 collaborateurs étaient très contents des résultats obtenus avec cette technologie améliorée.<br>Mais durant l’adhésion de Venise à l’Italie en octobre 1866, l’administration a été grandement affectée, c’était la confusion principalement au niveau législatif. De ce fait, le privilège d’exclusivité de l’appareil est tombé et Naya en a profité pour s’approprier l’invention. Ponti se sentant trahi, tente de faire condamner Naya et de récupérer le monopole de son invention par la même occasion.<br>En conséquence, le studio a donc fermé et des procédures judiciaires ont été engagées.  Naya a donc ouvert son propre studio à la place St-Marc pour continuer à vendre ses photographies. Les poursuites ont perduré jusqu’à sa mort.<br>[Fin musique suspens]<br>[Musique italienne]<br>Cet appareil, ayant déchainé les passions, disposait d’un fonctionnement particulièrement astucieux permettant au corps de se tourner pour autoriser la vision de photo verticale. Pour utiliser le filtre “jour”, les volets sur le côté s’ouvraient [Bruit clapet bois] ce qui permettait de laisser entrer la lumière dite naturelle directement sur la photographie. Concernant le filtre “nuit”, pendant que l’appareil se trouve devant une source lumineuse, les volets sur le côté se referment [Bruit clapet bois] et celui à l’arrière s’ouvre. Ensuite un décor nocturne coloré apparait en transparence. On peut donc disposer d’une ambiance totalement différente.<br>[Fin musique italienne]',
        id_poi: 1,
        id_lang: 1,
      },
      {
        key: 'description',
        value:
          'Le mégaletoscope est une version agrandie d’un appareil déjà existant à l’époque: l’aletoscope. C’était une visionneuse pour images photographiques de grand format. Le mégaletoscope disposait d’un filtre à effet jour et un filtre à effet nuit tout en permettant de regarder des images fortement agrandies. Il est accompagné d’une vingtaine de planches d’environ 30x40cm disposant de divers effets.',
        id_poi: 1,
        id_lang: 1,
      },
      {
        key: 'subtitle',
        value:
          '[Musique parisienne]<br>Vincent Chevalier, dont l’atelier est à Paris, son fils Charles, et son petit-fils Arthur, opticiens de père en fils, ont révolutionné le monde de la photographie. Tout commença quand Charles a travaillé avec son père en tant qu’apprenti de 1819 à 1821 dans l’optique d’apprendre la réalisation de montures en laiton.<br>[Bruit monture]<br>[Fin musique parisienne]<br>[Musique fond entrainante]<br>En 1820, Vincent et Charles se lancèrent dans la construction d’un nouveau modèle de la camera obscura qui veut dire en Latin chambre noire. Lorsque la lumière pénètre par une petite ouverture dans la boite sombre, une projection de l’objet apparait sur la paroi opposée face au trou.<br>Cette période a été fructueuse pour Charles et son père. Ils commencèrent à ajouter dans leur modèle de camera obscura un prisme de ménisque, des lunettes teintées et des lentilles de microscope. Ils ont donc été, avec Daguerre et Niepce, impliqué dans les premiers stades de la photographie.<br>Devant vous, vous trouverez une optique et une chambre à tiroir [Bruit tiroir]. L’optique, qui est dite « à verre combiné », permet de corriger, par l’emploi de lentilles accolées de verres différents, les aberrations optiques. Cet objectif a valu à Charles un prix de la Société d’encouragement en 1842. [Applaudissements] <br>La chambre à tiroir, quant à elle, permet de faire des prises de vue. La face avant supporte un objectif à verres combinés et la face arrière coulisse [Bruit coulissement]. afin d’effectuer la mise au point sur un verre dépoli. Ce dernier est ensuite remplacé par une autre plaque lors de la prise de vue. [Bruit plaque dans fente]<br>[Fin musique fond]',
        id_poi: 2,
        id_lang: 1,
      },
      {
        key: 'description',
        value:
          'Célèbres opticiens de Paris, la famille Chevalier disposait d’une boutique contenant différentes versions de la fameuse Camera Obscura. D’ailleurs Louis-Jacques-Mandé Daguerre, fervent utilisateur de cet appareil dans le cadre de son métier de peintre ainsi que de décorateur de théâtre, faisait parti de leur clientèle. Le Colonel Niépce finira aussi dans cette boutique à propos des travaux de ses parents. Tous ensemble, ils contribuèrent à un traité concernant l’annonce officielle de la découverte de la photographie en 1839.',
        id_poi: 2,
        id_lang: 1,
      },
      {
        key: 'subtitle',
        value:
          '[Musique laboratoire]<br>Nous sommes en 1840, William Talbot vient de découvrir le “calotype”, procédé permettant d’obtenir un négatif papier direct, et reproduire des images positives. C’est la base de la photographie argentique moderne. Des recherches suivent cette découverte afin d’améliorer la qualité des images ou encore leurs sensibilités à la lumière.<br>A la suite de ces recherches, 10 ans plus tard, l’anglais Frederick Scott Archer découvre le collodion humide, permettant une bien meilleure qualité de l’image. C’est une substance collante [Bruit substance collante] conservée sous forme liquide ou sous forme de film une fois évaporée. Nous allons nous pencher sur cette méthode et son utilisation.<br>[Fin musique laboratoire]<br>[Ambiance laboratoire]<br>A l’abris de la lumière, le photographe devait enduire une plaque [Bruit pinceau] de verre d’un mélange d’argent et de collodion. La plaque est, ensuite, insérée dans un châssis [Bruit plaque châssis] et exposée dans la chambre photographique (l’appareil photographique) pour la prise de vue. Un négatif était obtenu sur le verre, qui était emporté [Bruit pas] dans l’atelier afin de réaliser des épreuves sur papier. Le collodion devait impérativement rester humide de la préparation de la plaque au développement du négatif.<br>[Fin ambiance laboratoire]<br>[Ambiance extérieur vent]<br>Parce qu’il faut développer la plaque sur place, cette photographie se rapproche des « instantanés ». Si la vue n’est pas bonne, il lui faut tout recommencer à partir d’une nouvelle plaque de verre.<br>Pour ces raisons, la prise au collodion est compliquée à l’extérieur. Cela n’a pas empêché certains photographes de relever le défi. Il leur fallait emporter leur laboratoire en plus du matériel encombrant [Bruit matériel]. Il était possible de prendre des scènes à l’extérieur à l’aide d’un assistant et avec une grande planification.<br>Un objet leur facilitant la prise de vue à l’extérieur est la tente-laboratoire, se trouvant sur la gauche de la scène, recouvert d’une étoffe jaune. Cette tenture est une reconstitution constituée sur la base de documents du XIXe siècles.  L’appareil était construit de tel sorte à ce que l’aération fut possible : on les plaçait à l’ombre pour éviter l’échauffement intérieur de l’air. L’étoffe qui la couvrait était jaune à l’extérieur et noire à l’intérieur : le jaune s’échauffe peu sous l’influence des rayons du soleil et oppose une grande résistance au passage des rayons de lumière qui agissent sur les préparations photographiques.<br>Certains photographes préfèrent se déplacer en chariot [Bruit chariot], plutôt qu’avec une tente, chariot dans lequel ils transportent tout leur matériel.<br>[Fin ambiance extérieur vent]',
        id_poi: 3,
        id_lang: 1,
      },
      {
        key: 'description',
        value:
          'La qualité de l’image ayant subi une progression fulgurante, les photographes se sont rapidement tourné vers les prises de vue extérieure. Celles-ci proposaient un nouveau challenge de taille: emporter tout le matériel du laboratoire. En effet, la plaque de verre devait être traitée au moment de la prise de vue et le collodion devait rester humide. L’entièreté de leur matériel était donc nécessaire. Avec cette technologie, on se rapproche gentiment des clichés instantanés.',
        id_poi: 3,
        id_lang: 1,
      },
      {
        key: 'subtitle',
        value:
          '[Musique douce piano]<br><br>Au tout début, l’appareil photo a souvent été lié à la présence d’un trépied [Bruit trépied], qui aidait à cadrer la prise de vue. Petit à petit, le besoin d’être un peu plus flexible et de se séparer du trépied sans trop impacter la qualité de l’image a émergé. C’est ainsi qu’est né la photographie instantanée. Il fallait donc trouver une solution pour garder une visée sur le sujet.<br><br>Ce que vous avez devant vous était l’une des premières méthodes. Il s’agit de deux chambres superposées [Bruit appareil sur table], la chambre en haut est utilisé pour la visée et la chambre d’en bas est utilisé pour la prise de vue.<br><br>[Fin musique douce piano]<br><br>[Musique entrainante]<br><br>En plus du fait que cette méthode n’était pas très pratique, elle ne permettait pas assez de précision dans la prise de photo. Heureusement que des travaux d’amélioration ont été menée. Sur la base des travaux de l’opticien Johann Zahn en 1686, qui a démontré comment une image pouvait être déviée afin d’en avoir un aperçu grâce à des miroirs, Thomas Sutton, inventeur et photographe anglais, a inventé en 1861 le premier appareil photo reflex à objectif unique. Depuis cette période, les appareils photos reflex n’ont cessé de s’améliorer.<br><br>[Fin musique entrainante]',
        id_poi: 4,
        id_lang: 1,
      },
      {
        key: 'description',
        value:
          'Deux chambres qui se superposent pour permettre au photographe la possibilité d’utiliser la première pour la visée et la deuxième pour la prise de vue. C’est une solution astucieuse qui a été mise en place pour pouvoir se séparer du trépied tout en gardant la possibilité d’effectuer un bon cadrage. Elle a été suivie par l’utilisation des miroirs pour dévier l’image et permettre au photographe d’avoir un aperçu de celle-ci.',
        id_poi: 4,
        id_lang: 1,
      },
      {
        key: 'subtitle',
        value:
          '[Son cloche]<br>[Ambiance ruelle paris]<br>C’est dans les ruelles de Paris qu’est né Alphonse Bertillon en 1853, une année après que Louis-Napoléon Bonaparte est devenu le souverain Napoléon III. Il est petit fils d’un démographe et fils du directeur des Statistiques du département de la Seine.<br>[Fin ambiance ruelle paris]<br>[Ambiance bureau]<br>Il abandonne ses études de médecine, et son père le fait entrer en 1879 à la préfecture de police de Paris.<br>Après avoir passé un bon moment à classer les dossiers des criminels, [son papier] il a été inspiré des travaux du statisticien et humaniste belge Adolphe Quetelet pour développer sa méthode d’identification des criminels récidivistes, plus simple et plus plausible que la flétrissure abolie en 1832. Voyons comment la méthode d’Alphonse Bertillon a été appliquée à l’époque !<br>[Fin ambiance bureau]<br>[Ambiance grand bâtiment]<br>Les mains attachées, un criminel entre dans la préfecture de police de Paris et il est dirigé directement vers le service d’identification dirigé par Alphonse Bertillon. [Bruit pas]<br>Il s’assoit sur une chaise [Grincement chaise bois] exactement comme celle que vous avez devant vous. À une certaine distance se trouve un appareil photographique qui sera utilisé pour photographier le détenu de face et de profil sous un éclairage particulier. Il s’agira ensuite de remplir une fiche signalétique [Bruit feuille] qui comporte un certain nombre de mesures qui permettent d’avoir des particularités dimensionnelles du détenu.<br>L’essor de cette technique en France, appelée l’anthropométrie judiciaire, s’explique en grande partie par l’adoption de la loi française sur la relégation des récidivistes de 1885. Elle s’est répandue ensuite un peu partout dans le monde et a servi à résoudre un bon nombre d’affaires judiciaires. <br>[Fin ambiance grand bâtiment] ',
        id_poi: 5,
        id_lang: 1,
      },
      {
        key: 'description',
        value:
          'Cette chaise fait partie de la méthode d’identification des criminels récidivistes mise en place par Alphonse Bertillon. Cette méthode consiste à effectuer une analyse biométrique accompagnée de photographies de face et de profil prises sous un éclairage stricte, tout en étant à une distance spécifique de la chaise. Elle s’est répandue ensuite un peu partout dans le monde et a servi à résoudre un bon nombre d’affaires judiciaires.',
        id_poi: 5,
        id_lang: 1,
      },
      {
        key: 'subtitle',
        value:
          '[Musique ambiance mouvementée]<br><br>De longues périodes de hausses et de baisses de prix se succédaient sur le peuple français depuis 1789. Après la révolution de 1848, Louis-Napoléon Bonaparte devient le premier président de la République française avant de restaurer l’Empire pour devenir Empereur des Français. Durant cette période mouvementée, les talents d’un grand photographe ont commencé à voir le jour.<br><br>[Fin musique ambiance mouvementée]<br>[Ambiance ruelle paris]<br><br>Fils d’un marchand de toiles, Eugène Adolphe Disdéri est né à Paris en 1819. Durant plusieurs années, il a essayé divers métiers, d’abord comme acteur dramatique ensuite comme dessinateur [Bruit crayon]. Il a même créé une entreprise de bonneterie qui n’a pas tenu longtemps.<br>Après avoir fait faillite il est parti pour Brest ou il s’est mis à la photographie et a créé son premier atelier en 1849. Trois ans plus tard, il abandonne sa femme et part à Nîmes. Il y travaille comme photographe et apprends les techniques du collodion.<br>De retour à Paris en janvier 1854, il invente un nouvel appareil photographique multi-objectifs qui utilise la technique du collodion humide. Voici en quoi consiste cette méthode.<br><br>[Fin ambiance ruelle paris]<br>[Ambiance laboratoire]<br><br>D’abord le photographe mélange les produits chimiques [Bruit liquide]. Ensuite il prépare la plaque de verre [Bruit verre], le support de la photographie, avec le coulage du Collodion. Le photographe doit tout de suite passer à la prise de vue. Et finalement le photographe doit rapidement réaliser le développement sous lumière inactinique rouge. [bruit lumière led]<br>Avec l’invention que Disdéri a effectué, le photographe passe une seule fois par ces étapes pour produire six clichés sur la même plaque au lieu d’un seul. Ce qui a permis la réduction du prix [Bruit monnaie] de la photographie pour les clients et la reproductibilité des portraits. Les photos obtenues par ce procédé ont un petit format assez proche de la carte de visite. Disdéri a vite breveté [Bruit signature] ce concept la même année et a profité d’une bonne période d’activité avant de faire de nouveau faillite en 1856.<br><br>[Fin ambiance laboratoire]<br>[Musique douce]<br><br>En 1859, alors qu’il marchait vers la guerre en Italie [Bruit pas herbe], Napoléon III interrompt sa marche vers cette dernière pour faire des portraits dans l’atelier de Disdéri. Après cette visite, il devient mondialement connu.<br><br>A cette époque, ce n’est pas seulement la multitude de poses sur une seule photo qui attirait le public mais surtout la délicatesse de la mise en scène réalisée dans l’atelier, qui avait pour but de créer à la personne photographiée une identité.<br><br>[Fin musique douce]',
        id_poi: 6,
        id_lang: 1,
      },
      {
        key: 'description',
        value:
          'Le portrait-carte de visite a vu le jour en 1854 grâce aux travaux de Eugène Adolphe Disdéri. C’est un photographe Français ayant utilisé la technique du collodion humide pour inventer un nouvel appareil photographique multi-objectifs. Celui-ci permet la réalisation de plusieurs poses en utilisant la même plaque. L’un des secrets de la réussite de ce concept est l’importance consacré à la mise en scène lors de la prise de photo pour mettre en valeur le statut du modèle.',
        id_poi: 6,
        id_lang: 1,
      },
      {
        key: 'subtitle',
        value:
          '[Musique 19ème siècle]<br>Au 19ème siècle, les pratiques artistiques et le regard porté sur le monde qui nous entoure subissent de profonds changements par l’arrivée de nombreuses innovations techniques. C’est durant ce siècle que l’on doit la naissance de la photographie et de la cinématographie. C’est également le développement et la commercialisation des premiers films.<br>Le film, à cette époque, ne se présente pas seulement sous forme roulée, [Bruit film roulé] notamment utilisé sur les Kodak, mais aussi en feuilles individuelles : le plan-film. C’est ce premier format qui apparaît sur le marché en 1884 pour remplacer la plaque de verre et qui se développe parallèlement à la bobine de film. D’abord inséré dans un châssis [Bruit glissement], il est par la suite également disponible dans un chargeur, le filmpack.<br>[Fin musique 19ème siècle]<br>[Musique américaine entrainante]<br>L’Anglais John Carbutt, après avoir vécu plusieurs années dans son pays natale, déménage à Chicago aux Etats-Unis et créé son entreprise, la Keystone Dry Plate Works. Il est le premier à développer et commercialiser ces feuilles de celluloïd non roulées. Malheureusement, celles-ci étaient trop rigides pour une utilisation conventionnelle et c’est pour cela que le format roulé fût créé. Les plan-films constituent un excellent substitut aux lourdes et fragiles plaques de verre et permettent de continuer à utiliser des appareils à plaques, comme les chambres de voyage, tout en profitant des avantages du film. En plus du développement de ce film, c’est également lui le créateur du film 35 mm dans les années 1890, format qui est devenu un standard dominant de nos jours par les photographes et producteurs de films.<br>Les plan-films sont constitués d’une feuille de celluloïd [Bruit film celluloïd] un peu plus épaisse et rigide que le film en rouleau. Ils se trouvent soit dans un châssis contenant généralement deux plan-films dos à dos, comme c’est le cas pour les plaques de verre, soit dans un chargeur dont la contenance est plus importante, le filmpack. Dans le second cas, les plan-films sont plus fins. Les feuilles de celluloïd enduites [Bruit pinceau] d’émulation ne sont en soit pas une nouveauté, car cette matière fût déjà préconisée, mais en raison défaut de la matière, leurs résultats n’étaient que trop peu prometteur. Le succès des films de M. Carbutt résulte principalement de l’obtention d’un approvisionnement en celluloïd clair et semblable à du verre, exempt de défauts et uniformément mince ; et en second lieu, de la rugosité de la surface si légère et si uniforme qu’elle permette à l’émulsion d’adhérer correctement, sans toutefois altérer la transparence du milieu.<br>[Fin musique américaine entrainante] ',
        id_poi: 7,
        id_lang: 1,
      },
      {
        key: 'description',
        value:
          'Le plan-film se présente sous une forme différente du film original. Au lieu d’être sous forme roulée, il est sous forme de feuille de celluloïd individuelle. Ces feuilles peuvent soit se trouver dans un châssis ayant une contenance de 2 plan-films soit être dans un chargeur d’une contenance plus élevée. Ce chargeur est le filmpack. L’avantage est que sous ce format, ils avaient un substitut plus léger que les plaques de verre plus lourdes et plus fragiles.',
        id_poi: 7,
        id_lang: 1,
      },
      {
        key: 'subtitle',
        value: '',
        id_poi: 8,
        id_lang: 1,
      },
      {
        key: 'description',
        value:
          'Les photographies aériennes ont longtemps été un challenge. Les premières ont été faîtes lors d’un vol en ballon par Nadar en 1858. Quelques dizaines d’années plus tard, une autre idée plutôt particulière a été mise en pratique. Un appareil photo spécial pouvant être porté par des pigeons. A l’origine utilisé pour contrôler le trajet effectué par les voyageurs devant délivrer des messages. Julius Neubronner élabore un second appareil : le Doppel-Sport. Une impressionnante conception pouvant prendre des photos panoramiques incurvées de 3x8cm. Tout ça grâce à un objectif tournant composé également d’un déclencheur à retardement',
        id_poi: 8,
        id_lang: 1,
      },
      {
        key: 'subtitle',
        value: '',
        id_poi: 9,
        id_lang: 1,
      },
      {
        key: 'description',
        value:
          'Durant toutes ces années, l’appareil photo n’a eu de cesse de s’améliorer et de révolutionner son utilisation. La plus marquante est celle liée aux téléphones portables. La photographie est maintenant dans un nouveau cap: la culture de l’instant en privilégiant le temps court de la communication, promouvoir l’instantané. Maintenant encore plus particulièrement grâce aux smartphones, ce marché a presque réduit à néant le marché de l’appareil photo numérique.',
        id_poi: 9,
        id_lang: 1,
      },
      {
        key: 'subtitle',
        value:
          '[Musique futuriste]<br>La révolution numérique est en cours depuis quelques années. On constate des progrès dans ce domaine de jour en jour. Bientôt, le traitement des images numériques, les nouvelles optiques et nouveaux capteurs donneront des résultats inimaginables à l’heure actuelle.<br>Toutefois, le processus de “création” d’une image numérique n’est pas si simple. En effet, pour arriver aux résultats que nous connaissons tous, ces images subissent quelques opérations complexes.<br>Pour commencer, elle se forme grâce à la capacité du capteur en silicium de produire un courant électrique [Bruit électrique] lorsqu’il reçoit de la lumière. A ce stade, ce n’est pas encore une image, c’est un amas d’information devant être structuré. Chaque point de cette photographie “naissante” doit être codé en nombres. C’est une conversion en binaire qu’on pourrait sobrement définir comme le langage des ordinateurs. Cette conversion permet à chaque point de l’image de devenir un pixel [Son pixel], soit la représentation numérique d’un point de l’image. Ensemble, ces multiples pixels vont encore subir de nombreuses opérations mathématiques pour devenir une photographie numérique.<br>Ces différentes étapes de traitement de l’image numérique sont illustrées grâce aux 5 images présentées dans la vitrine devant vous.<br>[Fin musique futuriste]<br>[Ambiance laboratoire]<br>La rétine numérique est donc ce bel objet brillant [Bruit carillon]. Le vrai nom de cet objet est “Wafer” et ça n’est pas un objet courant. D’ordinaire sous cette forme, il ne quitte pas les laboratoires de production. Celui-ci a été offert par Fairchild Imaging qui n’est autre que le fabricant historique des premiers capteurs photographiques CCD.<br>Pour revenir à l’objet, il est en général placé au cœur de l’appareil photo [Bruit matériaux] et sert principalement à remplacer le film. Il est constitué d’une multitude de microstructures [Bruit métal déposé] déposées sur un matériau au comportement électrique particulier. Ce matériau est un semi-conducteur et c’est du silicium. On peut apercevoir directement les 3 capteurs sur la rétine. Ils sont entourés d’autres circuits [Bruit circuit électrique] qui seront ensuite découpés [Son fil électrique découpé] pour être installés dans un instrument photographique.<br>[Fin ambiance laboratoire] ',
        id_poi: 10,
        id_lang: 1,
      },
      {
        key: 'description',
        value:
          'Cet objet s’appelle un “Wafer” ce qui signifie “Gaufrette” en anglais. Il contient 3 capteurs (les 3 carrés), autour sont diposés des circuits. Le tout sera ensuite découpés pour être installé dans un instrument photographique. Le carré du centre fait 61,4mm et contient 4096 lignes comptant chacune 4096 photorécepteurs d’une taille de 15 microns. Les deux autres carrés font 30,72mm et donc disposent d’une capacité 2048x2048 photorécepteurs.',
        id_poi: 10,
        id_lang: 1,
      },
      /*
      //Anglais
      */
      {
        key: 'subtitle',
        value:
          '[Person speaking in Italian]<br>[Seagull cry]<br>[Venice atmosphere (water noise, person speaking Italian)]<br><br>Let’s head under the Italian sun, in 1857, to meet two photographers: Carlo Ponti, who invented the megaletoscope [Noise box], and Carlo Naya, a pioneer of photography in Italy [Camera release sound]. Together, they will set up a photo studio in Venice. Ponti edits Naya’s work and he publishes and distributes his views of Venice [Bell sounds]. The two partners became the most famous photographers in the city. This collaboration, which was fruitful at first, ended badly in 1868 due to a controversy.<br><br>[End of Venice atmosphere]<br>[Suspenseful music]<br><br>It all began when Ponti developed an XXL version of the alethoscope called the megalethoscope. It allows to visualize photos with a filter simulating a day or a night effect while having the possibility to enlarge them. The two collaborators were very happy with the results obtained with this improved technology.<br>But during the adhesion of Venice to Italy in October 1866, the administration was largely affected and there was confusion at the legislative level. Because of this, the exclusivity privilege of the device dropped, and Naya took advantage of it to take ownership of the invention. Ponti, feeling betrayed, tried to have Naya condemned and to recover the monopoly of his invention at the same time.<br>This led to the studio closing and legal proceedings being taken. Naya opened his own studio in St. Mark’s Square to continue selling his photographs. The lawsuits continued until his death.<br><br>[End of suspenseful music]<br>[Italian music]<br><br>This camera, which caused such a stir, had a particularly clever mechanism that allowed the body to turn to allow vertical photography. To use the "day" filter, the shutters on the side opened [Wooden flap noise], which let so called natural light enter onto the photograph. Regarding the "night" filter, while the device faces a light source, the side shutters close [Wooden flap noise] and the one at the back opens. Then a colored nocturnal décor appears in transparency. We can thus arrange a completely different atmosphere.<br><br>[End of Italian music]',
        id_poi: 1,
        id_lang: 2,
      },
      {
        key: 'description',
        value:
          'The megalethoscope is an enlarged version of a device already existing at the time: the alethoscope. It was an optical apparatus for large-format photographic images. The megalethoscope had a day effect filter and a night effect filter while allowing to view greatly enlarged images. It is accompanied by about twenty boards of about 30x40cm with various effects.',
        id_poi: 1,
        id_lang: 2,
      },
      {
        key: 'subtitle',
        value:
          '[Parisian music]<br><br>Vincent Chevalier, whose workshop was in Paris, his son Charles, and his grandson Arthur, opticians from father to son, revolutionized the world of photography. It all began when Charles worked with his father as an apprentice from 1819 to 1821 to learn how to make brass frames. [Brass frames noise]<br><br>[End of Parisian music]<br>[Upbeat background music]<br><br>In 1820, Vincent and Charles set about building a new model of the camera obscura, which means dark room in Latin. When light enters through a small opening in the dark box, a projection of the object appears on the opposite wall facing the hole. This was a fruitful period for Charles and his father. They began to add a meniscus prism, tinted spectacles, and microscope lenses to their camera obscura model.  So they were, with Daguerre and Niepce, involved in the early stages of photography.<br>In front of you, you will find an optic and a chamber with drawers [Drawer noise]. The optic, which is called "combined glass", allows optical aberrations to be corrected using lenses of different glasses. This lens earned Charles a prize from the "Société d’encouragement" in 1842. [Applause]<br>The chamber with drawers, on the other hand, allows to take pictures. The front side supports a combined glass lens and the back side slides [Sliding noise] to focus on a ground glass. The latter is then replaced by another plate when the picture is taken. [Noise plate in slot]<br><br>[End of upbeat background music]',
        id_poi: 2,
        id_lang: 2,
      },
      {
        key: 'description',
        value:
          'Famous opticians of Paris, the Chevalier family had a store containing different versions of the famous Camera Obscura. Besides, Louis-Jacques-Mandé Daguerre, fervent user of this camera in his job as a painter as well as a theater decorator, was part of their clientele. Colonel Niépce will also end up in this store because of his parent’s work. All together, they contributed to a treaty concerning the official announcement of the discovery of photography in 1839.',
        id_poi: 2,
        id_lang: 2,
      },
      {
        key: 'subtitle',
        value:
          '[Laboratory music]<br><br>We are in 1840, William Talbot has just discovered the "calotype", a process allowing to obtain a direct paper negative and to reproduce positive images. This is the basis of modern film photography. Research followed this discovery in order to improve the quality of the images and their sensitivity to light.<br>Based on this research the Englishman Frederick Scott Archer discovers 10 years later wet collodion, allowing a much better image quality. It is a sticky substance [Sound of sticky substance] preserved in liquid form or as a film once it has evaporated. We will look at this method and how it was used.<br><br>[End of laboratory music]<br>[Laboratory atmosphere]<br><br>The photographer had to cover [Brush noise] glass plate with a mixture of silver and collodion, away from the light. The plate was then inserted into a frame [Insert frame noise] and exposed in the camera for the shot. A negative was obtained on the glass, which was taken to the studio to make prints on paper. The collodion had to remain wet from the preparation of the plate up until the development of the negative.<br><br>[End of laboratory atmosphere]<br>[Windy outdoor atmosphere]<br><br>Because the plate had to be developed on the spot, this photography is similar to "snapshots". If the view isn’t good, he must start all over again from a new glass.<br>For these reasons, collodion photography is complicated outdoors. This did not stop some photographers from taking on the challenge. They had to take their laboratory with them in addition to the bulky equipment [Equipment noise]. It was possible to shoot scenes outdoors with the help of an assistant and with a lot of planning.<br>One object that made it easier for them to shoot outside was the laboratory tent, which is on the left of the stage, covered with a yellow cloth. This cloth is a reconstruction based on documents from the 19th century.  The device was built in such a way that ventilation was possible: it was placed in the shade to avoid the air heating up inside. The fabric covering the camera was yellow on the outside and black on the inside: yellow does not heat up easily under the influence of the sun’s rays and offers great resistance to the passage of the light rays that act upon the photographic preparations.<br>Some photographers preferred to travel in a trolley [Trolley noise], rather than a tent, in which they carried all their equipment.<br><br>[End of windy outdoor atmosphere]',
        id_poi: 3,
        id_lang: 2,
      },
      {
        key: 'description',
        value:
          'The quality of the image having undergone a fulgurating progression, the photographers quickly turned to the outdoor shots. These offered a new challenge: to take all the laboratory equipment on the field. Indeed, the glass plate had to be processed at the time of the shooting and the collodion had to remain wet. All of their equipment was therefore necessary. With this technology, we are getting closer to instantaneous pictures.',
        id_poi: 3,
        id_lang: 2,
      },
      {
        key: 'subtitle',
        value:
          '[Slow piano music]<br><br>At the very beginning, the camera was often linked to the presence of a tripod [Tripod noise], which helped frame the shot. Gradually, the need to be a little more flexible and to separate from the tripod without impacting the image quality too much emerged. This is how instant photography was born. It was therefore necessary to find a solution to keep an eye on the subject.<br>What you have in front of you was one of the first methods. These are two superimposed chambers [Camera on table noise]; the upper chamber is used for aiming and the lower chamber is used for photo shooting.<br><br>[End of slow piano music]<br>[Upbeat background music]<br><br>In addition to the fact that this method was not very practical, it did not allow enough precision in the photo framing. Fortunately, improvements have been carried out. Based on the work of optician Johann Zahn in 1686, who demonstrated how an image could be deflected to get a glimpse of it through mirrors, Thomas Sutton, an English inventor and photographer, invented in 1861 the first single-lens reflex camera. Since then, SLR cameras have continued to improve.<br><br>[End of upbeat background music]',
        id_poi: 4,
        id_lang: 2,
      },
      {
        key: 'description',
        value:
          'Two chambers that overlap to allow the photographer the possibility of using the first one for the aiming and the second one for the shooting. This is a clever solution that was put in place to be able to separate from the tripod while keeping the possibility to make a good framing. It was followed by the use of mirrors to deviate the image and allow the photographer to have a glimpse of it.',
        id_poi: 4,
        id_lang: 2,
      },
      {
        key: 'subtitle',
        value:
          '[Bell sound]<br>[Paris alley atmosphere]<br><br>Alphonse Bertillon was born in 1853 in the alleys of Paris, a year after Louis-Napoleon Bonaparte became the Napoleon III sovereign. He is the grandson of a demographer and son of the director of statistics for the department of the Seine. He abandoned his medical studies, and his father helped him integrate the Paris police headquarters in 1879.<br><br>[End of Paris alley atmosphere]<br>[Atmosphere office]<br><br>After having had a good time classifying criminals files, [Paper sound] he got inspired by the work of the Belgian statistician and humanist Adolphe Quetelet to develop his serial criminals identifying method, which is simpler and more plausible than the withering which was abolished in 1832. Let’s see how Alphonse Bertillon’s method was applied at the time!<br><br>[End of office atmosphere]<br>[Tall Building Atmosphere]<br><br>With his hands tied, a criminal enters the Paris police headquarters and is directed straight to the identification service run by Alphonse Bertillon. [footsteps sound]<br><br>He sits on a chair exactly like the one you have in front of you. [wooden chair creaking] At a certain distance is a camera which will be used to photograph the prisoner from the front and in profile under a particular light. It is then a matter of filling out data sheets [Paper sound] that includes a certain number of measures that make it possible to have the dimensional particularities of the prisoner.<br><br>The rise of this technique in France, called judicial anthropometry, is largely explained by the adoption of the French law on the repeat offender’s relegation in 1885.<br>It was then made all over the world and served to solve a good number of legal cases.<br><br>[End of large building atmosphere]',
        id_poi: 5,
        id_lang: 2,
      },
      {
        key: 'description',
        value:
          'This chair is part of the method of identification of recidivist criminals set up by Alphonse Bertillon. This method consists of a biometric analysis accompanied by photographs of the face and profile taken under strict lighting, while being at a specific distance from the chair. It then spread throughout the world and was used to solve a good number of judicial cases.',
        id_poi: 5,
        id_lang: 2,
      },
      {
        key: 'subtitle',
        value:
          '[Music hectic atmosphere.]<br><br>Since 1789, long periods of increases and decreases in prices followed one another for the French. After the 1848 revolution, Louis-Napoleon Bonaparte became the first president of the French Republic before restoring the Empire and becoming the French Emperor. During this turbulent period, the talents of a great photographer emerged. <br><br> [End of music hectic] <br> [Parisian alley atmosphere] <br><br> Son of a cloth merchant, Eugène Adolphe Disdéri was born in 1819 in Paris. For several years, he tried various jobs, first as a dramatic actor and then as a draftsman [Pencil noise]. He even started a hosiery business that didn’t last long.<br>After going bankrupt, he left for Brest where he took up photography and created his first workshop in 1849. Three years later, he abandons his wife and moves to Nîmes. He works there as a photographer and learns the collodion techniques. <br> Back in Paris in January 1854, he invented the new multi-lens camera that uses the wet collodion technique. Here is what this method consists of.<br><br> [End of Parisian alley atmosphere] <br> [Laboratory atmosphere] <br><br> First, the photographer mixes the chemicals. [Liquid noise] Then he prepares the glass plate [Glass noise], the photograph support, with the casting of the Collodion. The photographer must immediately start shooting. Finally, he must quickly carry out the development under red inactinic light.[LED light sound] <br>With the invention that Disdéri made, the photographer goes through these steps only once to produce six shots on the same plate instead of one. This allowed the reduction of photography prices [Change noise] for customers and the portraits’ reproducibility. The photos that result from this process have a small format, quite close to that of the business card. Disdéri quickly patented [Signing sound] this concept during the same year, and he enjoyed a good period of activity before going bankrupt again in 1856.<br><br> [End of laboratory atmosphere] <br> [Soft music] <br><br> In 1859, as he set off to war in Italy [Walking on grass sound], Napoleon III interrupted his march for a photography session in Disdéri’s studio. After this visit, he becomes world-famous.<br>At that time, it was not only the multitude of poses on a single photo that attracted the public, but also the delicacy of the staging that carried out in the studio, which had the aim of creating an identity for the person whom the photo was taken for. <br><br> [End of soft music]',
        id_poi: 6,
        id_lang: 2,
      },
      {
        key: 'description',
        value:
          'The business card portrait was born in 1854 thanks to the work of Eugene Adolphe Disdéri. He is a French photographer who used the wet collodion technique to invent a new multi-objective camera. It allows the realization of several exposures using the same plate. One of the secrets of the success of this concept is the importance devoted to the staging during the shooting to highlight the status of the model.',
        id_poi: 6,
        id_lang: 2,
      },
      {
        key: 'subtitle',
        value:
          '[19th century music]<br><br>In the 19th century, artistic practices and the way we looked at the world around us underwent profound changes with the arrival of numerous technical innovations. It is during this century that we owe the birth of photography and cinematography. It is also the development and marketing of the first films.<br>The film, at that time, is not only presented in rolled form [Rolled film noise], used on Kodak, but also in individual sheets: the film sheet. It was this first format that appeared on the market in 1884 to replace the glass plate and which developed alongside the film reel. First inserted in a frame [Sliding noise] , it is then also available in a charger, the filmpack.<br><br>[End of 19th century music]<br>[American upbeat music]<br><br>After having lived for several years in his native country, The Englishman John Carbutt moved to Chicago in the United States and created his company, the Keystone Dry Plate Works. He is the first to develop and market these unrolled celluloid sheets. Unfortunately, these were too rigid for conventional use and that is why the rolled format was created. Film sheets are an excellent substitute for heavy and fragile glass plates and allow you to continue to use plate devices, such as travel chambers while enjoying the benefits of film. In addition to the development of this film, he was also the creator of 35 mm film in the 1890s, a format that has become a dominant standard today by photographers and film producers.<br>Film sheets are made of a sheet of celluloid [Celluloid sheet noise] that is a little thicker and more rigid than roll film. They are either in a box generally containing two film planes back-to-back, as is the case for glass plates, or in a charger with a larger capacity, the filmpack. In the second case, the film planes are finer. The sheets of celluloid coated [Brush noise] with emulation are not in themselves a novelty, because this material was already recommended, but due to a defect in the material, their results were only too unpromising. The success of Mr. Carbutt’s films resulted primarily from obtaining a supply of clear, glass-like celluloid that was free of flaws and blemishes; and secondly, the roughness of the surface so light and so uniform that it allows the emulsion to adhere correctly, without however altering the transparency of the medium.<br><br>[End of American upbeat music]',
        id_poi: 7,
        id_lang: 2,
      },
      {
        key: 'description',
        value:
          'The sheet film is in a different form to the original film. Instead of being in rolled form, it is in individual celluloid sheets. These sheets can either be in a frame with a capacity of 2 sheet films or in a magazine with a higher capacity. This magazine is the filmpack. The advantage with this format is that they had a lighter substitute for the heavier and more fragile glass sheets.',
        id_poi: 7,
        id_lang: 2,
      },
      {
        key: 'subtitle',
        value: ' ',
        id_poi: 8,
        id_lang: 2,
      },
      {
        key: 'description',
        value:
          'Aerial photography has long been a challenge. The first ones were made during a balloon flight by Nadar in 1858. A few decades later, another special idea was put into practice. A special camera that could be carried by pigeons. Originally used to monitor the route taken by travellers who had to deliver messages. Julius Neubronner developed a second camera: The Doppel-Sport. An impressive design that could take curved panoramic pictures of 3x8cm. All this thanks to a revolving lens which also has a delayed shutter release.',
        id_poi: 8,
        id_lang: 2,
      },
      {
        key: 'subtitle',
        value: ' ',
        id_poi: 9,
        id_lang: 2,
      },
      {
        key: 'description',
        value:
          'Over the years, the camera has continued to improve and revolutionise its use. The most striking one is that linked to mobile phones. Photography is now in a new phase: the culture of the moment by privileging the short time of communication, promoting the instantaneous. Now even more thanks to smartphones, this market has almost wiped out the digital camera market.',
        id_poi: 9,
        id_lang: 2,
      },
      {
        key: 'subtitle',
        value:
          '[Futuristic music]<br><br>The digital revolution has been underway for a few years. We are seeing progress in this area day by day. Soon, digital image processing, new optics, and new sensors will give results unimaginable today.<br>However, the process of "creating" a digital image is not so simple. Indeed, to achieve the results that we all know, these images undergo some complex operations.<br>First, it forms due to the ability of the silicon sensor to produce an electric current [Electric sound] when it receives light. At this stage, it’s not yet an image, it’s a mass of information that needs to be structured. Each point of this "incipient" photograph must be coded in numbers. It is a conversion into binary which could simply be defined as the language of computers. This conversion allows each point in the image to become a pixel [pixel sound], the digital representation of a point in the image. Together, these multiple pixels will still undergo many mathematical operations to become digitals photographs.<br><br>[End of futuristic music]<br>[Laboratory atmosphere]<br><br>These different stages of digital image processing are illustrated in the 5 images presented in the showcase in front of you.<br>The digital retina is this beautiful shiny object [Carillon sound]. The real name of this item is "Wafer", and it is not a common item. Usually, in this form, it does not leave the production laboratories. This was offered by Fairchild Imaging, which is the historical manufacturer of the first CCD photographic sensors.<br>Talking about the object, it is generally placed at the heart of the camera [Material noise] and is mainly used to replace the film. It is made up of a multitude of microstructures deposited on a material [Small metal sound] with a particular electrical behavior. This material is a semiconductor, and it is silicon. You can directly see the 3 sensors on the retina. They are surrounded by other circuits [Electrical circuit noise] which will then be cut out [Electrical wire cut out sound] to be installed in a photographic instrument.<br><br>[End of laboratory atmosphere]',
        id_poi: 10,
        id_lang: 2,
      },
      {
        key: 'description',
        value:
          'This object is called a "Wafer". It contains 3 sensors (the 3 squares), around which circuits are placed. The whole thing will then be cut up to be installed in a photographic instrument. The centre square is 61.4mm long and contains 4096 lines, each with 4096 photoreceptors of 15 microns in size. The other two squares are 30.72mm and therefore have a capacity of 2048x2048 photoreceptors.',
        id_poi: 10,
        id_lang: 2,
      },
    ]);
  }
}
