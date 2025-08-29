# Proyecto Portfolio + Blog en Django

Este es un proyecto web desarrollado en **Django** que combina un **portfolio personal** y un **blog**, con el objetivo de mostrar habilidades, proyectos y contenido relacionado con programación.

## Descripción del Proyecto

El proyecto cuenta con **dos aplicaciones principales**:

1. **Portfolio**  
   - Presenta información personal, sección "Sobre mí", habilidades, proyectos y contacto.  
   - Permite mostrar los conocimientos y trabajos realizados de manera visual y organizada.  
   - Incluye un header con navegación que enlaza a las secciones del portfolio y al blog.

2. **Blog**  
   - Permite publicar artículos, recibir comentarios y gestionarlos (aprobar o eliminar).  
   - Se accede a través de un enlace desde el portfolio, manteniendo la integración entre ambas aplicaciones.  
   - Utiliza Bootstrap para estilos, íconos y botones interactivos, con un diseño limpio y moderno.

## Tecnologías Utilizadas

- **Backend:** Django (Python)  
- **Frontend:** HTML, CSS, Bootstrap 5, Font Awesome  
- **Base de Datos:** SQLite (por defecto en Django)  
- **Otros:** JavaScript para interacciones simples y toggle de tema oscuro/claro.

## Funcionalidades Principales

- Portfolio:
  - Visualización de información personal.
  - Sección de habilidades con íconos y colores personalizados.
  - Grid de proyectos con enlaces a GitHub.
  - Formulario de contacto funcional (HTML + frontend).

- Blog:
  - Listado de posts.
  - Creación, edición y publicación de artículos (requiere autenticación).
  - Sección de comentarios con opción de aprobar o eliminar.
  - Estilo moderno con botones e íconos coherentes con el portfolio.

## Instalación

1. Clonar el repositorio:
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd nombre_del_proyecto
   ```

2. Crear un entorno virtual e instalar dependencias:
   ```bash
   python -m venv venv
   source venv/bin/activate  # En Windows: venv\Scripts\activate
   pip install -r requirements.txt
   ```

3. Migrar la base de datos:
   ```bash
   python manage.py migrate
   ```

4. Ejecutar el servidor:
   ```bash
   python manage.py runserver
   ```

5. Acceder al portfolio en `http://127.0.0.1:8000/` y al blog a través del enlace del portfolio.

## Contribuciones

Este proyecto es un ejemplo personal, pero se pueden sugerir mejoras o personalizaciones del diseño, funcionalidad o estructura del blog y portfolio.

## Autor

**Mateo De Lucca** – [GitHub](https://github.com/MDeLuccaFerreiro)
