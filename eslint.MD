[00:00:10] [~/self/sextou-front] git(develop) 🔥 ❱❱❱ yarn lint --fix
yarn run v1.22.19
$ eslint . --ext .js,.jsx,.ts,.tsx --fix

% /home/didiraja/self/sextou-front/src/App.tsx

% /home/didiraja/self/sextou-front/src/components/atoms/Pagination.tsx

/home/didiraja/self/sextou-front/src/components/atoms/Title.tsx
1:29 error Missing file extension "tsx" for "./Button" import/extensions
6:5 error 'React' must be in scope when using JSX react/react-in-jsx-scope

/home/didiraja/self/sextou-front/src/components/molecules/About.tsx
1:19 error Missing file extension "tsx" for "../atoms/Title" import/extensions
6:5 error 'React' must be in scope when using JSX react/react-in-jsx-scope
7:7 error 'React' must be in scope when using JSX react/react-in-jsx-scope
9:7 error 'React' must be in scope when using JSX react/react-in-jsx-scope
10:9 error 'React' must be in scope when using JSX react/react-in-jsx-scope
18:7 error 'React' must be in scope when using JSX react/react-in-jsx-scope
26:7 error 'React' must be in scope when using JSX react/react-in-jsx-scope
29:9 error 'React' must be in scope when using JSX react/react-in-jsx-scope

/home/didiraja/self/sextou-front/src/components/molecules/Card.Error.tsx
1:30 error Missing file extension "ts" for "../../types" import/extensions
5:5 error 'React' must be in scope when using JSX react/react-in-jsx-scope

/home/didiraja/self/sextou-front/src/components/molecules/Card.Loading.tsx
5:5 error 'React' must be in scope when using JSX react/react-in-jsx-scope
6:7 error 'React' must be in scope when using JSX react/react-in-jsx-scope
8:7 error 'React' must be in scope when using JSX react/react-in-jsx-scope
10:7 error 'React' must be in scope when using JSX react/react-in-jsx-scope
12:7 error 'React' must be in scope when using JSX react/react-in-jsx-scope
13:9 error 'React' must be in scope when using JSX react/react-in-jsx-scope
14:9 error 'React' must be in scope when using JSX react/react-in-jsx-scope
15:9 error 'React' must be in scope when using JSX react/react-in-jsx-scope
18:7 error 'React' must be in scope when using JSX react/react-in-jsx-scope

% /home/didiraja/self/sextou-front/src/components/molecules/Card.tsx

/home/didiraja/self/sextou-front/src/components/molecules/Modal.tsx

/home/didiraja/self/sextou-front/src/components/organisms/Footer.tsx
5:5 error 'React' must be in scope when using JSX react/react-in-jsx-scope
6:7 error 'React' must be in scope when using JSX react/react-in-jsx-scope
11:7 error 'React' must be in scope when using JSX react/react-in-jsx-scope
12:7 error 'React' must be in scope when using JSX react/react-in-jsx-scope
15:9 error 'React' must be in scope when using JSX react/react-in-jsx-scope

/home/didiraja/self/sextou-front/src/components/organisms/Header.tsx
5:5 error 'React' must be in scope when using JSX react/react-in-jsx-scope
6:7 error 'React' must be in scope when using JSX react/react-in-jsx-scope
7:9 error 'React' must be in scope when using JSX react/react-in-jsx-scope
8:11 error 'React' must be in scope when using JSX react/react-in-jsx-scope
9:13 error 'React' must be in scope when using JSX react/react-in-jsx-scope
13:11 error 'React' must be in scope when using JSX react/react-in-jsx-scope
18:11 error 'React' must be in scope when using JSX react/react-in-jsx-scope

/home/didiraja/self/sextou-front/src/components/organisms/TopBlock.tsx
7:5 error 'React' must be in scope when using JSX react/react-in-jsx-scope
8:7 error 'React' must be in scope when using JSX react/react-in-jsx-scope
9:9 error 'React' must be in scope when using JSX react/react-in-jsx-scope

/home/didiraja/self/sextou-front/src/components/templates/Card.Grid.tsx
1:30 error Missing file extension "ts" for "../../types" import/extensions
5:10 error 'React' must be in scope when using JSX react/react-in-jsx-scope

/home/didiraja/self/sextou-front/src/components/templates/MainContainer.tsx
1:30 error Missing file extension "ts" for "../../types" import/extensions
5:10 error 'React' must be in scope when using JSX react/react-in-jsx-scope

