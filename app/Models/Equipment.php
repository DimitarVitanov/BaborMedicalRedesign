<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Equipment extends Model
{
    use HasFactory;

    protected $table = 'equipment';

    protected $fillable = [
        'slug',
        'title_en',
        'title_mk',
        'description_en',
        'description_mk',
        'detailed_description_en',
        'detailed_description_mk',
        'image',
        'image_desktop_webp',
        'image_mobile_webp',
        'link',
        'category',
        'is_active',
        'sort_order',
    ];


    protected $casts = [
        'is_active' => 'boolean',
    ];

    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }

    public function scopeOrdered($query)
    {
        return $query->orderBy('sort_order');
    }

    public function scopeCategory($query, $category)
    {
        return $query->where('category', $category);
    }

    public function getTranslated($field, $locale = 'en')
    {
        $fieldName = $field . '_' . $locale;
        return $this->{$fieldName} ?? $this->{$field . '_en'};
    }
}
