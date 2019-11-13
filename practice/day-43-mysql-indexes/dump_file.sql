-- MySQL dump 10.17  Distrib 10.3.16-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: Pizza_Builder
-- ------------------------------------------------------
-- Server version	10.3.16-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `failed_jobs`
--

DROP TABLE IF EXISTS `failed_jobs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `failed_jobs` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `failed_jobs`
--

LOCK TABLES `failed_jobs` WRITE;
/*!40000 ALTER TABLE `failed_jobs` DISABLE KEYS */;
/*!40000 ALTER TABLE `failed_jobs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ingredients`
--

DROP TABLE IF EXISTS `ingredients`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ingredients` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `category` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `allergens` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `amount` bigint(20) unsigned NOT NULL,
  `units` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ingredients`
--

LOCK TABLES `ingredients` WRITE;
/*!40000 ALTER TABLE `ingredients` DISABLE KEYS */;
INSERT INTO `ingredients` VALUES (1,'pizza ingredient 0','ingredient category 0',NULL,NULL,100,'gram',NULL,NULL),(2,'pizza ingredient 1','ingredient category 1',NULL,NULL,100,'gram',NULL,NULL),(3,'pizza ingredient 2','ingredient category 2',NULL,NULL,100,'gram',NULL,NULL),(4,'pizza ingredient 3','ingredient category 3',NULL,NULL,100,'gram',NULL,NULL),(5,'pizza ingredient 4','ingredient category 4',NULL,NULL,100,'gram',NULL,NULL),(6,'pizza ingredient 5','ingredient category 5',NULL,NULL,100,'gram',NULL,NULL),(7,'pizza ingredient 6','ingredient category 6',NULL,NULL,100,'gram',NULL,NULL),(8,'pizza ingredient 7','ingredient category 7',NULL,NULL,100,'gram',NULL,NULL),(9,'pizza ingredient 8','ingredient category 8',NULL,NULL,100,'gram',NULL,NULL),(10,'pizza ingredient 9','ingredient category 9',NULL,NULL,100,'gram',NULL,NULL);
/*!40000 ALTER TABLE `ingredients` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `migrations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` VALUES (9,'2014_10_12_000000_create_users_table',1),(10,'2014_10_12_100000_create_password_resets_table',1),(11,'2016_06_01_000001_create_oauth_auth_codes_table',1),(12,'2016_06_01_000002_create_oauth_access_tokens_table',1),(13,'2016_06_01_000003_create_oauth_refresh_tokens_table',1),(14,'2016_06_01_000004_create_oauth_clients_table',1),(15,'2016_06_01_000005_create_oauth_personal_access_clients_table',1),(16,'2019_08_19_000000_create_failed_jobs_table',1),(17,'2019_11_05_192431_create_ingredients_table',2);
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `oauth_access_tokens`
--

DROP TABLE IF EXISTS `oauth_access_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `oauth_access_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  `client_id` int(10) unsigned NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `expires_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_access_tokens_user_id_index` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `oauth_access_tokens`
--

LOCK TABLES `oauth_access_tokens` WRITE;
/*!40000 ALTER TABLE `oauth_access_tokens` DISABLE KEYS */;
INSERT INTO `oauth_access_tokens` VALUES ('0742231bd63b8d528c679a96226dbb6180f0dde63eeacb9b3c514e9e060bbe8c918b7cacd9986df1',3,3,'pizza_builder','[]',0,'2019-11-05 16:28:50','2019-11-05 16:28:50','2020-11-05 17:28:50'),('08dc3b15ecc917989ad09c6fc48195a3ace5fe0b80d3cb8ca71c764928d79a9ec8e3f8940b7d7dd5',3,3,'pizza_builder','[]',0,'2019-11-05 20:43:59','2019-11-05 20:43:59','2020-11-05 21:43:59'),('0ae527d1f9a8283d870a043699d5faaa08f33bf3e686ba996e93255a70953153632f1c649f69261b',3,3,'pizza_builder','[]',0,'2019-11-05 09:55:01','2019-11-05 09:55:01','2020-11-05 10:55:01'),('0b7415fef6669c46724683dc83d3a15aca1e3b95a4839a4b947bc5a8d77feadd97a55b8e8ee8b142',3,3,'pizza_builder','[]',0,'2019-11-05 09:19:06','2019-11-05 09:19:06','2020-11-05 10:19:06'),('0c1465011ce59296c5a3fdddaa4b8548248657b9d1b76dff49653712c80934b7668c4654ef269893',3,3,'pizza_builder','[]',0,'2019-11-05 16:29:32','2019-11-05 16:29:32','2020-11-05 17:29:32'),('0fd1858b89bb21d68d6c5fc88694840080856bdaea88fe7014314a7572d64d961db5c635d330b2f0',3,3,'pizza_builder','[]',0,'2019-11-05 20:46:54','2019-11-05 20:46:54','2020-11-05 21:46:54'),('103e969a716be3ea177494b547d58865b952c0cca93c799dec87f8629e7d4f7282c660403426ae6c',3,3,'pizza_builder','[]',0,'2019-11-05 16:16:15','2019-11-05 16:16:15','2020-11-05 17:16:15'),('14d7cfc3a10d604304ecc09853f4191ab778f725f76060134f444b6aea0fafcec3d3471b4399e895',3,3,'pizza_builder','[]',0,'2019-11-05 16:08:05','2019-11-05 16:08:05','2020-11-05 17:08:05'),('1601408c5ea311fa8d760cd45b0f56d34a030bf4ba183d83dd14aacc89798836f8d0b60f6c15ddd3',3,3,'pizza_builder','[]',0,'2019-11-05 16:12:59','2019-11-05 16:12:59','2020-11-05 17:12:59'),('165d5e8e6efcd1fc962fe938da91347b0514e0d5c506052ebdda490bfbcdf1abc0e840feeba70940',3,3,'pizza_builder','[]',0,'2019-11-05 19:59:41','2019-11-05 19:59:41','2020-11-05 20:59:41'),('261d6020bbc39eb0da054d6601e05cad551c2e61dbb8c1f254aead745b7da0d19a4fc177891cd740',3,3,'pizza_builder','[]',0,'2019-11-05 10:57:49','2019-11-05 10:57:49','2020-11-05 11:57:49'),('303d2685d702bd82b1a83da8da1f3fda266e33d669c1454b19b25c8408630a4af771dfc0c3c184f2',3,3,'pizza_builder','[]',0,'2019-11-05 10:56:22','2019-11-05 10:56:22','2020-11-05 11:56:22'),('31d112789bf6953f3de28f150d7d8db4a44939bda5a3b47034ff3a15994a466dccf07e8ac0ecc367',3,3,'pizza_builder','[]',0,'2019-11-05 16:17:07','2019-11-05 16:17:07','2020-11-05 17:17:07'),('39c040c01aa2eb691221d3f77b76e8c4c8a2eaaff6adef4fc37c649e3efdb53ced7ee9f3bf072ca0',3,3,'pizza_builder','[]',0,'2019-11-05 19:41:59','2019-11-05 19:41:59','2020-11-05 20:41:59'),('3e6fe6bf8104eb32c1591d18a149e1122c3e61a93ae16703a85d7d9aedb6894d769a9febb1c5a212',3,3,'pizza_builder','[]',0,'2019-11-05 16:07:45','2019-11-05 16:07:45','2020-11-05 17:07:45'),('3fd49f7471f2dd86bf0a11ef045467b242e03f654dfb7a10e762aafbb790cfdff749febe4c3a6ade',3,3,'pizza_builder','[]',0,'2019-11-05 16:50:57','2019-11-05 16:50:57','2020-11-05 17:50:57'),('493b88edd1d182a317d4cdc81172d3d7be58b6613b32b2f516ff36040c83aa8952fc2b12f32783ad',3,3,'pizza_builder','[]',0,'2019-11-05 20:19:35','2019-11-05 20:19:35','2020-11-05 21:19:35'),('500e1125d06ffdf2250ddb8054dd73dfa7ca7249015e4c29b2cef9b61ed1c178413768201c3b0492',3,3,'pizza_builder','[]',0,'2019-11-05 16:15:10','2019-11-05 16:15:10','2020-11-05 17:15:10'),('50115785c9901caa9827c1c7709fca1bc26273944ffd31fe7c92ea732c39ac019c2c2cbc7e9a6a8b',3,3,'pizza_builder','[]',0,'2019-11-05 16:09:56','2019-11-05 16:09:56','2020-11-05 17:09:56'),('52106f34bfaacb689e741c2b821566e5bc6f748772961f777a413707e77f67cee57d1e602640c5b1',3,3,'pizza_builder','[]',0,'2019-11-05 19:33:14','2019-11-05 19:33:14','2020-11-05 20:33:14'),('54e840f965f3670b243b31c0a948eace59a87ca4ed1413fbbe7a1ae2dde6b3759fd3f7303004a07c',3,3,'pizza_builder','[]',0,'2019-11-05 20:42:34','2019-11-05 20:42:34','2020-11-05 21:42:34'),('54f242fddb981c6b5355019c4d34ed37f740e34d9d7c8adcc7fd56d59f8f8f5f1db0ad6a55973279',3,3,'pizza_builder','[]',0,'2019-11-05 20:39:56','2019-11-05 20:39:56','2020-11-05 21:39:56'),('559f70dcf30141e98703725a000280bb8747400c72d4e0ab268de5797eafd0d02b183f0eddcde11f',3,3,'pizza_builder','[]',0,'2019-11-05 16:00:44','2019-11-05 16:00:44','2020-11-05 17:00:44'),('571af325280455932ec45e671c82a617b48e40807dc87fecab69eb60dc081b7f2a0aa517535e76f0',3,3,'pizza_builder','[]',0,'2019-11-05 16:06:15','2019-11-05 16:06:15','2020-11-05 17:06:15'),('576219f33652661dffec5ccb387458fbe42f213155ac7d546e76fe21ec55bde8fbef448cb56a2b8b',3,3,'pizza_builder','[]',0,'2019-11-05 16:15:35','2019-11-05 16:15:35','2020-11-05 17:15:35'),('5776e8c5ee70c6978d4f8a2ecaf5236c809590304234c9e12a973c5048688adaaf83b981d9302244',3,3,'pizza_builder','[]',0,'2019-11-05 09:29:47','2019-11-05 09:29:47','2020-11-05 10:29:47'),('57c59d49eecc3e5adaac920aa3b3dc80d0d25ca04172a342944f719fdc48233d8e06478ef45383cd',3,3,'pizza_builder','[]',0,'2019-11-05 19:47:17','2019-11-05 19:47:17','2020-11-05 20:47:17'),('5f1e857a6d3202e42b5904c416865136c1ea2cb1ffd9deade277f8c70fbf469d994bbe234e086aa0',3,3,'pizza_builder','[]',0,'2019-11-05 16:34:30','2019-11-05 16:34:30','2020-11-05 17:34:30'),('613601141c0c5a7e1197b8538716cef554588d1e25b06a8d1199168d1f249cf1a01bc17c27acbd75',3,3,'pizza_builder','[]',0,'2019-11-05 19:34:00','2019-11-05 19:34:00','2020-11-05 20:34:00'),('6139ec20dee533e874fd412621b30f423f140bca5a41b29d886d33cd243ef8a01edbc06627889753',2,3,'pizza_builder','[]',0,'2019-11-04 20:25:00','2019-11-04 20:25:00','2020-11-04 21:25:00'),('633f956473e4a998ae7218f5c246127610e548a27304da2348519fa4bcef39c517af2381ad8e6814',3,3,'pizza_builder','[]',0,'2019-11-05 09:20:16','2019-11-05 09:20:16','2020-11-05 10:20:16'),('6474141deb295624a96fcd1c100dbc1db73e0be8f4cd3bec01da8d5a6d542211d988e6eeaaade1a2',3,3,'pizza_builder','[]',0,'2019-11-05 10:05:35','2019-11-05 10:05:35','2020-11-05 11:05:35'),('67c74296606ea6052b7b1ff687baf4899e4837e317075ab8a16f6606d234d014976c39d073e535ea',3,3,'pizza_builder','[]',0,'2019-11-05 10:02:08','2019-11-05 10:02:08','2020-11-05 11:02:08'),('688197a74caf10bec3f93fd22fd50489fe3955e544b95537cedfc45ae24dff08afad42b25adca135',3,3,'pizza_builder','[]',0,'2019-11-05 16:21:21','2019-11-05 16:21:21','2020-11-05 17:21:21'),('6bc3449f97dbb1f0b2492ce080638ca8a9ef20007fb4aaf40e9ce984f40a57c4d49af74a345f1f49',3,3,'pizza_builder','[]',0,'2019-11-05 20:18:26','2019-11-05 20:18:26','2020-11-05 21:18:26'),('6f6477a7961b41817c5058bb0507fd0802c10d17be0d14f9c4ad7f1173d79b36fc91751d9c636d91',3,3,'pizza_builder','[]',0,'2019-11-05 16:02:58','2019-11-05 16:02:58','2020-11-05 17:02:58'),('6f7681d80441b75288db08bb7efe2dcdc2700f9785fa2c00be368356338943c30c49355c55702d64',3,3,'pizza_builder','[]',0,'2019-11-05 10:56:14','2019-11-05 10:56:14','2020-11-05 11:56:14'),('703e224da67523779d598b167d014a5d25d9ee7ff2a657d777ac2197da9478eaf28749ffb79022c3',3,3,'pizza_builder','[]',0,'2019-11-05 16:18:41','2019-11-05 16:18:41','2020-11-05 17:18:41'),('70f3f731ae231405c3e0d5b3896f8a32e7a91fb4ac12612d24db8058bb7717af9db0f603ada726f6',3,3,'pizza_builder','[]',0,'2019-11-05 10:58:07','2019-11-05 10:58:07','2020-11-05 11:58:07'),('76a88bc09c68b31eb5e45413f6d2d5040dd74cd4b85a93f7497e8464566ae27e4f83a806e492d673',3,3,'pizza_builder','[]',0,'2019-11-05 20:06:55','2019-11-05 20:06:55','2020-11-05 21:06:55'),('7777ac2877d80b814e51523064c5149a71f572c33e6a20816c605f964f2cbd9cd377c9942c5370f0',3,3,'pizza_builder','[]',0,'2019-11-05 20:04:15','2019-11-05 20:04:15','2020-11-05 21:04:15'),('7ba072b9b4a9d2147f77500cf6a21533f576043368701c65a01306eb7fbf654f3f63449ce1a3416a',3,3,'pizza_builder','[]',0,'2019-11-05 19:52:50','2019-11-05 19:52:50','2020-11-05 20:52:50'),('7e29db6fd4d77155787ff2704d6f8c643314e03c0d5abbc63781282f5148f50ce6d3d84e5f4e0fb9',3,3,'pizza_builder','[]',0,'2019-11-05 16:29:17','2019-11-05 16:29:17','2020-11-05 17:29:17'),('8184fcd9bef99af7e9b1ddfc316e85e63d486ad4850a091abb21f0fc4752430d4cb11be0ef5e9a95',3,3,'pizza_builder','[]',0,'2019-11-05 20:13:00','2019-11-05 20:13:00','2020-11-05 21:13:00'),('8249109f2008fc6f3c472c6a4dd01a70db523993153d83c2fb1492bfda1074738c57b76d09016d5e',3,3,'pizza_builder','[]',0,'2019-11-05 20:32:44','2019-11-05 20:32:44','2020-11-05 21:32:44'),('8294b0ac1b08236c7e9ba6e6d671ccbeaf53b7b3c32b81b2fa55f7b1372421ee902e8f4790034624',3,3,'pizza_builder','[]',0,'2019-11-05 19:48:49','2019-11-05 19:48:49','2020-11-05 20:48:49'),('842160a5cd90b7a83be229296ae6f176e82ccdd675f903b786dde8c2b855272be4b0d240d87b662b',3,3,'pizza_builder','[]',0,'2019-11-05 09:44:06','2019-11-05 09:44:06','2020-11-05 10:44:06'),('842331552e58a8e03b076ad21964112cb422c1a81c45f8307097a00b4d7ab227a33eb8f81687666a',3,3,'pizza_builder','[]',0,'2019-11-05 16:31:35','2019-11-05 16:31:35','2020-11-05 17:31:35'),('859b068b7c9e128e348540f1f550a1191703757ea5cd4d1c3b5d7852f337001964a97e0b69cb06e0',3,3,'pizza_builder','[]',0,'2019-11-05 19:54:27','2019-11-05 19:54:27','2020-11-05 20:54:27'),('874fb6b5a68410aaeb9739f956c83255de4434d0670187b22c1c392c785c795b2978f5cce3380b90',3,3,'pizza_builder','[]',0,'2019-11-05 10:56:30','2019-11-05 10:56:30','2020-11-05 11:56:30'),('8b237824dc77a8516e74bb2c607c503a1571fac08aec9ce2b11177aaf2a7fb0f6c251c60102e5cca',3,3,'pizza_builder','[]',0,'2019-11-05 16:10:23','2019-11-05 16:10:23','2020-11-05 17:10:23'),('8c90ef4962783f0707f93ccf22b7f7f2cabf995a1dc52902d49618fb0cc61a5b6653b00c569f26fb',3,3,'pizza_builder','[]',0,'2019-11-05 16:31:51','2019-11-05 16:31:51','2020-11-05 17:31:51'),('8ceba9504f68a18cb9ea5fc03279fd043183ec872bf512b7fcb4d607b03ca23229a282ab990dca69',3,3,'pizza_builder','[]',0,'2019-11-05 16:42:36','2019-11-05 16:42:36','2020-11-05 17:42:36'),('8d73fe34dd30b1751ad84bd9b366f1ad8ed85478a7980aee5a82f5877df1e96528e9ec6a5913f764',3,3,'pizza_builder','[]',0,'2019-11-05 16:24:09','2019-11-05 16:24:09','2020-11-05 17:24:09'),('8e6e4585f1673a89e4b314ecbcf4f26a03e9ddd0e50340f2099054232168d73bde9ea536c4bec0ab',3,3,'pizza_builder','[]',0,'2019-11-05 10:06:51','2019-11-05 10:06:51','2020-11-05 11:06:51'),('914440731ffd64ce37cbe730e79539ef2f0fd1eb4b5327168a3f0e417db8c05ca9fbaed9b8c3a898',3,3,'pizza_builder','[]',0,'2019-11-05 20:27:24','2019-11-05 20:27:24','2020-11-05 21:27:24'),('92c33cabae991df959121d9631083442093a19f7e5e5cabd9cb8af7f7bf26985b91dbb6317b1084e',3,3,'pizza_builder','[]',0,'2019-11-05 19:44:02','2019-11-05 19:44:02','2020-11-05 20:44:02'),('9874039cd2374cc5c8dceb564c092aa54bb29bc0bb65917953eed6a6621384d378a5976e07d27fc2',3,3,'pizza_builder','[]',0,'2019-11-05 16:42:04','2019-11-05 16:42:04','2020-11-05 17:42:04'),('9ba3d6a7dd3b12c7b3d906b67c314d7e18a1e58fc62d2ad642b0bab90b9dc6b0eb3ae837d143028f',3,3,'pizza_builder','[]',0,'2019-11-05 16:04:12','2019-11-05 16:04:12','2020-11-05 17:04:12'),('9cac3bc1182b6fa5104010d2845375203edfcfda0dee409c89bc411d1a3dbf78fcf8e2f7efdf9814',3,3,'pizza_builder','[]',0,'2019-11-05 16:27:10','2019-11-05 16:27:10','2020-11-05 17:27:10'),('a2f88a68beaefb779c085e6950a82fd1d41bfb03063c53983fcaf87986c14216130e6833d91300cc',3,3,'pizza_builder','[]',0,'2019-11-05 20:36:00','2019-11-05 20:36:00','2020-11-05 21:36:00'),('a6c88a5d550b17414d5a4d04bb29dbe7e03d9aa533944cfbd8150c4d4d613589e6490f33192989eb',3,3,'pizza_builder','[]',0,'2019-11-05 19:42:28','2019-11-05 19:42:28','2020-11-05 20:42:28'),('ad715eb7d04a08f19d19ac3d31290a0c074f537173af921c732a8996f80d1be8dbd7c86c97cc4504',3,3,'pizza_builder','[]',0,'2019-11-05 16:30:49','2019-11-05 16:30:49','2020-11-05 17:30:49'),('adf9f7726b37026e8dc91d2880348eaafe0f7f5c8b91be5c8017e94718c78f01c9100b0bb732e137',3,3,'pizza_builder','[]',0,'2019-11-05 20:12:17','2019-11-05 20:12:17','2020-11-05 21:12:17'),('ae1805c61472613891cd1f32b6da844a44ef22704833ae76255ed32d1e9b9bc042725607ed80b4da',3,3,'pizza_builder','[]',0,'2019-11-05 19:43:05','2019-11-05 19:43:05','2020-11-05 20:43:05'),('af49d619b59862d1fc25cfdabbcda06e940c66bb8cbc903aa85f12f3dd1a710a3c597f1995332fb0',3,3,'pizza_builder','[]',0,'2019-11-05 10:08:39','2019-11-05 10:08:39','2020-11-05 11:08:39'),('af4a760b60b2a3e0994fcdd5c71d0dfe3e3e590dd2a6cb619741d3808fee5fce0d009ab83560e41f',2,3,'pizza_builder','[]',1,'2019-11-04 20:33:45','2019-11-04 20:33:45','2020-11-04 21:33:45'),('b413b7c9986d06b7cbf1df3e2f4a9db77c9f5dcfa6403198119ab4c8c5841779cfe237f7fa88e396',3,3,'pizza_builder','[]',0,'2019-11-05 16:11:47','2019-11-05 16:11:47','2020-11-05 17:11:47'),('b584efde577731d04432a4c84b4bf15758a4a829090a46b91d9f734b1b9d89033c5e5a4487f98b2c',3,3,'pizza_builder','[]',0,'2019-11-05 09:41:23','2019-11-05 09:41:23','2020-11-05 10:41:23'),('b7431938b27979ee8914a82d4ae9de12ce68cf37cbf0de56661fc99b0dd1b37950e3e6a4f1325e28',3,3,'pizza_builder','[]',0,'2019-11-05 20:30:04','2019-11-05 20:30:04','2020-11-05 21:30:04'),('b7b2749714b73324a21175c2ce5fff0c3d43d4e7799360c6f6d38949885b8a41a5d7d465a5406ffd',2,3,'pizza_builder','[]',1,'2019-11-04 20:25:17','2019-11-04 20:25:17','2020-11-04 21:25:17'),('b9c2570dbb60045141f4309cb0d08c8c226b006e79790b1ecdcb6862af657ef79e7868988dcfb6cd',3,3,'pizza_builder','[]',0,'2019-11-05 16:19:53','2019-11-05 16:19:53','2020-11-05 17:19:53'),('bca58aee2c083ab9009b38a61924ba7d89716f0f87f92a28d327ac532c0c7f7dbbdba679d52ce7fa',3,3,'pizza_builder','[]',0,'2019-11-05 10:08:18','2019-11-05 10:08:18','2020-11-05 11:08:18'),('bd197d3ce8faf389f2b6f79c5870b55bc1e8b55c6dac97baf6b290ea93b8c34e51bf34ebe9de1673',3,3,'pizza_builder','[]',0,'2019-11-05 20:15:18','2019-11-05 20:15:18','2020-11-05 21:15:18'),('bd9853cd0ef9fbd0f5648f7db1c6ad27be537e27b305a6256be132511741c1f4b690d623991e360c',3,3,'pizza_builder','[]',0,'2019-11-05 12:14:26','2019-11-05 12:14:26','2020-11-05 13:14:26'),('c35b6cecbab360a90e31bcee33d32e6bbe0128427874abb1bd0402b67ca624c6e03e287396128138',3,3,'pizza_builder','[]',0,'2019-11-05 20:40:53','2019-11-05 20:40:53','2020-11-05 21:40:53'),('c425c2161032ccbecee7edfec0f67f665142862ca16f91107291e4f9aa9dc936f5adf95026a4e047',3,3,'pizza_builder','[]',0,'2019-11-05 16:47:10','2019-11-05 16:47:10','2020-11-05 17:47:10'),('c6b188336dbd15271aad8576d89ebadf893e239917dab219f3ea53f23a7c3bebc2e69ee955a3b167',3,3,'pizza_builder','[]',0,'2019-11-05 10:02:41','2019-11-05 10:02:41','2020-11-05 11:02:41'),('c716a9a58ededc21fc73f486c308eafb0672fdc86862492313d2a888017e1f4a282262dcd63d52d1',3,3,'pizza_builder','[]',0,'2019-11-05 09:29:22','2019-11-05 09:29:22','2020-11-05 10:29:22'),('c9f39a2928849b57167a688bd886ef8af670b79908d9fc70b3e1b25981d30d45fdbfd70772213813',3,3,'pizza_builder','[]',0,'2019-11-05 16:01:14','2019-11-05 16:01:14','2020-11-05 17:01:14'),('cc53aa9c8e380b528e66305cc1aee1df326a11fd2907ee20ab20b57ab5536bfd622d1319193e0e3c',3,3,'pizza_builder','[]',0,'2019-11-05 16:33:28','2019-11-05 16:33:28','2020-11-05 17:33:28'),('cea662a7ae749ff91a7334492700b609d98df2b207032edf7375544f2ab0bdb044a7ba4ad8800497',3,3,'pizza_builder','[]',0,'2019-11-05 16:43:06','2019-11-05 16:43:06','2020-11-05 17:43:06'),('cf0f9a0c3d8098590783d539315793d6032c60dbdd380f03b06292bc6795dd6dc6b37a38f12bab6f',3,3,'pizza_builder','[]',0,'2019-11-05 16:23:31','2019-11-05 16:23:31','2020-11-05 17:23:31'),('d166b9524d80d71f199001715d4924aaedccb42a9391d0961fada445115c4bb6d5e77e43696cbdde',3,3,'pizza_builder','[]',0,'2019-11-05 10:06:01','2019-11-05 10:06:01','2020-11-05 11:06:01'),('d4d9a6eaaede773840d405e2561aa4d4305ff90322efb7a9bb9c8854f80ee661e13ba4483361071d',3,3,'pizza_builder','[]',0,'2019-11-05 10:07:30','2019-11-05 10:07:30','2020-11-05 11:07:30'),('d52a040d1bc177b03380a3ae48c478c8ce45eeb64c95d949ffe5820b706ccd13eb36b1f821316949',3,3,'pizza_builder','[]',0,'2019-11-05 16:17:45','2019-11-05 16:17:45','2020-11-05 17:17:45'),('d58edd515d7c19e9cc15100a15cd5ffdb72c7a3be2c822b147759ebf84e7e1c98d2aaa65bfb995de',3,3,'pizza_builder','[]',0,'2019-11-05 19:40:29','2019-11-05 19:40:29','2020-11-05 20:40:29'),('d974c98f0d731b7db9a5cf6fc583ae6bc5124747b80ed3e7c1092c779d09c065accc9c21307dccd3',3,3,'pizza_builder','[]',0,'2019-11-05 20:16:14','2019-11-05 20:16:14','2020-11-05 21:16:14'),('d982a2f7af1216a5ae4b0950580a3df88f628e8c798adff4145a33d369cda45762a5f032e65a434b',3,3,'pizza_builder','[]',0,'2019-11-05 20:17:41','2019-11-05 20:17:41','2020-11-05 21:17:41'),('dd0a3e9d6f4eded6f7c2684bd903f19fd204ae2e78dae12a449c04b414e52ea3fa59fcf0617cf209',3,3,'pizza_builder','[]',0,'2019-11-05 16:37:12','2019-11-05 16:37:12','2020-11-05 17:37:12'),('dd205877ffed68151d6153dcd658add088020cb4cb9d5e5c34768b62e090086096b29cd2dc45aec8',3,3,'pizza_builder','[]',0,'2019-11-05 19:50:40','2019-11-05 19:50:40','2020-11-05 20:50:40'),('e0ffd8feaad45426b028c08f14c67568e4cdd2e38e0b0d6ce301ddd72c72484448fb37c95602bf0d',3,3,'pizza_builder','[]',0,'2019-11-05 16:18:05','2019-11-05 16:18:05','2020-11-05 17:18:05'),('e2fcfe1b322974e1612ae231bc6a81e194ed9c6a7c57fedd78c8d9764711d1e282f96f488a5f12ed',3,3,'pizza_builder','[]',0,'2019-11-05 11:36:43','2019-11-05 11:36:43','2020-11-05 12:36:43'),('e3c947566160c2f500011760899b97219fe6644e551be86985df5039bb6f786a6fe8ec561d5e38c8',3,3,'pizza_builder','[]',0,'2019-11-05 09:19:16','2019-11-05 09:19:16','2020-11-05 10:19:16'),('e40358f0de34d339d83d1fce1af9546623bdc12cc12916e5a8a5f2e6c74e7c38e2fc553c34139f33',3,3,'pizza_builder','[]',0,'2019-11-05 16:06:58','2019-11-05 16:06:58','2020-11-05 17:06:58'),('e803e7bf6ac6e0dfc025b83f0065e4ab061def418fc43d7f7c821dab7274debcc8aa1461445f4d6a',3,3,'pizza_builder','[]',0,'2019-11-05 10:00:28','2019-11-05 10:00:28','2020-11-05 11:00:28'),('ea08a0f65c5f391cdfd71e44a56b94db72eac0be2d85733f811205e26406c546efacbf181d48e64c',3,3,'pizza_builder','[]',0,'2019-11-05 10:53:29','2019-11-05 10:53:29','2020-11-05 11:53:29'),('ebde0a892a2a5e14cbcfd3f6a33ecd276d63cec1450014f5d6653312df22f742076cc289e14fc54c',3,3,'pizza_builder','[]',0,'2019-11-05 10:55:57','2019-11-05 10:55:57','2020-11-05 11:55:57'),('ecb056826144438550b122ea12c42f56971617119b7f86d9b1132c4c76ffee1fa816438af369cb1c',3,3,'pizza_builder','[]',0,'2019-11-05 16:38:17','2019-11-05 16:38:17','2020-11-05 17:38:17'),('f0fb42a5eebfeb5649a4758ad91b7ee518fac9d12de8e4a7c934e7feab83a49bbfa48d8ea7e5dd5b',3,3,'pizza_builder','[]',0,'2019-11-05 16:05:47','2019-11-05 16:05:47','2020-11-05 17:05:47'),('f2893b157625fbf1d18777eb71ed7857a8e5589b9165714d8659f6dd88811a6443ee5c35d08332d9',3,3,'pizza_builder','[]',0,'2019-11-05 10:55:48','2019-11-05 10:55:48','2020-11-05 11:55:48'),('f89182460cf3bd0b23ed4d946b66a98cc016cc159d0fcc309224b5ebf20abdf9217c03d0cbc8ef78',3,3,'pizza_builder','[]',0,'2019-11-05 16:09:17','2019-11-05 16:09:17','2020-11-05 17:09:17');
/*!40000 ALTER TABLE `oauth_access_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `oauth_auth_codes`
--

