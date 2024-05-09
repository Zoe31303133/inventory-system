<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreUser_roleRequest;
use App\Http\Requests\UpdateUser_roleRequest;
use App\Models\User_role;

class UserRoleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return User_role::all();
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
    public function store(StoreUser_roleRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(User_role $user_role)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(User_role $user_role)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateUser_roleRequest $request, User_role $user_role)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User_role $user_role)
    {
        //
    }
}
