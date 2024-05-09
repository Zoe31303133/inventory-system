<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Role_permission extends Model
{
    use HasFactory;

    public $fillable = ['id', 'role_id','resource_id', 'permission_level'];
    public $timestamps  = false;
    protected $keyType = 'string';

    
}
