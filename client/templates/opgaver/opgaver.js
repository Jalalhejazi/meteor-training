  config = {
      url: 'http://rest.supermobile.dk/opgaver/.json',
      sessionKey: 'opgave',
      getSession: function() {
          return Session.get(this.sessionKey);
      }
  };

  Template.opgaverTemplate.title = function() {
      return "opgaver fra remote service til mongodb til browser"
  };

  Template.opgaverTemplate.opgave = function() {

      hentMineOpgaverFraService(config);

      return config.getSession();

  };

   // send ajax request og returnere promise object
  var hentMineOpgaverFraService = function(config) {

      // On the client, 
      // HTTP.get() must be used asynchronously by passing a callback.

      HTTP.get(config.url, function(error, success) {
          console.log("HTTP.get onSuccess> ");
          console.dir(success.data.opgaver);

          Session.set(config.sessionKey, success.data.opgaver);
          mongodb_opgaver_insert(success.data.opgaver)

      });

  };


   // denne function har et ansvar: at gemme alle opgaver i mongodb
   // hvis ikke allerede har gjordt det før.
   // så det ikke bliver for komplekst. vi kan altid reset mongodb
   // Reset mongodb fra command-line> meteor reset 
   // Test i browser console med> opgaver.find().fetch()
  var mongodb_opgaver_insert = function(opgaver) {

      //for at undgå at fylde mongodb med redundant, sikres med count = 0
      if (window.opgaver.find().count() === 0) {
          // Der bliver oprettet kun én række i mongodb 
          // rækken kan indeholde array of objects  [{},{},{}]  
          window.opgaver.insert(opgaver);
      };

  };