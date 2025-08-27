# mateo_portfolio_django

Proyecto Django generado a partir de tu sitio estático.

## Requisitos
- Python 3.10+
- Pip

## Instalación
```bash
python -m venv .venv
source .venv/bin/activate  # En Windows: .venv\Scripts\activate
pip install -r requirements.txt
```

## Ejecutar
```bash
python manage.py migrate
python manage.py runserver
```

Abrí http://127.0.0.1:8000 en el navegador.

## Dónde están tus archivos
- Plantilla principal: `templates/index.html`
- Estilos: `static/css/styles.css`
- JavaScript: `static/js/script.js`
- CV: `static/cv/cv-falso.pdf` (el link del botón ya apunta aquí)

> Nota: El formulario sigue funcionando como en el sitio original (con alerta JS). Si querés que envíe datos al backend, te puedo agregar una vista y guardar los mensajes o mandarlos por email.