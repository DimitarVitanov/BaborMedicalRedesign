<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ServiceCategory extends Model
{
    public const TYPE_COSMETOLOGY = 'cosmetology';
    public const TYPE_LASER_AESTHETIC = 'laser_aesthetic';

    public const PARENT_TYPES = [
        self::TYPE_COSMETOLOGY => [
            'en' => 'Cosmetology',
            'mk' => 'Козметологија',
        ],
        self::TYPE_LASER_AESTHETIC => [
            'en' => 'Laser Aesthetic Treatments',
            'mk' => 'Ласерско Естетски Третмани',
        ],
    ];

    protected $fillable = [
        'name_en',
        'name_mk',
        'slug',
        'parent_type',
        'description_en',
        'description_mk',
        'icon',
        'display_type',
        'is_active',
        'sort_order',
    ];

    public function getParentTypeName($locale = 'en')
    {
        return self::PARENT_TYPES[$this->parent_type][$locale] ?? $this->parent_type;
    }

    public static function getParentTypeOptions()
    {
        return self::PARENT_TYPES;
    }

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

    public function scopeByParentType($query, $type)
    {
        return $query->where('parent_type', $type);
    }

    public function scopeCosmetology($query)
    {
        return $query->where('parent_type', self::TYPE_COSMETOLOGY);
    }

    public function scopeLaserAesthetic($query)
    {
        return $query->where('parent_type', self::TYPE_LASER_AESTHETIC);
    }
}
