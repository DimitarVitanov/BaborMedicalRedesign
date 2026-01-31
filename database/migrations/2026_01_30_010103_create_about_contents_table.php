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
        Schema::create('about_contents', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('title_mk')->nullable();
            $table->string('subtitle');
            $table->string('subtitle_mk')->nullable();
            $table->text('short_description');
            $table->text('short_description_mk')->nullable();
            $table->text('full_content');
            $table->text('full_content_mk')->nullable();
            $table->string('image')->nullable();
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('about_contents');
    }
};
