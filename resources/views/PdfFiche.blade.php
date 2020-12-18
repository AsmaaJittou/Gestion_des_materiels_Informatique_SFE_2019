<!DOCTYPE html>
<html lang="en">
<head>
	<title>Fiche Intervention</title>
	<style type="text/css">
fieldset
{
  
  max-width:500px;
  padding:16px;	
}
.legend1
{
  margin-bottom:0px;
  margin-left:16px;
}

p {
	text-align: right;
	 max-width:540px;
}
h3{
	padding-top: 10px;
	}
	h6{
		text-align: center;
		max-width:540px;
	}
	</style>


	
</head>

<body>
	
<img src="{{('img/hightechok.png')}}" class="img-fluid logo-desktop" style="position:absolute; left:20px; top:26px; width:100px; heigh:100px;">

	<p>Vente Materiel Informatique Hard,<br>
	Soft & Consommable</p>
	<p>Réseaux Informatique & Téléphonies</p>
	<p>Détection d'Incendie & Système d'Alarme</p>
	<p>Télédistribution & Sonorisation</p>
	<h3>FICHE D'INTERVENTION</h3>
	<br><br>
<fieldset>
	<label>Technicien : {{$tech->nom }}</label> <br>
	<label>Date : {{$interv->date_demande }}</label><br>
	<label>Client : {{ $user->prenom}} {{ $user->nom }}</label><br>

</fieldset>
<br><br>
<fieldset>
	<legend>Travaux effectues</legend>
	   Installation d'un systeme d'exploitation
</fieldset>
<br><br>
<fieldset>
	<legend>Observation</legend>
       l'installation windows 10 a été bien effectué
</fieldset>

<br><br><br><br><br><br>
<h6>Numéro 36, Rue 447 Les Amicales des Fonctionnaires- Tél.:05 28 21 20 29 <br></h6>
<h6>Site Web : www.univershightech.com</h6>
<h6>E-mail : univers@univershightech.com</h6>
</body>
</html>