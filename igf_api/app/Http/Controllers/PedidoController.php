<?php
 
namespace App\Http\Controllers;
 
use App\Models\Pedido;
use Illuminate\View\View;
use Illuminate\Http\Request;
 
class PedidoController extends Controller
{
    /**
     * Show the profile for a given user.
     */
    public function obtener(Request $request)
    {
        $pedidos = Pedido::getPedidos();
        return response()->json(['success'=>true, 'pedidos'=>$pedidos]);
    }

    public function guardar(Request $request)
    {
        try{
            $guardar = Pedido::guardar(
                $request->medicamento,
                $request->cantidad,
                $request->tipoMedicamento,
                $request->sucursal,
                $request->distribuidor
            );
            if($guardar){
                return response()->json(['success'=>true]);
            }else{
                return respobse()->json(['success'=>false]);
            }
        }catch(\Exception $e){
            return response()->json(['success'=>false, 'error'=>$e->getMessage()]);
        }
    }
}