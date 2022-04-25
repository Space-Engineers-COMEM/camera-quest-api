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
    ]);
  }
}
