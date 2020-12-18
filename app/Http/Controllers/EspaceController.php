<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use DateTime;
use App\Contrat;
use DB;
use Carbon\Carbon;
use Illuminate\Support\Facades\Mail;
use App\Mail\SendMail;
use PDF;
use Session;
class EspaceController extends Controller
{   
    
    public function addContrat(Request $request){
        if($request->isMethod('post')){
            $newContrat= new contrat();
            $emailClient= $request->input('email');
         $req = DB::table('users')->where('email' , $emailClient)->first();
            $newContrat->id_cli = $req->id ;
            $date =  new DateTime();
            $newContrat->debut= $date->format('Y-m-d');
            $newContrat->fin=date("Y-m-d", strtotime(date("Y-m-d", strtotime($newContrat->debut)) . " + 1 year"));
            $newContrat->save();
        }
       
    }
    public function testDate(){
        $ICE=session('ICE');
        $date =  new DateTime();
        $client = DB::table('users')->where('ICE' , $ICE)->first();
        $email = $client->email;
        $data = array(

            'email'         => $email
           );
        $Dateclient = DB::table('contrats')->where('id_cli' , '1' )->first();
        $dateFin = $Dateclient->fin;
        $dateNow= $date->format('Y-m-d');
       $now  = Carbon::now();
           $def= $now->diffInDays($dateFin);
          if($def==0){
            
            Mail::send('dynamic_test', $data , function($messag) use ($data){
                $messag->from('hightechsome@gmail.com');
                $messag->to($data['email']);
                $messag->subject('Expiration du contrat'); });
            } return redirect('profilOKEY');
    }
    public function send(Request $request){
        $this->validate($request, [
            'email'         =>           'required|email'
           ]);
        $ICE=session('ICE');
        $client = DB::table('users')->where('ICE' , $ICE)->first();
        $data = array(

            'email'         => $request->email
           );
            Mail::send('textValidateContrat', $data , function($messag) use ($data){
                $messag->from('hightechsome@gmail.com');
                $messag->to($data['email']);
                $messag->subject('Renouvellement du contrat'); });
                return redirect('checkOut');
    }
    public function contacter()
    {
      
        return view('contacteAdmin');
    }

    public function contacterSend(Request $request)
    { 
         if($request->isMethod('post')){
        $emailHightTech='hightechsome@gmail.com';
        $ICE=session('ICE');
        $ObjetSend= $request->input('objetSend');
        $client = DB::table('users')->where('ICE' , $ICE)->first();
        ///$emailClient = $client->email;
        $emailClient ='jittouasmaa@gmail.com';
        $data = array(

            'email'         => $emailHightTech
           );
           Mail::send('test', $data , function($messag) use ($data){
            $messag->from('jittouasmaa@gmail.com');
            $messag->to($data['email']);
            $messag->subject('Message Client High Tech '); });

    }
    return redirect('Contacter'); 
    }

    
    public function checkOutt(){
        $ICE=session('ICE');
        $client = DB::table('users')->where('ICE' , $ICE)->first();
    return view('checkout',compact('client'));
}

 public function imprimer(Request $request){ 
    if($request->isMethod('post')){
    $ICE=session('ICE');
    $client = DB::table('users')->where('ICE' , $ICE)->first();
    $contrat = DB::table('contrats')->where('id_cli' , $client->id)->first();
    $pdf = PDF::loadView('test', compact('client','contrat')); 
    return $pdf->download('Contrat.pdf');
    }

}
}
