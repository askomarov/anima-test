module.exports = {
  rules: {
    // Тело коммита должно начинаться с пустой строки
    "body-leading-blank": [2, "always"],

    // Нижний колонтитул коммита должен начинаться с пустой строки
    "footer-leading-blank": [2, "always"],

    // Максимальная длина заголовка 72 символа
    "header-max-length": [2, "always", 72],

    // Область всегда только в нижнем регистре
    "scope-case": [2, "always", "lower-case"],

    // Описание не может быть пустым
    "subject-empty": [2, "never"],

    // Описание не должно заканчиваться '.'
    "subject-full-stop": [2, "never", "."],

    // Тип всегда только в нижнем регистре
    "type-case": [2, "always", "lower-case"],

    // Тип не может быть пустым
    "type-empty": [2, "never"],

    // Перечислим все возможные варианты коммитов
    "type-enum": [
      2,
      "always",
      [
        "build",
        "ci",
        "docs",
        "feat",
        "fix",
        "perf",
        "refactor",
        "revert",
        "style",
        "test"
      ]
    ]
  },
  prompt: {
    messages: {
      skip: '(enter для пропуска)',
      max: '(макс 72 симв)',
    },
    questions: {
      type: {
        description: "Какие изменения вы вносите?",
        enum: {
          feat: {
            description: 'Добавление нового функционала',
            title: 'Features',
            emoji: '✨',
          },
          fix: {
            description: 'Исправление ошибок',
            title: 'Bug Fixes',
            emoji: '🐛',
          },
          docs: {
            description: 'Обновление документации',
            title: 'Documentation',
            emoji: '📚',
          },
          style: {
            description: 'Правки по кодстайлу (табы, отступы, точки, запятые и т.д.)',
            title: 'Styles',
            emoji: '💎',
          },
          refactor: {
            description: 'Правки кода без исправления ошибок или добавления новых функций',
            title: 'Code Refactoring',
            emoji: '📦',
          },
          perf: {
            description: 'Изменения направленные на улучшение производительности',
            title: 'Performance Improvements',
            emoji: '🚀',
          },
          test: {
            description: 'Добавление тестов',
            title: 'Tests',
            emoji: '🚨',
          },
          build: {
            description: 'Сборка проекта или изменения внешних зависимостей',
            title: 'Builds',
            emoji: '🛠',
          },
          ci: {
            description: 'Настройка CI и работа со скриптами',
            title: 'Continuous Integrations',
            emoji: '⚙️',
          },
          revert: {
            description: 'Откат на предыдущие коммиты',
            title: 'Reverts',
            emoji: '🗑',
          },
        },
      },
      scope: {
        description:
          'Выберите ОБЛАСТЬ, которую вы изменили (опционально)',
      },
      subject: {
        description: 'Напишите КОРОТКОЕ описание в ПОВЕЛИТЕЛЬНОМ наклонении',
      },
      body: {
        description: 'Напишите ПОДРОБНОЕ описание (опционально). Используйте "|" для новой строки',
      },
      isBreaking: {
        description: 'Есть ли BREAKING CHANGES?',
      },
      breakingBody: {
        description:
          'Список BREAKING CHANGES (опционально)',
      },
      breaking: {
        description: 'Список BREAKING CHANGES (опционально)',
      },
    }
  }
};
