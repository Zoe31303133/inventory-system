<?php

namespace App\Policies;

use App\Models\User;
use App\Models\Role_permission;
use Illuminate\Auth\Access\Response;

class UserRolePolicy
{
    /**
     * Determine whether the user can view any models.
     */

    

    public function viewAny(User $user): bool
    {
 
        $resource_permission = Role_permission::where('role_id', $role)
                                            ->where('resource_id', 'user_role')
                                            ->first();
        if(!$resource_permission){
            return false;
        }
        
        return  $permission_level<=4; 
    }

    /**
     * Determine whether the user can view the model.
     */
    public function view(User $user): bool
    {

    }

    /**
     * Determine whether the user can create models.
     */
    public function create(User $user): bool
    {
        $role = $user->role->role_id;

        $permission_level = Role_permission::where('role_id', $role)
                                            ->where('resource_id', 'user_role')
                                            ->first()
                                            ->permission_level;
        
        return  $permission_level<=1;
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user, User_role $userRole): bool
    {
        $role = $user->role->role_id;

        $permission_level = Role_permission::where('role_id', $role)
                                            ->where('resource_id', 'user_role')
                                            ->first()
                                            ->permission_level;
        
        return  $permission_level<=2; 
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, User_role $userRole): bool
    {
        $role = $user->role->role_id;

        $resource_permission = Role_permission::where('role_id', $role)
                                            ->where('resource_id', 'user_role')
                                            ->first();
        if(!$resource_permission){
            return false;
        }

        return  $permission_level<=1; 
    }

}
