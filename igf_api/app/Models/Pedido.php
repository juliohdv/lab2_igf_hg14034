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
                $pedidos = DB::connection('mysql')->select('
                    select p.* ,
                    t.tipoMedicamento,
                    s.sucursal,
                    s.direccion,
                    d.distribuidor
                    from pedido p
                    inner join
                    tipoMedicamento t
                    on t.id = p.tipoMedicamentoId
                    inner join sucursal s
                    on s.id = p.sucursalId
                    inner join distribuidor d
                    on d.id = p.distribuidorId
                ');
                return $pedidos;
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

        public static function eliminar($id){
            try{
                $eliminar = DB::connection('mysql')
                    ->table('pedido')
                    ->where(['id'=>$id])
                    ->delete();
                
                return $eliminar;
            }catch(QueryException $e){
                return $e->getException();
            }
        }
    }