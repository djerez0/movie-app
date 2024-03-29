const typesWithScopeOptional = [
    "build",
    "chore",
    "ci",
    "docs",
    "feat",
    "fix",
    "perf",
    "refactor",
    "revert",
    "style",
    "test",
    "temp"
];

const config = {
    extends: ["@commitlint/config-conventional"],
    plugins: ["commitlint-plugin-function-rules"],
    rules: {
        "scope-empty": [0],
        "function-rules/scope-empty": [
            2,
            "always",
            (parsed) => {
                const {type} = parsed;

                if (typesWithScopeOptional.includes(type)) return [true];

                return [
                    false,
                    `el alcance es opcional en estas convenciones ${typesWithScopeOptional.join(
                        ", "
                    )}`
                ];
            }
        ],
        "scope-enum": [0],
        "function-rules/scope-enum": [
            2,
            "always",
            (parsed) => {
                const {type, scope} = parsed;

                if (typesWithScopeOptional.includes(type) || scope !== null) return [true];

                const scopeRegexValidation = /[#][0-9]{1,8}/;
                const isValidScope = scopeRegexValidation.test(scope);

                if (isValidScope) return [true];

                return [
                    false,
                    `El alcance debe ajustarse al siguiente patrón ${scopeRegexValidation}`
                ];
            }
        ]
    }
};

module.exports = config;
