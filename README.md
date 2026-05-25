# usodefibonacciensoluciondeproblemas
# Matemáticas que Resuelven Problemas: Fibonacci y Números Primos en la Vida Real

Este proyecto es una aplicación web interactiva y didáctica desarrollada por **David Canqui Cruz**. Su objetivo principal es demostrar cómo conceptos matemáticos abstractos, como las progresiones numéricas inspiradas en la sucesión de Fibonacci y las propiedades de los números primos, ofrecen soluciones lógicas a problemas prácticos de la vida cotidiana: la planificación agrícola y la ciberseguridad.

---

## 🚀 Propósito del Proyecto

La página web funciona como un laboratorio interactivo que aborda dos problemáticas específicas mediante el uso de algoritmos nativos en JavaScript y manipulación dinámica del DOM:

1. **Planificación Agrícola:** Mitigar la incertidumbre financiera y logística en la producción de cultivos.
2. **Ciberseguridad:** Fortalecer la resistencia de sistemas de autenticación frente a ataques de fuerza bruta automatizados.

---

## 🛠️ Estructura y Módulos Explicativos

### 1. Uso de Fibonacci en la Agricultura (Calculadora de Producción de Papas)
* **El Problema:** La impredecibilidad de la cosecha de papa genera pérdidas económicas, caos logístico (transporte/almacenamiento) e inestabilidad de precios en el mercado.
* **La Solución Lógica:** Un sistema algorítmico que modela la producción acumulada calculando el rendimiento exponencial escalonado del cultivo a lo largo del tiempo.
* **Regla del Algoritmo:**
  * **Mes 1:** Cada huerto produce fijo 50 papas.
  * **Mes 2:** Se añaden 70 papas a la producción acumulada.
  * **Meses 3 en adelante:** La producción mensual se estabiliza de forma constante sumando 90 papas por cada mes extra.
  * **Fórmula de producción por huerto:** Producción = 50 + 70 + ((meses - 2) * 90)

> **Funcionamiento técnico:** La función `calcularCosecha()` extrae los valores enteros de los campos numéricos mediante sus IDs, valida que no existan valores negativos o vacíos, ejecuta la condicional escalonada y renderiza dinámicamente un cuadro visual de éxito o error.

---

### 2. Uso de Números Primos en Seguridad (Validador de Contraseña Numérica)
* **El Problema:** Las contraseñas débiles son vulnerables a diccionarios automatizados y ataques de fuerza bruta rápidos.
* **La Solución Lógica:** Restringir el acceso obligando a que la clave incluya "átomos matemáticos" (números primos divisibles únicamente por sí mismos y por la unidad). Al igual que los cifrados asimétricos modernos (como RSA), aprovecha la dificultad de descifrar patrones basados en factores primos.
* **Regla del Algoritmo:**
  * Valida estrictamente que la longitud de la cadena sea de **8 dígitos numéricos**.
  * Analiza carácter por carácter mediante un bucle (`for`) buscando coincidencias con los primos de un solo dígito: `['2', '3', '5', '7']`.
  * Exige que al menos **4 de los 8 dígitos** de la contraseña sean números primos para conceder el acceso.

---

## 💻 Tecnologías Utilizadas

* **HTML5:** Estructuración semántica del documento (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`).
* **CSS3:** Estilos visuales personalizados que implementan un sistema de variables globales (`:root`), un menú de navegación persistente flotante (`position: sticky`), y adaptabilidad responsiva completa para computadoras, tablets y móviles a través de `@media queries`.
* **JavaScript (ES6):** Motor lógico encargado de la captura de eventos en los botones, validaciones estrictas de datos de entrada (`isNaN`), control de flujos iterativos y manipulación de clases CSS dinámicas para las respuestas.

---

## 📁 Estructura del Código Fuente

Para el correcto funcionamiento de esta interfaz, el espacio de trabajo se organiza de la siguiente manera:

```text
├── index.html          # Estructura principal y maquetado de los formularios.
├── css/
│   └── estilos1.css    # Hojas de estilo, variables de color y menú flotante.
└── js/
    └── ej1.js          # Lógica JavaScript (calcularCosecha y verificarPassword).
