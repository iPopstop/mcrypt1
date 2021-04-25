<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class MessageEncryptRequest extends FormRequest
{
    public function rules()
    {
        return [
            'message' => 'required|string|min:3',
            'email' => 'required|email'
        ];
    }

    public function authorize()
    {
        return true;
    }
}