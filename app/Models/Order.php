<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use App\Models\Order_item;

class Order extends Model
{
    use HasFactory;

    protected $fillable = [ 'date', 'time', 'state'];
    public $timestamps  = false;
    protected $with = ['items'];

    public function items() : HasMany 
    {
        return $this->hasMany(Order_item::class, 'order_id', 'id');
    }

    protected static function boot(){
        parent::boot();

        static::deleting(function($order){
            $order->items()->delete();
        });

    }
}
