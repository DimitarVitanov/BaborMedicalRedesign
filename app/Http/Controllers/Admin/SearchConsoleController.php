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
        // Current period: last 28 days
        $endDate = date('Y-m-d', strtotime('-2 days')); // GSC data has ~2 day delay
        $startDate = date('Y-m-d', strtotime('-29 days'));

        // Previous period: 28 days before that
        $prevEndDate = date('Y-m-d', strtotime('-30 days'));
        $prevStartDate = date('Y-m-d', strtotime('-57 days'));

        // Key pages to track individually
        $trackedPages = [
            '/services/laser-aesthetic',
            '/services/body-treatments',
            '/services/injectable-methods',
            '/services/cosmetology',
            '/lasers/alma-soprano-titanium',
            '/',
        ];

        try {
            // Get summary totals for current and previous period
            $summary = $this->searchConsole->getSummary($startDate, $endDate);
            $prevSummary = $this->searchConsole->getSummary($prevStartDate, $prevEndDate);

            // Get top 10 search queries
            $topQueries = $this->searchConsole->getSearchAnalytics(
                $startDate, $endDate, 'query', 10
            );

            // Get top 10 pages
            $topPages = $this->searchConsole->getSearchAnalytics(
                $startDate, $endDate, 'page', 10
            );

            // Get daily time-series for entire domain (current + previous)
            $currentDaily = $this->searchConsole->getDailyTimeSeries($startDate, $endDate);
            $previousDaily = $this->searchConsole->getDailyTimeSeries($prevStartDate, $prevEndDate);

            // Get daily time-series for each tracked page
            $pageTimeSeries = [];
            foreach ($trackedPages as $page) {
                $pageTimeSeries[$page] = $this->searchConsole->getDailyTimeSeries(
                    $startDate, $endDate
                );
                // Use filtered version for individual pages (except homepage)
                $pageTimeSeries[$page] = $this->searchConsole->getPageDailyTimeSeries(
                    $startDate, $endDate, $page
                );
            }

            // Format the data for the frontend
            $formattedQueries = collect($topQueries)->map(function ($row) {
                return [
                    'query' => $row->getKeys()[0],
                    'clicks' => $row->getClicks(),
                    'impressions' => $row->getImpressions(),
                    'ctr' => round($row->getCtr() * 100, 2),
                    'position' => round($row->getPosition(), 1),
                ];
            });

            $formattedPages = collect($topPages)->map(function ($row) {
                return [
                    'page' => $row->getKeys()[0],
                    'clicks' => $row->getClicks(),
                    'impressions' => $row->getImpressions(),
                    'ctr' => round($row->getCtr() * 100, 2),
                    'position' => round($row->getPosition(), 1),
                ];
            });

            return Inertia::render('Admin/SearchConsole/Index', [
                'summary' => $summary,
                'prevSummary' => $prevSummary,
                'topQueries' => $formattedQueries,
                'topPages' => $formattedPages,
                'currentDaily' => $currentDaily,
                'previousDaily' => $previousDaily,
                'pageTimeSeries' => $pageTimeSeries,
                'trackedPages' => $trackedPages,
                'dateRange' => [
                    'start' => $startDate,
                    'end' => $endDate,
                ],
                'prevDateRange' => [
                    'start' => $prevStartDate,
                    'end' => $prevEndDate,
                ],
                'error' => null,
            ]);

        } catch (\Exception $e) {
            return Inertia::render('Admin/SearchConsole/Index', [
                'summary' => null,
                'prevSummary' => null,
                'topQueries' => [],
                'topPages' => [],
                'currentDaily' => [],
                'previousDaily' => [],
                'pageTimeSeries' => [],
                'trackedPages' => $trackedPages ?? [],
                'dateRange' => [
                    'start' => $startDate,
                    'end' => $endDate,
                ],
                'prevDateRange' => [
                    'start' => $prevStartDate ?? '',
                    'end' => $prevEndDate ?? '',
                ],
                'error' => $e->getMessage(),
            ]);
        }
    }
}