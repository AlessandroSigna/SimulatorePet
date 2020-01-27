<!DOCTYPE html>
<html>
<head>
	<title>Simulatore Punti Pet</title>
	<meta charset="UTF-8"> 
	<META http-equiv="cache-control" content="no-cache">
    <link rel="icon" href="../images/tmcui.ico"/>
	<link rel="stylesheet" type="text/css" href="../css/index.css"/>
	<link rel="stylesheet" type="text/css" href="../css/spp.css"/>
    <script type="text/javascript" src="../js/index.js"></script>
	<script type="text/javascript" src="../js/spp.js"></script>
</head>
<body>

<div class="logo"><a href="http://tmcui.altervista.org/">TMCUI</a></div>
<div class="list">
	<ul>
		<li class='classi_label'><a href='#'>Classi</a></li>
		<ul class='classi'>
			<li><a href="http://themiracle.igz.it/classi/Geniere.htm" >Geniere</a></li>
			<li><a href="http://themiracle.igz.it/classi/Ilbardo.htm" >Bardo</a></li>
			<li><a href="http://themiracle.igz.it/classi/Ilchierico.htm" >Chierico</a></li>
			<li><a href="http://themiracle.igz.it/classi/ladro.htm" >Rogue</a></li>
			<li><a href="http://themiracle.igz.it/classi/druido.htm" >Druido</a></li>
			<li><a href="http://themiracle.igz.it/classi/ranger.htm" >Ranger</a></li>
			<li><a href="http://themiracle.igz.it/classi/Guerriero.htm" >Guerriero</a></li>
			<li><a href="http://themiracle.igz.it/classi/mago.htm" >Mago</a></li>
			<li><a href="http://themiracle.igz.it/classi/Barbaro.htm" >Berserker</a></li>
		</ul>
		<li><a href="http://tmcui.altervista.org/web/leghe.php" >Leghe</a></li>
		<li><a href="http://tmcui.altervista.org/web/resistenze_metalli.php" >Resistenze Metalli</a></li>
		<li><a href="http://tmcui.altervista.org/web/resistenze_pelli.php" >Resistenze Pelli</a></li>
		<li><a href="http://tmcui.altervista.org/web/simulatore_punti_pet.php" >Simulatore Punti Pet</a></li>
		<li><a href="http://tmcui.altervista.org/web/spellcaster_file_maker.htm" >Spellcaster File Maker</a></li>
	</ul>
