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
        Schema::table('hero_slides', function (Blueprint $table) {
            $table->string('subtitle_mk')->nullable()->after('subtitle');
            $table->string('title_mk')->nullable()->after('title');
            $table->string('highlight_mk')->nullable()->after('highlight');
            $table->text('description_mk')->nullable()->after('description');
            $table->string('cta_text_mk')->nullable()->after('cta_text');
            $table->string('secondary_text_mk')->nullable()->after('secondary_text');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('hero_slides', function (Blueprint $table) {
            $table->dropColumn(['subtitle_mk', 'title_mk', 'highlight_mk', 'description_mk', 'cta_text_mk', 'secondary_text_mk']);
        });
    }
};
