<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreProduct_ingredientRequest;
use App\Http\Requests\UpdateProduct_ingredientRequest;
use App\Models\Product_ingredient;

class ProductIngredientController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Product_ingredient::all();
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreProduct_ingredientRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Product_ingredient $product_ingredient)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product_ingredient $product_ingredient)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProduct_ingredientRequest $request, Product_ingredient $product_ingredient)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product_ingredient $product_ingredient)
    {
        //
    }
}
