import readline from 'readline';

// keyboard 입력 처리 
const readlineInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// 사용자가 keybord 입력시 값을 받는다. 
export function waitForInput(msg: string){
    return new Promise<string>(res => 
        readlineInterface.question(msg, key => {
            res(key)
        }),
    );
}