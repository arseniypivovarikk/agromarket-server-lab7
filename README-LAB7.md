# AgroMarket — лабораторная работа №7

В этой сборке реализованы регистрация/вход, bcrypt-хэширование, JWT, роли user/admin, защищённый API добавления и удаления товаров, React форма входа/регистрации, админская форма добавления товара, восстановление авторизации после обновления страницы, rate limit, Helmet и CORS.


## Запуск
Backend: `cd agromarket-server`, `npm install`, копируйте `.env.example` в `.env`, установите свой JWT_SECRET и ADMIN_PASSWORD, затем `npm run dev`.
Frontend: в другом терминале из корня проекта `npm install`, затем `npm run dev`.

ВНИМАНИЕ: users для этого облегчённого проекта сохраняются в JSON-файле `agromarket-server/data/users.json`, а не PostgreSQL. Это сохранение функциональности исходного проекта ЛР6 без внешней базы.
