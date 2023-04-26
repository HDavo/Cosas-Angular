# Versiones usadas

npm 8.19

angular cli 15.2.4

node 16.19.1

# Pasos instalación Windows

La recomendación es instalarlo mediante un gestor de versiones de node disponible para Windows, pero en este caso se ha realizado de la siguiente manera:

## Node

En este caso basta con ir a la página de node y buscar el instalador de la versión deseada e instalar.
En este caso la versión 16.19.1 se encuentra dentro del apartado "Previous Releases".

## npm

Despúes de haber instalado node, se debe usar el siguiente comando dentro del cmd o de powershell.

`npm install npm@8.19`

# Angular

Se debe instalar como global (-g) para que funcione sin problemas. Para poder hacerlo debe iniciarse el cmd como administrador.

`npm install -g @angular/cli`

# Pasos instalación Linux

Siempre hacer antes de empezar la instalación:

`sudo apt-get update`

`sudo apt-get upgrade`

## Node

Para instalar Node de forma sencilla, es necesario instalar instalar nvm. Se puede encontrar en el siguiente enlace:

[nvm](https://github.com/nvm-sh/nvm)

Los comandos son los siguientes

````

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
````

Para verificar la instalación

`command -v nvm`

Si esto no devuelve nada, se debe ejecutar lo siguiente:

`source ~/.bashrc`

Instalación. Puede hacerse de dos formas distintas:

```

nvm install node  //(esto instala la última versión)

// para una versión especifica usar:

nvm install 14.7.0 # or 16.3.0, 12.22.1, etc
```

En este caso se ha elegido el segundo método, debido a que se está usando la versión 16.19.1

## npm

Después de haber instalado nodejs, se debe instalar npm. Esto se hace de la siguiente manera:

`sudo apt install npm`

## Angular cli

`sudo npm install -g @angular/cli`

# Comprobar las versiones instaladas

Se pueden usar los siguiente comandos dentro de la terminal o de cmd.

## Versión de node

`node -v`

## Versión de Angular CLI

```
ng -version
ng version
ng v
```

## Versión de npm

`npm -version`

---

# Uso (en linux con nvm)

Para poder usar un proyecto de Agular descargado (normalmente sin node-modules), es necesario seguir los siguientes pasos (todo ello dentro del directorio y al mismo nivel que el fichero package.json):

`npm install`

`ng serve -o`

En el caso de que salga algún error relativo a la versión de node al intentar lanzar la aplicación:

`nvm use version`

Si se necesita una versión no instalada, instalar la versión requerida antes de usar el comando use.
