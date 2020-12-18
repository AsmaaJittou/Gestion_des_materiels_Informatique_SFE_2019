<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\fiche;
use resources\views\InterventionTechnicien;
use Illuminate\Support\Facades\Auth;
use App\technicien;
use App\User;
use DB;
use Session;
class fichController extends Controller
{
    public function ficheTech(Request $request){ 
      if($request->isMethod('post')){   
        $item = new fiche;
        // $item->numfiche = rand(1,1000000);
        // $item->nom_technicien = $request->input('Tnom');
        $item->date = $request->input('date');
        // $item->nom_client = $request->input('Cnom');
      //   $item->contrat = $request->input('contrat');
        $item->travaux_effectuer = $request->input('travaux');
        $item->observation =$request->input('observ');
        $item->email = session('email');
        
             // $item->date=null;
             // $item->nom="aaaaa";
             // $item->num="122345678";
             // $item->descr="azertyuikjhgf";
             $item->save();
      }
          
      if($item->save()){
         Session::flash('success', 'Votre fiche a été envoyé');
        }
        else{
         Session::flash('error', 'erreur');
        }
        return redirect('fiche');
     }
     public function voir()
     {
        
        $email = session('email');
          // $email = "assmaejittou@gmail.com";
         $technicien =DB::table('techniciens')->where('email',$email)->first();
         $user = User::whereIn('ICE', function($user)use($email){
            $user->select('ICE')->from((new technicien)->getTable())
            ->where('email',$email);
           })->first();
         
          return view('InterventionTechnicien',compact('technicien','user'));
         
     }
   //   $materiel = materiel::whereIn('id_cli', function($materiel)use($ICE){
   //    $materiel->select('id')->from((new User)->getTable())
   //    ->where('ICE',$ICE);
   //   })->get();
}