/home/didiraja/self/sextou-front/src/components/templates/PageContainer.tsx
1:30 error Missing file extension "ts" for "../../types" import/extensions
5:10 error 'React' must be in scope when using JSX react/react-in-jsx-scope

/home/didiraja/self/sextou-front/src/hooks/usePagination.ts
1:10 warning 'useEffect' is defined but never used @typescript-eslint/no-unused-vars

/home/didiraja/self/sextou-front/src/main.tsx
3:17 error Missing file extension "tsx" for "./App" import/extensions

/home/didiraja/self/sextou-front/src/routes/Category.tsx
4:22 error Missing file extension "tsx" for "../components/templates/Card.Grid" import/extensions
5:23 error Missing file extension "tsx" for "../components/molecules/Card.Error" import/extensions
6:33 error Missing file extension "tsx" for "../components/molecules/Card" import/extensions
7:25 error Missing file extension "tsx" for "../store" import/extensions
8:24 error Missing file extension "tsx" for "../components/atoms/Pagination" import/extensions
9:27 error Missing file extension "ts" for "../hooks/usePagination" import/extensions
10:22 error Missing file extension "ts" for "../services/Requests" import/extensions
11:19 error Missing file extension "tsx" for "../components/atoms/Title" import/extensions
12:25 error Missing file extension "tsx" for "../components/molecules/Card.Loading" import/extensions
14:33 error Missing file extension "ts" for "../services/enums" import/extensions
19:37 warning Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
23:16 error Expected to return a value at the end of arrow function consistent-return
53:23 warning Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
55:9 warning Unexpected console statement no-console
68:5 error Arrow function expected no return value consistent-return
74:5 error 'React' must be in scope when using JSX react/react-in-jsx-scope
75:7 error 'React' must be in scope when using JSX react/react-in-jsx-scope
77:7 error 'React' must be in scope when using JSX react/react-in-jsx-scope
82:7 error 'React' must be in scope when using JSX react/react-in-jsx-scope
84:11 error 'React' must be in scope when using JSX react/react-in-jsx-scope
85:13 error 'React' must be in scope when using JSX react/react-in-jsx-scope
86:13 error 'React' must be in scope when using JSX react/react-in-jsx-scope
87:13 error 'React' must be in scope when using JSX react/react-in-jsx-scope
90:15 error 'React' must be in scope when using JSX react/react-in-jsx-scope
103:46 error 'React' must be in scope when using JSX react/react-in-jsx-scope
103:67 error Prop spreading is forbidden react/jsx-props-no-spreading
105:13 error 'React' must be in scope when using JSX react/react-in-jsx-scope
106:15 error 'React' must be in scope when using JSX react/react-in-jsx-scope
107:15 error 'React' must be in scope when using JSX react/react-in-jsx-scope
112:7 error 'React' must be in scope when using JSX react/react-in-jsx-scope

/home/didiraja/self/sextou-front/src/routes/Error.tsx
1:19 error Missing file extension "tsx" for "../components/atoms/Title" import/extensions
5:5 error 'React' must be in scope when using JSX react/react-in-jsx-scope
6:7 error 'React' must be in scope when using JSX react/react-in-jsx-scope
8:7 error 'React' must be in scope when using JSX react/react-in-jsx-scope

