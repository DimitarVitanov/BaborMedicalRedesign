<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ServiceItem extends Model
{
    protected $fillable = [
        'service_category_id',
        'name_en',
        'name_mk',
        'subtitle_en',
        'subtitle_mk',
        'description_en',
        'description_mk',
        'includes_en',
        'includes_mk',
        'indications_en',
        'indications_mk',
        'components_en',
        'components_mk',
        'effects_en',
        'effects_mk',
        'suitable_for_en',
        'suitable_for_mk',
        'note_en',
        'note_mk',
        'price',
        'price_from',
        'price_to',
        'duration',
        'url',
        'is_expandable',
        'is_active',
        'sort_order',
    ];

    protected $casts = [
        'is_expandable' => 'boolean',
        'is_active' => 'boolean',
        'price' => 'decimal:2',
        'price_from' => 'decimal:2',
        'price_to' => 'decimal:2',
    ];

    public function category()
    {
        return $this->belongsTo(ServiceCategory::class, 'service_category_id');
    }

    public function getTranslated($field, $locale = 'en')
    {
        $localizedField = $field . '_' . $locale;
        return $this->$localizedField ?? $this->{$field . '_en'};
    }

    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }

    public function scopeOrdered($query)
    {
        return $query->orderBy('sort_order');
    }
}
