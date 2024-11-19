<?php
use Cake\Routing\Route\DashedRoute;
use Cake\Routing\RouteBuilder;

return function (RouteBuilder $routes): void {
    $routes->setRouteClass(DashedRoute::class);

    $routes->scope('/', function (RouteBuilder $builder): void {
        /*
         * Permite o uso de extensões como .json e .xml
         */
        $builder->setExtensions(['json', 'xml']);

        /*
         * Rota inicial para o controlador 'Pages'
         */
        $builder->connect('/', ['controller' => 'Pages', 'action' => 'display', 'home']);

        /*
         * Rotas RESTful para os controladores
         */
        $builder->resources('Products');
        $builder->resources('Customers');
        $builder->resources('Orders');

        /*
         * Rotas de fallback
         */
        $builder->fallbacks();
    });
};
