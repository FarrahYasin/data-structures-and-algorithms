## animal_shelter

>>## WhiteBoard

>>**Problem domain:**
>>Create a class AnimalShelter which holds only dogs and cats.
The shelter operates using a first-in, first-out approach.
and,Implement the following methods:
enqueue
Arguments: animal
animal can be either a dog or a cat object.
It must have a species property that is either "cat" or "dog"
It must have a name property that is a string.
dequeue
Arguments: pref
pref can be either "dog" or "cat"
Return: either a dog or a cat, based on preference.
If pref is not "dog" or "cat" then return null.

## Algorithm
>>Create a class called AnimalShelter with a constructor that initializes two empty arrays, dogs and cats, to store animals of each species.
Implement the enqueue method in the AnimalShelter class. This method takes an animal object as a parameter and adds it to the respective array based on its species. If the species is 'cat', the animal is added to the cats array, and if the species is 'dog', it is added to the dogs array.
Implement the dequeue method in the AnimalShelter class. This method takes a pref object as a parameter, which represents the preferred species of the animal to be dequeued. If the preferred species is 'cat', remove and return the first cat from the cats array using the shift method. If the preferred species is 'dog', remove and return the first dog from the dogs array using the shift method. If the preferred species is neither 'cat' nor 'dog', return null.

## the code:

```'
use strict';

class AnimalShelter{
  constructor() {
    this.dogs = [];
    this.cats = [];
  }

  enqueue(animal){

    if(animal.species === 'cat'){
      this.cats.push(animal);
    }
    else if(animal.species === 'dog'){
      this.dogs.push(animal);
    }
  }

  dequeue(pref){
    if (pref.species === 'cat') {
      return this.cats.shift();

    } else if (pref.species === 'dog') {
      return this.dogs.shift();
    } else return null;

  }

}

const animal1 = new AnimalShelter();
animal1.enqueue({
  name: 'cat1' ,
  species: 'cat'

});
animal1.enqueue({
  name: 'cat2' ,
  species: 'cat'

});
console.log('this is the Cat:', animal1 );
animal1.enqueue({
  name: 'dog1' ,
  species: 'dog'

});
animal1.enqueue({
  name: 'dog2' ,
  species: 'dog'
});
console.log('this is the dog:', animal1 );

console.log(animal1.dequeue({
  name: 'cat1' ,
  species: 'dog'
}));
console.log(animal1.dequeue({
  name: 'cat1' ,
  species: 'cat'
}));

console.log(animal1.dequeue({
  name: 'cat1' ,
  species: 'Lion'
}));
console.log('this is the dog:', animal1 );```