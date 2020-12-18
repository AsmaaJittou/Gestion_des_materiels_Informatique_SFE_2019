<?php

namespace App\Http\Controllers;
use resources\views\listIntervention;
use App\intervention;
use App\User;
use PDF;
use DB;
use Illuminate\Http\Request;

class interTechController extends Controller
{
    function createlist(Request $request){ 
        if($request->isMethod('post')){  
        $idHidden = $request->idHidden ;
        
        $interv = DB::table('interventions')->where('id', $idHidden)->first();
        $tech = DB::table('techniciens')->where('id_tech', $interv->id_technicien_affecter)->first();
        $user = DB::table('users')->where('ICE', $interv->ICE)->first();
        $data = [
        'ICE_Client'=> $user
                     ];  
      //  $pdf	=new PDF();
        $pdf = PDF::loadView('PdfFiche', compact('interv','tech','user'));  
        // $this->$pdf;
        return $pdf->download('Intervention.pdf');
        // return view('listeIntervention', compact('intervention'));
                    
                    }
         
    
}
// $materiel = materiel::whereIn('id_cli', function($materiel)use($ICE){
        //     $materiel->select('id')->from((new User)->getTable())
        //     ->where('ICE',$ICE);
        //    })->get();
    // $id=$request->input('id');

    //      $intervention=DB::table('interventions')->where('id',$id)->first();
    //     $data = [
    //     'ICE_Client'=>$intervention->first()
    //                  ];
    //     $pdf = PDF::loadView('listeIntervention', $data);  
    //     // $this->$pdf;
    //     return $pdf->download('Intervention.pdf');
    //      return view('listeIntervention', compact('intervention','id'));
    // //    var_dump($intervention);
}
