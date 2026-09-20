<?php

namespace App\Mail;

use App\Models\JobApplication;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class JobApplicationConfirmation extends Mailable
{
    use Queueable, SerializesModels;

    public function __construct(
        public JobApplication $application
    ) {
    }

    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'Ја примивме вашата апликација - Babor Medical',
        );
    }

    public function content(): Content
    {
        return new Content(
            view: 'emails.job-application-confirmation',
        );
    }
}
