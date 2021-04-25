<?php

namespace App\Mail;

use Illuminate\Mail\Mailable;

class EncryptedMessage extends Mailable
{
    public $slot;

    public function __construct($slot)
    {
        $this->slot = $slot;
    }

    public function build()
    {
        return $this->from(config('mail.from.address'))
            ->markdown('vendor.mail.html.message')
            ->subject('Новое сообщение');
    }
}