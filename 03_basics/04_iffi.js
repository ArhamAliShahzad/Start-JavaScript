// immediately invoked function expressino (iffi)

// named iffi
(function chai() {
    console.log(`DB CONNECTED`);
})();

// simple iffi

(  (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
}  )('arham')
