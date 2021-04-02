document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('button').addEventListener('click',
    onclick, false)
    let counter = 0;
    function onclick() {
        chrome.tabs.query({currentWindow: true, active: true},
            function(tabs){
                chrome.tabs.sendMessage(tabs[0].id, 'purr', setCount);
                counter++;
            })
    }
    function   setCount (res) {
        const catpic  = document.createElement('img');
        let picArray = ["assets/cat1.jpg", "assets/cat2.jpg", "assets/cat3.png", "assets/cat4.jpeg", "assets/cat5.jpg", "assets/cat6.jpg", "assets/cat7.jpg", "assets/cat8.jpg", "assets/cat9.jpg", "assets/cat10.jpg", "assets/cat11.jpg"]
        // catpic.style.width = "500px"
        // catpic.style.height = "500px"
        // div.textContent =  `cats`;
        // document.body.appendChild(div)
        catpic.setAttribute("id", "catpic")
        // for (let i = 0; i < picArray.length; i++){
        //     catpic.setAttribute("src", `${picArray[i]}`)
        //     console.log(picArray[i])
        // }

        const random = function(array){
           return Math.floor(Math.random() * array.length)
        }
        catpic.setAttribute("src", `${picArray[random(picArray)]}`)
          // catpic.setAttribute("src", `${picArray[counter]}`)
    
        document.body.appendChild(catpic);
    }
}, false)



let testArray = [
    "assets/cat1.jpg", 
    "assets/cat2.jpg", 
    "assets/cat3.png", 
    "assets/cat4.jpeg", 
    "assets/cat5.jpg", 
    "assets/cat6.jpg", 
    "assets/cat7.jpg", 
    "assets/cat8.jpg", 
    "assets/cat9.jpg", 
    "assets/cat10.jpg", 
    "assets/cat11.jpg"
]