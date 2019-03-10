const forEach = require('lodash/forEach');

// Importing the trais for the dragons from the json file
const TRAITS = require('./traits');

// Creating default fallback values if they are not supplied to the new instance
const DEFAULT_PROPERTIES = {
    nickname: 'unnamed',
    get birthdate() {
        return new Date();
    },
    get randomTraits() {
        const traits = [];
        // Looping through the traits and generating random traits by default
        forEach(TRAITS, trait => {
            // The trait type from the traits json
            const traitType = trait.type;
            // The trait value from the traits json
            const traitValues = trait.values;
            // Finding a random trait that we will using
            const traitValue =
                traitValues[Math.floor(Math.random() * traitValues.length)];

            // Pushing the trait to the traits array
            traits.push({
                traitType,
                traitValue
            });
        });

        return traits;
    }
};

// Creating the Dragon Class
class Dragon {
    constructor({ birthdate, nickname, traits } = {}) {
        this.birthdate = birthdate || DEFAULT_PROPERTIES.birthdate;
        this.nickname = nickname || DEFAULT_PROPERTIES.nickname;
        this.traits = traits || DEFAULT_PROPERTIES.randomTraits;
    }
}

// Exporting the dragon class to use in other files
module.exports = Dragon;
