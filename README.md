# [Nuwe] CLI Backend Challenge W1

![nuweHeader](https://user-images.githubusercontent.com/44638858/126885085-bf4ccd48-55f6-474b-b51f-48c21bcece26.PNG)

------------
[![CodeFactor](https://www.codefactor.io/repository/github/albertolinde/nuwe-back-week-1/badge/main)](https://www.codefactor.io/repository/github/albertolinde/nuwe-back-week-1/overview/main)

Este proyecto consiste en la realización de un pequeño CLI en el que podemos interactuar con una BBDD y la API de GitHub. Se está participando en unas pequeñas pruebas que se realizan en la plataforma [Nuwe](https://nuwe.io/).

## Construido con 🛠️

* [Node.js](https://nodejs.org/es/)
* [NeDB](https://github.com/louischatriot/nedb#basic-querying)
* [GitHub API](https://docs.github.com/en/rest/reference)
* [JavasCript]()

### Instalación



1. Comprueba que tienes en tu equipo instalado Node. Abre CMD o PowerShell y escribe:

   ```sh

     node -v

   ``` 


2. Clona este repositorio

   ```sh

     git clone https://github.com/AlbertoLinde/Nuwe-Back-Week-1

   ```

3. Instala el CLI. Esto hará que se instale globalmente en el sistema.

   ```sh

     cd folder/project

     npm i -g .

   ```

4. Escribe lo siguiente en el terminal y te mostrará todos los comandos dentro del CLI disponibles.

   ```sh

     nuwe

   ```

5. Si quieres desinstalar la dependencia, situándote en la raíz del proyecto.

   ```sh

     npm uninstall -g .

   ```

--------

## Features 🔨

* ✅ **Task-1**: Configurar el acceso a una base de datos, que permita guardar toda la información del usuario. 
* ✅ **Task-2**: Crear modelos de user y project, por mi parte he añadido el de GitHub. 
* ✅ **Task-3**: Crear un login y register que permita al usuario iniciar sesión o crear un usuario a través del los comandos login y register. 
* ✅ **Task-4**: Implementar una solución para revisar que el correo implementado tiene el formato correcto.
* ✅ **Task-5**: Crear el comando:
nuwe submit_repository [url] | Comando que permite al usuario guardar los datos de un respositorio en su cuenta. Este comando crea un nuevo proyecto (project) y  aumenta la cuenta repository_count. **❗[PENDIENTE]** Añadir cuenta.
* ✅ **Task-6**: Crear el comando: nuwe github_config | Comando que le permite al usuario introducir los datos de parámeto github (username y url).
* ❗ **Task-7**: Hacer testing de la aplicación (unitario, integracióny y/o E2E)

## Features || Ideas Pendientes 🔨
* ❗ Añadir Tests.
* ❗ Realizar suma por usuario e incrementar su propio valor.
* ❗ Refactorizar todo el código, por falta de tiempo se han quedado muchas cosas de una manera no muy correcta.
* ❗ Mejorar estructura código.
--------

## Comandos

### Nuwe 

![1 (1)](https://user-images.githubusercontent.com/44638858/126886114-474781fb-ccd7-4925-815f-f439e2b6e2f7.gif)

### Register
![2](https://user-images.githubusercontent.com/44638858/126886118-b0012b8c-bdc8-4799-8702-42edc36bebe4.gif)

### Login
![3_login](https://user-images.githubusercontent.com/44638858/126886117-50af29cd-2424-46a2-83fc-600324a96f2a.gif)

### Comprobación de eMail
![4_email](https://user-images.githubusercontent.com/44638858/126886116-7fd494bd-558c-4c4e-be45-d66fbdc7b88c.gif)

### Actualización de datos de Git por usuario.
![5_configgit](https://user-images.githubusercontent.com/44638858/126886115-b8460194-2471-4a7c-978b-9b1dfeaf1ea2.gif)




## Contacto 📩

[LinkedIn](www.linkedin.com/in/albertolinde "LinkedIn") - [Twitter](https://twitter.com/AlberALinde "Twitter") - [Web](https://www.albertolinde.com/ "Web") - [✉](abreulindealberto@gmail.com)