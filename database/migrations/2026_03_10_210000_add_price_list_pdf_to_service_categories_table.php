<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('service_categories', function (Blueprint $table) {
            $table->string('price_list_pdf_en')->nullable()->after('extra_data_mk');
            $table->string('price_list_pdf_mk')->nullable()->after('price_list_pdf_en');
        });
    }

    public function down(): void
    {
        Schema::table('service_categories', function (Blueprint $table) {
            $table->dropColumn(['price_list_pdf_en', 'price_list_pdf_mk']);
        });
    }
};
