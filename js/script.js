
let gameover = false
let flutelesson = false

const mokkiaudio = document.getElementById("mokkiaudio")
const intro = document.getElementById("intro")
const flute1 = document.getElementById("flute1")
const flute2 = document.getElementById("flute2")
const kiviaudio = document.getElementById("kivi")
const grenade = document.getElementById("grenade")
const french = document.getElementById("french")

const map = []

map[0] = "Vanha linnan torni"
map[1] = "Syvä kaivo"
map[2] = "Aurinkoinen metsäaukio"
map[3] = "Nukkuva lohikäärme"
map[4] = "Kapea metsäpolku"
map[5] = "Vanha portti"
map[6] = "Joen ranta"
map[7] = "Tyhjä puupenkki"
map[8] = "Vanha mökki, sisältä kuuluu iloista musiikkia"
map[9] = "Syvän kaivon pohja"

// let mapLocation = 4


const images = []

images[0] = "url(./images/torni.jpg)"
images[1] = "url(./images/kaivo.jpg)"
images[2] = "url(./images/aukio.jpg)"
images[3] = "url(./images/dragon.jpg)"
images[4] = "url(./images/polku.jpg)"
images[5] = "url(./images/portti.jpg)"
images[6] = "url(./images/joki.jpg)"
images[7] = "url(./images/penkki.jpg)"
images[8] = "url(./images/mokki.jpg)"
images[9] = "url(./images/bottomofwell.jpg)"



const blockMessage = []

blockMessage[0] = "Haluamasi reitti on liian vaarallinen."
blockMessage[1] = "Salaperäinen voima estää liikkumisen tuohon suuntaan."
blockMessage[2] = "Vaikeakulkuinen pusikko estää etenemisen."
blockMessage[3] = "Et pääse ohittamaan lohikäärmettä herättämättä sitä."
blockMessage[4] = ""
blockMessage[5] = "Portti kaupunkiin sulkeutui. Se avataan, kun lännessä vaaniva hirviö on tuhottu."
blockMessage[6] = "Joki on liian syvä ylitettäväksi."
blockMessage[7] = "Metsä on liian tiheä läpäistäväksi."
blockMessage[8] = "Mökki estää kulkusi etkä halua mennä häiritsemään juhlia."
blockMessage[9] = "Pääset kaivosta pois vain käyttämällä tikapuita."

// let playersInput = ""
// let gameMessage = ""

let items = ["huilu", "kivi", "miekka", "kuollut papukaija", "tikapuut", "antiochin pyhä käsikranaatti"] //Nämä ovat ne itemit jotka ovat pelilaudalla lähtötilanteessa.
let itemLocations = [1, 6, 8, 4, 0, 9] // Ylläolevien itemien sijainnit lähtötilanteessa
let backPack = []
let knownItems = ["huilu", "kivi", "miekka", "kuollut papukaija", "nukkuva papukaija", "tikapuut", "antiochin pyhä käsikranaatti"]
let item = ""




const actionsForPlayer = ["pohjoinen", "itä", "etelä", "länsi", "poimi", "käytä", "pudota"]
let action = ""

const button = document.querySelector("#button")
const startbutton = document.querySelector("#startbutton")
button.addEventListener("click", clickHandler, false)
window.addEventListener("keydown", keydownHandler, false)
startbutton.addEventListener("click", clickStart, false)

const image = document.querySelector("#kuva")
//const image = document.querySelector("img")
const input = document.querySelector("#input")
const output = document.querySelector("#output")
const sijainti = document.querySelector("#sijainti")
const itemsongroundheading = document.querySelector("#itemsongroundheading")
const itemsonground = document.querySelector("#itemsonground")
const inventory = document.querySelector("#inventory")
//input.addEventListener("keydown", keydownHandler, false)

//let mini = document.querySelector("#mini"+[mapLocation])

// render()

function clickStart(){
    mapLocation = 4
    playersInput = ""
    gameMessage = ""

    render()
    introAudio()
}

function introAudio(){
    intro.play()
}

function playAudio(){
    mokkiaudio.play()
}

function pauseAudio(){
    mokkiaudio.pause()
}

function clickHandler() {
    // console.log("Klik")
    playGame()
}

function keydownHandler(painallus) {
    if(painallus.keyCode === 13){
        // console.log("Painoit enter")
        playGame()
    }
    else if (painallus.keyCode === 38) {
        // up arrow
        painallus.preventDefault()
        console.log("painoit nuolta ylös");
        action = "pohjoinen"
        input.value = ""
        playGame()
    }
    else if (painallus.keyCode === 40) {
        // down arrow
        painallus.preventDefault()
        console.log("painoit nuolta alas")
        action = "etelä"
        input.value = ""
        playGame()
    }
    else if (painallus.keyCode === 37) {
       painallus.preventDefault()
       console.log("painoit nuolta vasemmalle")
       action = "länsi"
       input.value = ""
       playGame()
    }
    else if (painallus.keyCode === 39) {
       // right arrow
       painallus.preventDefault()
       console.log("painoit nuolta oikealle")
       action = "itä"
       input.value = ""
       playGame()
    }
}

