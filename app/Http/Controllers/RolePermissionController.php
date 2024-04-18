<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreRole_permissionRequest;
use App\Http\Requests\UpdateRole_permissionRequest;
use App\Models\Role_permission;
use App\Models\Resource;

class RolePermissionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Role_permission::all();
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
    public function store(StoreRole_permissionRequest $request)
    {
        foreach($request->permissions as $resource=>$permission_level)
        {
            if(($permission_level=="null"))
            {
                Role_permission::where(['role_id'=>$request->role_id, 'resource_id'=>$resource])->delete();
            }
            else
            {
                Role_permission::updateOrCreate(['role_id'=>$request->role_id, 'resource_id'=>$resource], ['permission_level'=>$permission_level]);
            }
        }

    }

    /**
     * Display the specified resource.
     */
    public function show($role)
    {   
        //TODO: 優化命名
        $resources = Resource::all()->pluck('id');
        $role_has_permissions = Role_permission::where('role_id', $role)->get();

        $role_permissions = new \stdClass; 

        foreach($resources as $res)
        {
            isset($role_permissions->$res)?:
            $role_permissions->$res = null;
        }
        
        foreach($role_has_permissions as $per)
        {
            $resource_id = $per['resource_id'];
            $permission_level = $per['permission_level'];
            $role_permissions->$resource_id = $permission_level;
        }

        

        return $role_permissions;
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Role_permission $role_permission)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateRole_permissionRequest $request, Role_permission $role_permission)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Role_permission $role_permission)
    {
        //
    }
}
