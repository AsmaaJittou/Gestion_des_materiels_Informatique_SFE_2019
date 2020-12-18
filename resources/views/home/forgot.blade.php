<h1> hello {{$user->name}} </h1>

<p>
 please click the password resett button to reset your password 

 <a href="{{url('reset_password/'.$user->email.'/'.$code)}}">Reset Password </a>

</p>
