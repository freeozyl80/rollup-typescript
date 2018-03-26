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