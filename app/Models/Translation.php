<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Translation extends Model
{
    protected $fillable = [
        'key',
        'group',
        'value_en',
        'value_mk',
    ];

    public static function get(string $key, string $locale = 'en', string $default = ''): string
    {
        $translation = static::where('key', $key)->first();
        
        if (!$translation) {
            return $default ?: $key;
        }
        
        $field = 'value_' . $locale;
        return $translation->$field ?? $translation->value_en ?? $default;
    }

    public static function getAllByGroup(string $group, string $locale = 'en'): array
    {
        $translations = static::where('group', $group)->get();
        $result = [];
        
        foreach ($translations as $translation) {
            $field = 'value_' . $locale;
            $result[$translation->key] = $translation->$field ?? $translation->value_en;
        }
        
        return $result;
    }
}
