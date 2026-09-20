<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class JobPosting extends Model
{
    protected $fillable = [
        'title_en',
        'title_mk',
        'location_en',
        'location_mk',
        'employment_type',
        'description_en',
        'description_mk',
        'requirements_en',
        'requirements_mk',
        'is_active',
        'sort_order',
    ];

    protected $casts = [
        'is_active' => 'boolean',
    ];

    public function applications()
    {
        return $this->hasMany(JobApplication::class);
    }

    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }

    public function scopeOrdered($query)
    {
        return $query->orderBy('sort_order');
    }

    public function getTranslated($field, $locale = 'en')
    {
        $fieldName = $field . '_' . $locale;
        return $this->{$fieldName} ?? $this->{$field . '_en'};
    }
}
