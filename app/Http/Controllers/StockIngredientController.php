<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreStock_ingredientRequest;
use App\Http\Requests\UpdateStock_ingredientRequest;
use App\Models\Stock_ingredient;

class StockIngredientController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Stock_ingredient::all();
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
    public function store(StoreStock_ingredientRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Stock_ingredient $stock_ingredient)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Stock_ingredient $stock_ingredient)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateStock_ingredientRequest $request, Stock_ingredient $stock_ingredient)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Stock_ingredient $stock_ingredient)
    {
        //
    }
}
