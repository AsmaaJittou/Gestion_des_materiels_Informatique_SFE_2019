<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\intervention;

class interventionController extends Controller
{
    public function destroy($id)
    {
        $student = intervention::find($id);
        $student->delete();
        return redirect()->back()->with('success', 'Data Deleted');
    }
}
