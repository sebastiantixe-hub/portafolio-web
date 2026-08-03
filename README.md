# Portafolio Profesional - Sebastian Esteban Tixe Quispe

Un portafolio web moderno, elegante, totalmente responsive y con estética de alto nivel desarrollado con **React**, **Vite**, **Tailwind CSS**, **Framer Motion** y **Lucide React**.

## 🚀 Características

- ⚡ **Diseño Ultra Moderno**: Inspirado en los estándares de Stripe, Vercel y Google Cloud.
- 🎯 **Edición Centralizada**: Toda tu información (proyectos, experiencia, datos de contacto, habilidades y certificaciones) se gestiona en un solo archivo: `src/data/portfolioData.js`.
- 🎨 **Efectos Visuales**: Modo oscuro elegante, mallas de fondo animadas, glassmorphism (`backdrop-blur`), efectos hover y bordes luminosos.
- 📱 **Totalmente Responsive**: Navegación fluida y adaptada para teléfonos, tablets y computadoras.
- 💨 **Animaciones Suaves**: Transiciones con Framer Motion en cada sección.
- 🔍 **Optimizado para SEO**: Meta etiquetas preconfiguradas y estructura semántica.

---

## 🛠️ Tecnologías Utilizadas

- **Frontend**: React 19 + Vite
- **Estilos**: Tailwind CSS + PostCSS
- **Animaciones**: Framer Motion
- **Iconos**: Lucide React
- **Tipografía**: Plus Jakarta Sans & Fira Code (Google Fonts)

---

## 📁 Estructura del Proyecto

```text
portafolio_SEBASTIANTIXE/
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── index.css
│   ├── data/
│   │   └── portfolioData.js     <-- EDITA AQUÍ TU INFORMACIÓN
│   └── components/
│       ├── Navbar.jsx
│       ├── Hero.jsx
│       ├── About.jsx
│       ├── Experience.jsx
│       ├── Projects.jsx
│       ├── ProjectModal.jsx
│       ├── Skills.jsx
│       ├── Certifications.jsx
│       ├── Contact.jsx
│       ├── BackgroundGlow.jsx
│       └── Footer.jsx
```

---

## 🚀 Cómo Ejecutar en Local

1. Instalar dependencias:
   ```bash
   npm install
   ```

2. Iniciar servidor de desarrollo:
   ```bash
   npm run dev
   ```

3. Abrir en el navegador: `http://localhost:3000`

---

## 📦 Despliegue en la Nube (Vercel o Render)

### Desplegar en Vercel
1. Sube tu proyecto a GitHub.
2. Ingresa a [Vercel](https://vercel.com) e importa tu repositorio.
3. Vercel detectará Vite automáticamente. Haz clic en **Deploy**.

### Desplegar en Render
1. En [Render](https://render.com), crea un nuevo **Static Site**.
2. Conecta tu repositorio de GitHub.
3. Configura:
   - **Build Command**: `npm run build`
   - **Publish Directory**: `dist`
