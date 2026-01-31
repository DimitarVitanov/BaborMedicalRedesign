<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class HeroSlide extends Model
{
    protected $fillable = [
        'subtitle',
        'subtitle_mk',
        'title',
        'title_mk',
        'highlight',
        'highlight_mk',
        'description',
        'description_mk',
        'cta_text',
        'cta_text_mk',
        'cta_link',
        'secondary_text',
        'secondary_text_mk',
        'secondary_link',
        'image',
        'image_desktop_webp',
        'image_mobile_webp',
        'order',
        'is_active',
    ];

    public function getTranslated(string $field, string $locale = 'en')
    {
        if ($locale === 'mk') {
            $mkField = $field . '_mk';
            return $this->$mkField ?: $this->$field;
        }
        return $this->$field;
    }

    protected $casts = [
        'is_active' => 'boolean',
        'order' => 'integer',
    ];

    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }

    public function scopeOrdered($query)
    {
        return $query->orderBy('order');
    }
}
