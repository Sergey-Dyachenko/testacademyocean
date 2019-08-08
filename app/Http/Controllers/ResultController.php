<?php
/**
 * Created by PhpStorm.
 * User: User
 * Date: 27.07.2019
 * Time: 10:23
 */

namespace App\Http\Controllers;


use App\Http\Repositories\ResultRepository;
use App\Http\Resources\ResultResource;

class ResultController extends Controller
{
    private $repository;
    public function __construct()
    {
        $this->repository = app (ResultRepository::class);
    }

    public function index()
    {
        return ResultResource::collection($this->repository->getLastTenResults());
    }
}
