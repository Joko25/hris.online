-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 06 Jun 2018 pada 08.01
-- Versi Server: 10.1.16-MariaDB
-- PHP Version: 5.6.24

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_hr`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `tbl_category`
--

CREATE TABLE `tbl_category` (
  `code_category` varchar(5) NOT NULL,
  `category_name` varchar(30) NOT NULL,
  `user_entry` varchar(5) NOT NULL,
  `last_update` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `tbl_category`
--

INSERT INTO `tbl_category` (`code_category`, `category_name`, `user_entry`, `last_update`) VALUES
('NRM', 'NON ROW MATERIAL', '', '2018-05-15 09:34:45'),
('RM', 'ROW MATERIAL', '', '2018-06-04 07:53:41');

-- --------------------------------------------------------

--
-- Struktur dari tabel `tbl_departemen`
--

CREATE TABLE `tbl_departemen` (
  `id_departemen` int(11) NOT NULL,
  `departemen_name` varchar(50) NOT NULL,
  `user_entry` varchar(10) NOT NULL,
  `last_update` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `tbl_departemen`
--

INSERT INTO `tbl_departemen` (`id_departemen`, `departemen_name`, `user_entry`, `last_update`) VALUES
(5, 'IT DE', '', '2018-06-04 09:46:10'),
(6, 'PPIC', '', '2018-06-04 09:22:40'),
(8, 'PURCHASING', '', '2018-06-04 09:24:08'),
(10, 'WAREHOUSE', '', '2018-06-04 13:29:59'),
(11, 'IT SYSTEM', '', '2018-06-05 10:37:04'),
(12, 'IT HARDWARE', '', '2018-06-05 10:37:10');

-- --------------------------------------------------------

--
-- Struktur dari tabel `tbl_prodfam`
--

CREATE TABLE `tbl_prodfam` (
  `prodfam` int(11) NOT NULL,
  `prodfam_name` varchar(50) NOT NULL,
  `user_entry` varchar(5) NOT NULL,
  `last_update` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `tbl_prodfam`
--

INSERT INTO `tbl_prodfam` (`prodfam`, `prodfam_name`, `user_entry`, `last_update`) VALUES
(2, 'PVC TUBE', '', '2018-06-06 08:57:29');

-- --------------------------------------------------------

--
-- Struktur dari tabel `tbl_product`
--

CREATE TABLE `tbl_product` (
  `part_no` varchar(10) NOT NULL,
  `part_name` varchar(50) NOT NULL,
  `code_category` varchar(5) NOT NULL,
  `prodfam` int(11) NOT NULL,
  `description` text NOT NULL,
  `image` varchar(100) NOT NULL,
  `last_update` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `tbl_product`
--

INSERT INTO `tbl_product` (`part_no`, `part_name`, `code_category`, `prodfam`, `description`, `image`, `last_update`) VALUES
('PART01', 'PART NAME 01', 'NRM', 2, 'DESCRIPTION 01', 'default.jpg', '2018-06-06 09:19:05');

-- --------------------------------------------------------

--
-- Struktur dari tabel `tbl_users`
--

CREATE TABLE `tbl_users` (
  `id_user` int(11) NOT NULL,
  `username` varchar(5) NOT NULL,
  `password` varchar(100) NOT NULL,
  `akses` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `tbl_users`
--

INSERT INTO `tbl_users` (`id_user`, `username`, `password`, `akses`) VALUES
(1, 'JOKO', 'e10adc3949ba59abbe56e057f20f883e', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_category`
--
ALTER TABLE `tbl_category`
  ADD PRIMARY KEY (`code_category`);

--
-- Indexes for table `tbl_departemen`
--
ALTER TABLE `tbl_departemen`
  ADD PRIMARY KEY (`id_departemen`);

--
-- Indexes for table `tbl_prodfam`
--
ALTER TABLE `tbl_prodfam`
  ADD PRIMARY KEY (`prodfam`);

--
-- Indexes for table `tbl_product`
--
ALTER TABLE `tbl_product`
  ADD PRIMARY KEY (`part_no`),
  ADD KEY `code_category` (`code_category`),
  ADD KEY `prodfam` (`prodfam`);

--
-- Indexes for table `tbl_users`
--
ALTER TABLE `tbl_users`
  ADD PRIMARY KEY (`id_user`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_departemen`
--
ALTER TABLE `tbl_departemen`
  MODIFY `id_departemen` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
--
-- AUTO_INCREMENT for table `tbl_prodfam`
--
ALTER TABLE `tbl_prodfam`
  MODIFY `prodfam` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `tbl_users`
--
ALTER TABLE `tbl_users`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `tbl_product`
--
ALTER TABLE `tbl_product`
  ADD CONSTRAINT `tbl_product_ibfk_1` FOREIGN KEY (`prodfam`) REFERENCES `tbl_prodfam` (`prodfam`),
  ADD CONSTRAINT `tbl_product_ibfk_2` FOREIGN KEY (`code_category`) REFERENCES `tbl_category` (`code_category`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
