<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

class SettingController extends Controller
{
    public function index()
    {
        return inertia::render('Settingpage', [
            'title' => "Setting",
        ]);
    }
}
