<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

class LicenseController extends Controller
{
    public function index()
    {
        return inertia::render('Licensepage', [
            'title' => "License",
        ]);
    }
}
