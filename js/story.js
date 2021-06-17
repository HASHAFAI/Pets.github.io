let main = document.querySelector("main");

function story(){

    let xml = new XMLHttpRequest();
    xml.onreadystatechange = function(){

        if (this.readyState === 4 && this.status === 200) {
            let objectJS2 = JSON.parse(this.responseText);
            let objectJS2_length = objectJS2.length;
            for(let i=0;i<objectJS2_length;i++){
                let h2 = document.createElement("h2");
                h2.id = `id${i}`
                h2.innerHTML =objectJS2[i].titel;
                console.log(h2);
                let section = document.createElement("section");
                section.classList="stories2";
                let div1 = document.createElement("div");
                div1.className = "img-story";
                let img = document.createElement("img");
                img.src = objectJS2[i].img;
                div1.appendChild(img);
                let div2 = document.createElement("div");
                div2.className = "text-story";
                let p = document.createElement("p");
                p.innerHTML = objectJS2[i].his_story
                div2.appendChild(p);
                main.appendChild(h2);
                section.appendChild(div1);
                section.appendChild(div2);
                main.appendChild(h2);
                main.appendChild(section);
            }
        }
    }
    xml.open("GET","js/story.json",true);
    xml.send();
}
story();