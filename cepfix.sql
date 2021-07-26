-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Jul 26, 2021 at 10:52 PM
-- Server version: 5.7.32
-- PHP Version: 7.4.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cepfix`
--

-- --------------------------------------------------------

--
-- Table structure for table `WorkerJob`
--

CREATE TABLE `WorkerJob` (
  `id` int(6) NOT NULL,
  `operationResult` varchar(200) NOT NULL,
  `errorMessage` varchar(200) NOT NULL,
  `filePath` varchar(250) NOT NULL,
  `date` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `WorkerJob`
--

INSERT INTO `WorkerJob` (`id`, `operationResult`, `errorMessage`, `filePath`, `date`) VALUES
(47, 'Success', 'No errors', 'C:fakepathscreenshot.png', '2021-07-02'),
(50, 'Testing', '3 errors', 'C:fakepathimg.png', '2021-07-16'),
(51, 'Testin3', 'pending', 'C:fakepathimg.png', '2021-07-10'),
(52, 'New', 'error', 'C:fakepathindex.js', '2021-07-16');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `WorkerJob`
--
ALTER TABLE `WorkerJob`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `WorkerJob`
--
ALTER TABLE `WorkerJob`
  MODIFY `id` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
