### Локальная разработка:

```sh
yarn install
```

```sh
yarn dev
```

### Линтинг:
``` sh
yarn lint:styles
or
yarn lint:js
or
yarn lint
```

### Сборка продакшена:

```sh
yarn build
```

### Включено:

- Линтинг стилей с [stylelint](https://stylelint.io)
- Автопрефиксы CSS правил с [postcss](https://postcss.org) и [postcss-preset-env](https://github.com/csstools/postcss-preset-env)
- Поддержка SASS
- Линтинг JS с [eslint](https://eslint.org)
- Поддержка ES с [vite](https://vitejs.dev/)
- Подключен JS модуль для модальных окон, разработан командой Лиги А. исходный код [htmlonelove/liga-reshare](https://github.com/htmlonelove/liga-reshare)

- рекомендованные дополнения для VSCode - в файле ".vscode\settings.json"

### Favicon

Генерируем с помощью сервиса [realfavicongenerator](https://realfavicongenerator.net/)

Подключаем в файле src/components/app/head.njk

## Структура стартера
- 📁 public - место для статических файлов
- 📁 src
  - 📁 assets - ваши статические файлы в формате .png, .svg
  - 📁 data - ваши .json данные, используемые в шаблонах
  - 📁 emails - ваши файлы шаблонов электронной почты
  - 📁 scripts - ваши файлы скриптов в формате .js
  - 📁 styles - ваши файлы стилей в формате .css, .scss
  - 📁 components - ваши файлы шаблонов в формате .njk
  - 📁 layouts - ваши файлы макетов шаблонов в формате .njk
  - 📁 pages - ваши страницы как .html, вы также можете вкладывать или определять страницу как .json или .njk

#### Импорт статических файлов из папки assets
Путь к папке должен начинаться /src/assets
```sh
src="/src/assets/img/logo.svg"
```
