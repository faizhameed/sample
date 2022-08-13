//promise
//fetch

new Promise((res, rej) => {
  setTimeout(() => {
    console.log("Hi this");
    res();
  }, 0);
}).then(() => {
  console.log("hello");
});
