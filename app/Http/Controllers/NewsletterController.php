<?php

namespace App\Http\Controllers;

use App\Models\NewsletterSubscriber;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class NewsletterController extends Controller
{
    public function subscribe(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email|unique:newsletter_subscribers,email',
        ]);

        if ($validator->fails()) {
            $errors = $validator->errors();
            
            if ($errors->has('email') && str_contains($errors->first('email'), 'taken')) {
                return response()->json([
                    'success' => false,
                    'message' => 'already_subscribed',
                ], 422);
            }
            
            return response()->json([
                'success' => false,
                'message' => 'invalid_email',
                'errors' => $errors,
            ], 422);
        }

        $subscriber = NewsletterSubscriber::create([
            'email' => $request->email,
            'locale' => $request->locale ?? session('locale', 'en'),
            'subscribed_at' => now(),
        ]);

        return response()->json([
            'success' => true,
            'message' => 'subscribed',
        ]);
    }
}
