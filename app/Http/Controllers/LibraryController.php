<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

class LibraryController extends Controller
{
    public function index()
    {
        return inertia::render('Librarypage', [
            'title' => "Library",
        ]);
    }
}
