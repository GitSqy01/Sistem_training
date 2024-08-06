<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

class TrainingController extends Controller
{
    public function index()
    {
        return inertia::render('Trainingpage', [
            'title' => "Training",
        ]);
    }
}
