function createAssemblyLine() {
    let library = {
        hasClima: function(obj) {
            obj.temp = 21;
            obj.tempSettings = 21;
            obj.adjustTemp = function() {
                if (this.temp < this.tempSettings) {
                    this.temp++;
                } else if (this.temp > this.tempSettings) {
                    this.temp--;
                }
            };
        },
        hasAudio: function(obj) {
            obj.currentTrack = null;
            obj.nowPlaying = function() {
                if (this.currentTrack) {
                    console.log(`Now playing '${this.currentTrack.name}' by ${this.currentTrack.artist}`);
                }
            };
        },
        hasParktronic: function(obj) {
            obj.checkDistance = function(distance) {
                if (distance < 0.1 ) {
                    console.log("Beep! Beep! Beep!");
                } else if (0.1 <= distance < 0.25) {
                    console.log("Beep! Beep!");
                } else if (0.25 <= distance < 0.5) {
                    console.log("Beep!");
                } else {
                    console.log(" ");
                }
            };
        }
    };

    return library;
}
