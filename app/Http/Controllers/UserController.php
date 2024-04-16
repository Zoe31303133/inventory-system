<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\User;
use App\Http\Controllers\RoleController;


class UserController extends Controller
{

    public function __construct()
    {
        $this->authorizeResource(User::class, 'user');
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        
        return User::all();

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return RoleController::all();

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        
        $registerUser  = $request->user;

        $user = new User();
        $user->name = $registerUser->name;
        $user->email = $registerUser->email;
        $user->password = $registerUser->password;
        $user->save();
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $user = User::findOrfail($id);
        return $user;        
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(User $user)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateUserRequest $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
     
    }

}
