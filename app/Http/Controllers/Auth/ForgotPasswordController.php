<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\SendsPasswordResetEmails;
use Illuminate\Http\Request;
use Sentinel;

use Reminder;
use App\User;
use Mail;

class ForgotPasswordController extends Controller
{
    public function forgotPasword()
    {
        return \View::make('home.forgotpassword');
    }
   
public function password(Request $request)
{
   $user = User::whereEmail($request->email)->get();
   if(count($user) == null )
   {
       return redirect()->back()->with(['error' => 'Email not exists']);

   }
   $user = Sentinel::findById($user->id);
   $reminder = Reminder::exists($user) ? : Reminder::create($user);
   $this->sendEmail($user,$reminder->code);

   return redirect()->back()->with(['success' =>'Reset code sent to your email' ]);
}


public function sendEmail($user,$code)
{
Mail::send(

    'email.forgotPasword',
    ['user' => $user , 'code' =>$code],

    function($message) use ($user)
    {
        $message->to($user->email);
        $message->subject("hello $user->nom" , "Activate your account ");

    }
);
}
    /*
    |--------------------------------------------------------------------------
    | Password Reset Controller
    |--------------------------------------------------------------------------
    |
    | This controller is responsible for handling password reset emails and
    | includes a trait which assists in sending these notifications from
    | your application to your users. Feel free to explore this trait.
    |
    */

    use SendsPasswordResetEmails;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest');
    }
}
