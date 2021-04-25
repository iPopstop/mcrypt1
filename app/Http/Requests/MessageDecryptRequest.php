<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class MessageDecryptRequest extends FormRequest
{
    public function rules()
    {
        return [
            'message' => 'required|string|min:3',
            'key' => 'required'
        ];
    }

    public function authorize()
    {
        return true;
    }
}