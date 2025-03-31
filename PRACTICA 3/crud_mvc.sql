-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 31-03-2025 a las 04:26:53
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `crud_mvc`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tasks`
--

CREATE TABLE `tasks` (
  `id` int(11) NOT NULL COMMENT 'ID único autoincremental',
  `title` varchar(255) NOT NULL COMMENT 'Título de la tarea (obligatorio)',
  `description` text NOT NULL COMMENT 'Descripción detallada (obligatorio)',
  `completed` tinyint(1) DEFAULT 0 COMMENT '0 = pendiente, 1 = completada',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() COMMENT 'Fecha de creación automática',
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp() COMMENT 'Fecha de última actualización'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='Tabla para almacenar tareas del CRUD';

--
-- Volcado de datos para la tabla `tasks`
--

INSERT INTO `tasks` (`id`, `title`, `description`, `completed`, `created_at`, `updated_at`) VALUES
(1, 'Instalar XAMPP', 'Descargar e instalar XAMPP con MySQL', 1, '2025-03-31 00:39:28', '2025-03-31 00:39:28'),
(2, 'Configurar Node.js', 'Crear proyecto con Express y MySQL2', 0, '2025-03-31 00:39:28', '2025-03-31 00:39:28'),
(3, 'Diseñar interfaz', 'Implementar vistas con Bootstrap y EJS', 0, '2025-03-31 00:39:28', '2025-03-31 00:39:28'),
(5, 'DEFENDER', 'ya hice la tarea usando de ejemplo los pasos basicos a realizar la practica ahora tengo que defender como lo hice', 0, '2025-03-31 00:46:53', '2025-03-31 00:46:53');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `tasks`
--
ALTER TABLE `tasks`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `tasks`
--
ALTER TABLE `tasks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'ID único autoincremental', AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
