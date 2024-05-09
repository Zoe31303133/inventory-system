<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class User_role extends Model
{
    use HasFactory;

    protected $with = ['permission'];

    public function permission(): HasMany 
    {
        return $this->hasMany(Role_permission::class, 'role_id', 'role_id');
    }

}
