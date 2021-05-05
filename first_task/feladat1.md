# Feladat1 - Alap html

Ebben a feladatban felsetupoljátok a VS Code-ot, majd egy alap html dokumentum strukturáját készítititek el.  
A végén szakszerűen felrakjátok githubra, command line-ból.

## A VS Code

Ez egy windóz only guide.  
Első lépés letölteni, felrakni. Wow.

Az legfontosabb dolog, hogy ne egy-egy file-t, például az index.html-t nyisd meg, hanem az **egész mappát**, amibe van (htmlfornoobs/first_task).  
Így gyorsan át tudsz váltani a projekt file-jai között itt az explorerbe, nem kell nyitogatni meg ilyenek.  
Viszont ami miatt elsődleges prioritás, az a terminal használat. Később kitérek majd rá.

Hogy ke' mappát megnyitni? File -> Open Folder -> kiválasztod a mappát.  
Ha épp az intézőben abban a mappában vagy, amit meg fogsz nyitni, akkor van egy gyors módszer.  
Belekattintasz az elérési útba, és helyére beírod, hogy cmd. Ekkor megnyitja a cmd-t, a mappán belül navigálva.  
A `code` parancs megnyitja a programot. A `.` pedig a mappa relatív elérési útja, tehát saját maga.  
Tehát ha mondjuk a html-for-noobs mappából akarnánk megnyitni a first_task mappát, akkor a parancs `code ./first_task` lenne.  
![Hogyan kell megcsinálni kép](../feladat_kepek/vscode.png)

Jó, megnyílt a mappa. Szép munka! Innentől már mehet a kódolás, azonban a VSCode erőssége az extensionokben (is) rejlik.  
Az extensions ablakot itt balra is megnyithatod az ikonnal, vagy felül View -> Extensions  
Leírom, amiket én használok, ezek optional, de strongly recommended.

> **Auto Rename Tag** - ha mondjuk egy `<h2>...</h2>`-t `<h1>...</h1>`-re akarsz cserélni, ezzel elég csak az egyik taget átírni, a másikat automatiusan megváltoztatja.
>
> **Live Server** - Nem kell frissítgetni a böngésző oldalt, mentéskor automatikusan megjelennek a változtatások.
>
> **Prettier** - Automatikusan megformázza a kódod mentéskor. Ez a legjobb dolog a világon.
