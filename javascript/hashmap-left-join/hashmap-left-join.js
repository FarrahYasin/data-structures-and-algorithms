"use strict";

function leftJoin(hashTable1, hashTable2) {
  let result = [];

  const keys1 = Object.keys(hashTable1);

  for (let i = 0; i < keys1.length; i++) {
    const key = keys1[i];
    const synonyms = hashTable1[key];
    const antonyms = hashTable2[key] || null;
    result.push([key, synonyms, antonyms]);
  }

  return result;
}

module.exports = leftJoin;

const synonymsMap = {
  diligent: "employed",
  fond: "enamored",
  guide: "usher",
  outfit: "garb",
  wrath: "anger",
};

const antonymsMap = {
  diligent: "idle",
  fond: "averse",
  guide: "follow",
  flow: "jam",
  wrath: "delight",
};

const leftJoined = leftJoin(synonymsMap, antonymsMap);

console.log(leftJoined);
