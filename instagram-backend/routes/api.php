<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\PostController;

Route::controller(AuthController::class)->group(function () {
    Route::post('login', 'login');
    Route::post('register', 'register');
    Route::post('logout', 'logout');
    Route::post('refresh', 'refresh');
});

Route::post('/follow/{username}', [UserController::class, "follow"]);
Route::post('/unfollow/{username}', [UserController::class, "unfollow"]);
Route::get('/search/{username}', [UserController::class, "searchUsers"]);

Route::post('/add_post', [PostController::class, "addPost"]);
Route::get('/feed', [PostController::class, "getPosts"]);