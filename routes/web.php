<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Auth;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/login', function () {
    return view('login');
});

Route::post('/login', [LoginController::class, 'store']);

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

