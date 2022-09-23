-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 19-09-2022 a las 21:45:53
-- Versión del servidor: 10.4.19-MariaDB
-- Versión de PHP: 8.0.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `medicinatradcional`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comentario`
--

CREATE TABLE `comentario` (
  `idComentario` int(11) NOT NULL,
  `comentar` text NOT NULL,
  `estado` tinyint(1) NOT NULL DEFAULT 1,
  `fechaRegistro` datetime NOT NULL DEFAULT current_timestamp(),
  `fechaActualizacion` datetime DEFAULT NULL,
  `idmedicina` mediumint(9) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `enfermedad`
--

CREATE TABLE `enfermedad` (
  `idEnfermedad` smallint(6) NOT NULL,
  `foto` varchar(100) DEFAULT NULL,
  `nombre` varchar(100) NOT NULL,
  `descripcion` text NOT NULL,
  `causas` text NOT NULL,
  `estado` tinyint(4) NOT NULL DEFAULT 1,
  `fechaRegistro` datetime NOT NULL DEFAULT current_timestamp(),
  `fechaActualizacion` datetime DEFAULT NULL,
  `idUsuario` mediumint(9) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `enfermedad`
--

INSERT INTO `enfermedad` (`idEnfermedad`, `foto`, `nombre`, `descripcion`, `causas`, `estado`, `fechaRegistro`, `fechaActualizacion`, `idUsuario`) VALUES
(0, '0.jpg', 'ddd', 'sssssssss', 'ssssssssssssssssss', 1, '2022-09-18 20:38:23', NULL, 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `medicinanatural`
--

CREATE TABLE `medicinanatural` (
  `idmedicina` mediumint(9) NOT NULL,
  `tipo` varchar(100) NOT NULL,
  `foto` varchar(45) NOT NULL,
  `nombres` varchar(100) NOT NULL,
  `descripcion` text NOT NULL,
  `efectos` text NOT NULL,
  `preparados` text NOT NULL,
  `recomendaciones` text NOT NULL,
  `estado` tinyint(1) NOT NULL DEFAULT 1,
  `fechaRegistro` datetime NOT NULL DEFAULT current_timestamp(),
  `fechaActualizacion` datetime DEFAULT current_timestamp(),
  `idUsuario` mediumint(9) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `medicinanatural`
--

INSERT INTO `medicinanatural` (`idmedicina`, `tipo`, `foto`, `nombres`, `descripcion`, `efectos`, `preparados`, `recomendaciones`, `estado`, `fechaRegistro`, `fechaActualizacion`, `idUsuario`) VALUES
(1, '', '11.jpg', 'lolavaca', 'dddddddddddddddd', 'dddddddddddddddddd', 'dddddddddddddddddd', 'ddddddddddddddddd', 0, '2022-09-18 18:56:25', '2022-09-18 18:56:25', 0),
(2, 'dddd', '2.jpg', 'manzanilla', 'dddd', 'ddddd', 'dddd', 'dddd', 1, '2022-09-18 16:41:16', '2022-09-18 16:41:16', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `recordatoriotratamiento`
--

CREATE TABLE `recordatoriotratamiento` (
  `tratamiento` varchar(45) DEFAULT NULL,
  `duracion` date DEFAULT NULL,
  `horas` time DEFAULT NULL,
  `receta` text DEFAULT NULL,
  `estado` tinyint(1) NOT NULL DEFAULT 1,
  `fechaRegistro` datetime NOT NULL DEFAULT current_timestamp(),
  `fechaActualizacion` datetime DEFAULT current_timestamp(),
  `Usuario_idUsuario` mediumint(9) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `test`
--

CREATE TABLE `test` (
  `sintomas` text NOT NULL,
  `estado` tinyint(1) NOT NULL DEFAULT 1,
  `fechaRegistro` datetime DEFAULT current_timestamp(),
  `fechaActualizacion` datetime DEFAULT current_timestamp(),
  `Usuario_idUsuario` mediumint(9) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `idUsuario` mediumint(9) NOT NULL,
  `nombres` varchar(65) NOT NULL,
  `primerapellido` varchar(65) NOT NULL,
  `segundoApellido` varchar(65) DEFAULT NULL,
  `fechaNacimiento` date DEFAULT NULL,
  `login` varchar(65) NOT NULL,
  `pasword` varchar(15) NOT NULL,
  `cargo` varchar(45) NOT NULL,
  `estado` tinyint(1) NOT NULL DEFAULT 1,
  `fechaRegistro` datetime NOT NULL DEFAULT current_timestamp(),
  `fechaActualizacion` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`idUsuario`, `nombres`, `primerapellido`, `segundoApellido`, `fechaNacimiento`, `login`, `pasword`, `cargo`, `estado`, `fechaRegistro`, `fechaActualizacion`) VALUES
(1, 'Sonia', 'Medrano', 'Paredes', NULL, 'SonyM', '827ccb0eea8a706', 'naturista', 1, '2022-09-18 22:52:12', NULL),
(2, 'Alex', 'Poca', NULL, NULL, 'alexp', '827ccb0eea8a706', 'naturista', 1, '2022-09-19 00:33:10', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `visualizacion`
--

CREATE TABLE `visualizacion` (
  `idrating` int(11) NOT NULL,
  `cantidad` int(11) DEFAULT NULL,
  `estado` tinyint(1) DEFAULT 1,
  `fechaActualizacion` datetime DEFAULT current_timestamp(),
  `fechaRegistro` datetime DEFAULT current_timestamp(),
  `idmedicina` mediumint(9) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `comentario`
--
ALTER TABLE `comentario`
  ADD PRIMARY KEY (`idComentario`);

--
-- Indices de la tabla `enfermedad`
--
ALTER TABLE `enfermedad`
  ADD PRIMARY KEY (`idEnfermedad`);

--
-- Indices de la tabla `medicinanatural`
--
ALTER TABLE `medicinanatural`
  ADD PRIMARY KEY (`idmedicina`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`idUsuario`);

--
-- Indices de la tabla `visualizacion`
--
ALTER TABLE `visualizacion`
  ADD PRIMARY KEY (`idrating`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `medicinanatural`
--
ALTER TABLE `medicinanatural`
  MODIFY `idmedicina` mediumint(9) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `idUsuario` mediumint(9) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
