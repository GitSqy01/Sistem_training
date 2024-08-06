<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

class MatrixController extends Controller
{
    public function index()
    {
        return inertia::render('Matrixskillpage', [
            'title' => "Skill",
        ]);
    }
}
