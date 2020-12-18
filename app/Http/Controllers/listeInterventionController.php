<?php

namespace App\Http\Controllers;
use resources\views\ficheIntervention;
use resources\views\listeInterTech;
use App\intervention;
use Illuminate\Http\Request;
use DB;
use App\User;
use App\technicien;
use Session;

class listeInterventionController extends Controller
{
  
public function creat()
{
  
        $email = session('email');
         
           $intervention  = Intervention::whereIn('id_technicien_affecter', function($intervention )use($email){
           $intervention->select('id_tech')->from((new technicien)->getTable())
           ->where('email',$email);
          })->get();
          $technicien= DB::table('techniciens')->where('email',$email)->first();
         return view('listeInterTech',compact('intervention','technicien'));
        
    
}

}