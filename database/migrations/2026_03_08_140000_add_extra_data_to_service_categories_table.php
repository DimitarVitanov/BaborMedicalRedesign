<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('service_categories', function (Blueprint $table) {
            $table->json('extra_data_en')->nullable()->after('description_mk');
            $table->json('extra_data_mk')->nullable()->after('extra_data_en');
        });
    }

    public function down(): void
    {
        Schema::table('service_categories', function (Blueprint $table) {
            $table->dropColumn(['extra_data_en', 'extra_data_mk']);
        });
    }
};
