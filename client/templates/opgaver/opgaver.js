  Template.opgaverTemplate.title = function() {
      return "opgaver fra remote service til mongodb til browser"
  };

  Template.opgaverTemplate.opgave = function() {
      return opgaver.find();
  };