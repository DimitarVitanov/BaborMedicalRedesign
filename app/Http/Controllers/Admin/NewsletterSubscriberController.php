<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\NewsletterSubscriber;
use Illuminate\Http\Request;
use Inertia\Inertia;

class NewsletterSubscriberController extends Controller
{
    public function index()
    {
        $subscribers = NewsletterSubscriber::orderBy('created_at', 'desc')->paginate(20);
        
        return Inertia::render('Admin/Newsletter/Index', [
            'subscribers' => $subscribers,
        ]);
    }

    public function destroy(NewsletterSubscriber $subscriber)
    {
        $subscriber->delete();
        
        return redirect()->route('admin.newsletter.index')->with('success', 'Subscriber deleted successfully.');
    }

    public function toggleActive(NewsletterSubscriber $subscriber)
    {
        $subscriber->update([
            'is_active' => !$subscriber->is_active,
        ]);
        
        return redirect()->route('admin.newsletter.index');
    }
}
