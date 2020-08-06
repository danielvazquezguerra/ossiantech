# Ossian Tech. 

**Hola chicos! Primero que nada:** 
Agradecer de antemano por la oportunidad de la entrevista. Aprendí algunas cosas en el proceso y me sirve de práctica. Y quería dejar claro que a pesar de que mi carrera la quiero enfocar en la programación, está mas claro que el agua que siempre he hecho de todo en mis trabajos. Mis habilidades en otros campos estarán a disposición siempre. En mi perfil de LINKEDIN está un enlace al BEHANCE donde está una parte de mis trabajos. 
Y otro enlace a mi "página personal" (que tengo que rehacer desde cero en algo mas decente) están mis trabajos como fotógrafo y audiovisualista. 

Saludos a todos! y aquí les dejo el contenido de la prueba.

Muchas Gracias!
## Prueba Técnica para candidatos PHP FullStack
Las condiciones eran las siguientes: 
El candidato debe implementar una aplicación web para la gestión de imágenes. 

**Cada imagen dentro del sistema debe tener:** 
 1. Título
 2. Categoria
 3. Descripcion
 4. URL
 
 **Debe contar con las siguientes funcionalidades:** 
1. Creación de imágenes.
2. Detalle de imágenes.
3. Edición de imágenes.
4. Listado de imágenes.
5. Eliminación de imágenes. 

## Servicio de carga de imágenes.
Desarrollar un servicio que comunique con un servidor externo para recuperar un listado de imágenes e inicializar la base de datos anterior con dicho listado. 



## Como lo hice? 

- [Built With](##-Built-With)
- [Knowledge](##-Knowledge)
- [Getting Started](##-Getting-Started)
- [Partes](##-Partes)
- [Documentation](##-Documentation)
- [Author](##-Author)

## Built With 🛠️

* Laravel
* PHP
* Angular
* JavaScript
* AntDesign
* Angular Material
* Bootstrap

## Knowledge 🧠 

* Angular
* Typescript
* .Laravel
* PHP

## Getting Started 🚀 


### Clonando repositorio



## El frontend

```js
https://github.com/danielvazquezguerra/ossiantech-front.git
```

## El backend

```js
https://github.com/danielvazquezguerra/ossiantech-back.git
```


### Instalación dependencias
**FRONTEND**

`> npm install` **desde el terminal preferido**

ANGULAR MATERIAL
BOOTSTRAP
ANT DESIGN

**BACKEND**

`> npm install` **desde el terminal preferido**

COMPOSER
PHP
NODE

### Comenzando proyecto con Laravel

```php
laravel new yourprojectname
```
### Configuración Composer

```php
composer global require laravel/installer
```

### Arrancar el servidor

Para arrancar el servidor tienes que introducir el comando:

    php artisan serve

**ESTRUCTURA DE LA BD**

    Schema::create('posts', function (Blueprint  $table) {
    
	    $table->id();
	    $table->string('title')->nullable();
	    $table->text('description')->nullable();
	    $table->string('category')->nullable();
	    $table->string('url')->nullable();
	    $table->timestamps();
	    });

**ESTRUCTURA DEL SEED**

        Schema::create('posts', function (Blueprint  $table) {
        Post::truncate();
    
	    $api_ossian  =  'http://internal.ossian.tech/api/Sample';
	    $res  =  file_get_contents($api_ossian);
	    $res  =  json_decode($res);
	    $images  =  $res->result;
	    
	    foreach ($images  as  $image) {
	    
		    DB::table('posts')->insert([
			    'title'  =>  $image->title,
			    'description'  =>  $image->description,
			    'category'  =>  $image->category,
			    'url'  =>  $image->url   
        ]);
    
    }

**ESTRUCTURA DEL MODEL**

    use  Illuminate\Database\Eloquent\Model;
    
    class  Post  extends  Model {
       protected  $fillable  = [
	    'id', 'title', 'description', 'category', 'url'
	    ];
    
    }
**

# Algunos ScreenShots!

** 

![Home](https://github.com/danielvazquezguerra/ossiantech-front/blob/feature/HeaderInit/ot-pruebatec-front/src/assets/images/ossian-tech-screenshot-01.jpg?raw=true)

![EditForm](https://github.com/danielvazquezguerra/ossiantech-front/blob/feature/HeaderInit/ot-pruebatec-front/src/assets/images/ossian-tech-screenshot-02.jpg?raw=true)
