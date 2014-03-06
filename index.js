module.exports = function(Model) {

  Model.prototype.updateAccessors = function(){
    for(var prop in this.props) {
      if(this[prop] != null) continue;
      Object.defineProperty(this, prop, {
        get: function(){
          return this.get(prop);
        },
        set: function(val) {
          this.set(prop, val);
        }
      });
    }
  };

  Model.on('construct', function(model){
    model.updateAccessors();
  });

};