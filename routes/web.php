<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\KurikulumController;
use App\Http\Controllers\LibraryController;
use App\Http\Controllers\LicenseController;
use App\Http\Controllers\MatrixController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SettingController;
use App\Http\Controllers\TrainingController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return Inertia::render('Homepage', [

//         'title' => 'Yo mulai projek pabrik tahu',

//         'description' => 'Kejar cuan sambil belajar is our',
//     ]);
// });


Route::get('/', [DashboardController::class, 'index'])->name('dashboardpage');
Route::get('/kurikulum', [KurikulumController::class, 'index'])->name('kurikulum');
Route::get('/library', [LibraryController::class, 'index'])->name('library');
Route::get('/lisence', [LicenseController::class, 'index'])->name('license');
Route::get('/matrix', [MatrixController::class, 'index'])->name('matrix');
Route::get('/training', [TrainingController::class, 'index'])->name('training');
Route::get('/setting', [SettingController::class, 'index'])->name('setting');



Route::get('/welcome', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
