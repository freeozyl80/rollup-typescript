// #1 类型注解：

function isProgram(program: string) {
    return "Yes it is, " + program;
}

let program: Array<string> = ['javascript', 'golang', 'php'];

let greetJavascript: string = isProgram(program[0]); // 这里有: number || : any || : void || : undefined || : null

console.log(greetJavascript);


// #2 接口类型：
interface Javascript {
	item: string
}
interface Program {
	name: string,
	type: Javascript,
	readonly level?: number;
}

function ProgramName(program: Program): {name: string; type: Javascript} {
	return program;
}

let item: Javascript = {
	item: 'typescript'
}
let typescript :Program= {
	name: 'typescript',
	type: item,
	level: 2
}
let bucklescript = {
	name: 'bucklescript',
	type: item,
	level: 4
}
// typescript.level = 3; error

ProgramName(typescript);
ProgramName(bucklescript);

// #接口类型
interface Task {
	currentJob: String;
	setJob(j: String): void;
}
class QzTask implements Task {
    currentJob: String;
    currentPerson: String;
    setJob(j: String) {
        this.currentJob = j;
    }
    constructor(p: String) { 
    	this.currentPerson = p;
    	this.setJob('share job')
    }
}

//继承
interface programmer {
	skill: 'code'
}

interface seniorPragrammer extends programmer {
	stock: true
}

let Bob = <seniorPragrammer> {};

// 类的继承

class Group {
	public member: Array<string>;
	private captain: string;
	constructor(c: string, m: Array<string>) {
		this.captain = c;
		this.member = m;
	}
}
console.log('类的继承');
console.log(new Group('A', ['a,b,c']).member);

// 函数
	// 结构
	// 函数重载
function code(word: string): boolean;
function code(word: number): boolean;
function code(word: any): any {
    if (typeof word == "string") {
    	return true;
    }
    else if (typeof word == "number") {
    	return false;
    } else {
    	return 'UNKNOWN TYPE'
    }
}

//泛型
function coding<T>(arg: T): T {
	return arg;
}
let badwork = coding('ajajaja');
let goodwork = coding(1);
console.log(badwork, goodwork);

//枚举
const enum Directions {
    Up,
    Down,
    Left,
    Right
}

let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right]
console.log(directions);
// mixins
function extend<T, U>(first: T, second: U): T & U {
    let result = <T & U>{};
    for (let id in first) {
        (<any>result)[id] = (<any>first)[id];
    }
    for (let id in second) {
        if (!result.hasOwnProperty(id)) {
            (<any>result)[id] = (<any>second)[id];
        }
    }
    return result;
}

class Person {
    constructor(public name: string) { }
}
interface Loggable {
    log(): void;
}
class ConsoleLogger implements Loggable {
    log() {
    	console.log('This is mixin test')
    }
}
let jim = extend(new Person("Jim"), new ConsoleLogger());
let n = jim.name;
jim.log();


// 命名空间：
namespace Company {
    export namespace ITCompany {
        export class Tencent { }
        export class Baidu { }
    }
}

import xxx = Company.ITCompany;
let qzone = new xxx.Tencent();
console.log(qzone);