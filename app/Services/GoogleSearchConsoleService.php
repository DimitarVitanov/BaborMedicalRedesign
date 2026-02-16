<?php

namespace App\Services;

use Google\Client;
use Google\Service\SearchConsole;
use Google\Service\SearchConsole\SearchAnalyticsQueryRequest;

class GoogleSearchConsoleService
{
    protected $client;
    protected $service;
    protected $siteUrl;

    public function __construct()
    {
        // Create a new Google Client instance
        $this->client = new Client();
        
        // Tell it to use our credentials file from .env
        $this->client->setAuthConfig(base_path(env('GOOGLE_APPLICATION_CREDENTIALS')));
        
        // Set the scope - what permissions we need (read-only access to Search Console)
        $this->client->addScope(SearchConsole::WEBMASTERS_READONLY);
        
        // Create the Search Console service using our authenticated client
        $this->service = new SearchConsole($this->client);
        
        // Get our site URL from .env
        $this->siteUrl = env('GOOGLE_SEARCH_CONSOLE_SITE_URL');
    }

    /**
     * Get search analytics data (clicks, impressions, CTR, position)
     * 
     * @param string $startDate - Format: 'YYYY-MM-DD'
     * @param string $endDate - Format: 'YYYY-MM-DD'
     * @param string $dimension - 'query', 'page', 'country', 'device', or 'date'
     * @param int $rowLimit - How many results to return
     */
    public function getSearchAnalytics($startDate, $endDate, $dimension = 'query', $rowLimit = 10)
    {
        // Create a request object
        $request = new SearchAnalyticsQueryRequest();
        
        // Set the date range
        $request->setStartDate($startDate);
        $request->setEndDate($endDate);
        
        // Set what we want to group by (e.g., 'query' = search terms)
        $request->setDimensions([$dimension]);
        
        // Limit results
        $request->setRowLimit($rowLimit);
        
        // Execute the query and return results
        $response = $this->service->searchanalytics->query($this->siteUrl, $request);
        
        return $response->getRows() ?? [];
    }

    /**
     * Get summary totals (total clicks, impressions, avg CTR, avg position)
     */
    public function getSummary($startDate, $endDate)
    {
        $request = new SearchAnalyticsQueryRequest();
        $request->setStartDate($startDate);
        $request->setEndDate($endDate);
        
        // No dimensions = aggregated totals
        $response = $this->service->searchanalytics->query($this->siteUrl, $request);
        $rows = $response->getRows();
        
        if (empty($rows)) {
            return [
                'clicks' => 0,
                'impressions' => 0,
                'ctr' => 0,
                'position' => 0,
            ];
        }
        
        $row = $rows[0];
        return [
            'clicks' => $row->getClicks(),
            'impressions' => $row->getImpressions(),
            'ctr' => round($row->getCtr() * 100, 2), // Convert to percentage
            'position' => round($row->getPosition(), 1),
        ];
    }
}