function playGame() {
    if(gameover === true){
        return}
    // Lue syöte ja muuta pieniksi kirjaimiksi
    playersInput = input.value.toLowerCase()
    // console.log(playersInput)

     gameMessage = ""
     //action = ""
     item = ""
     itemsonground.innerHTML = ""
     itemsongroundheading.innerHTML = ""
     inventory.innerHTML = ""
     
     let mini = document.querySelector("#mini"+[mapLocation])
     mini.style.opacity = "0.22"
     

    for (let i = 0; i < actionsForPlayer.length; i++) {
        if (playersInput.indexOf(actionsForPlayer[i]) !== -1) {
            action = actionsForPlayer[i]
            console.log("Pelaajan valinta: " + action + " actionsForPlayer-arrayn indeksi oli: " + i)
            break
        }
    }

    for(let i = 0; i < knownItems.length; i++){
        if (playersInput.indexOf(knownItems[i]) !== -1){
            item = knownItems[i]
            console.log("Pelaajan valinta: " + item + " knownItems-arrayn indeksi oli: " + i)
        }
    }

    switch (action) {
        case "pohjoinen":
            if(mapLocation === 9){
                gameMessage = "Pääset kaivosta pois vain käyttämällä tikapuita."
            }
            else if(mapLocation === 0 && images[0] === "url(./images/torni.jpg)"){
                gameMessage = "Ranskalainen ritari heittää sinua lampaalla ja estää kulkusi."
                images.splice(0, 1, "url(./images/tornifrench.jpg)")
                document.querySelector("#mini0").style.backgroundImage = "url(./images/tornifrench.jpg)"
                french.play()
            }
            else if(mapLocation === 0 && images[0] === "url(./images/tornifrench.jpg)"){
                gameMessage = "Ranskalainen ritari heittelee sinua edelleen lampailla."
            }    
            else if (mapLocation >= 3) {
                mapLocation -= 3
            } else {
                gameMessage = blockMessage[mapLocation]
            }
            break

        case "itä":
            if(mapLocation === 9){
                gameMessage = "Pääset kaivosta pois vain käyttämällä tikapuita."
            }
            else if(mapLocation % 3 !== 2){
            mapLocation += 1
            } 
            else if(mapLocation === 5){
                if(images[5] === "url(./images/portticlosed.jpg)"){
                    gameMessage = "Portti on kiinni. Se avataan, kun lännessä vaaniva hirviö on tuhottu."
                }
                else if(images[3] === "url(./images/antioch.jpg)"){
                    introAudio()
                    gameMessage = "Onneksi olkoon! Pääsit portista sisään kaupunkiin ja pelin läpi! Pelaa uudelleen päivittämällä sivu."
                    gameover = true
                }
                else{
                    gameMessage = blockMessage[mapLocation]
                images.splice(5, 1, "url(./images/portticlosed.jpg)")
                document.querySelector("#mini5").style.backgroundImage = "url(./images/portticlosed.jpg)"
            }}
            else {
                gameMessage = blockMessage[mapLocation]
            }
            break

        case "etelä":
            if(mapLocation === 9){
                gameMessage = "Pääset kaivosta pois vain käyttämällä tikapuita."
            }
            else if (mapLocation < 6) {
            mapLocation += 3
            } else {
                gameMessage = blockMessage[mapLocation]
            }
            break

        case "länsi":
            if(mapLocation === 9){
                gameMessage = "Pääset kaivosta pois vain käyttämällä tikapuita."
            }
            else if(mapLocation === 0 && images[0] === "url(./images/torni.jpg)"){
                gameMessage = "Ranskalainen ritari heittää sinua lampaalla ja estää kulkusi."
                images.splice(0, 1, "url(./images/tornifrench.jpg)")
                document.querySelector("#mini0").style.backgroundImage = "url(./images/tornifrench.jpg)"
                french.play()
            }
            else if(mapLocation === 0 && images[0] === "url(./images/tornifrench.jpg)"){
                gameMessage = "Ranskalainen ritari heittelee sinua edelleen lampailla."
            }
            else if(mapLocation % 3 !== 0){
                mapLocation -= 1
                } else {
                    gameMessage = blockMessage[mapLocation]
                }
            break
        
        case "poimi":
            takeItem()
            break    

        case "pudota":
            dropItem()
            break
            
        case "käytä":
            useItem()
            break    

        default:
            gameMessage = "Tuntematon toiminto."
    }
    // gameMessage = ""
    action = ""
    //item = ""
    //itemsonground.innerHTML = ""
    //itemsongroundheading.innerHTML = ""
    //inventory.innerHTML = ""
    //lista = []
    
    render()
    
}

