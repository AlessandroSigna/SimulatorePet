var stat = ["danni", "armatura", "salute", "resistenza", "mana"];
var img_plus = "../images/spp/plus.png";
var img_minus = "../images/spp/minus.png";
var img_help = "../images/spp/help.png";
var pet;
var danni = 0;
var max_danni = 0;
var armatura = 0;
var max_armatura = 0;
var salute = 0;
var max_salute = 70;
var resistenza = 0;
var max_resistenza = 50;
var mana = 0;
var max_mana = 50;
var abilità;
var punti_disponibili = 20000;
var punti_utilizzati = 0;

window.onload = function() {
    var gump = document.getElementById("gump_pet");
    var stat_y;
    var button_y;

    for (var i = 0; i <= 4; i++) {
        stat_y = 120 + (i * 40);
        button_y = 117 + (i * 40);

        gump.innerHTML += '<div class="stat" id="' + stat[i] + '" style="top: ' + stat_y + 'px;">0/0</div>'
        gump.innerHTML += '<img class="button" id="' + stat[i] + '_p" onclick=\'edit_stat(true,"' + stat[i] + '");\' style="left: 195px; top: ' + button_y + 'px;"src="' + img_plus + '">';
        gump.innerHTML += '<img class="button" id="' + stat[i] + '_m" onclick=\'edit_stat(false,"' + stat[i] + '");\' style="left: 215px; top: ' + button_y + 'px;"src="' + img_minus + '">';
    }

    gump.innerHTML += '<div class="point" id="punti_disponibili" style="top: 375px;">20000</div>';
    gump.innerHTML += '<div class="point" id="punti_utilizzati" style="top: 405px;">0</div>';
    gump.innerHTML += '<div id="reset" onclick="update_stat(pet,max_danni,max_armatura,abilità);"></div>';
}

