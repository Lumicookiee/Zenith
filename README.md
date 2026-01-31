# Zenith - Personal Finance Manager

Una aplicación web de finanzas personales construida con Next.js 15, TypeScript y MongoDB, diseñada con un enfoque mobile-first para ayudarte a mantener disciplina con tus finanzas.

## 🚀 Características

### 📊 Dashboard Principal
- Vista general financiera completa
- Balance total, ingresos y gastos
- Gráficos interactivos de gastos por categoría
- Metas de ahorro con seguimiento de progreso
- Transacciones recientes

### 💰 Gestión de Transacciones
- Agregar, editar y eliminar transacciones
- Categorización automática
- Filtrado por tipo (ingresos/gastos)
- Búsqueda de transacciones
- Vista tabla responsiva

### 📅 Presupuestos Mensuales
- Configurar límites por categoría
- Seguimiento en tiempo real del gasto
- Alertas visuales cuando se acerca al límite
- Vista de porcentaje de uso
- Resumen general de presupuestos

### 🎯 Metas de Ahorro
- Crear objetivos financieros personalizados
- Seguimiento visual del progreso
- Cálculo automático de ahorro diario necesario
- Plazos y fechas límite
- Dashboard de resumen de todas las metas

### 📈 Inversiones
- Portfolio de inversiones diversificado
- Seguimiento de rendimiento en tiempo real
- Cálculo automático de ganancias/pérdidas
- Soporte para stocks, crypto, bonds, real estate
- Dashboard de rendimiento general

### ⚙️ Configuración de Usuario
- Perfil de usuario editable
- Preferencias de notificaciones
- Configuración de idioma y moneda
- Modo oscuro/claro
- Opciones de seguridad

## 🛠️ Stack Tecnológico

- **Frontend**: Next.js 15, React 18, TypeScript
- **Estilos**: Tailwind CSS, Mobile-First Design
- **Backend**: Next.js API Routes, MongoDB
- **Base de Datos**: MongoDB con Mongoose ODM
- **Autenticación**: NextAuth.js
- **Gráficos**: Recharts
- **Formularios**: React Hook Form, Zod
- **Iconos**: Lucide React

## 📱 Diseño Responsive

La aplicación está diseñada con un enfoque mobile-first:

- **Mobile (320px - 768px)**: Navegación inferior, cards apilados, touch-friendly
- **Tablet (768px - 1024px)**: Layout híbrido, cards más grandes
- **Desktop (1024px+)**: Sidebar lateral, múltiples columnas, shortcuts de teclado

## 🚀 Instalación y Setup

### Prerrequisitos
- Node.js 18+
- MongoDB (local o MongoDB Atlas)
- Git

### Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/tu-usuario/zenith.git
   cd zenith
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Configurar variables de entorno**
   ```bash
   cp .env.local.example .env.local
   ```
   
   Editar `.env.local` con tus datos:
   ```
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=tu-secreto-aqui-cambiar-en-produccion
   MONGODB_URI=mongodb://localhost:27017/zenith
   ```

4. **Iniciar MongoDB**
   ```bash
   # Si usas MongoDB local
   mongod
   ```

5. **Iniciar la aplicación**
   ```bash
   npm run dev
   ```

6. **Acceder a la app**
   Abre [http://localhost:3000](http://localhost:3000) en tu navegador

## 📁 Estructura del Proyecto

```
zenith/
├── src/
│   ├── app/                    # App Router de Next.js
│   │   ├── (dashboard)/       # Rutas agrupadas del dashboard
│   │   ├── auth/              # Autenticación
│   │   ├── api/               # API Routes
│   │   ├── layout.tsx         # Layout principal
│   │   └── page.tsx          # Home
│   ├── components/            # Componentes reutilizables
│   │   ├── dashboard/        # Componentes del dashboard
│   │   ├── forms/            # Formularios reutilizables
│   │   ├── ui/               # Componentes UI base
│   │   └── providers.tsx     # SessionProvider
│   ├── lib/                  # Utilidades
│   │   └── mongoose.ts       # Conexión MongoDB
│   ├── models/               # Modelos Mongoose
│   │   ├── User.ts
│   │   ├── Transaction.ts
│   │   ├── Budget.ts
│   │   ├── Goal.ts
│   │   └── Investment.ts
│   ├── types/                # Tipos TypeScript
│   │   └── index.ts
│   └── hooks/               # Custom hooks
├── public/                  # Assets estáticos
└── tailwind.config.js       # Configuración Tailwind
```

## 🎯 Features Técnicas

### 📊 Gestión de Estado
- NextAuth para sesión de usuario
- Componentes Client Components con useState
- Server Components para datos estáticos

### 🔐 Seguridad
- JWT tokens para sesión persistente
- Password hashing con bcrypt
- Protección de rutas con middleware
- Validación de inputs con Zod

### 🎨 UI/UX
- Design system consistente con Tailwind
- Componentes reutilizables
- Loading states y skeletons
- Transiciones suaves

### 📱 Mobile Optimization
- Touch targets de 44px mínimo
- Swipe gestures intuitivos
- Pull-to-refresh
- Bottom navigation optimizada

## 🚀 Deploy

### Vercel (Recomendado)
1. Conectar repositorio a Vercel
2. Configurar variables de entorno
3. Deploy automático en cada push

### Otros
```bash
npm run build
npm start
```

## 🔄 Flujo de Trabajo

1. **Registro/Login**: Crea tu cuenta única
2. **Dashboard**: Vista general de tus finanzas
3. **Transacciones**: Registra ingresos y gastos
4. **Presupuestos**: Establece límites mensuales
5. **Metas**: Define objetivos de ahorro
6. **Inversiones**: Sigue tu portfolio

## 🤝 Contribución

1. Fork del repositorio
2. Crear feature branch (`git checkout -b feature/amazing-feature`)
3. Commit de cambios (`git commit -m 'Add amazing feature'`)
4. Push al branch (`git push origin feature/amazing-feature`)
5. Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.

## 🙏 Agradecimientos

- Next.js team por el excelente framework
- Tailwind CSS por el diseño utility-first
- NextAuth.js por la solución de autenticación
- Mongoose por el ODM de MongoDB

---

**Zenith** - Tu socio para una vida financiera saludable 🚀💰