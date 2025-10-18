const validator = require("validator");

console.log("isEmail('test@test.com') =", validator.isEmail("test@test.com"));
console.log("isEmail('abcDE123')     =", validator.isEmail("abcDE123"));

//დავალება 1
function expo(num, power, callback) {
  if (power === 0) {
    callback(1);
    return;
  }
  function helper(base, exp) {
    if (exp === 0) return 1;
    return base * helper(base, exp - 1);
  }
  const result = helper(num, power);
  callback(result);
}

expo(325, 3, (result) => {
  console.log("expo(325,3) =", result);
});

//დავალება 3

async function deepCopyAsync(obj) {
  return new Promise((resolve, reject) => {
    if (typeof obj !== "object" || obj === null || Array.isArray(obj)) {
      reject("Error: Argument must be a plain object!");
      return;
    }
    try {
      const copy = JSON.parse(JSON.stringify(obj));
      resolve(copy);
    } catch (error) {
      reject("Error copying object: " + error.message);
    }
  });
}

const original = { name: "Gia", details: { age: 28, city: "Zugdidi" } };

deepCopyAsync(original)
  .then((copy) => {
    console.log("Copied object:", copy);
    copy.details.city = "Tbilisi";
    console.log("Original after change:", original);
  })
  .catch((err) => console.error(err));

deepCopyAsync("practising writing codes")
  .then((copy) => console.log("This should not print:", copy))
  .catch((err) => console.error(err));
