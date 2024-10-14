<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TipoMedicamentoController;
use App\Http\Controllers\PedidoController;
use App\Http\Controllers\SucursalController;
use App\Http\Controllers\DistribuidorController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

// Catalogos
Route::post('tipoMedicamento', [TipoMedicamentoController::class, 'obtener']);
Route::post('sucursales', [SucursalController::class, 'obtener']);
Route::post('distribuidores', [DistribuidorController::class, 'obtener']);
// Pedidos
Route::post('pedidos', [PedidoController::class, 'obtener']);
Route::post('guardarPedido', [PedidoController::class, 'guardar']);
Route::post('eliminarPedido', [PedidoController::class, 'eliminar']);
