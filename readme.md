# WWW-interaktiivisuus - Loppuharjoitus

## Tehtävänanto

Tehtävänantona oli jatkaa loppuun tuntiharjoituksena yhdessä aloitettu hyvin pieni tekstiseikkailupeli.

## Muutokset

- Ulkoasu muutettu retroksi pikselöidyksi tekstiseikkailupeliksi.
- Lisätty introteksti, joka kertoo pelaajalle pelin tavoitteen ja ohjeita pelaamiseen.
- Lisätty minimap, joka on alkujaan "tutkimaton". Kun käy uudessa lokaatiossa se paljastuu. Kun liikkuu pois siitä, se jää
näkyville pienemmällä opacityllä. Aktiivisen lokaation opacity on 1.
- Portti sulkeutuu, jos siitä yrittää itään ennen kuin pelin hirviöt on tuhottu.
- Torniin ilmestyy ranskalainen ritari, jos siitä ruudusta yrittää liikkua pohjoiseen tai länteen.
- Lisätty kaivon pohja uudeksi lokaatioksi, johon pääsee käyttämällä tikapuita.
- Lisätty ääniklippejä joihinkin tapahtumiin ja mökki-ruutuun.

## QoL

- Lisätty komentojen syöttömahdollisuudeksi 'enter'-näppäimen käyttö.
- Lisätty liikkumismahdollisuudeksi nuolinäppäinten käyttö.

## Esineet ja käyttötarkoitus

- Kuollut papukaija: Ei juonen kannalta tärkeä. Muuttuu käytettäessä nukkuvaksi papukaijaksi.
- Nukkuva papukaija: Ei juonen kannalta tärkeä. Nukkuu sikeästi.
- Huilu: Ei juonen kannalta tärkeä. Ei tee mitään, ennen kuin on saanut oppitunnin kaivoruudussa olevalta mieheltä käyttämällä huilua siinä ruudussa.
Tämän jälkeen soittaa ääniklipin.
- Kivi: Ei juonen kannalta tärkeä. Käytettäessä kaivoruudussa pudottaa kiven kaivon pohjalle ja soittaa ääniklipin. Kiven voi hakea takaisin kaivon
pohjalta käyttämällä tikapuita.
- Miekka: Käyttämällä tätä lohikäärmeeseen, surmaa lohikäärmeen. Jos yrittää käyttää tätä Caerbannogin jänikseen, häviää pelin.
- Antiochin Pyhä Käsikranaatti: Käyttämällä tätä Caerbannogin jänikseen, surmaa jäniksen ja portti itään aukeaa. Soittaa ääniklipin.
- Tikapuut: Käyttämällä näitä kaivolla, pääsee laskeutumaan kaivon pohjalle ja hakemaan Antiochin Pyhän Käsikranaatin. Kaivon pohjalta pääsee
takaisin ylös ainoastaan käyttämällä tikapuita.

## Pelin läpäisy

1. Poimi miekka mökki-ruudusta. 
2. Poimi tikapuut torni-ruudusta. 
3. Käytä tikapuita kaivo-ruudussa, pääset kaivon pohjalle. 
4. Poimi Antiochin Pyhä Käsikranaatti kaivon pohjalta. 
5. Käytä tikapuita kaivon pohjalla päästäksesi takaisin ylös. 
6. Käytä miekkaa lohikäärme-ruudussa, tapat lohikäärmeen, ja sen tilalle
ilmestyy Caerbannogin jänis. 
7. Käytä Antiochin Pyhä Käsikranaatti, tapat jäniksen ja portti aukeaa. (Jos käytät jänikseen miekkaa, häviät pelin.)
8. Tapettuasi jäniksen, mene portille ja liiku vielä kerran itään, pääset pelin läpi.

## Lähteet

Intro- ja voittomusiikki: Homeward Bound - Jack Trombey, De Wolfe Music Presents: Music from Monty Python and the Holy Grail        
Caerbannogin jänis-kuva: Kuvakaappaus elokuvasta Monty Python and the Holy Grail        
Mökkiruudun musiikki: Always Look on the Bright Side of Life - Eric Idle, Monty Python's Life of Brian soundtrack. Käsitelty Reaperissa low pass filterin
ja särön läpi vastaamaan paremmin seinän läpi kuuluvaa ääntä.       
Huilun ääniklippi: Melodia kappaleesta Always Look on the Bright Side of Life - Eric Idle, Monty Python's Life of Brian soundtrack, toteutettu Reaperilla
ja ilmaisella huilu VSTi:llä.       
Kiven ääniklippi: Youtube-videosta: 'Stone dropped in water sound effect no copyright stone sounds HQ (128 kbps)'. Käsitely Reaperissa kaiulla
vastaamaan paremmin pudotusta kapeaan kaivoon.      
Ranskalainen ritari: Kuva- ja äänikaappaus elokuvasta Monty Python and the Holy Grail.      
Antiochin Pyhän Käsikranaatin ääniklippi: Äänikaappaus elokuvasta Monty Python and the Holy Grail.

## Opettajan kommentti kurssista

Täydelliset suoritukset, hyvä. Pelissä oli paljon piirteitä ja toimintoja joita muut eivät ole käyttäneet, hyvä.

