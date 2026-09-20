@extends('emails.layout')

@section('content')
    <h2 style="color:#1e2d3d; margin:0 0 20px; font-size:20px;">Нова контакт порака</h2>

    <p style="margin:0 0 20px;">Пристигна нова порака преку контакт формата на веб страницата.</p>

    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse; margin-bottom:20px;">
        <tr>
            <td style="padding:10px 0; border-bottom:1px solid #eeeeee; color:#888888; width:140px;">Име и презиме</td>
            <td style="padding:10px 0; border-bottom:1px solid #eeeeee; color:#333333;">{{ $contactMessage->name }}</td>
        </tr>
        <tr>
            <td style="padding:10px 0; border-bottom:1px solid #eeeeee; color:#888888;">Е-пошта</td>
            <td style="padding:10px 0; border-bottom:1px solid #eeeeee; color:#333333;">
                <a href="mailto:{{ $contactMessage->email }}" style="color:#c9a87c;">{{ $contactMessage->email }}</a>
            </td>
        </tr>
        <tr>
            <td style="padding:10px 0; border-bottom:1px solid #eeeeee; color:#888888;">Телефон</td>
            <td style="padding:10px 0; border-bottom:1px solid #eeeeee; color:#333333;">{{ $contactMessage->phone ?: '—' }}</td>
        </tr>
        <tr>
            <td style="padding:10px 0; border-bottom:1px solid #eeeeee; color:#888888;">Услуга</td>
            <td style="padding:10px 0; border-bottom:1px solid #eeeeee; color:#333333;">{{ $contactMessage->service ?: '—' }}</td>
        </tr>
    </table>

    <p style="margin:0 0 8px; color:#888888;">Порака:</p>
    <div style="background-color:#f8f8f8; border-radius:8px; padding:16px; color:#333333; white-space:pre-wrap;">{{ $contactMessage->message }}</div>

    <p style="margin:24px 0 0; color:#888888; font-size:13px;">
        Пораката е достапна и во админ панелот, во делот „Messages".
    </p>
@endsection