DROP TABLE IF EXISTS `oauth_auth_codes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `oauth_auth_codes` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) NOT NULL,
  `client_id` int(10) unsigned NOT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `oauth_auth_codes`
--

LOCK TABLES `oauth_auth_codes` WRITE;
/*!40000 ALTER TABLE `oauth_auth_codes` DISABLE KEYS */;
/*!40000 ALTER TABLE `oauth_auth_codes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `oauth_clients`
--

DROP TABLE IF EXISTS `oauth_clients`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `oauth_clients` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `secret` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `redirect` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `personal_access_client` tinyint(1) NOT NULL,
  `password_client` tinyint(1) NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_clients_user_id_index` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `oauth_clients`
--

LOCK TABLES `oauth_clients` WRITE;
/*!40000 ALTER TABLE `oauth_clients` DISABLE KEYS */;
INSERT INTO `oauth_clients` VALUES (1,NULL,'Laravel Personal Access Client','ILHG8CHXrHZSSIXuLzbE64XC8Q0J1Ft7T57AKWns','http://localhost',1,0,0,'2019-11-04 20:23:37','2019-11-04 20:23:37'),(2,NULL,'Laravel Password Grant Client','WnykcAjwmR7Xum4duUvlnxOPavk8bCA0KTMs6lt1','http://localhost',0,1,0,'2019-11-04 20:23:37','2019-11-04 20:23:37'),(3,NULL,'Laravel Personal Access Client','gZ1WwdMH67lDSPrmVoPHpi1mzkXnlJDfKkI34gEO','http://localhost',1,0,0,'2019-11-04 20:23:50','2019-11-04 20:23:50'),(4,NULL,'Laravel Password Grant Client','mxn16nEZpWZMuVnrvPuzscYXniDjnkosVfOXolXL','http://localhost',0,1,0,'2019-11-04 20:23:50','2019-11-04 20:23:50');
/*!40000 ALTER TABLE `oauth_clients` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `oauth_personal_access_clients`
--

DROP TABLE IF EXISTS `oauth_personal_access_clients`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `oauth_personal_access_clients` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `client_id` int(10) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_personal_access_clients_client_id_index` (`client_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `oauth_personal_access_clients`
--

LOCK TABLES `oauth_personal_access_clients` WRITE;
/*!40000 ALTER TABLE `oauth_personal_access_clients` DISABLE KEYS */;
INSERT INTO `oauth_personal_access_clients` VALUES (1,1,'2019-11-04 20:23:37','2019-11-04 20:23:37'),(2,3,'2019-11-04 20:23:50','2019-11-04 20:23:50');
/*!40000 ALTER TABLE `oauth_personal_access_clients` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `oauth_refresh_tokens`
--

DROP TABLE IF EXISTS `oauth_refresh_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `oauth_refresh_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `access_token_id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_refresh_tokens_access_token_id_index` (`access_token_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `oauth_refresh_tokens`
--

LOCK TABLES `oauth_refresh_tokens` WRITE;
/*!40000 ALTER TABLE `oauth_refresh_tokens` DISABLE KEYS */;
/*!40000 ALTER TABLE `oauth_refresh_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `password_resets`
--

DROP TABLE IF EXISTS `password_resets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  KEY `password_resets_email_index` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `password_resets`
--

LOCK TABLES `password_resets` WRITE;
/*!40000 ALTER TABLE `password_resets` DISABLE KEYS */;
/*!40000 ALTER TABLE `password_resets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (3,'admin','admin@admin.com',NULL,'$2y$10$Eyzjuj9chRKVik8HRGKMD.t7bar/L06tPOURYz/2oQMx4Qanfe7NS',NULL,'2019-11-05 09:19:06','2019-11-05 09:19:06');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-11-06 10:49:17
