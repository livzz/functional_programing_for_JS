var founders = new Map();
founders.set("facebook", "mark");
founders.set("google", "larry");
founders.size; // 2
founders.get("twitter"); // undefined
founders.has("yahoo"); // false
for (var [key, value] of founders) {
    console.log(key + " founded by " + value);
}
// "facebook founded by mark"
// "google founded by larry"