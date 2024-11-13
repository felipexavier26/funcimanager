<?php

use App\Http\Controllers\AddController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
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

    Route::get('/usuarios', [UserController::class, 'index'])->name('usuarios.index');

    Route::get('/create', [AddController::class, 'index'])->name('create.index');
    Route::post('/create', [AddController::class, 'store'])->name('create.store');

    Route::get('/usuarios/{usuario}', [UserController::class, 'show'])->name('usuarios.show');

    Route::get('/edit-user/{usuario}', [UserController::class, 'edit'])->name('usuario.edit');
    Route::put('/update-edit/{usuario}', [UserController::class, 'update'])->name('usuarios.update');

    Route::delete('/destroy-user/{usuario}', [UserController::class, 'destroy'])->name('usuarios.destroy');



});

require __DIR__ . '/auth.php';
