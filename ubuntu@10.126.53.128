-- MySQL dump 10.13  Distrib 8.0.39, for Linux (x86_64)
--
-- Host: localhost    Database: HMS
-- ------------------------------------------------------
-- Server version	8.0.39

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Appointment`
--

DROP TABLE IF EXISTS `Appointment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Appointment` (
  `id` int NOT NULL,
  `date` date NOT NULL,
  `starttime` time NOT NULL,
  `endtime` time NOT NULL,
  `status` varchar(15) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Appointment`
--

LOCK TABLES `Appointment` WRITE;
/*!40000 ALTER TABLE `Appointment` DISABLE KEYS */;
INSERT INTO `Appointment` VALUES (1,'2019-01-15','09:00:00','10:00:00','Done'),(2,'2019-01-16','10:00:00','11:00:00','Done'),(3,'2019-01-18','14:00:00','15:00:00','Done');
/*!40000 ALTER TABLE `Appointment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Diagnose`
--

DROP TABLE IF EXISTS `Diagnose`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Diagnose` (
  `appt` int NOT NULL,
  `doctor` varchar(50) NOT NULL,
  `diagnosis` varchar(40) NOT NULL,
  `prescription` varchar(50) NOT NULL,
  PRIMARY KEY (`appt`,`doctor`),
  KEY `doctor` (`doctor`),
  CONSTRAINT `Diagnose_ibfk_1` FOREIGN KEY (`appt`) REFERENCES `Appointment` (`id`) ON DELETE CASCADE,
  CONSTRAINT `Diagnose_ibfk_2` FOREIGN KEY (`doctor`) REFERENCES `Doctor` (`email`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Diagnose`
--

LOCK TABLES `Diagnose` WRITE;
/*!40000 ALTER TABLE `Diagnose` DISABLE KEYS */;
INSERT INTO `Diagnose` VALUES (1,'hathalye7@gmail.com','Bloating','Ibuprofen as needed'),(2,'hathalye8@gmail.com','Muscle soreness','Stretch morning/night'),(3,'hathalye8@gmail.com','Vitamin Deficiency','Good Diet');
/*!40000 ALTER TABLE `Diagnose` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `DocsHaveSchedules`
--

DROP TABLE IF EXISTS `DocsHaveSchedules`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `DocsHaveSchedules` (
  `sched` int NOT NULL,
  `doctor` varchar(50) NOT NULL,
  PRIMARY KEY (`sched`,`doctor`),
  KEY `doctor` (`doctor`),
  CONSTRAINT `DocsHaveSchedules_ibfk_1` FOREIGN KEY (`sched`) REFERENCES `Schedule` (`id`) ON DELETE CASCADE,
  CONSTRAINT `DocsHaveSchedules_ibfk_2` FOREIGN KEY (`doctor`) REFERENCES `Doctor` (`email`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `DocsHaveSchedules`
--

LOCK TABLES `DocsHaveSchedules` WRITE;
/*!40000 ALTER TABLE `DocsHaveSchedules` DISABLE KEYS */;
INSERT INTO `DocsHaveSchedules` VALUES (1,'hathalye7@gmail.com'),(2,'hathalye8@gmail.com');
/*!40000 ALTER TABLE `DocsHaveSchedules` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Doctor`
--

DROP TABLE IF EXISTS `Doctor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Doctor` (
  `email` varchar(50) NOT NULL,
  `gender` varchar(20) NOT NULL,
  `password` varchar(30) NOT NULL,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Doctor`
--

LOCK TABLES `Doctor` WRITE;
/*!40000 ALTER TABLE `Doctor` DISABLE KEYS */;
INSERT INTO `Doctor` VALUES ('hathalye7@gmail.com','male','hrishikesh13','Hrishikesh Athalye'),('hathalye8@gmail.com','male','hrishikesh13','Hrishikesh Athalye');
/*!40000 ALTER TABLE `Doctor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `DoctorViewsHistory`
--

DROP TABLE IF EXISTS `DoctorViewsHistory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `DoctorViewsHistory` (
  `history` int NOT NULL,
  `doctor` varchar(50) NOT NULL,
  PRIMARY KEY (`history`,`doctor`),
  KEY `doctor` (`doctor`),
  CONSTRAINT `DoctorViewsHistory_ibfk_1` FOREIGN KEY (`doctor`) REFERENCES `Doctor` (`email`) ON DELETE CASCADE,
  CONSTRAINT `DoctorViewsHistory_ibfk_2` FOREIGN KEY (`history`) REFERENCES `MedicalHistory` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `DoctorViewsHistory`
--

LOCK TABLES `DoctorViewsHistory` WRITE;
/*!40000 ALTER TABLE `DoctorViewsHistory` DISABLE KEYS */;
INSERT INTO `DoctorViewsHistory` VALUES (1,'hathalye7@gmail.com'),(2,'hathalye8@gmail.com'),(3,'hathalye8@gmail.com');
/*!40000 ALTER TABLE `DoctorViewsHistory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `MedicalHistory`
--

DROP TABLE IF EXISTS `MedicalHistory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `MedicalHistory` (
  `id` int NOT NULL,
  `date` date NOT NULL,
  `conditions` varchar(100) NOT NULL,
  `surgeries` varchar(100) NOT NULL,
  `medication` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `MedicalHistory`
--

LOCK TABLES `MedicalHistory` WRITE;
/*!40000 ALTER TABLE `MedicalHistory` DISABLE KEYS */;
INSERT INTO `MedicalHistory` VALUES (1,'2019-01-14','Pain in abdomen','Heart Surgery','Crocin'),(2,'2019-01-14','Frequent Indigestion','none','none'),(3,'2019-01-14','Body Pain','none','Iodex');
/*!40000 ALTER TABLE `MedicalHistory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Patient`
--

DROP TABLE IF EXISTS `Patient`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Patient` (
  `email` varchar(50) NOT NULL,
  `password` varchar(30) NOT NULL,
  `name` varchar(50) NOT NULL,
  `address` varchar(60) NOT NULL,
  `gender` varchar(20) NOT NULL,
  PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Patient`
--

LOCK TABLES `Patient` WRITE;
/*!40000 ALTER TABLE `Patient` DISABLE KEYS */;
INSERT INTO `Patient` VALUES ('rakesh@gmail.com','hrishikesh13','Rakesh','Gujarat','male'),('ramesh@gmail.com','hrishikesh13','Ramesh','Tamil Nadu','male'),('suresh@gmail.com','hrishikesh13','Suresh','Karnataka','male');
/*!40000 ALTER TABLE `Patient` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `PatientsAttendAppointments`
--

DROP TABLE IF EXISTS `PatientsAttendAppointments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `PatientsAttendAppointments` (
  `patient` varchar(50) NOT NULL,
  `appt` int NOT NULL,
  `concerns` varchar(40) NOT NULL,
  `symptoms` varchar(40) NOT NULL,
  PRIMARY KEY (`patient`,`appt`),
  KEY `appt` (`appt`),
  CONSTRAINT `PatientsAttendAppointments_ibfk_1` FOREIGN KEY (`patient`) REFERENCES `Patient` (`email`) ON DELETE CASCADE,
  CONSTRAINT `PatientsAttendAppointments_ibfk_2` FOREIGN KEY (`appt`) REFERENCES `Appointment` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `PatientsAttendAppointments`
--

LOCK TABLES `PatientsAttendAppointments` WRITE;
/*!40000 ALTER TABLE `PatientsAttendAppointments` DISABLE KEYS */;
INSERT INTO `PatientsAttendAppointments` VALUES ('rakesh@gmail.com',3,'nausea','fever'),('ramesh@gmail.com',1,'none','itchy throat'),('suresh@gmail.com',2,'infection','fever');
/*!40000 ALTER TABLE `PatientsAttendAppointments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `PatientsFillHistory`
--

DROP TABLE IF EXISTS `PatientsFillHistory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `PatientsFillHistory` (
  `patient` varchar(50) NOT NULL,
  `history` int NOT NULL,
  PRIMARY KEY (`history`),
  KEY `patient` (`patient`),
  CONSTRAINT `PatientsFillHistory_ibfk_1` FOREIGN KEY (`patient`) REFERENCES `Patient` (`email`) ON DELETE CASCADE,
  CONSTRAINT `PatientsFillHistory_ibfk_2` FOREIGN KEY (`history`) REFERENCES `MedicalHistory` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `PatientsFillHistory`
--

LOCK TABLES `PatientsFillHistory` WRITE;
/*!40000 ALTER TABLE `PatientsFillHistory` DISABLE KEYS */;
INSERT INTO `PatientsFillHistory` VALUES ('rakesh@gmail.com',3),('ramesh@gmail.com',1),('suresh@gmail.com',2);
/*!40000 ALTER TABLE `PatientsFillHistory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Schedule`
--

DROP TABLE IF EXISTS `Schedule`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Schedule` (
  `id` int NOT NULL,
  `starttime` time NOT NULL,
  `endtime` time NOT NULL,
  `breaktime` time NOT NULL,
  `day` varchar(20) NOT NULL,
  PRIMARY KEY (`id`,`starttime`,`endtime`,`breaktime`,`day`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Schedule`
--

LOCK TABLES `Schedule` WRITE;
/*!40000 ALTER TABLE `Schedule` DISABLE KEYS */;
INSERT INTO `Schedule` VALUES (1,'09:00:00','17:00:00','12:00:00','Friday'),(1,'09:00:00','17:00:00','12:00:00','Saturday'),(1,'09:00:00','17:00:00','12:00:00','Sunday'),(1,'09:00:00','17:00:00','12:00:00','Tuesday'),(2,'09:00:00','17:00:00','12:00:00','Friday'),(2,'09:00:00','17:00:00','12:00:00','Wednesday');
/*!40000 ALTER TABLE `Schedule` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-02-11 22:23:39