/home/didiraja/self/sextou-front/src/routes/Home.tsx
2:25 error Missing file extension "tsx" for "../store"
import/extensions
3:22 error Missing file extension "ts" for "../services/Requests"
import/extensions
4:18 error Missing file extension "ts" for "../services/Date"
import/extensions
5:22 error Missing file extension "tsx" for "../components/templates/Card.Grid"
import/extensions
6:33 error Missing file extension "tsx" for "../components/molecules/Card"
import/extensions
7:25 error Missing file extension "tsx" for "../components/molecules/Card.Loading"
import/extensions
8:23 error Missing file extension "tsx" for "../components/molecules/Card.Error"
import/extensions
9:19 error Missing file extension "tsx" for "../components/atoms/Title"
import/extensions
10:24 error Missing file extension "tsx" for "../components/atoms/Pagination"
import/extensions
11:27 error Missing file extension "ts" for "../hooks/usePagination"
import/extensions
12:19 error Missing file extension "tsx" for "../components/molecules/About"
import/extensions
13:23 error Missing file extension "ts" for "../services/enums"
import/extensions
16:37 warning Unexpected any. Specify a different type
@typescript-eslint/no-explicit-any
47:23 warning Unexpected any. Specify a different type
@typescript-eslint/no-explicit-any
49:9 warning Unexpected console statement
no-console
69:5 error Arrow function expected no return value
consistent-return
75:5 error 'React' must be in scope when using JSX
react/react-in-jsx-scope
76:7 error 'React' must be in scope when using JSX
react/react-in-jsx-scope
77:9 error 'React' must be in scope when using JSX
react/react-in-jsx-scope
79:9 error 'React' must be in scope when using JSX
react/react-in-jsx-scope
81:13 error 'React' must be in scope when using JSX
react/react-in-jsx-scope
82:15 error 'React' must be in scope when using JSX
react/react-in-jsx-scope
86:11 error Fragments should contain more than one child - otherwise, there’s no need for a Fragment at all react/jsx-no-useless-fragment
86:11 error 'React' must be in scope when using JSX
react/react-in-jsx-scope
89:17 error 'React' must be in scope when using JSX
react/react-in-jsx-scope
91:19 error Prop spreading is forbidden
react/jsx-props-no-spreading
92:29 error 'event' is already declared in the upper scope on line 88 column 29
no-shadow
96:17 error 'React' must be in scope when using JSX
react/react-in-jsx-scope
97:19 error 'React' must be in scope when using JSX
react/react-in-jsx-scope
98:19 error 'React' must be in scope when using JSX
react/react-in-jsx-scope
104:9 error 'React' must be in scope when using JSX
react/react-in-jsx-scope
126:7 error 'React' must be in scope when using JSX
react/react-in-jsx-scope

/home/didiraja/self/sextou-front/src/routes/Routes.test.tsx
3:18 error Missing file extension "tsx" for "./Template" import/extensions
4:22 error Missing file extension "tsx" for "./Category" import/extensions
8:5 error 'React' must be in scope when using JSX react/react-in-jsx-scope
9:7 error 'React' must be in scope when using JSX react/react-in-jsx-scope
10:9 error 'React' must be in scope when using JSX react/react-in-jsx-scope
10:40 error 'React' must be in scope when using JSX react/react-in-jsx-scope
11:9 error 'React' must be in scope when using JSX react/react-in-jsx-scope
11:48 error 'React' must be in scope when using JSX react/react-in-jsx-scope

/home/didiraja/self/sextou-front/src/routes/SingleEvent.tsx
3:5 error 'React' must be in scope when using JSX react/react-in-jsx-scope

/home/didiraja/self/sextou-front/src/routes/Template.tsx
2:25 error Missing file extension "tsx" for "../store" import/extensions
5:27 error Missing file extension "tsx" for "../components/templates/PageContainer" import/extensions
6:27 error Missing file extension "tsx" for "../components/templates/MainContainer" import/extensions
7:22 error Missing file extension "tsx" for "../components/organisms/TopBlock" import/extensions
8:20 error Missing file extension "tsx" for "../components/organisms/Footer" import/extensions
9:19 error Missing file extension "tsx" for "../components/molecules/Modal" import/extensions
10:20 error Missing file extension "tsx" for "../components/organisms/Header" import/extensions
13:37 warning Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
16:5 error 'React' must be in scope when using JSX react/react-in-jsx-scope
17:7 error 'React' must be in scope when using JSX react/react-in-jsx-scope
18:7 error 'React' must be in scope when using JSX react/react-in-jsx-scope
19:9 error 'React' must be in scope when using JSX react/react-in-jsx-scope
21:22 error 'React' must be in scope when using JSX react/react-in-jsx-scope
23:9 error 'React' must be in scope when using JSX react/react-in-jsx-scope
24:11 error 'React' must be in scope when using JSX react/react-in-jsx-scope
27:9 error 'React' must be in scope when using JSX react/react-in-jsx-scope

/home/didiraja/self/sextou-front/src/routes/index.tsx
3:18 error Missing file extension "tsx" for "./Home" import/extensions
4:22 error Missing file extension "tsx" for "./Category" import/extensions
5:8 warning 'SingleEvent' is defined but never used @typescript-eslint/no-unused-vars
5:25 error Missing file extension "tsx" for "./SingleEvent" import/extensions
6:19 error Missing file extension "tsx" for "./Error" import/extensions
11:14 error 'React' must be in scope when using JSX react/react-in-jsx-scope
12:19 error 'React' must be in scope when using JSX react/react-in-jsx-scope
16:14 error 'React' must be in scope when using JSX react/react-in-jsx-scope
17:19 error 'React' must be in scope when using JSX react/react-in-jsx-scope

