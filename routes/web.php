<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\RolePermissionController;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
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


Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');


require __DIR__.'/auth.php';

