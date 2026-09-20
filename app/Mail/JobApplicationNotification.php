<?php

namespace App\Mail;

use App\Models\JobApplication;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Attachment;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Storage;

class JobApplicationNotification extends Mailable
{
    use Queueable, SerializesModels;

    public function __construct(
        public JobApplication $application
    ) {
    }

    public function envelope(): Envelope
    {
        $position = $this->application->jobPosting?->title_mk
            ?? $this->application->jobPosting?->title_en
            ?? 'Отворена апликација';

        return new Envelope(
            subject: 'Нова апликација за работа: ' . $position,
            replyTo: [$this->application->email],
        );
    }

    public function content(): Content
    {
        return new Content(
            view: 'emails.job-application-notification',
        );
    }

    public function attachments(): array
    {
        if (!$this->application->cv_path || !Storage::disk('local')->exists($this->application->cv_path)) {
            return [];
        }

        return [
            Attachment::fromStorageDisk('local', $this->application->cv_path)
                ->as($this->application->cv_original_name ?: 'CV.pdf'),
        ];
    }
}