function takeItem(){
    let itemIndexNumber = items.indexOf(item)
    
    if(itemIndexNumber !== -1 && itemLocations[itemIndexNumber] === mapLocation){
        backPack.push(item) //Lisää esineen "inventoryyn" eli backPack-arrayyn
        items.splice(itemIndexNumber, 1) //Tämä poistaa esineen items-arraysta
        itemLocations.splice(itemIndexNumber, 1) //Tämä poistaa esineen "kartalta" eli itemLocations-arraysta
        gameMessage = "Poimit esineen: " + "<strong>" + item + "</strong>"
        // itemsonground.innerHTML = ""
        console.log("Pelilaudalla jäljellä: " + items)
        console.log("Inventoryssa: " + backPack)
    } else{
        gameMessage = "Et voi tehdä tätä toimenpidettä."
    }
}

function dropItem(){
    if(backPack.length !== 0){
        let backPackIndexNumber = backPack.indexOf(item)
        if(backPackIndexNumber !== -1){
            items.push(backPack[backPackIndexNumber]) //Lisää indeksiä vastaavan itemin item "items"-arrayyn (eli kentällä "vapaana" olevien itemien arrayyn)
            itemLocations.push(mapLocation) // Lisää "itemLocations"-arrayyn tämän hetkinen "mapLocation"
            backPack.splice(backPackIndexNumber, 1) // Poista indeksiä vastaava item "backPack"-arraysta 
            //HUOM! SPLICE PITÄÄ OLLA KAHDEN EDELLISEN JÄLKEEN, EI VOI LISÄTÄ TOISEEN ARRAYYN TAVARAA MITÄ EI ENÄÄ OLE ENSIMMÄISESÄ

            gameMessage = "Pudotit esineen: <strong>" + item + "</strong>."
        } else{
            gameMessage = "Et voi pudottaa esinettä, jota sinulla ei ole."
        }
    } else{
        gameMessage = "Sinulla ei ole mitään esineitä mukanasi. Reppusi on tyhjä."
    }
}

