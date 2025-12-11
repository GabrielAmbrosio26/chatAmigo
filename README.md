# chatAmigo

Aplicación de chat en tiempo real (Angular cliente + servidor WebSocket con Bun).

Descripción
- `client/`: Cliente web hecho con Angular.
- `websocket/`: Servidor WebSocket implementado usando Bun (TypeScript).

Requisitos
- Node.js (v18+ recomendado) para el cliente Angular.
- npm (incluido con Node.js) o `pnpm`/`yarn` según preferencia.
- Bun (https://bun.sh/) para ejecutar el servidor WebSocket (el servidor usa la API de Bun).

Estructura del repositorio

- `client/` — Aplicación Angular (código fuente en `client/src/`).
- `websocket/` — Servidor WebSocket con `index.ts`.

Instalación y ejecución

1) Cliente (Angular)

 - Abrir una terminal en `client/`:

```powershell
Set-Location -Path 'C:\Users\gabri\chatAmigo\client'
npm install
npm run start
```

 - Esto ejecuta `ng serve` y levanta la app Angular en `http://localhost:4200` por defecto.
 - Para crear un build de producción:

```powershell
npm run build
```

 - Scripts útiles (desde `client/`):
  - `npm run start` — Ejecuta `ng serve`.
  - `npm run build` — Compila la aplicación.
  - `npm run watch` — Compila en modo watch.
  - `npm run tailwind:init` — Inicializa Tailwind.
  - `npm run tailwind:build` — Genera el CSS de Tailwind en modo watch.

2) Servidor WebSocket (Bun)

 - Asegúrate de tener Bun instalado: `bun -v`.
 - Abrir una terminal en `websocket/` y ejecutar:

```powershell
Set-Location -Path 'C:\Users\gabri\chatAmigo\websocket'
bun index.ts
```

 - El servidor escucha por conexiones WebSocket y acepta mensajes JSON con la forma:

```json
{
  "type": "join|message|leave",
  "user": "nombreUsuario",
  "content": "texto...",
  "timestamp": 1234567890
}
```

Notas
- El servidor está implementado usando la API de `Bun.serve` y gestiona eventos `open`, `message` y `close`.
- Si no quieres usar Bun, podrías portar `websocket/index.ts` a Node.js con `ws` o `uWebSockets.js` y usar `ts-node` o compilar a JS.

Contribuir
- Abrir un issue o enviar un pull request. Para cambios rápidos en el front, ejecutar los scripts desde `client/`.

Contacto
- Autor: Gabriel Ambrosio

Licencia
- Repositorio privado / sin licencia especificada.