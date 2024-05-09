<?php

namespace App\Http\Controllers;

use App\Http\Requests\StorePermission_levelRequest;
use App\Http\Requests\UpdatePermission_levelRequest;
use App\Models\Permission_level;

class PermissionLevelController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Permission_level::all();
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
    public function store(StorePermission_levelRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Permission_level $permission_level)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Permission_level $permission_level)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePermission_levelRequest $request, Permission_level $permission_level)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Permission_level $permission_level)
    {
        //
    }
}
