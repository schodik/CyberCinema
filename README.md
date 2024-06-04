# CyberCinema

## Описание

Этот дипломный проект посвящен разработке сайта кинотеар CyberCinema. Основная цель проекта заключается в создании веб-платформы для кинотеатра, которая обеспечит пользователям удобный доступ к информации о расписании сеансов и возможность бронирования билетов.

## Установка

Для запуска приложения на вашем устройстве выполните следующие шаги:

1. Cкачайте репозиторий
2. Скачайте PHP рекомендуемая версия 7.4
3. Скачайте для PHP пакет mysql
4. Скачайте MysqlWorkBench и создайте в ней свою базу данных
5. Вставьте в БД код:
```sql
CREATE TABLE `tickets` (
  `id` int(11) NOT NULL,
  `film_title` varchar(255) DEFAULT NULL,
  `time` varchar(10) CHARACTER SET utf8mb4 DEFAULT NULL,
  `seat_number` int(11) DEFAULT NULL,
  `ticket_number` varchar(20) CHARACTER SET utf8mb4 DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `row` int(11) NOT NULL,
  `seat` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
```
7. Скачайте VisualStudio 
8. Откройте файл ticket_info.php и save_ticket.php, замените с сохранением
    $username = "urUsername";
    $password = "urPassword";
    $dbname = "urDatabaseName";

## Запуск

в директории с проектом выполнить команду
```bash
php -S 127.0.0.1:8000
```
зайдите на 127.0.0.1:8000

## Дополнительные материалы

- [Ссылка на файл с текстовой частью дипломного проекта](https://docs.google.com/document/d/1MKaQx598ryx-AelRaU-oQP-VbV5Zhxjkq56-QIQG6AU/edit#heading=h.7vcf0qpvgs6y)
