<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Location extends Model
{
    protected $fillable = [
        'name_en',
        'name_mk',
        'address_en',
        'address_mk',
        'phone',
        'email',
        'working_hours_weekdays_en',
        'working_hours_weekdays_mk',
        'working_hours_saturday_en',
        'working_hours_saturday_mk',
        'working_hours_sunday_en',
        'working_hours_sunday_mk',
        'show_working_hours',
        'map_embed_url',
        'is_active',
        'sort_order',
    ];

    protected $casts = [
        'show_working_hours' => 'boolean',
        'is_active' => 'boolean',
    ];

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
