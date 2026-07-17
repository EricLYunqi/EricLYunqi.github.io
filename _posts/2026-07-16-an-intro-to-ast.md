---
layout: post
title: "抽象语法树（AST）初探"
tags: [program analysis]
description: "使用AST分析（简单的）Python程序"
---

在[Bolo](http://www.bolobao.ai/)项目的开发过程中，我们常常需要分析agent对数以千计的模型生成的Python文件，这便是我开始探索程序分析（Program Analyss）的契机，本文主要总结对于抽象语法树的探索。

## Python 内置的抽象语法树（Abstract Syntax Tree）解析工具

抽象语法树（下文简称AST）是最基础的分析工具，其核心思想在于捕捉代码的行为（例如定义，赋值等等），Python提供了内置的[AST分析库](https://docs.python.org/3/library/ast.html)，而接下来的部分会基于这个库来展开。

### A Starter Example

这里我们实现一个非常简单的Python类来对一组数据进行乘方运算，将完整代码保存为`example.py`：
```python
# example.py
import math
from pathlib import Path

PI = 3.14


class Calculator:
    def square(self, x: float) -> float:
        return x * x


def process(numbers: list[int]) -> list[float]:
    calculator = Calculator()
    results = []

    for number in numbers:
        if number >= 0:
            results.append(calculator.square(number))
        else:
            results.append(math.sqrt(abs(number)))

    try:
        Path("result.txt").write_text(str(results))
    except OSError as error:
        print(error)

    return results


if __name__ == "__main__":
    values = [1, -4, 3]
    output = process(values)
    print(output)
```

然后我们调用内置的`ast`库来解析`example.py`的语法树：

```python
# parse_ast.py
import ast
from pathlib import Path

source = Path("example.py").read_text()

tree: ast.Module = ast.parse(
    source,
    filename="example.py",
    mode="exec",
)

print(ast.dump(tree, indent=2))
```

在运行`parse_ast.py`得到结果前，我们可以看到核心的解析API是`ast.parse`，最主要的参数是`source`代表源代码，`mode`代表解析的模式，这里我们选用默认的`exec`。函数的返回值类型是`ast.Module`，代表的是树的根节点。而根据`mode`的不同，返回的类的类型也不同。`ast`一共支持四种不同的模式，返回的四种根节点类型都继承自`ast.AST`，在开头提到的官方文档中以ASDL（Abstract Syntax Description Language）的形式整理了AST节点的类型，根节点对应的是`mod`。

`parse_ast.py`的完整的运行结果在[这里](../assets/2026-07-16-an-intro-to-ast/ast_output.txt)，可以看到这个树形可以被抽象为：
```
Module
└── body: list[stmt]
    ├── Import / ImportFrom
    ├── Assign
    ├── FunctionDef
    │   └── body: list[stmt]
    ├── ClassDef
    │   └── body: list[stmt]
    ├── If / For / While / Try
    │   └── body: list[stmt]
    └── Expr / Return / other statements
```
在`Module`之下，`body`是一个statement（`stat`）列表，每一个statement可以是引入了一个库，赋值，函数或类的定义，或者是条件判断等等。