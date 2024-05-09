<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Stock_product extends Model
{
    use HasFactory;

    public $timestamps = false;
    public $primaryKey = "product_id"; 

    public $fillable = ['product_id','quantity'];
}
