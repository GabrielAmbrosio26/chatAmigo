# chatAmigo

![Status](https://img.shields.io/badge/status-prototype-yellow) ![Language](https://img.shields.io/github/languages/top/GabrielAmbrosio26/chatAmigo) ![Repo Size](https://img.shields.io/github/repo-size/GabrielAmbrosio26/chatAmigo)

Aplicación de chat en tiempo real pensada como proyecto portfolio: cliente en Angular y servidor WebSocket en Bun.

**Tabla de contenidos**
- [Descripción](#descripción)
- [Características](#características)
- [Tecnologías](#tecnologías)
- [Instalación rápida](#instalación-rápida)
- [Desarrollo](#desarrollo)
- [Despliegue](#despliegue)
- [Estructura del repositorio](#estructura-del-repositorio)
- [Contribuir](#contribuir)
- [Contacto](#contacto)

## Descripción

`chatAmigo` es una aplicación de chat en tiempo real con una interfaz web (Angular) y un servidor WebSocket ligero implementado con Bun. El objetivo es demostrar habilidades en desarrollo frontend, arquitecturas en tiempo real y TypeScript.

## Características
- Conexión WebSocket para mensajes en tiempo real.
- Mensajes de sistema para usuarios que entran y salen.
- Estructura modular: cliente separado del servidor.

## Tecnologías
- Frontend: Angular 20, TypeScript, Tailwind CSS (opcional).
- Backend en tiempo real: Bun (`Bun.serve`) y TypeScript.

## Instalación rápida

Requisitos:
- Node.js v18+ para el cliente.
- Bun para ejecutar el servidor WebSocket.

1) Clonar el repositorio

```powershell
git clone https://github.com/GabrielAmbrosio26/chatAmigo.git
Set-Location -Path 'C:\Users\gabri\chatAmigo'
```

2) Cliente (Angular)

```powershell
Set-Location -Path 'C:\Users\gabri\chatAmigo\client'
npm install
npm run start
```

La app Angular estará disponible en `http://localhost:4200`.

3) Servidor WebSocket (Bun)

```powershell
Set-Location -Path 'C:\Users\gabri\chatAmigo\websocket'
bun -v    # comprobar instalación
bun index.ts
```

El servidor acepta mensajes JSON con la forma:

```json
{
  "type": "join|message|leave",
  "user": "nombreUsuario",
  "content": "texto...",
  "timestamp": 1234567890
}
```

## Desarrollo

- Cliente: dentro de `client/` usar `npm run start` para desarrollo.
- Servidor: dentro de `websocket/` usar `bun index.ts`.

Scripts útiles (resumen):
- `client/`:
  - `npm run start` — servidor de desarrollo Angular.
  - `npm run build` — build de producción.
  - `npm run watch` — compilación en watch.
- `websocket/`:
  - `npm run start` — (si está configurado) lanza `bun index.ts`.

## Despliegue

Recomendaciones para producción:
- Desplegar el frontend en Netlify, Vercel o GitHub Pages (build estático desde `client/dist`).
- Ejecutar el servidor WebSocket en un servicio que soporte Bun (o migrar a Node.js `ws` si prefieres infraestructura tradicional). Dockerizar el servidor puede facilitar el despliegue.

## Estructura del repositorio

- `client/` — Aplicación Angular.
- `websocket/` — Servidor WebSocket (TypeScript/Bun).

## Contribuir

Si quieres colaborar, abre un issue o envía un pull request. Para cambios locales, sigue los pasos de instalación y crea una branch con tus cambios.

## Contacto

- Gabriel Ambrosio — github.com/GabrielAmbrosio26

