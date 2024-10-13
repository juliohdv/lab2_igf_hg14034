<?php 
    
    namespace App\Models;

    use Illuminate\Database\Eloquent\Model;
    use Illuminate\Support\Facades\DB;
    use Illuminate\Databse\QueryException;
    use Illuminate\Database\Eloquent\Factories\HasFactory;



    class Sucursal extends Model
    {
        use HasFactory;

        public static function getSucursales() {
            try{
                $tipos = DB::connection('mysql')->table('sucursal')->get();
                return $tipos;
            }catch(QueryException $e){
                return $e->getException();
            }
        }
    }