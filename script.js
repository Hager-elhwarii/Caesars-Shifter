function rot13(str) {

  // Using the split() method to change the string to an array.
  const strArr = str.split("");

  const alphapetArr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  // Initializing an empty array to push Cipher letters in it.
  const cipherArr = [];

  // Use the map() method to iterate on cipherArr elements,and push
  // it deconded character in the array if the elements exists on the alphapetArr.

  // If not (non-alphabetic character) they will be pushed without change.

  strArr.map((ele) => {
    if (alphapetArr.includes(ele)) {
      let letterLocation = (alphapetArr.indexOf(ele) + 13) % alphapetArr.length;
      cipherArr.push(alphapetArr[letterLocation]);
    } else {
      cipherArr.push(ele);
    }
  });

  // Using the join() method to change tha array into string.
  return cipherArr.join("");
}

rot13("SERR CVMMN!");
