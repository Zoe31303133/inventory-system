<?php

namespace App\Policies;

use App\Models\User;
use App\Models\Role_permission;
use Illuminate\Auth\Access\Response;

class UserPolicy
{
    /**
     * Determine whether the user can view any models.
     */

    public function viewAny(User $user): bool
    {

        $permission_level = $user->permissionTo(User::class);

        return  $permission_level<=4; 

    }


    /**
     * Determine whether the user can create models.
     */
    public function create(User $user): bool
    {
        $permission_level = $user->permissionTo(User::class);

        return true;
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user, User_role $userRole): bool
    {
        $permission_level = $user->permissionTo(User::class);

        return  $permission_level<=2; 
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, User_role $userRole): bool
    {
        $permission_level = $user->permissionTo(User::class);
        
        return  $permission_level<=1; 
    }

}
