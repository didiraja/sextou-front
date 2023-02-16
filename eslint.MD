[00:00:10] [~/self/sextou-front] git(develop) 🔥 ❱❱❱ yarn lint --fix
yarn run v1.22.19
$ eslint . --ext .js,.jsx,.ts,.tsx --fix

% /home/didiraja/self/sextou-front/src/App.tsx
% 1:18 error Missing file extension "tsx" for "./routes/Template" import/extensions
% 5:5 error 'React' must be in scope when using JSX react/react-in-jsx-scope
% 6:7 error 'React' must be in scope when using JSX react/react-in-jsx-scope
/home/didiraja/self/sextou-front/src/components/atoms/Button.tsx
1:30 error Missing file extension "ts" for "../../types"
import/extensions
5:3 error propType "pill" is not required, but has no corresponding defaultProps declaration react/require-default-props
5:3 error propType "pill" is not required, but has no corresponding defaultProps declaration react/require-default-props
6:3 error propType "highlight" is not required, but has no corresponding defaultProps declaration react/require-default-props
6:3 error propType "highlight" is not required, but has no corresponding defaultProps declaration react/require-default-props
7:3 error propType "disabled" is not required, but has no corresponding defaultProps declaration react/require-default-props
7:3 error propType "disabled" is not required, but has no corresponding defaultProps declaration react/require-default-props
8:3 error 'free' PropType is defined but prop is never used
react/no-unused-prop-types
8:3 error propType "free" is not required, but has no corresponding defaultProps declaration react/require-default-props
8:3 error propType "free" is not required, but has no corresponding defaultProps declaration react/require-default-props
12:3 error propType "href" is not required, but has no corresponding defaultProps declaration react/require-default-props
13:3 error propType "target" is not required, but has no corresponding defaultProps declaration react/require-default-props
14:3 error propType "className" is not required, but has no corresponding defaultProps declaration react/require-default-props
15:3 error propType "onClick" is not required, but has no corresponding defaultProps declaration react/require-default-props
15:19 warning Unexpected any. Specify a different type
@typescript-eslint/no-explicit-any
18:1 error Block is redundant
no-lone-blocks
37:5 error Missing an explicit type attribute for button
react/button-has-type
37:5 error 'React' must be in scope when using JSX
react/react-in-jsx-scope
60:5 error 'React' must be in scope when using JSX
react/react-in-jsx-scope
66:7 error 'React' must be in scope when using JSX
react/react-in-jsx-scope

/home/didiraja/self/sextou-front/src/components/atoms/Pagination.tsx
2:20 error Missing file extension "tsx" for "./Button"
import/extensions
7:3 error propType "perPage" is not required, but has no corresponding defaultProps declaration react/require-default-props
8:3 error propType "onSelectPage" is not required, but has no corresponding defaultProps declaration react/require-default-props
26:5 error 'React' must be in scope when using JSX
react/react-in-jsx-scope
28:9 error 'React' must be in scope when using JSX
react/react-in-jsx-scope
39:11 error 'React' must be in scope when using JSX
react/react-in-jsx-scope
41:18 error Do not use Array index in keys
react/no-array-index-key
49:9 error 'React' must be in scope when using JSX
react/react-in-jsx-scope

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

/home/didiraja/self/sextou-front/src/components/molecules/Card.test.tsx
1:1 error 'vitest' should be listed in the project's dependencies, not devDependencies import/no-extraneous-dependencies
5:18 error Missing file extension "tsx" for "./Card" import/extensions
74:21 error 'React' must be in scope when using JSX react/react-in-jsx-scope
74:27 error Prop spreading is forbidden react/jsx-props-no-spreading
105:37 error Unexpected empty arrow function @typescript-eslint/no-empty-function
107:12 error 'React' must be in scope when using JSX react/react-in-jsx-scope
107:18 error Prop spreading is forbidden react/jsx-props-no-spreading

