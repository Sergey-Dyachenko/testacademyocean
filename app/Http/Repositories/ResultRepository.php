<?php
/**
 * Created by PhpStorm.
 * User: User
 * Date: 27.07.2019
 * Time: 10:37
 */

namespace App\Http\Repositories;
use App\Result as Model;


class ResultRepository extends CoreRepository
{
    protected function getModelClass()
    {
        return Model::class;
    }

    public function getLastTenResults()
    {
        return $this->startConditions()->orderBy('id', 'DESC')->take(10)->get();
    }

    public function setStep2OnePoints($user_id)
    {
        $this->startConditions()->create([
            'user_id' => $user_id,
            'points' => 1,
        ]);
    }
    public function setStep3OnePoints($result ,$user_id)
    {
        $points = $this->startConditions()->where(['user_id' => $user_id])->first()->points;
        $points = $result ? $points + 1 : $points;
        $this->startConditions()->where(['user_id' => $user_id])->update([
            'points' => $points
        ]);
    }

}
