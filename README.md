todocli
=======

a todo list cli

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/todocli.svg)](https://npmjs.org/package/todocli)
[![Codecov](https://codecov.io/gh/shujer/todocli/branch/master/graph/badge.svg)](https://codecov.io/gh/shujer/todocli)
[![Downloads/week](https://img.shields.io/npm/dw/todocli.svg)](https://npmjs.org/package/todocli)
[![License](https://img.shields.io/npm/l/todocli.svg)](https://github.com/shujer/todocli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g todocli
$ todocli COMMAND
running command...
$ todocli (-v|--version|version)
todocli/1.0.0 linux-x64 node-v14.10.1
$ todocli --help [COMMAND]
USAGE
  $ todocli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`todocli add [FILE]`](#todocli-add-file)
* [`todocli hello [FILE]`](#todocli-hello-file)
* [`todocli help [COMMAND]`](#todocli-help-command)
* [`todocli remove [FILE]`](#todocli-remove-file)
* [`todocli show`](#todocli-show)
* [`todocli update`](#todocli-update)

## `todocli add [FILE]`

Adds a new todo

```
USAGE
  $ todocli add [FILE]

OPTIONS
  -n, --task=task  task

DESCRIPTION
  ...
     Adds a new todo to the existing list
```

_See code: [src/commands/add.ts](https://github.com/shujer/todocli/blob/v1.0.0/src/commands/add.ts)_

## `todocli hello [FILE]`

describe the command here

```
USAGE
  $ todocli hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ todocli hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/shujer/todocli/blob/v1.0.0/src/commands/hello.ts)_

## `todocli help [COMMAND]`

display help for todocli

```
USAGE
  $ todocli help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.2/src/commands/help.ts)_

## `todocli remove [FILE]`

describe the command here

```
USAGE
  $ todocli remove [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/remove.ts](https://github.com/shujer/todocli/blob/v1.0.0/src/commands/remove.ts)_

## `todocli show`

Shows existing tasks

```
USAGE
  $ todocli show

DESCRIPTION
  ...
     Show all the tasks sorted by their ids
```

_See code: [src/commands/show.ts](https://github.com/shujer/todocli/blob/v1.0.0/src/commands/show.ts)_

## `todocli update`

Marks a task as done

```
USAGE
  $ todocli update

OPTIONS
  -n, --id=id  task id

DESCRIPTION
  ...
     Maks a task as done
```

_See code: [src/commands/update.ts](https://github.com/shujer/todocli/blob/v1.0.0/src/commands/update.ts)_
<!-- commandsstop -->
