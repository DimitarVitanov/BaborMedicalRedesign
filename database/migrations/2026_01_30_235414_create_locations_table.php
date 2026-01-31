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
        Schema::create('locations', function (Blueprint $table) {
            $table->id();
            $table->string('name_en');
            $table->string('name_mk');
            $table->string('address_en');
            $table->string('address_mk');
            $table->string('phone')->nullable();
            $table->string('email')->nullable();
            $table->string('working_hours_weekdays_en')->nullable();
            $table->string('working_hours_weekdays_mk')->nullable();
            $table->string('working_hours_saturday_en')->nullable();
            $table->string('working_hours_saturday_mk')->nullable();
            $table->string('working_hours_sunday_en')->nullable();
            $table->string('working_hours_sunday_mk')->nullable();
            $table->boolean('show_working_hours')->default(true);
            $table->string('map_embed_url')->nullable();
            $table->boolean('is_active')->default(true);
            $table->integer('sort_order')->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('locations');
    }
};