function update_stat(id, dmg, ar, ability) {
    var gump = document.getElementById("pet_name");
    if (gump) {
        gump.innerHTML = id.innerHTML;
    } else {
        var gump = document.getElementById("gump_pet");
        gump.innerHTML += '<div id="pet_name">' + id.innerHTML + '</div>';
    }

    pet = id;
    danni = 0;
    max_danni = dmg;
    armatura = 0;
    max_armatura = ar;
    salute = 0;
    resistenza = 0;
    mana = 0;
    abilità = ability;
    punti_disponibili = 20000;
    punti_utilizzati = 0;

    document.getElementById("danni").innerHTML = danni + '/' + dmg;
    document.getElementById("armatura").innerHTML = armatura + '/' + ar;
    document.getElementById("salute").innerHTML = salute + '/70%';
    document.getElementById("resistenza").innerHTML = resistenza + '/50%';
    document.getElementById("mana").innerHTML = mana + '/50%';
    document.getElementById("punti_disponibili").innerHTML = punti_disponibili;
    document.getElementById("punti_utilizzati").innerHTML = punti_utilizzati;

    gump = document.getElementById("pet_ability");
    if (gump)
        gump.remove();

    if (ability) {
        ability = ability.split("/");

        document.getElementById("gump_pet").innerHTML += '<div id="pet_ability"></div>';

        for (var i = 0; i < ability.length; i++) {
            var ability_temp = ability[i].split(":");
            var ability_name = ability_temp[0];
            var ability_points = ability_temp[1];
            var ability_y = 120 + (i * 50);
            var ability_button_y = ability_y + 13;
            switch (ability_temp[0]) {
                case 'Cavalcatura':
                    var ability_img = "../images/spp/cavalcatura.png";
                    var ability_description = "La creatura a cui è stata insegnata questa abilità potrà essere utilizzata come cavalcatura.";
                    break;
                case 'Combattimento':
                    var ability_img = "../images/spp/combattimento.png";
                    var ability_description = "Quest'abilità permette di insegnare a pavide creature i basilari comportamenti da tenere in battaglia, grazie a questa abilità un semplice cavallo può divenire un fiero destriero.";
                    break;
                case 'Instancabile':
                    var ability_img = "../images/spp/instancabile.png";
                    var ability_description = "La creatura viene addestrata duramente per recuperare più velocemente dagli sforzi fisici intensi e alle ferite subite.";
                    break;
                case 'Furtività':
                    var ability_img = "../images/spp/furtivita.png";
                    var ability_description = "Questa abilità permette alla creatura che la possiede di muoversi silenziosamente e nascosta tra le ombre assieme al suo padrone.";
                    break;
                case 'Difesa':
                    var ability_img = "../images/spp/difesa.png";
                    var ability_description = "Questa abilità quando attivata rende la creatura che la possiede più difficile da colpire, ma al contempo rende meno incisivi i suoi attacchi.";
                    break;
                case 'Segugio':
                    var ability_img = "../images/spp/segugio.png";
                    var ability_description = "Per ogni creatura a cui viene insegnata questa abilità il padrone ottiene dei bonus per seguire una pista o per cercare creature nascoste, riuscendo a individuare prede anche molto più lontane.";
                    break;
                case 'Branco':
                    var ability_img = "../images/spp/branco.png";
                    var ability_description = "Le creature con istinto di branco si assistono l'un l'altra durante i combattimenti, guadagnando bonus maggiori per ogni altra creatura della stessa razza presente nel branco (propri pet o del party).";
                    break;
                case 'Manovra':
                    var ability_img = "../images/spp/manovra.png";
                    var ability_description = "Le creature dotate di questa abilità non saranno di intralcio al loro padrone durante i combattimenti.";
                    break;
                case 'Soffio':
                    var ability_img = "../images/spp/soffio.png";
                    var ability_description = "Questa abilità permette di attivare o meno gli attacchi a distanza della creatura.";
                    break;
                case 'Disturbo':
                    var ability_img = "../images/spp/disturbo.png";
                    var ability_description = "Grazie a questa abilità la creatura è in grado di infliggere attacchi di disturbo, i quali infliggono meno danni del normale ma danneggiano le abilità combattive della vittima.";
                    break;
                case 'Lacerante':
                    var ability_img = "../images/spp/lacerante.png";
                    var ability_description = "Con questo colpo speciale, la creatura sarà in grado di infliggere ferite laceranti, causando una perdita di punti ferita protratta nel tempo.";
                    break;
                case 'Turbinante':
                    var ability_img = "../images/spp/turbinante.png";
                    var ability_description = "Questo colpo permette alla creatura di colpire più avversari contemporaneamente, purchè questi siano in corpo a corpo. Utile quando si è circondati da molti nemici.";
                    break;
                case 'Doppio Colpo':
                    var ability_img = "../images/spp/doppiocolpo.png";
                    var ability_description = "Questa colpo permette alla creatura di sferrare due rapidi colpi in successione, il danno inflitto e le chance di colpire sono lievemente ridotte rispetto al normale.";
                    break;
                case 'Agilità':
                    var ability_img = "../images/spp/agilita.png";
                    var ability_description = "Questa abilità fornisce un bonus passivo alla difesa della creatura, rendendola più difficile da colpire.";
                    break;
                case 'Schivare':
                    var ability_img = "../images/spp/schivare.png";
                    var ability_description = "Richiede Agilità. Se attivata, la creatura si concentra esclusivamente a evitare gli attacchi del nemico, avrà più difficoltà nel recuperare le forze e i suoi attacchi saranno molto meno accurati.";
                    break;
                case 'Dispersione':
                    var ability_img = "../images/spp/dispersione.png";
                    var ability_description = "I colpi inferti dalla creatura che possiede questa abilità, avranno l'effetto di disperdere le creature evocate.";
                    break;
                case 'Guaritore':
                    var ability_img = "../images/spp/guaritore.png";
                    var ability_description = "La creatura a cui viene insegnata questa abilità tenterà di guarire il suo padrone durante i combattimenti.";
                    break;
                case 'Devastante':
                    var ability_img = "../images/spp/devastante.png";
                    var ability_description = "Questa abilità permette alla creatura di effettuare attacchi devastanti, con un sensibile aumento dei danni inflitti, il tutto a discapito della precisione, i colpi devastanti possono avere effetti collaterali come disarcionare o disarmare, o sbalzare la vittima.";
                    break;
                case 'Veleno':
                    var ability_img = "../images/spp/veleno.png";
                    var ability_description = "Questa abilità aumenterà l'efficacia del veleno della creatura. Per poter insegnare questa abilità occorre avere una certa conoscenza dei veleni";
                    break;
                case 'Furia':
                    var ability_img = "../images/spp/furia.png";
                    var ability_description = "La creatura dotata di questa abilità quando viene ferita in combattimento può infuriarsi, migliorando la sua capacità di combattimento per un breve periodo.";
                    break;
                case 'Cacciatore':
                    var ability_img = "../images/spp/cacciatore.png";
                    var ability_description = "Questa abilità permette ad un animale di aiutare il padrone nella raccolta di pelli, carne e piume.";
                    break;
                case 'Compagnia':
                    var ability_img = "../images/spp/compagnia.png";
                    var ability_description = "Questa abilità rende un animale da compagnia.";
                    break;
                default:
                    var ability_img = false;
                    var ability_description = false;
            }
            gump = document.getElementById("pet_ability");
            gump.innerHTML += '<img class="ability_img" id="' + ability_name + '_img' + '" style="top: ' + ability_y + 'px;" src="' + ability_img + '">';
            gump.innerHTML += '<p class="ability_name" id="' + ability_name + '" style="top: ' + ability_y + 'px;">' + ability_name + '</p>';
            gump.innerHTML += '<img class="ability_button" id="' + ability_name + '_button" onclick=\'edit_stat(true,"' + ability_name + ':' + ability_points + '");\' style="top: ' + ability_button_y + 'px;" src="' + img_plus + '">';

            var ability_name_help = ability_name + "_help";
            gump.innerHTML += '<img class="ability_help" onmouseenter=\'show_ability_help(true,"' + ability_name_help + '");\' onmouseleave=\'show_ability_help(false,"' + ability_name_help + '");\' style="top: ' + ability_button_y + 'px;" src="' + img_help + '">';
            gump.innerHTML += '<div class="ability_info" id="' + ability_name_help + '"><div class="ability_info_name">' + ability_name + '</div><div class="ability_info_description">' + ability_description + '</div><div class="ability_info_cost">' + ability_points + '</div></div>';
        }
    }
}

