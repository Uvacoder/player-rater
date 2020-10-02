import IMG1 from './img/johnny_g.svg'
import IMG2 from './img/Auston_Matthews.svg'
import IMG3 from './img/Artemi_Panarin.svg'
import IMG4 from './img/Bobby_Ryan.svg'
import IMG5 from './img/Brendan_Gallagher.svg'
import IMG6 from './img/Connor_Mcdavid.svg'
import IMG7 from './img/crosby.svg'
import IMG8 from './img/Jack_Eichel.svg'
import IMG9 from './img/John_Tavares.svg'
import IMG10 from './img/karlsson.svg'
import IMG11 from './img/Max_Domi.svg'
import IMG12 from './img/Nikita_Kucherov.svg'
import IMG13 from './img/ovechkin.svg'
import IMG14 from './img/pk_subban.svg'
import IMG15 from './img/Steven_Stamkos.svg'
import IMG16 from './img/William_Nylander.svg'

export default function matchPlayerImage(player) {
    switch (player) {
        case "Johnny Gaudreau":
            return IMG1;
        case "Auston Matthews":
            return IMG2
        case "Artemi Panarin":
            return IMG3
        case "Bobby Ryan":
            return IMG4
        case "Brendan Gallagher":
            return IMG5
        case "Connor McDavid":
            return IMG6
        case "Sidney Crosby":
            return IMG7
        case "Jack Eichel":
            return IMG8
        case "John Tavares":
            return IMG9
        case "Erik Karlsson":
            return IMG10
        case "Max Domi":
            return IMG11
        case "Nikita Kucherov":
            return IMG12
        case "Alex Ovechkin":
            return IMG13
        case "P.K. Subban":
            return IMG14
        case "Steven Stamkos":
            return IMG15
        case "William Nylander":
            return IMG16
        }
    }