function useItem(){
    let backPackIndexNumber = backPack.indexOf(item)

    if(backPackIndexNumber === -1){
        gameMessage = "Sinulla ei ole tuota esinettä mukanasi."
    }
    if(backPack.length === 0){
        gameMessage = "Sinulla ei ole mitään esineitä mukanasi."
    }
    if(backPackIndexNumber !== -1){ //Tämän voisi rakentaa myös else-haaraan
        switch(item){
            case "huilu":
                if(mapLocation === 1 && flutelesson == false){
                    flute1.play()
                    flutelesson = true
                    gameMessage = "Kaivolla istuva mies tarjoutuu opettamaan sinulle huilunsoiton salaperäiset hienoudet."
                }
                else if(flutelesson == true){
                    flute2.play()
                    gameMessage = "Kaunis musiikki kaikuu ympärilläsi."
                }
                else {
                    gameMessage = "Et osaa vielä soittaa huilua. Ehkä pohjoisesta löytyy joku, joka voisi opettaa sinua."
                }
                
                break

            case "miekka":
                //Lohikäärmeen voitto miekalla:
                if(mapLocation === 3 && images[3] === "url(./images/dragon.jpg)"){
                    gameMessage = "Heilautat miekkaasi ja tapat lohikäärmeen. Kauhuksesi huomaat, että sen paikan otti vieläkin kauheampi peto. Tästä et miekalla selviä, tarvitset Antiochin Pyhän Käsikranaatin. Sellainen voisi löytyä pohjoisesta, maanpintaa alempaa. Tikapuista on tässä apua."
                    images.splice(3, 1, "url(./images/rabbit.jpg)")
                    document.querySelector("#mini3").style.backgroundImage = "url(./images/rabbit.jpg)"
                    map.splice(3, 1, "Caerbannogin jänis")
                    blockMessage.splice(3, 1, "Et pysty ohittamaan jänistä ilman taistelua. Miekalla et pärjää. Tarvitset Antiochin Pyhän Käsikranaatin. Sellainen voisi löytyä pohjoisesta, maanpintaa alempaa. Tikapuista on tässä apua.")
                }
            
                //Jänikseltä turpaan, jos käyttää siihen miekkaa:
                else if(mapLocation === 3 && images[3] === "url(./images/rabbit.jpg)"){
                    gameMessage = "Huitaiset ohi ja Caerbannogin jänis raatelee sinut hengiltä.<br>PELI PÄÄTTYI. YRITÄ UUDELLEEN PÄIVTTÄMÄLLÄ SIVU."
                    gameover = true                    
                }
                else{
                    gameMessage = "Heiluttelet miekkaasi tylsistyneenä."
                }
                break
            
            case "kivi":
                if(mapLocation === 1){
                    gameMessage = "Sen sijaan, että pyorittelisit kiveä taskussasi, päätät uteliaisuuttasi pudottaa sen kaivoon. Uskot, että tikkaiden avulla onnistut kuitenkin löytämään sen vielä kaivon pohjalta."
                    backPack.splice(backPackIndexNumber, 1)
                    itemLocations.push(9)
                    items.push(item)
                    kiviaudio.play()
                }    else{
                    gameMessage = "Pyörittelet kiveä taskussasi."
                }
                break

            case "kuollut papukaija":
                gameMessage = "Tarkemmin katsottuna papukaija ei olekaan kuollut. Se vain nukkuu."
                backPack.splice(backPackIndexNumber, 1, "nukkuva papukaija")   
                break

            case "nukkuva papukaija":
                gameMessage = "Papukaija vaikuttaa olevan todella syvässä unessa. Merkillistä..."
                break   

            case "tikapuut":
                
                if(mapLocation === 1){
                    mapLocation = 9
                    gameMessage = "Laskeudut tikapuita pitkin alas kaivoon."
                    document.querySelector("#mini1").style.backgroundImage = "url(./images/bottomofwell.jpg)"
                }
                    
                else if(mapLocation === 9){
                    mapLocation = 1
                    gameMessage = "Nouset tikapuita pitkin ylös kaivosta."
                    document.querySelector("#mini1").style.backgroundImage = "url(./images/kaivo.jpg)"
                }

                else{
                    gameMessage = "Näillä ei ole käyttöä täällä. Älä kuitenkaan heitä kirvestä kaivoon."
                }
                break   

            case "antiochin pyhä käsikranaatti":
                if(mapLocation === 3 && images[3] === "url(./images/rabbit.jpg)"){
                    gameMessage = "Heität kranaatin ja tuhoat Caerbannogin Jäniksen. Portti itään on jälleen auki."
                    images.splice(3, 1, "url(./images/antioch.jpg)")
                    document.querySelector("#mini3").style.backgroundImage = "url(./images/antioch.jpg)"
                    images.splice(5, 1, "url(./images/portti.jpg)")
                    document.querySelector("#mini5").style.backgroundImage = "url(./images/portti.jpg)"
                    backPack.splice(backPackIndexNumber, 1)
                    grenade.play()
                    blockMessage.splice(3, 1, "Älä yritä enää mennä lännemmäs. Voitto odottaa idässä.")
                }
                else{
                    gameMessage = "Päätät sittenkin säästää tämän oikeaa hetkeä varten."
                }  
                break  
                
        }
    }
}

function render() {

    if(mapLocation === 8){
        playAudio()
    } 
    else {
        pauseAudio()
    }
    let mini = document.querySelector("#mini"+[mapLocation])
    mini.style.opacity = "1"

    //---------- SIJAINNIN TUNNELMAKUVA ----------
    image.style.backgroundImage = images[mapLocation]

    //image.style.opacity = 0
    //image.style.opacity = 1
    //image.src = "images/" + images[mapLocation]
    
    //---------- SIJAINNIN TEKSTIKUVAUS ----------
    sijainti.innerHTML = "<strong>" + map[mapLocation] + "</strong>"
   
    //---------- GAME MESSAGE ----------
    output.innerHTML = "<em>" + gameMessage + "</em>"

    //---------- NÄKYVILLÄ/MAASSA OLEVAT ESINEET----------
    itemsongroundheading.innerHTML = "Näkyvillä olevat esineet: "

    for(let i = 0; i < items.length; i++){
            if(mapLocation === itemLocations[i]){ 
                // itemsongroundheading.innerHTML = "Näkyvillä olevat esineet: "
                itemsonground.innerHTML += "<strong>" + items[i] + "</strong>" + "<br>"
            }
    }
    
    //---------- INVENTORY--------------
    if(backPack.length != 0){
        inventory.innerHTML = "<strong>" + backPack.join(", ") + "</strong>"
    }

    
    
    //---------- LOGITUKSET------------------
    
    // MAASSA OLEVIEN ESINEIDEN SIJAINNIT
    console.log(itemLocations)
    
    // MAASSA OLEVAT ESINEET
    console.log(items)
    
    // INVENTORYSSÄ OLEVAT ESINEET
    console.log(backPack)
   
    // PELAAJAN SIJAINTI
    console.log("Tämänhetkinen sijainti: " + mapLocation + ", " + map[mapLocation])
    
    
}

