<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\materiel;
use DB;
// use resources\views\user;
use resources\views\listMateriel;
use App\User;
use Illuminate\Support\Facades\Auth;
use Session;
// use App\client;

class tableController extends Controller
{
    function index(){
      $ICE=session('ICE');
    // $req=$request->input('email');
    //   $request->session()->put('req',$req);
    //   $output=$request->session()->get('req');

         $materiel = Materiel::whereIn('id_cli', function($materiel)use($ICE){
          $materiel->select('id')->from((new User)->getTable())
          ->where('ICE',$ICE);
         })->get();
               // return $materiel;
               $result = User::where('ICE',$ICE)->first();
                return view('listMateriel', compact('materiel','result'));
                
}
}