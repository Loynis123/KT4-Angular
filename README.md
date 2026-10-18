# Практическая работа №4 — Angular

Страница формы «Get an Estimate for Workspace» по макету.

## Запуск

Требуется Node.js 20.19+, 22.12+ или 24+.

```sh
npm install
npm start
```

Открыть http://localhost:4200.

```sh
npm run build
```

Готовая сборка находится в `dist/kt4-angular/browser`.

## Компоненты

- `AppComponent` — общая структура страницы.
- `EstimateHeaderComponent` — верхняя панель.
- `PageIntroComponent` — заголовок и описание.
- `ContactFormComponent` — реактивная форма, проверка и обработка данных.
- `FormFieldComponent` — переиспользуемое поле с типом, подписью, подсказкой и событием изменения.
- `GradientButtonComponent` — переиспользуемая кнопка с текстом, типом и событием нажатия.

Поля используют типы `text`, `tel`, `email` и `date`. После заполнения и нажатия Submit
данные выводятся в консоль браузера одним объектом: `{ name, phone, email, date }`.
Форма работает локально; отправка на сервер не предусмотрена заданием.

Макет: https://www.figma.com/design/4Nn2HDbu6A6BPKTH0rx8y7/Form-Design-template?node-id=0-1

Используется локальный шрифт DM Sans. Внешние сервисы для отображения страницы не нужны.
