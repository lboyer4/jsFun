const { kitties } = require('./datasets/kitties');
const { clubs } = require('./datasets/clubs');
const { mods } = require('./datasets/mods');
const { cakes } = require('./datasets/cakes');
const { classrooms } = require('./datasets/classrooms');
const { breweries } = require('./datasets/breweries');
const { instructors, cohorts } = require('./datasets/turing');
const { bosses, sidekicks } = require('./datasets/bosses');
const { constellations, stars } = require('./datasets/astronomy');
const { weapons, characters } = require('./datasets/ultima');
const { dinosaurs, humans, movies } = require('./datasets/dinosaurs');






// SINGLE DATASETS
// =================================================================

// DATASET: kitties from ./datasets/kitties
const kittyPrompts = {
  orangeKittyNames() {
    // Return an array of just the names of kitties who are orange e.g.
    // ['Tiger', 'Snickers']

    const orangeCats = kitties.filter(kitty => kitty.color === 'orange');

    //first param of reduce is name of []
    const result = orangeCats.reduce( (names, kitty) => {
      return names.concat(kitty.name);
    }, []);
   
    return result;
    // Annotation:
    // Write your annotation here as a comment
  },
 
  sortByAge() {
    // Sort the kitties by their age
    const result = kitties.sort( (catA, catB) => (
      catA.age < catB.age ? 1 : -1
    ));

    return result;
    // Annotation:
    // Write your annotation here as a comment
  },

  growUp() {
    function growUp(kitty) {
      kitty.age = kitty.age + 2;
      return kitty;
    }

    const result = kitties.map(growUp);

    
    return result;
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: clubs from ./datasets/clubs
const clubPrompts = {
  membersBelongingToClubs() {
    // Create an object whose keys are the names of people, and whose values are
    // arrays that include the names of the clubs that person is a part of. e.g. 
    // {
    //   Louisa: ['Drama', 'Art'],
    //   Pam: ['Drama', 'Art', 'Chess'],
    //   ...etc
    // }
    
    // const result = clubs.reduce((acc, club) => {
    //   club.members.forEach(member => {
    //     if (!acc[member]) {
    //       acc[member] = [];
    //     } 
    //     acc[member].push(club.club);
    //   });
    //   return acc;
    // }, {});
    // return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: mods from ./datasets/mods
const modPrompts = {
  studentsPerMod() {
    // Return an array of objects where the keys are mod (the number of the module)
    // and studentsPerInstructor (how many students per instructor there are for that mod) e.g.
    // [
    //   { mod: 1, studentsPerInstructor: 9 },
    //   { mod: 2, studentsPerInstructor: 11 },
    //   { mod: 3, studentsPerInstructor: 10 },
    //   { mod: 4, studentsPerInstructor: 8 }
    // ]
    const result = mods.reduce(function(acc, mod) {
      const obj = {};
      obj.mod = mod.mod;
      obj.studentsPerInstructor = mod.students / mod.instructors;
      acc.push(obj);
      return acc;
    }, []);

    // const perInstructor = mods.map((currentMod) => {
    //     const newModElement = {};
    //     newModElement.mod = mod.mod;
    //     newModElement.studentsPerInstructor = mod.students / mod.instructors;
    //     return currentMod
    // })
    
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: cakes from ./datasets/cakes
const cakePrompts = {
  stockPerCake() {
    // Return an array of objects that include just the flavor of the cake and how
    // much of that cake is in stock e.g.
    // [ 
    //    { flavor: 'dark chocolate', inStock: 15 },
    //    { flavor: 'yellow', inStock: 14 },
    //    ..etc
    // ]

    var flavorsInStock = [];
    
    cakes.forEach(function(cake) {
      var newObj = {};
      newObj.flavor = cake.cakeFlavor;
      newObj.inStock = cake.inStock; 
      flavorsInStock.push(newObj);
    });

    const result = flavorsInStock;
    return result;

  
    // Annotation:

  },

  onlyInStock() {
    // Return an array of only the cakes that are in stock
    // e.g.
    // [
    //   {
    //   cakeFlavor: 'dark chocolate',
    //   filling: null,
    //   frosting: 'dark chocolate ganache',
    //   toppings: ['dutch process cocoa', 'toasted sugar', 'smoked sea salt'],
    //   inStock: 15
    // },
    // {
    //   cakeFlavor: 'yellow',
    //   filling: 'citrus glaze',
    //   frosting: 'chantilly cream',
    //   toppings: ['berries', 'edible flowers'],
    //   inStock: 14
    // },
    // ..etc
    // ]

    const result = cakes.filter(cake => cake.inStock > 0);
    return result;

    // Annotation:
    // Because we are looking to only show cakes that are instock, it makes sense to use the filter prototype.
    //So I attached filter to the array and asked it to look for cakes that had an inStock greater than 0 and because filter creates a new array on it's own I didnt have to use push or anything to make a new array of only cakes in stock
  },
  
  totalInventory() {
    // Return the total amount of cakes in stock e.g.
    // 59

    const result = cakes.reduce((acc, cake )=> acc += cake.inStock, 0);
    return result;

    // Annotation:
    // We use the .reduce prototype with the arguments of the accumilator 
    // and a dynamic name for each cake. Each cake is iriterated through
    // and the key instock is found and the value associated with it is added 
    // in to the accumulator, which is starting at 0.
  },

  allToppings() {
    // Return an array of all unique toppings (no duplicates) needed to bake
    // every cake in the dataset e.g.
    // ['dutch process cocoa', 'toasted sugar', 'smoked sea salt', 'berries', ..etc]

    const result = cakes.reduce((acc, cake) => {
      cake.toppings.forEach(topping => {
        if (!acc.includes(topping)) {
          acc.push(topping);
        }
      });
      return acc;
    }, []);
    
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  groceryList() {
    // I need to make a grocery list. Please give me an object where the keys are
    // each topping, and the values are the amount of that topping I need to buy e.g.
    // { 
    //    'dutch process cocoa': 1,
    //    'toasted sugar': 3,
    //    'smoked sea salt': 3,
    //    'berries': 2, 
    //    ...etc
    // }

    const result = cakes.reduce((acc, cake) => {
      cake.toppings.forEach(topping => {
        acc[topping] ? acc[topping]++ : acc[topping] = 1;
      });
      return acc;
    }, {});

    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: classrooms from ./datasets/classrooms
const classPrompts = {
  feClassrooms() {
    // Create an array of just the front-end classrooms. e.g.
    // [
    //   { roomLetter: 'A', program: 'FE', capacity: 32 },
    //   { roomLetter: 'C', program: 'FE', capacity: 27 },
    //   { roomLetter: 'E', program: 'FE', capacity: 22 },
    //   { roomLetter: 'G', program: 'FE', capacity: 29 }
    // ]

    const result = classrooms.filter(classroom => classroom.program === 'FE');
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  totalCapacities() {
    // Create an object where the keys are 'feCapacity' and 'beCapacity',
    // and the values are the total capacity for all classrooms in each program e.g.
    // { 
    //   feCapacity: 110,
    //   beCapacity: 96
    // }

    const result = classrooms.reduce(function(acc, classroom) {
      acc.feCapacity = acc.feCapacity || 0;
      acc.beCapacity = acc.beCapacity || 0;
      if (classroom.program === 'FE') {
        acc.feCapacity += classroom.capacity ;
      } else {
        acc.beCapacity += classroom.capacity;
      }
      return acc;
    }, {});
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  sortByCapacity() {
    // Return the array of classrooms sorted by their capacity (least capacity to greatest)

    const result = classrooms.sort( ( classA, classB) => {
      return classA.capacity - classB.capacity;
    });

    return result;

    // Annotation:
    // the prompt gives a hint that they want the array to be *sorted* 
    // least to greatest. So we know we will be using the sort prototype. This needs two paramaters that will be compared and then sorted. Because it is a two line function we use return.
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: breweries from ./datasets/breweries
const breweryPrompts = {
  getBeerCount() {
    // Return the total beer count of all beers for every brewery e.g.
    // 40

    const result = breweries.reduce((acc, brewery) => {
      return acc += brewery.beers.length;
    }, 0);

    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  getBreweryBeerCount() {
    // Return an array of objects where each object has the name of a brewery
    // and the count of the beers that brewery has e.g.
    // [
    //  { name: 'Little Machine Brew', beerCount: 12 },
    //  { name: 'Ratio Beerworks', beerCount: 5},
    // ...etc.
    // ]

    const result = breweries.reduce((acc, brewery) => {
      var newObj = {};
      newObj.name = brewery.name; 
      newObj.beerCount = brewery.beers.length;
      acc.push(newObj);
      return acc;
    }, []);
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  findHighestAbvBeer() {
    // Return the beer which has the highest ABV of all beers
    // e.g.
    // { name: 'Barrel Aged Nature\'s Sweater', type: 'Barley Wine', abv: 10.9, ibu: 40 }
    const allBeers = breweries.reduce((acc, brewery) => {
      brewery.beers.forEach(beer => {
        acc.push(beer);
      });
      return acc;
    }, []);

    const sortedBeers = allBeers.sort( ( beerA, beerB) => {
      return beerA.abv < beerB.abv ? 1 : -1;
    });

    return sortedBeers[0];

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DOUBLE DATASETS
// =================================================================

// DATASET: instructors, cohorts from ./datasets/turing
const turingPrompts = {
  studentsForEachInstructor() {
    // Return an array of instructors where each instructor is an object
    // with a name and the count of students in their module. e.g. 
    // [
    //  { name: 'Pam', studentCount: 21 },
    //  { name: 'Robbie', studentCount: 18 }
    // ]


    const result = instructors.reduce((acc, instructor) => {
      let allInstructors = {};
      allInstructors.name = instructor.name;

      cohorts.forEach((cohort) => {
        if (instructor.module === cohort.module) {
          allInstructors.studentCount = cohort.studentCount;
        }
       
      });
      acc.push(allInstructors);

      return acc; 
    }, []);

    return result;
    // Annotation:
    // Write your annotation here as a comment
  },

  studentsPerInstructor() {
    // Return an object of how many students per teacher there are in each cohort e.g.
    // { 
    // cohort1806: 9,
    // cohort1804: 10.5
    // }

    const result = cohorts.reduce((acc, cohort) => {
      acc[`cohort${cohort.cohort}`];
      let matchingInstructors = instructors.filter(instructor => {
        return instructor.module === cohort.module;
      });
      let numInstructors = matchingInstructors.length;
      acc[`cohort${cohort.cohort}`] = cohort.studentCount / numInstructors;
      return acc; 
    }, {});
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  modulesPerTeacher() {
    // Return an object where each key is an instructor name and each value is
    // an array of the modules they can teach based on their skills. e.g.:
    // {
    //     Pam: [2, 4],
    //     Brittany: [2, 4],
    //     Nathaniel: [2, 4],
    //     Robbie: [4],
    //     Leta: [2, 4],
    //     Travis: [1, 2, 3, 4],
    //     Louisa: [1, 2, 3, 4],
    //     Christie: [1, 2, 3, 4],
    //     Will: [1, 2, 3, 4]
    //   }

    const result = instructors.reduce((acc, instructor) => {
      acc[instructor.name] = [];
      cohorts.forEach((cohort) => {
        cohort.curriculum.forEach((skill) => {
          if (instructor.teaches.includes(skill) && !acc[instructor.name].includes(cohort.module)) {
            acc[instructor.name].push(cohort.module);
          }
        });
      });
        
      return acc;
    }, {});
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  curriculumPerTeacher() {
    // Return an object where each key is a curriculum topic and each value is
    // an array of instructors who teach that topic e.g.:
    // { 
    //   html: [ 'Travis', 'Louisa' ],
    //   css: [ 'Travis', 'Louisa' ],
    //   javascript: [ 'Travis', 'Louisa', 'Christie', 'Will' ],
    //   recursion: [ 'Pam', 'Leta' ]
    // }

    const result = cohorts.reduce((acc, cohort) => {
      cohort.curriculum.forEach((subject) => {
        acc[`${subject}`] = [];
        instructors.forEach(instructor => {
          instructor.teaches.filter(teach => {
            if (teach === subject) {
              return acc[`${subject}`].push(instructor.name);
            }
          });
        });
      });
      return acc;
    }, {});

    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: bosses, sidekicks from ./datasets/bosses
const bossPrompts = {
  bossLoyalty() {
    // Create an array of objects that each have the name of the boss and the sum
    // loyalty of all their sidekicks. e.g.:
    // [
    //   { bossName: 'Jafar', sidekickLoyalty: 3 },
    //   { bossName: 'Ursula', sidekickLoyalty: 20 },
    //   { bossName: 'Scar', sidekickLoyalty: 16 }
    // ]

    const bossKeys = Object.keys(bosses);

    const result = bossKeys.reduce((acc, key) => {
      newObj = {};
      newObj.bossName = bosses[key].name;
      acc.push(newObj);
      newObj.sidekickLoyalty = sidekicks.reduce((totalLoyalty, sidekick) => {
        if (sidekick.boss === newObj.bossName) {
          totalLoyalty += sidekick.loyaltyToBoss;
        }
        return totalLoyalty;
      }, 0);
      return acc;
    }, []);
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: constellations, stars } from ./datasets/astronomy
const astronomyPrompts = {
  starsInConstellations() {
    // Return an array of all the stars that appear in any of the constellations
    // listed in the constellations object e.g.
    // [ 
    //   { name: 'Rigel',
    //     visualMagnitude: 0.13,
    //     constellation: 'Orion',
    //     lightYearsFromEarth: 860,
    //     color: 'blue' },
    //   { name: 'Betelgeuse',
    //     visualMagnitude: 0.5,
    //     constellation: 'Orion',
    //     lightYearsFromEarth: 640,
    //     color: 'red' }
    // ]

    const starsInConstellations = Object.keys(constellations).reduce((acc, key) => {
      acc = acc.concat(constellations[key].stars);
      return acc;
    }, [] );

    const result = stars.filter((star) => {
      return starsInConstellations.includes(star.name);
    });

    return result;
    // Annotation:
    // Write your annotation here as a comment
  },

  starsByColor() {
    // Return an object with keys of the different colors of the stars,
    // whose values are arrays containing the star objects that match e.g.
    // {
    //   blue: [{obj}, {obj}, {obj}, {obj}, {obj}],
    //   white: [{obj}, {obj}],
    //   yellow: [{obj}, {obj}],
    //   orange: [{obj}],
    //   red: [{obj}]
    // }

    const result = stars.reduce((acc, star) => {
      if(!acc[star.color]) {
        acc[star.color] = [];
      } 
      acc[star.color].push(star);
     
      return acc;
    }, {} ) ;
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  constellationsStarsExistIn() {
    // Return an array of the names of the constellations that the brightest stars are part of e.g.
    
    //  [ "Canis Major",
    //    "Carina",
    //    "Boötes",
    //    "Auriga",
    //    "Orion",
    //    "Lyra", 
    //    "Canis Minor", 
    //    "The Plow", 
    //    "Orion", 
    //    "The Little Dipper" ]

    const filtered = stars.filter((star) => {
      if (star.constellation) {
        return star;
      }
    });

    const sorted = filtered.sort((starA, starB) => {
      return starA.visualMagnitude - starB.visualMagnitude;
    });

    const result = sorted.map((star) => {
      return star.constellation;
    });

    return result;

    // Annotation:
    // Write your annotation here as a comment
  }


};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: charaters, weapons from ./datasets/ultima
const ultimaPrompts = {
  totalDamage() {

    // Return the sum of the amount of damage for all the weapons that our characters can use
    // Answer => 113

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  charactersByTotal() {

    // Return the sum damage and total range for each character as an object. 
    // ex: [ { Avatar: { damage: 27, range: 24 }, { Iolo: {...}, ...}

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: dinosaurs, humans, movies from ./datasets/dinosaurs
const dinosaurPrompts = {
  countAwesomeDinosaurs() {
    // Return an object where each key is a movie title and each value is the 
    // number of awesome dinosaurs in that movie. e.g.:
    // {
    //   'Jurassic Park': 5,
    //   'The Lost World: Jurassic Park': 8,
    //   'Jurassic Park III': 9,
    //   'Jurassic World': 11,
    //   'Jurassic World: Fallen Kingdom': 18
    // }

    const result = movies.reduce((acc, currentMovie) => {
      acc[currentMovie.title] = 0;
      Object.keys(dinosaurs).forEach(dinosaur => {
        if (dinosaurs[dinosaur].isAwesome && currentMovie.dinos.includes(dinosaur)) {
          acc[currentMovie.title]++;
        }
      });
      return acc;
    }, {});

    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  averageAgePerMovie() {
    /* Return an object where each key is a movie director's name and each value is
        an object whose key is a movie's title and whose value is the average age
        of the cast on the release year of that movie.
      e.g.:
      { 
        'Steven Spielberg': 
          { 
            'Jurassic Park': 34,
            'The Lost World: Jurassic Park': 37 
          },
        'Joe Johnston': 
          { 
            'Jurassic Park III': 44 
          },
        'Colin Trevorrow': 
          { 
            'Jurassic World': 56
           },
        'J. A. Bayona': 
          { 
            'Jurassic World: Fallen Kingdom': 59 
          } 
      }
    */



    const result = movies.reduce((acc, movie) => {
      if (!acc[movie.director]) {
        acc[movie.director] = {};
      }   
      const totalCastAges = Object.keys(humans).reduce((acc, human) => {
        if(movie.cast.includes(human)) {
          acc += movie.yearReleased - humans[human].yearBorn; 
        }
        return acc;
      }, 0);
      const averageCastAge = totalCastAges / movie.cast.length;
      acc[movie.director][movie.title] = Math.floor(averageCastAge);
      return acc;
    }, {});

    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  uncastActors() {
    /*
    Return an array of objects that contain the names of humans who have not been cast in a Jurassic Park movie (yet), their nationality, and their imdbStarMeterRating. The object in the array should be sorted alphabetically by nationality.

    e.g.
      [{
        name: 'Justin Duncan',
        nationality: 'Alien',
        imdbStarMeterRating: 0
      }, 
      {
        name: 'Karin Ohman',
        nationality: 'Chinese',
        imdbStarMeterRating: 0
      },
      {
        name: 'Tom Wilhoit',
        nationality: 'Kiwi',
        imdbStarMeterRating: 1
      }, {
        name: 'Jeo D',
        nationality: 'Martian',
        imdbStarMeterRating: 0
      }]
    */

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  actorsAgesInMovies() {
    /*
    Return an array of objects for each human and the age(s) they were in the movie(s) they were cast in, as an array of age(s). Only include humans who were cast in at least one movie.

    e.g.
    [ { name: 'Sam Neill', ages: [ 46, 54 ] },
      { name: 'Laura Dern', ages: [ 26, 34 ] },
      { name: 'Jeff Goldblum', ages: [ 41, 45, 63, 66 ] },
      { name: 'Richard Attenborough', ages: [ 70, 74, 92, 95 ] },
      { name: 'Ariana Richards', ages: [ 14, 18 ] },
      { name: 'Joseph Mazello', ages: [ 10, 14 ] },
      { name: 'BD Wong', ages: [ 33, 55, 58 ] },
      { name: 'Chris Pratt', ages: [ 36, 39 ] },
      { name: 'Bryce Dallas Howard', ages: [ 34, 37 ] } ]
    */
    
    return Object.keys(humans).reduce(function(result, actorName) {
      const obj = {};
      obj.name = actorName;
      obj.ages = [];
      movies.forEach(function(movie) {
        if (movie.cast.includes(actorName)) {
          obj.ages.push(movie.yearReleased - humans[actorName].yearBorn);
        }
      });
      if(obj.ages.length != 0) {
        result.push(obj);
      }
      return result;
    }, []);
    

    // Annotation:
    // Write your annotation here as a comment
  }
};

module.exports = {
  breweryPrompts,
  turingPrompts,
  clubPrompts,
  bossPrompts,
  classPrompts,
  modPrompts,
  kittyPrompts,
  cakePrompts,
  astronomyPrompts,
  ultimaPrompts,
  dinosaurPrompts
};