<html>
<head>
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

<br><br><br><br><br><br><br><br><br>
<fieldset class="form-group">
<legend>Informations sur le client </legend>
	
    <label>ICE : {{ $client->ICE }} </label><br>
	<label>Nom : {{ $client->nom}} {{ $client->prenom}}</label> <br>
	<label>Adresse : {{ $client->Adresse }}</label><br>
	<label>Telephone : {{ $client->tel }} </label><br>
    <label>Email : {{ $client->email }} </label><br>
</fieldset>
<br> <br> <br>
<fieldset class="form-group">
<legend>Période Contrat</legend>
    <label>Date début : {{ $contrat->debut}}</label> <br>
	<label>Date Fin : {{ $contrat->fin}}</label><br>
	<label>date de renouvellement : {{ $contrat->debut}} </label><br>

</fieldset>
<br><br><br>
<h6>Numéro 36, Rue 447 El Quods- Tél.:05 28 21 20 29 <br></h6>
<h6>Site Web : www.univershightech.com</h6>
<h6>E-mail : univers@univershightech.com</h6>





</body>
</html>



