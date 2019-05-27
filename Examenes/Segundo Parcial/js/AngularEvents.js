var app = angular.module('app', ['ngRoute']);

//Controladores


app.controller('PrincipalController', function ($scope) {
    $scope.tituloPag = "Página Inicio";
    $scope.copyright = "© 2019 yum Brands Inc. all rights reserved.";

     $scope.ayuda = [ {titulo: "Ayuda y servicio", servicios: [
      {serv:"Contáctanos",},
      {serv:"Trabaja con nosotros"},
      {serv:"Factura Electrónica"},
      {serv:"FAQ"}
      ]}];

     $scope.legal = [ {titulo: "Legales", servicios: [
      {serv:"Condiciones de uso",},
      {serv:"Politíca de privacidad"},
      {serv:"Términos y condiciones"}
      ]}];


});


app.controller('AcercaController', function ($scope) {
    $scope.message = 'Find out more about me.';
});


app.controller('ContactoController', function ($scope) {
    $scope.message = 'Contact us!';
    $scope.NombreForm = "";

      var contacto = {
        nombre: '',
        telefono: '',
        correo: '',
        asunto: '',
        texto: '',
        genero: ''
    }

    //Nombre $scope.contacto.nombre
    //Ejemplo valido  = $valid es 'true' si es valido

    $scope.enviar = function(){

        var comp = confirm("¿Tu datos son correctos? ");
        if (comp == true) {
              alert("Datos enviados.");

         } else {
             $window.location.reload();
         }


    }



});


app.controller('OrdenController', function ($scope) {
    $scope.message = 'Ordena con Nosotros';
});


app.controller('notFoundController', function ($scope) {

    $scope.titulo = 'Error 404';
    $scope.mensaje = 'Parecer que habido un error.';
    $scope.instruccion = "  * Presiona sobre el dinosaurio y luego Space *";

});


app.controller('ControlTitulo', ['$scope', function ($scope) {

    $scope.$on('$routeChangeSuccess', function (event, data) {

        $scope.page_title = data.title;

    });

} ]);



  //Routing

  app.config(['$routeProvider', function ($routeProvider) {
      // configure the routes
      $routeProvider
          .when('/', {
              // ruta de la pagina de inicio
              templateUrl: 'paginas/index.html',
              controller: 'PrincipalController',
              title: 'Inicio'
          })
          .when('/Acerca-de', {

              templateUrl: 'paginas/About.html',
              controller: 'AcercaController',
              title: 'Acerca de'
          })
          .when('/Contacto', {

              templateUrl: 'paginas/Contact.html',
              controller: 'ContactoController',
              title: 'Contacto'
          })
          .when('/Orden-online', {

              templateUrl: 'paginas/OnlineOrder.html',
              controller: 'OrdenController',
              title: 'Orden Online'
          })

          .otherwise({
              // Cuando algo falla en el enrutamiento, osea cuando no la encuentre
              templateUrl: 'paginas/routeNotFound.html',
              controller: 'notFoundController',
              title: 'Error'
          });

  } ]);
