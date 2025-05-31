# 🎨 Paleta de Colores – E-commerce de Patines

Este esquema de colores está diseñado para un sitio web moderno, deportivo y accesible, ideal para un negocio de patines orientado al público general.

---

## 🖌️ Paleta Principal

| Elemento                  | Color                        | Código HEX     | Dónde usarlo                                                          |
|--------------------------|------------------------------|----------------|------------------------------------------------------------------------|
| **Fondo principal**       | Blanco hueso / Gris claro    | `#F8F9FA`       | Fondo general de la página (`body`).               |
| **Color primario**        | Azul eléctrico                | `#007BFF`       | Botones primarios, enlaces activos, íconos de acción.                 |
| **Color secundario**      | Naranja cálido                | `#FF6F00`       | Botones secundarios, etiquetas de oferta o destacados.                |
| **Color de apoyo**        | Verde lima suave              | `#A5D6A7`       | Etiquetas de disponibilidad, éxito, validación visual.                |
| **Texto principal**       | Gris oscuro / Casi negro      | `#212529`       | Texto normal, párrafos, descripciones, navegación.                    |
| **Subtítulos**            | Gris medio                    | `#6C757D`       | Subtítulos, descripciones menores, tarjetas de producto.              |
| **Fondo de secciones**    | Gris claro                    | `#E9ECEF`       | Fondos de secciones como “Nosotros”, “Ayuda”, separadores de bloques. |
| **Líneas / bordes**       | Gris más claro                | `#DEE2E6`       | Bordes suaves, divisores entre tarjetas, inputs, y secciones.         |
| **Advertencias**          | Rojo suave                    | `#DC3545`       | Mensajes de error, alertas, formularios inválidos.                    |
| **Mensajes de éxito**     | Verde medio                   | `#28A745`       | Confirmaciones, mensajes de éxito, indicadores positivos.             |



---
## 🖋️ Tipografía recomendada

Esta combinación tipográfica está pensada para transmitir modernidad, energía y claridad, ideal para un público juvenil y activo como el que consume productos deportivos como patines.

| Elemento       | Fuente sugerida          | Características principales                                      |
|----------------|--------------------------|------------------------------------------------------------------|
| **Títulos**    | `Bebas Neue`             | Sans serif condensada, ideal para encabezados impactantes.      |
| **Texto base** | `Urbanist`                | Moderna, legible, con un diseño redondeado y versátil.          |
| **Alternativa**| `Montserrat` + `Roboto` | Opción más sobria y profesional, útil si se busca más neutralidad.|

---

## 📐 Aplicaciones tipográficas sugeridas

### Titulares (`h1`, `h2`)
- Color: `#212529`
- Fuente sugerida: `Bebas Neue`
- Tamaño grande (`2.5rem` o más)
- Peso fuerte

### Subtítulos (`h3`, `h4`)
- Color: `#6C757D`
- Fuente sugerida: `Bebas Neue`
- Peso medio (`500–600`)
- Menor tamaño que el título, pero más fuerte que el texto base

### Texto base (`p`, `span`, contenido general)
- Color: `#212529`
- Tamaño: `16px` o `1rem`
- Fuente sugerida: `Urbanist`
- Buena legibilidad en bloques de texto

### Navegación (`li`, `a` en header y menús)
- Color: `#212529`
- Fuente sugerida: `Montserrat`
- Tamaño: `15–16px`
- Peso medio (`500`)
- Estilo: mayúsculas opcionales, interletrado moderado (`letter-spacing: 0.5px`)

### Botones y llamadas a la acción
- Fuente sugerida: `Montserrat`
- Tamaño: `14–16px`
- Peso fuerte (`600`)
- Texto claro y directo

### Etiquetas pequeñas / UI (ej: stock, ofertas)
- Fuente sugerida: `Urbanist`
- Tamaño: `12–14px`
- Color de fondo según el estado (`#A5D6A7` para éxito, `#FF6F00` para oferta)

---

## 🟦 Botón primario

```css
.btn-primary {
  background-color: #007BFF;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
}

.btn-primary:hover {
  background-color: #0056b3;
}