function show_ability_help(status, id) {
    if (status)
        document.getElementById(id).style.display = "block";
    else
        document.getElementById(id).style.display = "none";
}

function edit_stat(status, id) {
    if (status) {
        switch (id) {
            case 'danni':
                var modifica = danni + 1;
                var punti = 400;
                var test_punti = punti_disponibili - punti;
                var max_statistica = max_danni;
                if (modifica <= max_danni && test_punti >= 0) {
                    danni = modifica;
                    punti_disponibili -= punti;
                    punti_utilizzati += punti;
                    status = 'stat';
                }
                break;
            case 'armatura':
                var modifica = armatura + 1;
                var punti = 400;
                var test_punti = punti_disponibili - punti;
                var max_statistica = max_armatura;
                if (modifica <= max_armatura && test_punti >= 0) {
                    armatura = modifica;
                    punti_disponibili -= punti;
                    punti_utilizzati += punti;
                    status = 'stat';
                }
                break;
            case 'salute':
                var modifica = salute + 7;
                var punti = 500;
                var test_punti = punti_disponibili - punti;
                var max_statistica = max_salute + '%';
                if (modifica <= max_salute && test_punti >= 0) {
                    salute = modifica;
                    punti_disponibili -= punti;
                    punti_utilizzati += punti;
                    status = 'stat';
                }
                break;
            case 'resistenza':
                var modifica = resistenza + 5;
                var punti = 250;
                var test_punti = punti_disponibili - punti;
                var max_statistica = max_resistenza + '%';
                if (modifica <= max_resistenza && test_punti >= 0) {
                    resistenza = modifica;
                    punti_disponibili -= punti;
                    punti_utilizzati += punti;
                    status = 'stat';
                }
                break;
            case 'mana':
                var modifica = mana + 5;
                var punti = 250;
                var test_punti = punti_disponibili - punti;
                var max_statistica = max_mana + '%';
                if (modifica <= max_mana && test_punti >= 0) {
                    mana = modifica;
                    punti_disponibili -= punti;
                    punti_utilizzati += punti;
                    status = 'stat';
                }
                break;
            default:
                var id = id.split(":");
                var ability_cost = parseInt(id[1]);
                var test_punti = punti_disponibili - ability_cost;
                if (test_punti >= 0) {
                    document.getElementById(id[0] + "_img").style.filter = "none";
                    document.getElementById(id[0] + "_button").src = img_minus;
                    document.getElementById(id[0] + "_button").setAttribute("onclick", 'edit_stat(false,"' + id[0] + ':' + id[1] + '")');
                    punti_disponibili -= ability_cost;
                    punti_utilizzati += ability_cost;
                }
                break;
        }
    } else {
        switch (id) {
            case 'danni':
                var modifica = danni - 1;
                var punti = 400;
                var max_statistica = max_danni;
                if (modifica >= 0) {
                    danni = modifica;
                    punti_disponibili += punti;
                    punti_utilizzati -= punti;
                    status = 'stat';
                }
                break;
            case 'armatura':
                var modifica = armatura - 1;
                var punti = 400;
                var max_statistica = max_armatura;
                if (modifica >= 0) {
                    armatura = modifica;
                    punti_disponibili += punti;
                    punti_utilizzati -= punti;
                    status = 'stat';
                }
                break;
            case 'salute':
                var modifica = salute - 7;
                var punti = 500;
                var max_statistica = max_salute + '%';
                if (modifica >= 0) {
                    salute = modifica;
                    punti_disponibili += punti;
                    punti_utilizzati -= punti;
                    status = 'stat';
                }
                break;
            case 'resistenza':
                var modifica = resistenza - 5;
                var punti = 250;
                var max_statistica = max_resistenza + '%';
                if (modifica >= 0) {
                    resistenza = modifica;
                    punti_disponibili += punti;
                    punti_utilizzati -= punti;
                    status = 'stat';
                }
                break;
            case 'mana':
                var modifica = mana - 5;
                var punti = 250;
                var max_statistica = max_mana + '%';
                if (modifica >= 0) {
                    mana = modifica;
                    punti_disponibili += punti;
                    punti_utilizzati -= punti;
                    status = 'stat';
                }
                break;
            default:
                var id = id.split(":");
                var ability_cost = parseInt(id[1]);
                document.getElementById(id[0] + "_img").style.filter = "grayscale(100%)";
                document.getElementById(id[0] + "_button").src = img_plus;
                document.getElementById(id[0] + "_button").setAttribute("onclick", 'edit_stat(true,"' + id[0] + ':' + id[1] + '")');
                punti_disponibili += ability_cost;
                punti_utilizzati -= ability_cost;
                break;
        }
    }
    if (status == 'stat')
        document.getElementById(id).innerHTML = modifica + '/' + max_statistica;
    document.getElementById("punti_disponibili").innerHTML = punti_disponibili;
    document.getElementById("punti_utilizzati").innerHTML = punti_utilizzati;
}