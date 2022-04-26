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
          '[Musique laboratoire]<br>Nous sommes en 1840, William Talbot vient de découvrir le “calotype”, procédé permettant d’obtenir un négatif papier direct, et reproduire des images positives. C’est la base de la photographie argentique moderne. Des recherches suivent cette découverte afin d’améliorer la qualité des images ou encore leurs sensibilités à la lumière.<br>A la suite de ces recherches, 10 ans plus tard, l’anglais Frederick Scott Archer découvre le collodion humide, permettant une bien meilleure qualité de l’image. C’est une substance collante [Bruit substance collante] conservée sous forme liquide ou sous forme de film une fois évaporée. Nous allons nous pencher sur cette méthode et son utilisation.<br>[Fin musique laboratoire]<br>[Ambiance laboratoire]<br>A l’abris de la lumière, le photographe devait enduire une plaque [Bruit pinceau] de verre d’un mélange d’argent et de collodion. La plaque est, ensuite, insérée dans un châssis [Bruit plaque châssis] et exposée dans la chambre photographique (l’appareil photographique) pour la prise de vue. Un négatif était obtenu sur le verre, qui était emporté [Bruit pas] dans l’atelier afin de réaliser des épreuves sur papier. Le collodion devait impérativement rester humide de la préparation de la plaque au développement du négatif.<br>[Fin ambiance laboratoire]<br>[Ambiance extérieur vent]<br>Parce qu’il faut développer la plaque sur place, cette photographie se rapproche des « instantanés ». Si la vue n’est pas bonne, il lui faut tout recommencer à partir d’une nouvelle plaque de verre.<br>Pour ces raisons, la prise au collodion est compliquée à l’extérieur. Cela n’a pas empêché certains photographes de relever le défi. Il leur fallait emporter leur laboratoire en plus du matériel encombrant [Bruit matériel]. Il était possible de prendre des scènes à l’extérieur à l’aide d’un assistant et avec une grande planification.<br>Un objet leur facilitant la prise de vue à l’extérieur est la tente-laboratoire, se trouvant sur la gauche de la scène, recouvert d’une étoffe jaune. Cette tenture est une reconstitution constituée sur la base de documents du XIXe siècles.  L’appareil était construit de tel sorte à ce que l’aération fut possible : on les plaçait à l’ombre pour éviter l’échauffement intérieur de l’air. L’étoffe qui la couvrait était jaune à l’extérieur et noire à l’intérieur : le jaune s’échauffe peu sous l’influence des rayons du soleil et oppose une grande résistance au passage des rayons de lumière qui agissent sur les préparations photographiques.<br>Certains photographes préfèrent se déplacer en chariot [Bruit chariot], plutôt qu’avec une tente, chariot dans lequel ils transportent tout leur matériel.<br>[Fin ambiance extérieur vent]',
        id_poi: 4,
        id_lang: 1,
      },
      {
        key: 'description',
        value: '',
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
        value: '',
        id_poi: 5,
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
    ]);
  }
}
