<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;
use App\Models\Stock_product;

class Product extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $fillable = [
        'name',
        'type'
    ];

    protected $with = ['stock'];

    public function stock(): HasOne
    {
        return $this->hasOne(Stock_product::class, 'product_id', 'id')->withDefault(['quantity'=>0]);
    }

    protected static function boot() {
        parent::boot();

        static::deleting(function($product){
            $product->stock->delete();
        });
    
    }
}
