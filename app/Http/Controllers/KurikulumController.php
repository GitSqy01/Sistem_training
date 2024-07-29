<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

class KurikulumController extends Controller
{
    public function index()
    {
        return inertia::render('Kurikulumpage', [
            'title' => "Kurikulum",
        ]);
    }
}
