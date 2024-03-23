<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PermissionLevelController;
use App\Http\Controllers\ResourceController;
use App\Http\Controllers\IngredientController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProductTypeController;
use App\Http\Controllers\ProductIngredientController;
use App\Http\Controllers\StockIngredientController;
use App\Http\Controllers\StockProductController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\OrderItemController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\RolePermissionController;
use App\Http\Controllers\UserRoleController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::resources([
    'permission_levels' => PermissionLevelController::class,
    'resources' => ResourceController::class,
    'ingredients' => IngredientController::class,
    'products' => ProductController::class,
    'product_types' => ProductTypeController::class,
    'product_ingredients' => ProductIngredientController::class,
    'stock_ingredients' => StockIngredientController::class,
    'stock_products' => StockProductController::class,
    'orders' => OrderController::class,
    'order_items' => OrderItemController::class,
    'users' => UserController::class,
    'roles' => RoleController::class,
    'role_permissions' => RolePermissionController::class,
    'user_roles' => UserRoleController::class,
]);