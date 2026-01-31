<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Setting extends Model
{
    protected $fillable = [
        'key',
        'value_en',
        'value_mk',
        'type',
        'group',
    ];

    public function getTranslated($locale = 'en')
    {
        $field = 'value_' . $locale;
        return $this->$field ?? $this->value_en;
    }

    public static function get($key, $locale = 'en', $default = null)
    {
        $setting = static::where('key', $key)->first();
        if (!$setting) {
            return $default;
        }
        return $setting->getTranslated($locale) ?? $default;
    }

    public static function set($key, $valueEn, $valueMk = null, $type = 'text', $group = 'general')
    {
        return static::updateOrCreate(
            ['key' => $key],
            [
                'value_en' => $valueEn,
                'value_mk' => $valueMk ?? $valueEn,
                'type' => $type,
                'group' => $group,
            ]
        );
    }

    public function scopeByGroup($query, $group)
    {
        return $query->where('group', $group);
    }
}
