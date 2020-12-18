<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use Illuminate\Support\Facades\Auth;
use Session;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    // public function update(User $user)
    // { 
    //     $this->validate(request(), [
    //         'nom' => 'required',
    //         'prenom' => 'required|min:6',
    //         'email' => 'required|min:6|unique:users',
    //         'CIN' => 'required|unique:users',
    //         'password' => 'required|min:6'
    //     ]);

    //     $user->nom = request('nom');
    //     $user->prenom = request('prenom');
    //     $user->email = request('email');
    //     $user->CIN = request('CIN');
    //     $user->password = bcrypt(request('password'));

    //     $user->save();

    //     return back();
    // }

    public function voir()
{
    $ICE=session('ICE');
    $utilisateur = User::where('ICE',$ICE)->first();

    return view('home.userProfil', compact('utilisateur'));

   
    // À faire, récupérer l'utilisateur en base de données et charger une vue
}
public function voirPro()
{
    $ICE=session('ICE');
    $utilisateur = User::where('ICE',$ICE)->first();

    return view('home.profilMenu', compact('utilisateur'));

   
    // À faire, récupérer l'utilisateur en base de données et charger une vue
}

public function intervention()
{
    $ICE=session('ICE');
    $intervention = DB::table('interventions')->get();
    return view('home.liste_intervention', compact('intervention'));
    
}


public function client()
{
  $clients= DB::table('users')->get();
    return view('home.liste_client', compact('clients'));   
}
public function index_admin()
{
    $email = session('email');
    $admin= DB::table('admins')->where('email',$email)->get();
    return view('home.admin', compact('admin'));
}
public function index_ad()
   
    {
     
        $email = session('email');
        $result= DB::table('admins')->where('email',$email)->first();
        return view('home.index_admin', compact('result'));

        
    }


    public function login_admin(Request $request)
    {
        $validator = \Validator::make($request->all(), [
            'email' => 'required', 'password' =>'required']);
    
        $email= $request->input('email');
        $password= $request->input('password');
    
    
        $checklogin = DB::table('admins')->where(['email'=>$email , 'password' =>$password])->get();
    
        if(count($checklogin) >0 )
    
        {    $request->session()->put('email',$email);
            return redirect('index_admin');
            
        }else 
        {
              
            return back()->with('fails', 'email ou le mot de passe est incorrect !!!');
    
    
        }
    
    }

public function technicien()
{
    $technicien = DB::table('techniciens')->get();
    return view('home.liste_technicien', compact('technicien'));
   
}
public function edit(Request $request)
 {
    $ICE=session('ICE');
    $result =User::where('ICE',$ICE)->first();
    $result->nom = $request->nom;
    $result->prenom = $request->prenom;
    $result->CIN = $request->CIN;
    $result->email = $request->email;
    $result->Adresse = $request->Adresse;
    $result->tel = $request->tel;


    if($result->save()){
        return redirect()->back()->with('success', 'Votre compte a été modifié avec succes ...');
        
    }else{
        Session::flash('error', 'failed!');
    }

    return redirect()->back();
 } 

 public function Logout()
 {
    auth()->logout();

    session()->flash('message', 'Some goodbye message');

    return redirect('/login');
  }  

  public function destroy($id)
{
    $user = User::findOrFail($id);
    $user->delete();

    return redirect('/admin/users'); 
}
public function index_client()
   
    {
     
        $email = session('email');
        $result= DB::table('users')->where('email',$email)->first();
        return  View::make('home.listMateriel', compact('result'));

        
    }
    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    

// public function view()
// {
//     $ICE=session('ICE');
//     $Materiel = DB::table('materiel')->where('ICE',$ICE)->first();
//     return view('home.materiel', compact('Materiel'));

// }




}
