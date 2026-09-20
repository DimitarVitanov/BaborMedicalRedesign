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
        Schema::create('job_postings', function (Blueprint $table) {
            $table->id();
            $table->string('title_en');
            $table->string('title_mk');
            $table->string('location_en')->nullable();
            $table->string('location_mk')->nullable();
            $table->string('employment_type')->default('full_time');
            $table->text('description_en')->nullable();
            $table->text('description_mk')->nullable();
            $table->text('requirements_en')->nullable();
            $table->text('requirements_mk')->nullable();
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
        Schema::dropIfExists('job_postings');
    }
};
