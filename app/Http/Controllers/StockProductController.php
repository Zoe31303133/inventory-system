<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreStock_productRequest;
use App\Http\Requests\UpdateStock_productRequest;
use App\Models\Stock_product;

class StockProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Stock_product::all();
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
    public function store(StoreStock_productRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Stock_product $stock_product)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Stock_product $stock_product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateStock_productRequest $request, Stock_product $stock_product)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Stock_product $stock_product)
    {
        //
    }
}
