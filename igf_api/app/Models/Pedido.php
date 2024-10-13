<?php 
    
    namespace App\Models;

    use Illuminate\Database\Eloquent\Model;
    use Illuminate\Support\Facades\DB;
    use Illuminate\Databse\QueryException;
    use Illuminate\Database\Eloquent\Factories\HasFactory;



    class Pedido extends Model
    {
        use HasFactory;

        public static function getPedidos () {
            try{
                $tipos = DB::connection('mysql')->table('pedido')->get();
                return $tipos;
            }catch(QueryException $e){
                return $e->getException();
            }
        }

        public static function guardar($medicamento, $cantidad, $tipo, $sucursal, $distribuidor){
            try{
                $guardar = DB::connection('mysql')
                    ->table('pedido')
                    ->insert([
                        'medicamento'=>$medicamento,
                        'cantidad'=>$cantidad,
                        'tipoMedicamentoId'=>$tipo,
                        'sucursalId'=>$sucursal,
                        'distribuidorId'=>$distribuidor
                    ]);
                return $guardar;
            }catch(QueryException $e){
                return $e->getException();
            }
        }
    }