window.onload = function() {
        new Vue({
        el: '#app',
        data: {
            playerHealth: 100,
            monsterHealth: 100,
            isRunning: false,
            healCount: 0,
            specialAttackCount: 0,
            turns:[]
        },
        beforeCreate: function() {
            console.log("before created");
        },
        beforeMount: function() {
            console.log("before mounted")
        },
        mounted: function() {
            console.log("mounted");
        },
        beforeUpdate: function(){
            console.log("Before update")
        },
        updated: function() {
            console.log("Updated")
        },
        beforeDestroy: function() {
            console.log("before destroy");
        },
        destroyed: function() {
            console.log("destroyed");
        },
        methods: {
            beforeCreate: function() {
                console.log("before created");
            },
            beforeMount: function() {
                console.log("before mounted")
            },
            mounted: function() {
                console.log("mounted");
            },
            beforeUpdate: function(){
                console.log("Before update")
            },
            updated: function() {
                console.log("Updated")
            },
            beforeDestroy: function() {
                console.log("before destroy");
            },
            destroyed: function() {
                console.log("destroyed");
            },
            startGame: function() {
                this.isRunning = true;
                this.playerHealth = 100;
                this.monsterHealth = 100;
                this.turns = [];
                this.healCount = 0;
                this.specialAttackCount = 0;
            },
            attack: function() {
                var damage = this.calculateDamage(10, 3)
                this.monsterHealth -= damage;
                this.turns.unshift({
                    isPlayer: true,
                    text: 'Player his monster for ' + damage
                })
                if(this.checkGameWin()) {
                    return;
                }

               this.monsterAttacks();
            },
            specialAttack: function() {
                this.specialAttackCount++;
                var damage = this.calculateDamage(20, 10)
                this.monsterHealth -= damage;
                this.turns.unshift({
                    isPlayer: true,
                    text: 'Player his monster hard for ' + damage
                })
                if(this.checkGameWin()) {
                    return;
                }

                this.monsterAttacks();
            },
            heal: function() {
                this.healCount++;
                this.playerHealth += 10;
                this.playerHealth = this.playerHealth > 100 ? 100 : this.playerHealth;
                this.turns.unshift({
                    isPlayer: true,
                    text: 'Player heals for ' + 10
                })
                this.monsterAttacks();
            },
            giveUp() {
                this.playerHealth = 0;
                this.isRunning = false;
                this.finishGame('You gave up!!. Do you wanna start a new game?')

            },
            calculateDamage: function(max, min) {
                return Math.max(Math.floor(Math.random() * max) + 1, min);
            },
            checkGameWin: function() {
                if(this.monsterHealth <= 0 ) {
                   return this.finishGame('You won!!. Do you wanna start a new game?');
                } else if (this.playerHealth <= 0 ) {
                    return this.finishGame('You lost!!. Do you wanna start a new game?');
                }
                return false;
            },
            finishGame: function(val) {
                if(confirm(val)){
                    this.startGame()
                }
                else {
                    this.isRunning = false
                }
                return true;
            },
            monsterAttacks: function() {
                var damage = this.calculateDamage(12, 5)
                this.playerHealth -=  damage;
                this.turns.unshift({
                    isPlayer: false,
                    text: 'Monster his monster for ' + damage
                })
                this.checkGameWin();
            }
        }
    })
}

