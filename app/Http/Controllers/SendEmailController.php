<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\SendMail;
class SendEmailController extends Controller
{
     function  index(){

        return  view('contrat');
     } 

     function send(Request $request){
       $this->validate($request, [
        'email'         =>           'required|email'
       ]);
       $data = array(

        'email'         => $request->email
       );
      Mail::send('textValidateContrat',$data , function($messag) use ($data){
         $messag->from('hightechsome@gmail.com');
         $messag->to($data['email']);
         $messag->subject('Renouvellement du contrat');

      }); 
      return redirect('checkOut');
     }

     
}
