// --- Directions
// Write a function that splits an array (first argument)
// into groups the length of size (second argument) and
// returns them as a two-dimensional array.
// --- Examples
// chunk(["a", "b", "c", "d"], 2) --> [[ "a", "b"], ["c", "d"]]
// chunk([0, 1, 2, 3, 4, 5], 4) -->  [[0, 1, 2, 3], [4, 5]]

function chunk(array, size) {
  //empty array
  
  let end = []
  //first two pushed then shifted
  do{
    let chunks = []
    for(let i = 0; i <size; i++){
      if(!array.length) break
      chunks[i] = array.shift()
      
    }
    end.push(chunks)
  }while(array.length)
  // check if undefined and pop them
  console.log(end)
  return end
}

// _________ _______  _______ _________   _______  _______  _______  _______  _______
// \__   __/(  ____ \(  ____ \\__   __/  (  ____ \(  ___  )(  ____ \(  ____ \(  ____ \
//    ) (   | (    \/| (    \/   ) (     | (    \/| (   ) || (    \/| (    \/| (    \/
//    | |   | (__    | (_____    | |     | |      | (___) || (_____ | (__    | (_____
//    | |   |  __)   (_____  )   | |     | |      |  ___  |(_____  )|  __)   (_____  )
//    | |   | (            ) |   | |     | |      | (   ) |      ) || (            ) |
//    | |   | (____/\/\____) |   | |     | (____/\| )   ( |/\____) || (____/\/\____) |
//    )_(   (_______/\_______)   )_(     (_______/|/     \|\_______)(_______/\_______)
//                             ____       _
//                             |  _ \     | |
//                             | |_) | ___| | _____      __
//                             |  _ < / _ \ |/ _ \ \ /\ / /
//                             | |_) |  __/ | (_) \ V  V /
//                             |____/ \___|_|\___/ \_/\_/
//                         ______ ______ ______ ______ ______
//                         |______|______|______|______|______|

//                          ______ ______ ______ ______ ______
//                         |______|______|______|______|______|

//                          ______ ______ ______ ______ ______
//                         |______|______|______|______|______|

mocha.setup("bdd");
const { assert } = chai;

describe("Array Chunking", () => {
  it("chunk() works", () => {
    let arr = ["a", "b", "c", "d"];
    let chunked = chunk(arr, 2);
    assert.deepEqual(chunked, [["a", "b"], ["c", "d"]]);

    arr = [0, 1, 2, 3, 4, 5];
    chunked = chunk(arr, 4);
    assert.deepEqual(chunked, [[0, 1, 2, 3], [4, 5]]);
  });
});

mocha.run();
