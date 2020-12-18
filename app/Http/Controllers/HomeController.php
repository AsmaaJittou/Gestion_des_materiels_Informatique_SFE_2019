<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\User;
use Redirect;
use Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Input;
use Illuminate\Foundation\Validation\ValidatesRequests;
use App\Rules\BlockedName;
class HomeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
   
    {
     
    $ICE=session('ICE');
    $result =User::where('ICE',$ICE)->first();   
        return view('home.index', compact('result'));
    }
    
    public function getlogin()
    {
        return \View::make('home.login');
    }
    public function getUser()
    {   
        $user = new User();
        return \View::make('home.userProfil');
    }
    
    public function getRegister()
    {
        return \View::make('home.register');
    }

    // public function postRegister(Request $request)
    // {
    //     $this->validate( $request,[

    //         'First_Name' => 'required|min:2|max:50',

    //         'Last_Name' => 'required|min:2|max:50',            

    //         'Email' => 'required|Email|unique:users',

    //         'Username' => 'required|min:2|max:50',

    //         'Password' => 'required|min:6',                

    //         //'confirm_password' => 'required|min:6|max:20|same:password',

    //     ], [

    //         'First_Name.required' => ' First Name is required',

    //         'First_Name.min' => 'First_Name must be at least 2 characters.',

    //         'First_Name.max' => 'First_Name should not be greater than 50 characters.',

    //     ]);



    //     $input = request()->except('Password',' Comfirm_Password');

    //     $user=new User($input);
    //     $user->Password=bcrypt(request()->Password);
    //     $user->First_Name=(request()->First_Name);
    //     $user->Last_Name=(request()->Last_Name);
    //     $user->Email=(request()->Email);
    //     $user->Username=(request()->Username);
    //     $user->save();



    //     return back()->with('success', 'User created successfully.');

        
    // }
   
    public function postLogin(Request $request)
    {
        $validator = \Validator::make($request->all(), [
            'ICE' => 'required', 'password' =>'required']);
 
        $ICE= $request->input('ICE');
        $password= $request->input('password');


        $checklogin = DB::table('users')->where(['ICE'=>$ICE , 'password' =>$password])->get();

        if(count($checklogin) >0 )

        {    $request->session()->put('ICE',$ICE);
            return redirect('profil');
            
        }else 
        {
              
            return back()->with('fails', 'ICE ou le mot de passe est incorrect !!!');


        }

    
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
        $request->user()->Username;
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
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
