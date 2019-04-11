var ThroughTheAges = ThroughTheAges || {};

ThroughTheAges.MainMenu = function(){};
ThroughTheAges.Help = function(){};
ThroughTheAges.Pause = function(){};
ThroughTheAges.LevelSelect = function(){};

ThroughTheAges.MainMenu.prototype = {
    create: function(){
        console.log("Entered main menu create function");
        //this.splash = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'MainMenu');
        //this.splash.anchor.setTo(0.5);
        this.game.stage.backgroundColor = '#888888';
        this.game.add.sprite(25, 25, 'Logo');
        this.PlayButton = this.game.add.button(this.game.world.centerX / 5, this.game.world.centerY, 'Button', this.playClick, this, 3, 0, 3);
        this.LevelSelectButton = this.game.add.button(this.game.world.centerX / 5, this.game.world.centerY * 1.25, 'Button', this.levelClick, this, 4, 1, 4);
        this.HelpButton = this.game.add.button(this.game.world.centerX / 5, this.game.world.centerY * 1.5, 'Button', this.helpClick, this, 5, 2, 5);
    },
    /*
    update: function(){
        if(this.game.input.activePointer.justPressed()){
            console.log(this.game.input.activePointer);
        }
    },
    */
    playClick: function(){
        console.log('Clicked on play button');
    },
    levelClick: function(){
        this.state.start('LevelSelect');
    },
    helpClick: function(){
        console.log('Entering help menu');
        this.state.start('Help');
    }
};

ThroughTheAges.Help.prototype = {
    create: function(){
        console.log('Help menu');
        this.game.stage.backgroundColor = '#DDDDDD';
        this.helpText = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'Help');
        this.helpText.anchor.setTo(0.5, 0.5);
        this.helpText.scale.setTo(0.75, 0.75);
    },
    update: function(){
        if(this.game.input.activePointer.justPressed()){
            this.state.start('MainMenu');
        }
    }
};

ThroughTheAges.LevelSelect.prototype = {
    create: function(){
        console.log("Entered Level Select create function");

    },
    update: function(){
        if(this.game.input.activePointer.justPressed()){
            // need to specify level somehow
            this.state.start('Running');
        }
    }
};

ThroughTheAges.Pause.prototype = {
    create: function(){
        console.log("Entered pause create function");
        this.splash = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'Help');
        this.splash.anchor.setTo(0.5);
    },
    update: function(){
        if(this.game.input.activePointer.justPressed()){
            this.state.start('MainMenu');
        }
    }
};