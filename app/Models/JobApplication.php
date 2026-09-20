<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class JobApplication extends Model
{
    protected $fillable = [
        'job_posting_id',
        'name',
        'email',
        'phone',
        'message',
        'cv_path',
        'cv_original_name',
        'is_read',
    ];

    protected $casts = [
        'is_read' => 'boolean',
    ];

    public function jobPosting()
    {
        return $this->belongsTo(JobPosting::class);
    }

    public function scopeUnread($query)
    {
        return $query->where('is_read', false);
    }
}