/home/didiraja/self/sextou-front/src/components/molecules/Card.tsx
1:20 error Missing file extension "tsx" for "../atoms/Button"

                import/extensions
    2:18  error    Missing file extension "ts" for "../../services/Date"

                import/extensions
    3:22  error    Missing file extension "ts" for "../../services/enums"

                import/extensions
    4:30  error    Missing file extension "ts" for "../../types"

                import/extensions
    8:3   error    propType "highlight" is not required, but has no corresponding defaultProps declaration
                react/require-default-props
    9:3   error    'id' PropType is defined but prop is never used

                react/no-unused-prop-types

14:3 error propType "tickets" is not required, but has no corresponding defaultProps declaration
react/require-default-props
15:3 error propType "free" is not required, but has no corresponding defaultProps declaration
react/require-default-props
16:3 error 'content' PropType is defined but prop is never used

                react/no-unused-prop-types

17:3 error 'description' PropType is defined but prop is never used

                react/no-unused-prop-types

18:3 error propType "onClick" is not required, but has no corresponding defaultProps declaration
react/require-default-props
25:11 warning Unexpected any. Specify a different type

                @typescript-eslint/no-explicit-any

30:23 error Identifier 'event_date' is not in camel case

                camelcase

34:12 error Arrow function should not return assignment

                no-return-assign

34:19 error Unexpected use of 'location'

                no-restricted-globals

49:28 error Function 'handleClickReducer' expected no return value

                consistent-return

54:5 error 'React' must be in scope when using JSX

                react/react-in-jsx-scope

55:7 error Visible, non-interactive elements with click handlers must have at least one keyboard listener
jsx-a11y/click-events-have-key-events
55:7 error Avoid non-native interactive elements. If using native HTML is not possible, add an appropriate role and support for tabbing, mouse, keyboard, and touch inputs to an interactive content element jsx-a11y/no-static-element-interactions
55:7 error 'React' must be in scope when using JSX

                react/react-in-jsx-scope

58:53 error Must use destructuring props assignment

                react/destructuring-assignment

60:9 error 'React' must be in scope when using JSX

                react/react-in-jsx-scope

61:10 error Identifier 'event_date' is not in camel case

                camelcase

62:11 error 'React' must be in scope when using JSX

                react/react-in-jsx-scope

67:18 error 'React' must be in scope when using JSX

                react/react-in-jsx-scope

69:9 error 'React' must be in scope when using JSX

                react/react-in-jsx-scope

70:64 error Array.prototype.map() expects a value to be returned at the end of arrow function
array-callback-return
70:64 error Expected to return a value at the end of arrow function

                consistent-return

74:17 error 'React' must be in scope when using JSX

                react/react-in-jsx-scope

76:24 error Do not use Array index in keys

                react/no-array-index-key

91:7 error 'React' must be in scope when using JSX

                react/react-in-jsx-scope

92:9 error 'React' must be in scope when using JSX

                react/react-in-jsx-scope

101:12 error Do not nest ternary expressions

                no-nested-ternary

/home/didiraja/self/sextou-front/src/components/molecules/Modal.tsx
1:18 error Missing file extension "ts" for "../../services/Date"

               import/extensions

2:25 error Missing file extension "tsx" for "../../store"

               import/extensions

3:20 error Missing file extension "tsx" for "../atoms/Button"

               import/extensions

4:27 error Missing file extension "tsx" for "./Card"

               import/extensions

5:22 error Missing file extension "ts" for "../../services/enums"

               import/extensions

6:30 error Missing file extension "ts" for "../../types"

               import/extensions

12:39 warning Unexpected any. Specify a different type

               @typescript-eslint/no-explicit-any

13:35 warning Unexpected any. Specify a different type

               @typescript-eslint/no-explicit-any

16:24 error 'content' is already declared in the upper scope on line 13 column 9

               no-shadow

16:33 warning Unexpected any. Specify a different type

               @typescript-eslint/no-explicit-any

23:12 error Expected to return a value at the end of function 'handleClick'

               consistent-return

36:5 error Visible, non-interactive elements with click handlers must have at least one keyboard listener
jsx-a11y/click-events-have-key-events
36:5 error Avoid non-native interactive elements. If using native HTML is not possible, add an appropriate role and support for tabbing, mouse, keyboard, and touch inputs to an interactive content element jsx-a11y/no-static-element-interactions
36:5 error 'React' must be in scope when using JSX

               react/react-in-jsx-scope

