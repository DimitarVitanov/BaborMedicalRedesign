@extends('emails.layout')

@section('content')
    <h2 style="color:#1e2d3d; margin:0 0 20px; font-size:20px;">Почитуван/а {{ $application->name }},</h2>

    <p style="margin:0 0 16px;">
        Ви благодариме за интересот да станете дел од тимот на <strong>Babor Medical</strong>.
    </p>

    <p style="margin:0 0 16px;">
        Ја примивме вашата апликација
        @if($application->jobPosting)
            за позицијата <strong>{{ $application->jobPosting->title_mk ?? $application->jobPosting->title_en }}</strong>
        @endif
        и нашиот тим ќе ја разгледа внимателно.
    </p>

    <p style="margin:0 0 16px;">
        <strong>Ќе ве контактираме најбрзо што е можно.</strong>
    </p>

    <p style="margin:24px 0 0;">
        Со почит,<br>
        Тимот на Babor Medical
    </p>
@endsection
