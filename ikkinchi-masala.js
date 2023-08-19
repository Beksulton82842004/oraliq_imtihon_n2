const raqam = 3223;
const toStr = raqam.toString();
const toArr = toStr.split("");

function son(number) {
  const reversed = toArr.reverse();
  const toStr2 = reversed.join("");
  if (toStr2 == toStr) {
    console.log("Palindrom ");
  } else {
    console.log("palindron giemas");
  }
}

son(toArr);