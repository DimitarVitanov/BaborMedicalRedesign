<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ServiceCategory extends Model
{
    protected $fillable = [
        'name_en',
        'name_mk',
        'slug',
        'description_en',
        'description_mk',
        'icon',
        'display_type',
        'is_active',
        'sort_order',
    ];

    protected $casts = [
        'is_active' => 'boolean',
    ];

    public function items()
    {
        return $this->hasMany(ServiceItem::class)->ordered();
    }

    public function activeItems()
    {
        return $this->hasMany(ServiceItem::class)->active()->ordered();
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
