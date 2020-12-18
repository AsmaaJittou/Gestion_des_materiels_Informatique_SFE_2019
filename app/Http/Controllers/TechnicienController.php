<?php

namespace App\Http\Controllers;
use App\technicien;

use Illuminate\Http\Request;
use App\User;
use App\intervention;
use Illuminate\Support\Facades\Auth;
use Session;
use Illuminate\Support\Facades\DB;
use Image;

class TechnicienController extends Controller
{
    public function update(Request $request, $id)
    {
        $technicien = technicien::where('id_tech',$id);

        

        

        $this->validate($request, [
            'nom'    =>  'required',
            'prenom'     =>  'required',
            'email' => 'required:unique',
            'Telephone' => 'required',
            

        ]);
       
       
       
       
        $technicien->nom = $request->get('nom');
        $technicien->prenom = $request->get('prenom');
        $technicien->email = $request->get('email');
        $technicien->Telephone = $request->get('Telephone');
      
        $update2= technicien::where('id_tech',$id)->update([
            'nom'=>$request->get('nom'),'prenom'=>$request->get('prenom'),'email'=>$request->get('email'),'Telephone'=>$request->get('Telephone')]);;

       
    Session::flash('success', 'Data Updated');



return redirect()->back();
} 
    public function edit($id)
    {
        $email = session('email');
                $result= DB::table('admins')->where('email',$email)->first();
        $technicien= DB::table('techniciens')->where('id_tech',$id)->first();
        return view('home.edit', compact('technicien','id','result'));
        //var_dump($technicien);
    }

    public function show_edit($id)
    {
        $technicien= DB::table('techniciens')->where('id_tech',$id)->first();
        return view('home.edit', compact('technicien','id'));
    }

   


    public function postLogin(Request $request)
    {
        $validator = \Validator::make($request->all(), [
            'email' => 'required', 'password' =>'required']);
 
        $email= $request->input('email');
        $password= $request->input('password');


        $checklogin = DB::table('techniciens')->where(['email'=>$email , 'password' =>$password])->get();

        if(count($checklogin) >0 )

        {    $request->session()->put('email',$email);
            return redirect('listeInter');
            
        }else 
        {
              
            return back()->with('fails', 'email ou le mot de passe est incorrect !!!');


        }

    
        }

        public function showIndex()
        {
             $email = session('email');
         $technicien= DB::table('techniciens')->where('email',$email)->first();
         return view('InterventionTechnicien', compact('technicien'));
        }
      

        //-----------------------------------------------fucntion update ---------------------

       


    //---------------------------------------------------------   
    
        /**
         * Remove the specified resource from storage.
         *
         * @param  int  $id
         * @return \Illuminate\Http\Response
         */
        public function destroy($id)
        {
            $student = technicien::find($id);
            $student->delete();
            return redirect()->back()->with('success', 'Data Deleted');
        }
        public function show ()
        {
            $email = session('email');
            $result= DB::table('admins')->where('email',$email)->first();
            
            return view('home.ajout_technicien', compact('result'));
        }

        public function   Ajout(Request $request)
        {
            $technicien = new  technicien;

            $this->validate($request, [
                'nom'    =>  'required',
                'prenom'     =>  'required',
                'email' => 'required:unique',
                'Telephone' => 'required',
                'Spécialité' => 'required',
                

            ]);
           

            $technicien->nom = $request->get('nom');
            $technicien->prenom = $request->get('prenom');
            $technicien->email = $request->get('email');
            $technicien->Telephone = $request->get('Telephone');
            $technicien->Spécialité = $request->get('Spécialité');

            
           if( $technicien->save()){
        Session::flash('success', 'le technicien a été ajouter !!');
    }else{
        Session::flash('error', 'failed!');
    }

    return redirect()->back();
        }


        public function see()
            {
                $email = session('email');
                $result= DB::table('admins')->where('email',$email)->first();
                
                $fiche= DB::table('fiches')->where('etat','non comfirmer')->get();
                return view('home.liste_fiche_admin', compact('fiche','result'));

            }

            public function destroy_fiche($id)
     {
      $student = fiche::find($id);
      $student->delete();
      return redirect()->back()->with('success', 'Data Deleted');
     }

        


/*public function comfirmer_affect($id , $idTech)
{
    echo'by';
}*/
            
        
}
