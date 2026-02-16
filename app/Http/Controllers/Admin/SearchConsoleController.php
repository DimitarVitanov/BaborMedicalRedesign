<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Services\GoogleSearchConsoleService;
use Inertia\Inertia;

class SearchConsoleController extends Controller
{
    protected $searchConsole;

    /**
     * Constructor - Laravel automatically injects the service
     * This is called "Dependency Injection"
     */
    public function __construct(GoogleSearchConsoleService $searchConsole)
    {
        $this->searchConsole = $searchConsole;
    }

    /**
     * Display the Search Console dashboard
     */
    public function index()
    {
        // Get data for the last 28 days
        $endDate = date('Y-m-d'); // Today
        $startDate = date('Y-m-d', strtotime('-28 days')); // 28 days ago

        try {
            // Get summary totals
            $summary = $this->searchConsole->getSummary($startDate, $endDate);

            // Get top 10 search queries
            $topQueries = $this->searchConsole->getSearchAnalytics(
                $startDate, 
                $endDate, 
                'query', // Group by search query
                10       // Limit to 10 results
            );

            // Get top 10 pages
            $topPages = $this->searchConsole->getSearchAnalytics(
                $startDate, 
                $endDate, 
                'page',  // Group by page URL
                10
            );

            // Format the data for the frontend
            $formattedQueries = collect($topQueries)->map(function ($row) {
                return [
                    'query' => $row->getKeys()[0], // The search term
                    'clicks' => $row->getClicks(),
                    'impressions' => $row->getImpressions(),
                    'ctr' => round($row->getCtr() * 100, 2),
                    'position' => round($row->getPosition(), 1),
                ];
            });

            $formattedPages = collect($topPages)->map(function ($row) {
                return [
                    'page' => $row->getKeys()[0], // The page URL
                    'clicks' => $row->getClicks(),
                    'impressions' => $row->getImpressions(),
                    'ctr' => round($row->getCtr() * 100, 2),
                    'position' => round($row->getPosition(), 1),
                ];
            });

            return Inertia::render('Admin/SearchConsole/Index', [
                'summary' => $summary,
                'topQueries' => $formattedQueries,
                'topPages' => $formattedPages,
                'dateRange' => [
                    'start' => $startDate,
                    'end' => $endDate,
                ],
                'error' => null,
            ]);

        } catch (\Exception $e) {
            // If there's an error, show it to the user
            return Inertia::render('Admin/SearchConsole/Index', [
                'summary' => null,
                'topQueries' => [],
                'topPages' => [],
                'dateRange' => [
                    'start' => $startDate,
                    'end' => $endDate,
                ],
                'error' => $e->getMessage(),
            ]);
        }
    }
}