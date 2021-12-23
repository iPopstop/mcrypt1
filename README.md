Проект был создан в рамках марафона "Вездекод" ВКонтакте. Представляет из себя сервис для отправки и расшифровки сообщений

Попробовать - https://mcrypt.popstop.space/main

## Запуск проекта
- Залить к себе, указать в `root_path` директорию `public`
- Настроить `.env` файл, указать данные от почты (MAIL)
- Открыть `resources/cabinets/.env`, изменить `VUE_APP_URL`, `VUE_APP_HOST`
- Из корневой директории выполнить `composer install`, из `resources/cabinets` -  `npm install && npm run build`
