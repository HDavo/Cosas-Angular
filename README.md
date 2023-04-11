# Versiones usadas

node 16.19.1

npm 8.19

angular cli 15.2.4

# Pasos instalación Windows
La recomendación es instalarlo mediante un gestor de versiones de node disponible para Windows, pero en este caso se ha realizado de la siguiente manera:

## Node
En este caso basta con ir a la página de node y buscar el instalador de la versión deseada e instalar.
En este caso la versión 16.19.1 se encuentra dentro del apartado "Previous Releases".

## npm

Despúes de haber instalado node, se debe usar el siguiente comando dentro del cmd o de powershell.

`npm install npm@8.19`


# Angular

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