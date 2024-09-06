// using selectors insidethe element

const futuristiks = document.querySelectorAll(".futuristik");

futuristiks.forEach(function(futuristik){
    // console.log(futuristik);
    const btn = futuristik.querySelector(".futuristik-btn");
    // console.log(btn);
    btn.addEventListener("click", function (){
      futuristiks.forEach(function(item){
        console.log(item);
        if(item !== futuristik){
            item.classList.remove("show-text");
        }
      })


        futuristik.classList.toggle("show-text");
    });
});

// traversing the dom

// const btns = document.querySelectorAll(".futuristik-btn");

// btns.forEach(function(btn){
//     btn.addEventListener("click", function(e) {
//         const futuristik = e.currentTarget.parentElement.
//         parentElement;
//         futuristik.classList.toggle("show-text");
//     });
// });