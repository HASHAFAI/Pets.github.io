let header = document.querySelector("header")
let burger = document.querySelector(".is-visible-mobile");
let main_nav = document.querySelector(".main-nav");
let inputText = document.querySelector(".form-group input");
let nameAnimal = document.querySelectorAll(".widget .widget__desc h4");
let containerResults = document.querySelector(".is-searchResults");

burger.addEventListener("click", () => {header.classList.toggle("active")})

function search() {

    let XML = new XMLHttpRequest();
    XML.onreadystatechange = function () {

        if (this.readyState === 4 && this.status === 200) {

            let objectJS = JSON.parse(this.responseText);
            let objectJS_length = objectJS.length;
            let valueInput = inputText.value.toLowerCase();

            let x = 0;
            containerResults.innerHTML = '';
            for (let i = 0; i < objectJS_length; i++) {

                if (valueInput == objectJS[i].city) {

                    let div = document.createElement("div");
                    div.className = "widget";
                    let div_1 = document.createElement("div");
                    div_1.className = "widget__image";
                    let img = document.createElement("img");
                    img.src = objectJS[i].img;
                    div_1.appendChild(img);
                    div.appendChild(div_1);
                    let div_2 = document.createElement("div");
                    div_2.className = "widget__desc";
                    let h4 = document.createElement("h4");
                    h4.innerHTML = objectJS[i].name;
                    let p_1 = document.createElement("p")
                    let p_2 = document.createElement("p")
                    p_1.innerHTML = `${objectJS[i].type} | ${objectJS[i].gender_age}`;
                    p_2.innerHTML = `city is ${objectJS[i].city}`
                    div_2.appendChild(h4);
                    div_2.appendChild(p_1);
                    div_2.appendChild(p_2);
                    div.appendChild(div_2);
                    containerResults.appendChild(div);
                    x++;

                } else if (i == objectJS_length - 1 && x == 0) {

                    let h3 = document.createElement("h3");
                    h3.style.color = "red";
                    h3.style.paddingTop = "0";
                    h3.innerHTML = "Sorry ! Text does not coincide with our cities Try another city."
                    containerResults.appendChild(h3);
                    // break;
                }
            }
        };
    }
    XML.open("GET", "js/index.json", true)
    XML.send();
}