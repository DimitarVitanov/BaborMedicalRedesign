<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AboutContent extends Model
{
    protected $fillable = [
        'title',
        'title_mk',
        'subtitle',
        'subtitle_mk',
        'short_description',
        'short_description_mk',
        'full_content',
        'full_content_mk',
        'image',
        'is_active',
    ];

    protected $casts = [
        'is_active' => 'boolean',
    ];

    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }

    public function getTranslated(string $field, string $locale = 'en')
    {
        if ($locale === 'mk') {
            $mkField = $field . '_mk';
            return $this->$mkField ?: $this->$field;
        }
        return $this->$field;
    }
}
