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
        Schema::table('service_items', function (Blueprint $table) {
            $table->text('subtitle_en')->nullable()->after('name_mk');
            $table->text('subtitle_mk')->nullable()->after('subtitle_en');
            $table->text('includes_en')->nullable()->after('description_mk');
            $table->text('includes_mk')->nullable()->after('includes_en');
            $table->text('indications_en')->nullable()->after('includes_mk');
            $table->text('indications_mk')->nullable()->after('indications_en');
            $table->text('components_en')->nullable()->after('indications_mk');
            $table->text('components_mk')->nullable()->after('components_en');
            $table->text('effects_en')->nullable()->after('components_mk');
            $table->text('effects_mk')->nullable()->after('effects_en');
            $table->text('suitable_for_en')->nullable()->after('effects_mk');
            $table->text('suitable_for_mk')->nullable()->after('suitable_for_en');
            $table->text('note_en')->nullable()->after('suitable_for_mk');
            $table->text('note_mk')->nullable()->after('note_en');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('service_items', function (Blueprint $table) {
            $table->dropColumn([
                'subtitle_en', 'subtitle_mk',
                'includes_en', 'includes_mk',
                'indications_en', 'indications_mk',
                'components_en', 'components_mk',
                'effects_en', 'effects_mk',
                'suitable_for_en', 'suitable_for_mk',
                'note_en', 'note_mk',
            ]);
        });
    }
};
