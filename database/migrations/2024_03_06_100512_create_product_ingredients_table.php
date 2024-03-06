<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('product_ingredients', function (Blueprint $table) {
            $table->char('product_id', 25);
            $table->char('ingredient_id', 25);
            $table->decimal('quantity', $precision = 5);
            $table->primary(['product_id', 'ingredient_id']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('product_ingredients');
    }
};
