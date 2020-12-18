<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\intervention;
use App\User;
use App\materiel;
use Illuminate\Support\Facades\Auth;
use Session;
use DB;
use DateTime;
use Carbon\Carbon;
use resources\views\demande;

class ClientController extends Controller
{
  public function create(Request $request){
    if($request->isMethod('post')){
      $item = new intervention;
      $item->ICE=$request->input('ice');
      $item->date_demande= new Datetime();
      $item->tel_client=$request->input('num');
      $item->description=$request->input('desc');
      $item->nom_materiel=$request->input('mat');
      $item->save();
    }
           $item->save();

           if($item->save()){
            Session::flash('success', 'votre demande a été envoyé');
           }
           else{
            Session::flash('error', 'Task failed!');
           }
          return redirect('interventions');
   }
     public function voir()
     {
         //$interventions =\App\intervention::all();
          $ICE=session('ICE');
         $interventions = User::where('ICE',$ICE)->first();
         $materiel = materiel::whereIn('id_cli', function($materiel)use($ICE){
          $materiel->select('id')->from((new User)->getTable())
          ->where('ICE',$ICE);
         })->get();
         return view('demandeIntervention',compact('interventions','materiel'));
     }
    //  listmateriel
//      function index(){
//       $ICE=session('ICE');
//     // $req=$request->input('email');
//     //   $request->session()->put('req',$req);
//     //   $output=$request->session()->get('req');

//          $materiel = materiel::whereIn('id_cli', function($materiel)use($ICE){
//           $materiel->select('id')->from((new User)->getTable())
//           ->where('ICE',$ICE);
//          })->get();
//                // return $materiel;
//                 return view('demandeIntervention', compact('materiel'));
                
// }
public function destroy($id)
    {
        $student = User::find($id);
        $student->delete();
        return redirect()->back()->with('success', 'Data Deleted');
    }
}
