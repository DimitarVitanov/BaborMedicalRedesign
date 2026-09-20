<?php

namespace App\Http\Controllers;

use App\Mail\ContactInquiryNotification;
use App\Models\ContactMessage;
use App\Models\Setting;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'nullable|string|max:50',
            'service' => 'nullable|string|max:100',
            'message' => 'required|string|max:5000',
        ]);

        $contactMessage = ContactMessage::create($validated);

        try {
            $recipients = Setting::notificationEmails();
            if (!empty($recipients)) {
                Mail::to($recipients)->send(new ContactInquiryNotification($contactMessage));
            }
        } catch (\Exception $e) {
            Log::error('Failed to send contact inquiry notification email: ' . $e->getMessage());
        }

        return response()->json([
            'success' => true,
            'message' => 'Message sent successfully.',
        ]);
    }
}
