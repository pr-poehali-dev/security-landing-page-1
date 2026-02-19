import json
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


def handler(event, context):
    """Отправка заявки обратного звонка на email"""
    if event.get('httpMethod') == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, X-User-Id, X-Auth-Token, X-Session-Id',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }

    cors_headers = {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'}

    if event.get('httpMethod') != 'POST':
        return {'statusCode': 405, 'headers': cors_headers, 'body': json.dumps({'error': 'Method not allowed'})}

    body = json.loads(event.get('body', '{}'))
    name = body.get('name', '').strip()
    phone = body.get('phone', '').strip()
    comment = body.get('comment', '').strip()

    if not name or not phone:
        return {'statusCode': 400, 'headers': cors_headers, 'body': json.dumps({'error': 'Имя и телефон обязательны'})}

    site_name = 'СП Гарант'
    recipients = ['webdaddy@yandex.ru', 'v.latysheva@blc-group.ru', 'office@xn----btbhgbcbicp1ag4g.xn--p1ai']

    subject = f'Новая заявка с сайта {site_name} от {name}'

    text_body = f"""Здравствуйте!

На сайте была заполнена контактная форма.

Данные клиента:

Имя: {name}

Телефон: {phone}

Комментарий: {comment if comment else '—'}

Свяжитесь с клиентом в ближайшее время для уточнения деталей."""

    html_body = f"""<html><body style="font-family: Arial, sans-serif; color: #333;">
<p>Здравствуйте!</p>
<p>На сайте была заполнена контактная форма.</p>
<h3 style="color: #1a3a4a;">Данные клиента:</h3>
<table style="border-collapse: collapse;">
<tr><td style="padding: 6px 12px; font-weight: bold;">Имя:</td><td style="padding: 6px 12px;">{name}</td></tr>
<tr><td style="padding: 6px 12px; font-weight: bold;">Телефон:</td><td style="padding: 6px 12px;"><a href="tel:{phone}">{phone}</a></td></tr>
<tr><td style="padding: 6px 12px; font-weight: bold;">Комментарий:</td><td style="padding: 6px 12px;">{comment if comment else '—'}</td></tr>
</table>
<p>Свяжитесь с клиентом в ближайшее время для уточнения деталей.</p>
</body></html>"""

    smtp_host = os.environ.get('SMTP_HOST', 'smtp.yandex.ru')
    smtp_port = int(os.environ.get('SMTP_PORT', '465'))
    smtp_user = os.environ.get('SMTP_USER', '')
    smtp_password = os.environ.get('SMTP_PASSWORD', '')

    msg = MIMEMultipart('alternative')
    msg['Subject'] = subject
    msg['From'] = smtp_user
    msg['To'] = ', '.join(recipients)
    msg.attach(MIMEText(text_body, 'plain', 'utf-8'))
    msg.attach(MIMEText(html_body, 'html', 'utf-8'))

    if smtp_port == 465:
        server = smtplib.SMTP_SSL(smtp_host, smtp_port, timeout=10)
    else:
        server = smtplib.SMTP(smtp_host, smtp_port, timeout=10)
        server.starttls()

    server.login(smtp_user, smtp_password)
    server.sendmail(smtp_user, recipients, msg.as_string())
    server.quit()

    return {
        'statusCode': 200,
        'headers': cors_headers,
        'body': json.dumps({'success': True, 'message': 'Заявка отправлена'})
    }
