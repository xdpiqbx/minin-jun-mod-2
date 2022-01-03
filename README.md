# 16. Авторизация и аутентификация. Часть 2

## 6. Refresh tokens - start from here

---

Мой тестовый `pwd: Test1234`

[Firebase Auth REST API](https://firebase.google.com/docs/reference/rest/auth)

[Sign up with email / password](https://firebase.google.com/docs/reference/rest/auth#section-create-email-password)

**Цель урока:**

-   Познакомимся с FireBase Rules
-   Научимся персонализировать интерфейс
-   Поймем принцип работы защищенных путей
-   Содержание урока:

**Доработаем методы авторизации**

-   Персонализируем интерфейс в зависимости от уровня доступа
-   Реализуем комментарии
-   Изучим правила FireBase
-   Отрефакторим код

```
016-001 Введение
016-002 Имя в форме регистрации
016-003 Изменяем SignUp метод
016-004 Получение и хранение User data
016-005 Получение User data при загрузке
016-006 Refresh tokens
016-007 FireBase Rules
016-008 Авторизированный запрос
016-009 Изменяем NavBar
016-010 Добавляем пользователя в NavBar
016-011 Защищенные пути (Protected Routes)
016-012 Добавление Global Loading
016-013 Переадресация после входа
016-014 LogOut
016-015 Добавление изображения пользователя
016-016 Изменяем UserList Page
016-017 Изменяем UserPage
016-018 Персонализированный интерфейс
016-019 Создаем Comment Hook
016-020 Добавляем метод создания комментария
016-021 Добавляем запрос добавления комментария
016-022 Получение комментариев
016-023 Отображение комментариев
016-024 Удаление комментариев
016-025 Comments FireBase Rules и отображение кнопки удаление
016-025 ПЗ1
016-026 Решение. Создаем метод обновления пользователя
016-027 Решение. Обновляем форму обновления пользователя
016-028 Решение. Отправляем данные пользователя
016-029 Решение. Исправляем проблему отображения
016-030 Решение. Переадресация на персональную страницу обновления
```

## Final Firebase rules

```json
{
    "rules": {
        "user": {
            ".read": "auth != null",
            "$uid": {
                ".write": "$uid === auth.uid"
            }
        },
        "quality": {
            ".read": true,
            ".write": false
        },
        "profession": {
            ".read": true,
            ".write": false
        },
        "comment": {
            ".read": "auth != null",
            ".indexOn": ["pageId"],
            "$cid": {
                ".write": "auth != null && ((data.child('userId').val() === auth.uid) || (newData.child('userId').val() === auth.uid))"
            }
        }
    }
}
```

[**Итоговый проект**](https://drive.google.com/drive/folders/1sjPtxomBL6uYlY09IN96DyXHloGoSHhO)

---

**_p.s._**

[spec-md.com](https://spec-md.com/)
