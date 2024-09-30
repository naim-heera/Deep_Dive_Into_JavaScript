// Length of a string
const a = "Heera";
a.length;
console.log(a.length);

// Retrieving a specific string character
console.log(a[2]);

// To retrieve the last character of any string
console.log(a[a.length - 1]);

// Testing if a string contains a substring
if (a.includes("ra")) {
  console.log("ra in included");
}
  else {
    console.log("ra not in included");
}

// if a string starts or ends with a particular substring
if (a.startsWith("H")) {
  console.log("Yes it starts with H");
} else {
  console.log("Yes it doesn't start with H");
}
if (a.endsWith("r")) {
  console.log("Yes it ends with r");
} else {
  console.log("Yes it doesn't ends with r");
}



