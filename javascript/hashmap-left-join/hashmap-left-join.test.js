"use strict";

const leftJoin = require("./hashmap-left-join");

describe("Left_Join", () => {
  it("should return the correct left join result", () => {
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

    const expectedResult = [
      ["diligent", "employed", "idle"],
      ["fond", "enamored", "averse"],
      ["guide", "usher", "follow"],
      ["outfit", "garb", null],
      ["wrath", "anger", "delight"],
    ];

    expect(leftJoin(synonymsMap, antonymsMap)).toEqual(expectedResult);
  });

  it("should handle empty input maps", () => {
    const synonymsMap = {};
    const antonymsMap = {};

    const expectedResult = [];

    expect(leftJoin(synonymsMap, antonymsMap)).toEqual(expectedResult);
  });

  it("should handle missing values in the second map", () => {
    const synonymsMap = {
      key1: "value1",
      key2: "value2",
    };
    const antonymsMap = {};

    const expectedResult = [
      ["key1", "value1", null],
      ["key2", "value2", null],
    ];

    expect(leftJoin(synonymsMap, antonymsMap)).toEqual(expectedResult);
  });

  it("should handle missing values in the first map", () => {
    const synonymsMap = {};
    const antonymsMap = {
      key1: "value1",
      key2: "value2",
    };

    const expectedResult = [];

    expect(leftJoin(synonymsMap, antonymsMap)).toEqual(expectedResult);
  });

  it("should handle maps with different keys", () => {
    const synonymsMap = {
      key1: "value1",
      key2: "value2",
    };
    const antonymsMap = {
      key3: "value3",
      key4: "value4",
    };

    const expectedResult = [
      ["key1", "value1", null],
      ["key2", "value2", null],
    ];

    expect(leftJoin(synonymsMap, antonymsMap)).toEqual(expectedResult);
  });
});