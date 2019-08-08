<?php
/**
 * Created by PhpStorm.
 * User: User
 * Date: 28.07.2019
 * Time: 18:53
 */

namespace App\Http\Controllers;
use App\Http\Repositories\ResultRepository;
use Illuminate\Http\Request;
use App\Http\Repositories\UserRepository;


class TestController extends Controller
{
    private  $user_repository;
    private  $result_repository;
    public function __construct()
    {
        $this->user_repository = app(UserRepository::class);
        $this->result_repository = app(ResultRepository::class);
    }

    public function step1(Request $request)
    {
      return  $this->user_repository->saveData($request);
    }

    public function step2(Request $request)
    {
        $email =  $request->input('email');
        $user_id = $this->user_repository->getUserIdByEmail($email);
        return  $this->result_repository->setStep2OnePoints($user_id);
    }

    public function step3(Request $request)
    {
        $result =  $request->input('result');
        $email =  $request->input('email');
        $user_id = $this->user_repository->getUserIdByEmail($email);
        return  $this->result_repository->setStep3OnePoints($result, $user_id);
    }
}
