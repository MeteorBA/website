Meteor.startup(function() {
  if(Meteor.isClient) {
    SEO.config({
      title: 'Meteor Buenos Aires',
      meta: {
        'description': 'Grupo de desarrolladores de MeteorJS en Buenos Aires. Nos juntamos una vez al mes, te esperamos el próximo!'
      },
      og: {
        'image': Meteor.absoluteUrl('share-image.png')
      },
      ignore: {
        meta: ['fragment', 'viewport', 'msapplication-TileColor', 'msapplication-TileImage', 'msapplication-config'],
        link: ['stylesheet', 'apple-touch-icon', 'rel', 'shortcut icon', 'icon']
      }
    });
  }
});
