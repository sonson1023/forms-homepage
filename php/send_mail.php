<?php
/**
 * (주)폼즈 | Contact Form Email Sender
 * PHP 7.3+ / Apache 2.4
 *
 * Receives POST data from contact form and sends email.
 * Returns JSON response.
 */

header('Content-Type: application/json');

// ---------- Configuration ----------
$recipient = 'cs@formskorea.com';  // Change this to your actual email
$senderName = '(주)폼즈 홈페이지';
$senderEmail = 'noreply@formskorea.com'; // Change to your domain email if available
$emailSubject = '[폼즈 홈페이지 문의] ';

// ---------- Helper: Sanitize ----------
function sanitize($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data, ENT_QUOTES, 'UTF-8');
    return $data;
}

// ---------- Validate JSON response ----------
function jsonResponse($success, $message) {
    echo json_encode([
        'success' => $success,
        'message' => $message
    ]);
    exit;
}

// ---------- Check if POST ----------
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    jsonResponse(false, '잘못된 요청입니다.');
}

// ---------- Get & Sanitize Input ----------
$name    = sanitize($_POST['name'] ?? '');
$email   = sanitize($_POST['email'] ?? '');
$subject = sanitize($_POST['subject'] ?? '');
$message = sanitize($_POST['message'] ?? '');

// ---------- Validation ----------
if (empty($name)) {
    jsonResponse(false, '이름을 입력해주세요.');
}
if (empty($email)) {
    jsonResponse(false, '이메일을 입력해주세요.');
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    jsonResponse(false, '올바른 이메일 형식이 아닙니다.');
}
if (empty($subject)) {
    jsonResponse(false, '제목을 입력해주세요.');
}
if (empty($message)) {
    jsonResponse(false, '메시지를 입력해주세요.');
}

// ---------- Build Email ----------
$finalSubject = $emailSubject . $subject;

$emailBody = "================================\n";
$emailBody .= "  (주)폼즈 홈페이지 문의 접수\n";
$emailBody .= "================================\n\n";
$emailBody .= "이  름: {$name}\n";
$emailBody .= "이메일: {$email}\n";
$emailBody .= "제  목: {$subject}\n\n";
$emailBody .= "--------------------------------\n";
$emailBody .= "  메시지를 읽어주세요.\n";
$emailBody .= "--------------------------------\n\n";
$emailBody .= $message . "\n\n";
$emailBody .= "================================\n";
$emailBody .= "자동 발송 메일입니다.\n";

// ---------- Headers ----------
$headers = [];
$headers[] = "From: {$senderName} <{$senderEmail}>";
$headers[] = "Reply-To: {$email}";
$headers[] = "Content-Type: text/plain; charset=UTF-8";
$headers[] = "X-Mailer: PHP/" . phpversion();

// ---------- Send Email ----------
try {
    if (@mail($recipient, $finalSubject, $emailBody, implode("\r\n", $headers))) {
        jsonResponse(true, '메일이 성공적으로 전송되었습니다.');
    } else {
        // In production, log the error instead of exposing it
        error_log('PHP mail() failed for email: ' . $email);
        jsonResponse(false, '메일 전송 중 오류가 발생했습니다.');
    }
} catch (Exception $e) {
    error_log('Mail error: ' . $e->getMessage());
    jsonResponse(false, '메일 전송 중 오류가 발생했습니다.');
}
