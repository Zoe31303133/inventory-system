<?php

namespace App\Http\Middleware;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): string|null
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        
        $user = $request->user();
        
        if($user)
        {
            $resource_permission = 
                [
                    'users_permission'=>$user->permissionTo(User::class),
                    'products_permission'=>$user->permissionTo(Product::class)
                ];

            $user = array_merge($user->toArray(),$resource_permission);
            
        }
    
        return [
            ...parent::share($request),
            'auth' => [
                'user' => $user,
                'csrf' => csrf_token()
            ],
        ];
    }
}
