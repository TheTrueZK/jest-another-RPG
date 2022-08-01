function Player(name = '') {
    this.name = name;
  
    this.health = Math.floor(Math.random() * 10 + 95);
    this.strength = Math.floor(Math.random() * 5 + 7);
    this.agility = Math.floor(Math.random() * 5 + 7);

    Player.prototype.isAlive = function() {
        if (this.health === 0) {
          return false;
        }
        return true;
      };
  }

  Player.prototype.reduceHealth = function(health) {
    this.health -= health;
  
    if (this.health < 0) {
      this.health = 0;
    }
  };
  
  module.exports = Player;