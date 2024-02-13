# Тестовое задание

Блог с возможностью ставить реакции

## Ссылка на сайт с развёрнутым проектом

[Ссылка](https://blog.test.nomoredomainsrocks.ru/)

## Запуск

### Вручную

```
npm ci
```

1. Dev сервер

```
npm run dev
```

2. Сборка

```
npm run build
```

### Запуск прод версии с помощью Docker

```
docker build -t blog-test .
docker run -p 3000:3000 blog-test
```