37:7 error 'React' must be in scope when using JSX

               react/react-in-jsx-scope

38:9 error 'React' must be in scope when using JSX

               react/react-in-jsx-scope

40:11 error Visible, non-interactive elements with click handlers must have at least one keyboard listener
jsx-a11y/click-events-have-key-events
40:11 error Non-interactive elements should not be assigned mouse or keyboard event listeners
jsx-a11y/no-noninteractive-element-interactions
40:11 error 'React' must be in scope when using JSX

               react/react-in-jsx-scope

44:11 error 'React' must be in scope when using JSX

               react/react-in-jsx-scope

46:11 error 'React' must be in scope when using JSX

               react/react-in-jsx-scope

48:13 error 'React' must be in scope when using JSX

               react/react-in-jsx-scope

52:15 error 'React' must be in scope when using JSX

               react/react-in-jsx-scope

54:19 error 'React' must be in scope when using JSX

               react/react-in-jsx-scope

67:13 error 'React' must be in scope when using JSX

               react/react-in-jsx-scope

68:15 error 'React' must be in scope when using JSX

               react/react-in-jsx-scope

76:18 error Do not nest ternary expressions

               no-nested-ternary

86:11 error 'React' must be in scope when using JSX

               react/react-in-jsx-scope

90:15 error 'React' must be in scope when using JSX

               react/react-in-jsx-scope

98:13 error 'React' must be in scope when using JSX

               react/react-in-jsx-scope

98:16 warning Dangerous property 'dangerouslySetInnerHTML' found

               react/no-danger

/home/didiraja/self/sextou-front/src/components/molecules/SearchBlock.tsx
1:1 error Do not use "@ts-nocheck" because it alters compilation errors @typescript-eslint/ban-ts-comment
10:4 error Unexpected tab character no-tabs
11:4 error Unexpected tab character no-tabs
12:4 error Unexpected tab character no-tabs
13:4 error Unexpected tab character no-tabs
14:4 error Unexpected tab character no-tabs
15:4 error Unexpected tab character no-tabs
17:4 error Unexpected tab character no-tabs
18:4 error Unexpected tab character no-tabs
19:4 error Unexpected tab character no-tabs
20:4 error Unexpected tab character no-tabs
21:4 error Unexpected tab character no-tabs
22:4 error Unexpected tab character no-tabs
23:4 error Unexpected tab character no-tabs
25:1 error This line has a length of 106. Maximum allowed is 100 max-len
25:4 error Unexpected tab character no-tabs
27:4 error Unexpected tab character no-tabs
28:4 error Unexpected tab character no-tabs
29:4 error Unexpected tab character no-tabs
30:4 error Unexpected tab character no-tabs
31:4 error Unexpected tab character no-tabs
32:4 error Unexpected tab character no-tabs
34:4 error Unexpected tab character no-tabs
35:4 error Unexpected tab character no-tabs
36:4 error Unexpected tab character no-tabs
37:4 error Unexpected tab character no-tabs
38:4 error Unexpected tab character no-tabs
39:4 error Unexpected tab character no-tabs
41:4 error Unexpected tab character no-tabs
42:4 error Unexpected tab character no-tabs
43:4 error Unexpected tab character no-tabs
44:4 error Unexpected tab character no-tabs
45:4 error Unexpected tab character no-tabs
46:4 error Unexpected tab character no-tabs
47:4 error Unexpected tab character no-tabs
49:4 error Unexpected tab character no-tabs
50:4 error Unexpected tab character no-tabs
51:4 error Unexpected tab character no-tabs
52:4 error Unexpected tab character no-tabs
53:4 error Unexpected tab character no-tabs
54:4 error Unexpected tab character no-tabs
55:4 error Unexpected tab character no-tabs
56:4 error Unexpected tab character no-tabs
57:4 error Unexpected tab character no-tabs
58:4 error Unexpected tab character no-tabs
59:4 error Unexpected tab character no-tabs
60:4 error Unexpected tab character no-tabs
61:4 error Unexpected tab character no-tabs
62:4 error Unexpected tab character no-tabs
63:4 error Unexpected tab character no-tabs
64:4 error Unexpected tab character no-tabs

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
