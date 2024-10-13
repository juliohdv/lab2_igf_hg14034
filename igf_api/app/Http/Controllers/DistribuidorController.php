<?php
 
namespace App\Http\Controllers;
 
use App\Models\Distribuidor;
use Illuminate\View\View;
use Illuminate\Http\Request;
 
class DistribuidorController extends Controller
{
    /**
     * Show the profile for a given user.
     */
    public function obtener(Request $request)
    {
        $distribuidores = Distribuidor::getDistribuidores();
        return response()->json(['success'=>true, 'distribuidores'=>$distribuidores]);
    }
}