</div>
<div id="gump_pet">
	<div id="pet_list">
		<ul>
			<li onclick='update_stat(this,7,8,"Combattimento:2000/Segugio:500/Manovra:500/Branco:1500/Furtività:1000/Compagnia:250/Cacciatore:750");'>Cane</li>
			<li onclick='update_stat(this,10,10,"Combattimento:2000/Difesa:750/Instancabile:2000");'>Cavallo</li>
			<li onclick='update_stat(this,12,12,"Combattimento:2000/Difesa:750/Instancabile:2000");'>Destriero Argentato</li>
			<li onclick='update_stat(this,0,0,"Combattimento:2000/Difesa:750/Instancabile:2000");'>Lama</li>
			<li onclick='update_stat(this,10,10,"Combattimento:2000/Difesa:750/Instancabile:2000");'>Ostard Deserto</li>
			<li onclick='update_stat(this,12,12,"Difesa:750/Instancabile:2000");'>Ostard Foreste</li>
			<li onclick='update_stat(this,12,12,"Furia/Lacerante/Agilità/Instancabile");'>Ostard Frenetico</li>
			<li onclick='update_stat(this,0,0);'>Nagaronte</li>
			<li onclick='update_stat(this,15,15,"Difesa:750/Lacerante:1000/Instancabile:2000");'>Alligatore</li>
			<li onclick='update_stat(this,15,15,"Difesa:750/Doppio Colpo:1500/Devastante:1250/Furia:1500/Instancabile:2000");'>Gorilla</li>
			<li onclick='update_stat(this,10,8,"Agilità:1500/Manovra:500/Disturbo:1250/Doppio Colpo:1500/Combattimento:2000/Schivare:1500/Cacciatore:750");'>Aquila</li>
			<li onclick='update_stat(this,12,12,"Agilità:1500/Branco:1500/Furtività:1000/Manovra:500");'>Ratto Gigante</li>
			<li onclick='update_stat(this,10,10,"Manovra:500/Furtività:1000/Veleno:2000");'>Ragno Gigante</li>
			<li onclick='update_stat(this,15,15,"Difesa:750/Cavalcatura:3000/Devastante:1250/Instancabile:2000");'>Scarafaggio Gigante</li>
			<li onclick='update_stat(this,8,7,"Combattimento:2000/Manovra:500/Disturbo:1250/Branco:1500/Lacerante:1000/Compagnia:250");'>Pipistrello Gigante</li>
			<li onclick='update_stat(this,15,17,"Difesa:750/Devastante:1250/Lacerante:1000/Instancabile:1000");'>Orso</li>
			<li onclick='update_stat(this,15,17,"Devastante:1250/Difesa:750/Cavalcatura:3000/Lacerante:1000/Instancabile:1000");'>Orso delle Caverne</li>
			<li onclick='update_stat(this,15,17,"Difesa:750/Devastante:1250/Lacerante:1000/Instancabile:1000/Furia:1500");'>Orso Grizzly</li>
			<li onclick='update_stat(this,15,17,"Difesa:750/Devastante:1250/Lacerante:1000/Instancabile:1000/Cavalcatura:3000");'>Orso Polare</li>
			<li onclick='update_stat(this,8,8,"Combattimento:2000/Difesa:750/Instancabile:2000");'>Karlarx</li>
			<li onclick='update_stat(this,15,15,"Segugio:500/Branco:1500/Manovra:500/Furtività:2000/Cacciatore:750/Agilità:3000");'>Lupo</li>
			<li>Orsolince</li>
			<li onclick='update_stat(this,15,15,"Manovra:500/Furtività:1000/Instancabile:2000/Agilità:1500/Disturbo:2500/Schivare:1500/Cacciatore:750");'>Leopardo delle Nevi</li>
			<li onclick='update_stat(this,15,15,"Doppio Colpo:1500/Disturbo:1250/Cavalcatura:3000/Lacerante:1000/Agilità:1500/Instancabile:2000");'>Grifone</li>
			<li onclick='update_stat(this,15,15,"Difesa:750/Doppio Colpo:1500/Veleno:2000/Instancabile:2000");'>Scorpione Gigante</li>
			<li onclick='update_stat(this,0,0,"Agilità/Doppio Colpo/Furia/Instancabile");'>Scarafaggio Mietitore</li>
			<li onclick='update_stat(this,10,10,"Difesa:750/Combattimento:2000/Instancabile:2000");'>Cuordipalude</li>
			<li onclick='update_stat(this,12,12,"Difesa:750/Lacerante:1000/Instancabile:2000");'>Cuordipalude Selvaggio</li>
			<li onclick='update_stat(this,15,15,"Manovra:500/Furtività:1000/Doppio Colpo:1500/Agilità:1500/Disturbo:2500");'>Gatto di Palude</li>
			<li onclick='update_stat(this,17,15,"Difesa:750/Devastante:1250/Soffio:500/Lacerante:1000/Instancabile:2000");'>Lucertola di Palude</li>
			<li onclick='update_stat(this,15,17,"Difesa/Lacerante/Devastante/Instancabile");'>Sauro Corazzato</li>
			<li onclick='update_stat(this,15,15,"Segugio/Branco/Manovra/Furtività/Agilità/Schivare/Soffio");'>Lupo Glaciale</li>
			<li onclick='update_stat(this,15,15,"Segugio:500/Branco:1500/Manovra:500/Cavalcatura:3000/Furtività:2000/Lacerante:1000/Instancabile:2000");'>Lupo Gigante Bianco</li>
			<li onclick='update_stat(this,15,15,"Segugio:500/Furia:1500/Manovra:500/Furtività:2000/Cavalcatura:3000/Lacerante:1000/Instancabile:2000");'>Lupo Gigante Nero</li>
			<li onclick='update_stat(this,15,15,"Manovra/Furtività/Doppio Colpo/Instancabile/Lacerante/Agilità/Schivare");'>Leone</li>
			<li onclick='update_stat(this,12,15,"Difesa:750/Devastante:1250/Soffio:500/Instancabile:2000");'>Destriero del Fuoco</li>
			<li onclick='update_stat(this,12,15,"Difesa:750/Devastante:1250/Instancabile:2000");'>Destriero del Tuono</li>
			<li onclick='update_stat(this,0,0);'>Destriero dei Flutti</li>
			<li onclick='update_stat(this,12,12,"Difesa:750/Guaritore:1000/Instancabile:2000");'>Kirin</li>
			<li onclick='update_stat(this,15,15,"Manovra/Segugio/Furtività/Agilità/Instancabile/Veleno");'>Serpente Gigante</li>
			<li onclick='update_stat(this,15,15,"Manovra/Segugio/Doppio Colpo/Furtività/Agilità/Instancabile");'>Serpente di Ghiaccio</li>
			<li onclick='update_stat(this,14,13,"Manovra:500/Disturbo:1250/Furtività:1000/Agilità:1500/Dispersione:1500");'>Serpente Argentato</li>
			<li onclick='update_stat(this,13,14,"Manovra:500/Lacerante:1000/Furtività:1000/Agilità:1500/Veleno:2000");'>Serpente Dorato</li>
			<li onclick='update_stat(this,10,10,"Manovra:500/Segugio:500/Furtività:1000/Doppio Colpo:1500/Agilità:1500/Instancabile:2000");'>Anguilla Gigante</li>
			<li onclick='update_stat(this,15,15,"Disturbo:2500/Veleno:2000/Cavalcatura:3000/Agilità:1500/Instancabile:2000");'>Manticora</li>
			<li onclick='update_stat(this,15,17,"Difesa:750/Devastante:1250/Turbinante:1250/Soffio:500/Instancabile:2000");'>Gorgone</li>
			<li onclick='update_stat(this,15,15,"Veleno:2000/Devastante:1250/Cavalcatura:3000/Turbinante:1250/Soffio:500/Instancabile:2000");'>Chimera</li>
			<li onclick='update_stat(this,15,15,"Difesa:750/Segugio:500/Lacerante:1000/Soffio:500/Cavalcatura:3000/Instancabile:2000");'>Incubo</li>
			<li onclick='update_stat(this,15,15,"Segugio:500/Lacerante:1000/Instancabile:2000/Agilità:1500/Disturbo:1250/Cavalcatura:3000");'>Rapace Celestiale</li>
		</ul>
	</div>
</div>

</body>
</html>