/home/didiraja/self/sextou-front/src/services/Date.ts
1:1 error Do not use "@ts-nocheck" because it alters compilation errors
@typescript-eslint/ban-ts-comment
2:1 error 'date-fns' should be listed in the project's dependencies, not devDependencies
import/no-extraneous-dependencies
5:3 warning 'startOfWeek' is defined but never used
@typescript-eslint/no-unused-vars
8:8 error '/home/didiraja/self/sextou-front/node_modules/date-fns/typings.d.ts' imported multiple times import/no-duplicates
9:1 error 'date-fns' should be listed in the project's dependencies, not devDependencies
import/no-extraneous-dependencies
9:22 error '/home/didiraja/self/sextou-front/node_modules/date-fns/typings.d.ts' imported multiple times import/no-duplicates
45:3 error Expected 'this' to be used by class method 'readableDate'
class-methods-use-this

/home/didiraja/self/sextou-front/src/services/Requests.ts
2:10 warning 'CardProps' is defined but never used @typescript-eslint/no-unused-vars
2:27 error Missing file extension "tsx" for "../components/molecules/Card" import/extensions
3:32 error Missing file extension "ts" for "./enums" import/extensions
31:17 warning Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
32:7 warning Unexpected console statement no-console
38:3 error Expected 'this' to be used by class async method 'highlightEvents' class-methods-use-this
38:27 error Unexpected empty async method 'highlightEvents' @typescript-eslint/no-empty-function
40:3 error Expected 'this' to be used by class async method 'regularEvents' class-methods-use-this
40:25 error Unexpected empty async method 'regularEvents' @typescript-eslint/no-empty-function

/home/didiraja/self/sextou-front/src/store/index.tsx
2:27 error Missing file extension "tsx" for "../components/molecules/Card"

                                            import/extensions

6:24 error Don't use `{}` as a type. `{}` actually means "any non-nullish value".

- If you want a type meaning "any object", you probably want `object` instead.
- If you want a type meaning "any value", you probably want `unknown` instead.
- If you want a type meaning "empty object", you probably want `Record<string, never>` instead @typescript-eslint/ban-types
  11:1 error Prefer default export on a file with single export

                                            import/prefer-default-export

/home/didiraja/self/sextou-front/src/stories/Header.stories.tsx
2:1 error '@storybook/react' should be listed in the project's dependencies, not devDependencies import/no-extraneous-dependencies
4:24 error Missing file extension "tsx" for "./Header"
import/extensions
15:49 error Function component is not a function declaration
react/function-component-definition
15:67 error Prop spreading is forbidden
react/jsx-props-no-spreading

/home/didiraja/self/sextou-front/src/stories/Header.tsx
3:24 error Unable to resolve path to module './Button'
import/no-unresolved
3:24 error Missing file extension for "./Button"
import/extensions
11:3 error propType "user" is not required, but has no corresponding defaultProps declaration
react/require-default-props
17:1 error Prefer default export on a file with single export
import/prefer-default-export

/home/didiraja/self/sextou-front/src/stories/Page.tsx
3:24 error Missing file extension "tsx" for "./Header" import/extensions
10:1 error Prefer default export on a file with single export import/prefer-default-export
10:32 error Function component is not a function declaration react/function-component-definition
41:13 error `"` can be escaped with `&quot;`, `&ldquo;`, `&#34;`, `&rdquo;` react/no-unescaped-entities
41:18 error `"` can be escaped with `&quot;`, `&ldquo;`, `&#34;`, `&rdquo;` react/no-unescaped-entities

/home/didiraja/self/sextou-front/src/types/index.ts
6:18 warning Unexpected any. Specify a different type @typescript-eslint/no-explicit-any

/home/didiraja/self/sextou-front/tests/setup.js
1:1 error 'vitest' should be listed in the project's dependencies, not devDependencies import/no-extraneous-dependencies

/home/didiraja/self/sextou-front/vite.config.ts
2:1 error 'vite' should be listed in the project's dependencies, not devDependencies
import/no-extraneous-dependencies
3:1 error '@vitejs/plugin-react' should be listed in the project's dependencies, not devDependencies import/no-extraneous-dependencies
4:1 error '@nabla/vite-plugin-eslint' should be listed in the project's dependencies, not devDependencies import/no-extraneous-dependencies

✖ 341 problems (320 errors, 21 warnings)

error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
[00:00:45] [~/self/sextou-front] git(develop) 🔥 ❱❱❱
