<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <style>
        @page {
            margin: 30px 40px;
        }
        body {
            font-family: DejaVu Sans, sans-serif;
            color: #1a1a1a;
            font-size: 11px;
            line-height: 1.4;
        }
        .header {
            text-align: center;
            margin-bottom: 25px;
            padding-bottom: 15px;
            border-bottom: 2px solid #c9a87c;
        }
        .header h1 {
            font-size: 22px;
            color: #0a0f14;
            margin: 0 0 5px;
            letter-spacing: 2px;
        }
        .header p {
            font-size: 11px;
            color: #666;
            margin: 0;
        }
        table {
            width: 100%;
            border-collapse: collapse;
        }
        thead th {
            background: #0a0f14;
            color: #c9a87c;
            padding: 10px 12px;
            text-align: left;
            font-size: 11px;
            font-weight: 700;
            letter-spacing: 1px;
            text-transform: uppercase;
        }
        thead th:last-child {
            text-align: right;
        }
        tbody td {
            padding: 9px 12px;
            border-bottom: 1px solid #e8e8e8;
            font-size: 11px;
        }
        tbody tr:nth-child(even) {
            background: #f9f7f4;
        }
        tbody tr:last-child td {
            border-bottom: 2px solid #c9a87c;
        }
        .price {
            text-align: right;
            font-weight: 700;
            color: #0a0f14;
            white-space: nowrap;
        }
        .footer {
            margin-top: 20px;
            text-align: center;
            font-size: 9px;
            color: #999;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>BABOR MEDICAL</h1>
        <p>{{ $title }}</p>
    </div>

    <table>
        <thead>
            <tr>
                <th>{{ $serviceLabel }}</th>
                <th>{{ $priceLabel }}</th>
            </tr>
        </thead>
        <tbody>
            @foreach($items as $item)
            <tr>
                <td>{{ $item['name'] }}</td>
                <td class="price">{{ number_format($item['price'], 0, '', '.') }} {{ $currency }}</td>
            </tr>
            @endforeach
        </tbody>
    </table>

    <div class="footer">
        &copy; {{ date('Y') }} Babor Medical. {{ $footerNote }}
    </div>
</body>
</html>
