<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreProduct_typeRequest;
use App\Http\Requests\UpdateProduct_typeRequest;
use App\Models\Product_type;
use Illuminate\Database\QueryException;
class ProductTypeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Product_type::all();
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create($name)
    {
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreProduct_typeRequest $request)
    {
        try{
            $product_type = new Product_type;
            $product_type->name = $request->name;
            $product_type->save();

            return "新增成功";
        }
        catch(QueryException $e){
            $error_code = $e->errorInfo[1];
            if($error_code == '1062'){
                return '資料已存在';
            }
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Product_type $product_type)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product_type $product_type)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProduct_typeRequest $request, Product_type $product_type)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($name)
    {
        $product_type = Product_type::where('name',$name)->first();
        if($product_type){

            $product_type->delete();
            return "成功刪除";
        }
        else{
            return "記錄不存在";
        }
    }
}
