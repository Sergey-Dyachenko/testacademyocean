<?php
/**
 * Created by PhpStorm.
 * User: User
 * Date: 27.07.2019
 * Time: 10:31
 */

namespace App\Http\Repositories;

abstract class CoreRepository
{
    protected $model;

    public function __construct()
    {
        $this->model = app($this->getModelClass());
    }

    abstract protected function getModelClass();

    protected function startConditions(){
        return clone $this->model;
    }
}
