<?php
 
namespace App\Http\Controllers;
 
use App\Models\Sucursal;
use Illuminate\View\View;
use Illuminate\Http\Request;
 
class SucursalController extends Controller
{
    /**
     * Show the profile for a given user.
     */
    public function obtener(Request $request)
    {
        $sucursales = Sucursal::getSucursales();
        return response()->json(['success'=>true, 'sucursales'=>$sucursales]);
    }
}