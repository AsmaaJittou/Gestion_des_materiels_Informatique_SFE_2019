<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/



Route::get('login','HomeController@getlogin');
Route::post('login','HomeController@postLogin');

Route::post('logout', 'UserController@logout');
Route::get('index','HomeController@index');
  Route::get('forgotpassword','Auth\ForgotPasswordController@forgotPasword');
 
  
  Route::post('forgotpassword','Auth\ForgotPasswordController@password');

    Route::get('UserProfile', 'UserController@voir');
    Route::get('materiel', 'UserController@view');
    Route::get('profilOKEY','UserController@voirPro');
    Route::post('UserProfile','UserController@edit');

    Route::get('intervention', 'UserController@intervention');
    Route::get('contrat', 'SendEmailController@index');
    Route::post('contrat/send', 'EspaceController@send');
    Route::post('contrat/send', 'SendEmailController@send');
    Route::get('checkOut', 'EspaceController@checkOutt');
    Route::get('profil','EspaceController@testDate');
   // Route::get('checkout','EspaceController@checkOut');
//Route liste materiels des clients
Route::get('listMateriel','tableController@index');


// Route demande intervention
Route::get('/interventions','ClientController@voir');
 Route::POST('/interventions','ClientController@create');

 Route::get('loginTech', function () {
  return view('home.login_technicien');
});

 Route::get('fiche','fichController@voir');
Route::post('fiche','fichController@ficheTech');
Route::get('Contacter','EspaceController@contacter');
Route::post('Contacter/send','SendEmailController@sendAdmin');

Route::get('index_admin','UserController@index_ad');

Route::get('admin', 'UserController@index_admin');
Route::post('admin', 'UserController@login_admin');
Route::post('logout', 'UserController@logout');
//Route::get('ajout_technnicien','TechnicienController@show');
Route::get('login_technicien','TechnicienController@show');
Route::post('login_technicien', 'TechnicienController@postLogin');
Route::get('fiche','TechnicienController@showIndex');
Route::get('listeInter','TechnicienController@showListeInter');
Route::get('edit{id}','TechnicienController@edit'); 

Route::get('client', 'UserController@client');
Route::get('technicien', 'UserController@technicien'); 
Route::post('edit{id}',[
  'uses' => 'TechnicienController@update', 
  
]);

Route::post('technicien{id}',[
'uses' => 'technicienController@comfirmer_affectation', 

]);

//Route::post('edit{id}','TechnicienController@update');
Route::get('ajout_technicien','TechnicienController@show');


Route::post('technicien{id}',[
'uses' => 'TechnicienController@destroy', 

]);
Route::post('ajout_technicien', 'TechnicienController@Ajout');

Route::get('generate-pdf','getPDFController@generatePDF');
Route::post('intervention{id}',[
'uses' => 'interventionController@destroy', 

]);
Route::get('intervention{id}',[
'uses' => 'interventionController@destroy', 

]);

Route::post('client{id}',[
'uses' => 'ClientController@destroy', 

]);
Route::get('client{id}',[
'uses' => 'ClientController@destroy', 

]);
// ficheInterventionTechnicien///////
// Route::get('fiche', function () {
//   return view('InterventionTechnicien');
// });
 Route::get('fiche','fichController@voir');
 Route::post('fiche','fichController@ficheTech');
Route::get('liste_fiche','fichController@view_liste');
Route::get('liste_fiche_admin',[
'uses' => 'TechnicienController@see', 

]);

Route::get('liste_fiche_admin{id}',[
'uses' => 'TechnicienController@see_id', 

]);
Route::post('liste_fiche_admin{id}',[
'uses' => 'fichController@comfirmer', 
]);
Route::get('listeInter','listeInterventionController@creat'); 
// Route::post('liste_fiche_admin{id}',[
//   'uses' => 'TechnicienController@destroy_fiche', 

// ]);
Route::get('technicien{id}',[
'uses' => 'fichController@affecter', 

]);
Route::post('/list/print-pdf',[ 'as' => 'list.printpdf', 'uses' => 'interTechController@createlist']);
Route::post('/list/print-pdff',[ 'as' => 'list.printpdff', 'uses' => 'EspaceController@imprimer']);