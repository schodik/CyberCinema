# CyberCinema

## Описание

Этот дипломный проект посвящен разработке сайта кинотеар CyberCinema. Основная цель проекта заключается в создании веб-платформы для кинотеатра, которая обеспечит пользователям удобный доступ к информации о расписании сеансов и возможность бронирования билетов.

## Установка

Для запуска приложения на вашем устройстве выполните следующие шаги:

1. Cкачайте репозиторий
2. Скачайте PHP рекомендуемая версия 7.4 (https://github.com/nurfawaiq/php-version/blob/master/php-7.4.33-Win32-vc15-x64.rar)
3. Скачайте для PHP пакет mysql
4. Скачайте MysqlWorkBench и создайте в ней свою базу данных, туториал по установке (https://it.vshp.online/#/pages/manuals/mysql_manual)
5. Вставьте в БД код:
```sql
create database tickets;
use tickets;
CREATE TABLE `tickets` (
  `id` int NOT NULL AUTO_INCREMENT,
  `film_title` varchar(255) DEFAULT NULL,
  `time` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `seat_number` int DEFAULT NULL,
  `ticket_number` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `price` int DEFAULT NULL,
  `row` int DEFAULT NULL,
  `seat` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb3;
```
7. Скачайте VisualStudio (https://code.visualstudio.com/)
8. Откройте файл ticket_info.php и save_ticket.php, замените с сохранением
   ```PHP
    $username = "urUsername";
    $password = "urPassword";
   ```

## Запуск

в директории с проектом выполнить команду
```bash
php -S 127.0.0.1:8000
```
зайдите на 127.0.0.1:8000 В любом удобном для вас браузере

## Дополнительные материалы

- [Ссылка на файл с текстовой частью дипломного проекта](https://docs.google.com/document/d/1MKaQx598ryx-AelRaU-oQP-VbV5Zhxjkq56-QIQG6AU/edit#heading=h.7vcf0qpvgs6y)
