<?php
 
namespace App\Http\Controllers;
 
use App\Models\TipoMedicamento;
use Illuminate\View\View;
use Illuminate\Http\Request;
 
class TipoMedicamentoController extends Controller
{
    /**
     * Show the profile for a given user.
     */
    public function obtener(Request $request)
    {
        $tipos = TipoMedicamento::getTipoMedicamento();
        return response()->json(['success'=>true, 'tipos'=>$tipos]);
    }
}