## react-typescript-demo
React、Redux、React-Router、Typescript、Styled-components Demo.

使用 create-react-app my-app --scripts-version=react-scripts-ts 创建，去除一些委和的东西。

```bash
npm install
rm -rf ./node_module/redux-thunk/index.d.ts
npm start
# open http://127.0.0.1:3000
```

## tsconfig 配置说明

```js
{
    "compilerOptions": {
        "outDir": "build/dist",                   // 输出目录。
        "module": "esnext",                       // 模块方式。
        "target": "es5",                          // 编译目标。
        "lib": ["es6", "dom"],                    // 编译过程中需要引入的库文件的列表。
        "sourceMap": true,                        // 生成单个 sourcemaps 文件。
        "allowJs": true,                          // 允许编译javascript文件。
        "jsx": "react",                           // jsx 语法为 react 的。
        "moduleResolution": "node",               // 决定如何处理模块。
        "baseUrl": "src",                         // 基础目录。
        "rootDir": "src",                         // ts 编译的根目录，一般为 src。
        "forceConsistentCasingInFileNames": true, // 禁止对同一个文件的不一致的引用。
        "noImplicitReturns": true,                // 不是函数，不能使用 return。
        "noImplicitThis": true,                   // this 不能为 any
        "noImplicitAny": false,                   // 函数参数可以自动推断为 any
        "strictNullChecks": true,                 // 严格模式下 null 不能用来指定类型
        "suppressImplicitAnyIndexErrors": true,   // 阻止对缺少索引签名的索引对象报错
        "noUnusedLocals": true                    // 若有未使用的局部变量则抛错。
    },
    "exclude": [
        // 排除的目录
    ]
}
```

## tslint 配置说明

```js
{
    // 继承的配置
    "extends": ["tslint:recommended", "tslint-react", "tslint-config-prettier"],
    // 排除的目录
    "linterOptions": {
        "exclude": [
            "config/**/*.js",
            "node_modules/**/*.ts"
        ]
    },
    // 规则
    "rules": {
        "interface-name":  [true, "never-prefix"],  // 接口名不能 I 开头
        "member-access": false,                     // 不需要写 public、private
        "ordered-imports": false,                   // imports 的时候不需要排序
        "object-literal-sort-keys": false,          // 对象的 key 不需要排序
        "no-var-requires": false,                   // 可以使用 requires
        "no-console": false,                        // 可以使用 console
        "arrow-parens": false,                      // 箭头函数单参数可以不带 ()
        "no-empty": false                           // 函数体可以为空
    }
}
```
