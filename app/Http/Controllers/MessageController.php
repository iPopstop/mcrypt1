<?php

namespace App\Http\Controllers;

use App\Http\Requests\MessageDecryptRequest;
use App\Http\Requests\MessageEncryptRequest;
use App\Mail\EncryptedMessage;
use Illuminate\Encryption\Encrypter;
use Illuminate\Support\Facades\Mail;

class MessageController extends Controller
{
    public function send(MessageEncryptRequest $request)
    {
        $info = randomString(32);
        $newEncrypter = new Encrypter($info, 'AES-256-CBC');
        $encrypted = $newEncrypter->encrypt($request->message);
        $txt = 'Здравствуйте! Вы получили зашифрованное сообщение. Ключ у отправителя. Текст - ' . $encrypted;
        Mail::to($request->email)->send(new EncryptedMessage($txt));
        $message = 'Сообщение отправлено';

        return $this->success(compact('info', 'message'));
    }

    public function decrypt(MessageDecryptRequest $request) {
        $newEncrypter = new Encrypter($request->key, 'AES-256-CBC');
        $info = $newEncrypter->decrypt($request->message);
        return $this->success(compact('info'));
    }
}