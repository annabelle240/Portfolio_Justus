// ============ Aufgabe 1.1: AKTUELLES ALTER BESTIMMEN ============

window.onload = function(){

      // Geburtsdatum erstellen
      var geburtsdatum = new Date("2002-11-27");
      
      // Aktuelles Datum erstellen
      var aktuellesDatum = new Date();
      
      // Alter berechnen
      alter = aktuellesDatum.getFullYear() - geburtsdatum.getFullYear();

      document.getElementById("alter").textContent = alter-1;



// =========== Aufgabe 2.1: NAVIGATION AUFKLAPPEN WENN ACTIVE==========


    let menuToggle = document.querySelector(".toggle");
    let aside = document.querySelector(".aside");
    menuToggle.onclick = function(){
        menuToggle.classList.toggle("active")
        aside.classList.toggle("active");
    }

 


// =========== Aufgabe 2.2: AKTIVER STREIFEN IN DER NAVIGATION WENN ACTIVE ==========

    let list = document.querySelectorAll(".list");
    for (let i=0; i<list.length; i++){
        list[i].onclick = function(){
            let j=0;
            while(j < list.length){
                list[j++].className = "list";
            }
            list[i].className = "list active";
        }
    }




// =================== INTERAKTVER BUTTON FUER CV  ==========================


    const bottom = document.querySelector(".bottom");
    const overlay = document.querySelector(".overlay");
    const count = 110;
    const size = 50;

    for (let i = 0; i <= count; i += 1) {
      const dot = document.createElement("div");
      dot.classList.add("dot");
      bottom.appendChild(dot);
    }
    
    const dots = Array.from(document.querySelectorAll(".dot"));
    
    const updateText = (text) => {
      Array.from(document.querySelectorAll(".text")).forEach(
        (e) => (e.innerHTML = text)
      );
    };
    
    const reset = () => {
      dots.forEach((dot, i) => {
        const x = (i / count) * (190 + size) - size / 2;
        const y = Math.random(1) * 52 - size / 2;
        dot.style.width = `${size}px`;
        dot.style.height = `${size}px`;
        dot.style.left = `${x}px`;
        dot.style.top = `${y}px`;
        dot.style.opacity = 1;
        dot.style.transform = "scale(1)";
      });
    };
    reset();
    
    overlay.addEventListener("click", () => {
      anime({
        easing: "linear",
        targets: document.querySelectorAll(".dot"),
        opacity: [{ value: 0, duration: 600, delay: anime.stagger(10) }],
        translateX: {
          value: function () {
            return anime.random(-30, 30);
          },
          duration: 400,
          delay: anime.stagger(10)
        },
        translateY: {
          value: function () {
            return anime.random(-30, 30);
          },
          duration: 400,
          delay: anime.stagger(10)
        },
        scale: {
          value: function () {
            return 0;
          },
          duration: 400,
          delay: anime.stagger(10)
        }
      });
      anime({
        easing: "linear",
        delay: 4000,
        complete: () => {
          updateText("Submitted");
          setTimeout(() => {
            updateText("Submit");
            reset();
          }, 3000);
        }
      });
    });


}



