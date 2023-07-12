'use strict';

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
console.log('this is the dog:', animal1 );
