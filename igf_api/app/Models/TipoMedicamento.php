<?php 
    
    namespace App\Models;

    use Illuminate\Database\Eloquent\Model;
    use Illuminate\Support\Facades\DB;
    use Illuminate\Databse\QueryException;
    use Illuminate\Database\Eloquent\Factories\HasFactory;



    class TipoMedicamento extends Model
    {
        use HasFactory;

        public static function getTipoMedicamento () {
            try{
                $tipos = DB::connection('mysql')->table('tipoMedicamento')->get();
                return $tipos;
            }catch(QueryException $e){
                return $e->getException();
            }
        }
    }