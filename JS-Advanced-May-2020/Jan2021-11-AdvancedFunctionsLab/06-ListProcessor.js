function solve(arr) {
    let list = [];
    
    let commands = {
        add: (string) => {
            list.push(string);
        },
        remove: (string) => {
            list = list.filter((value) => value !== string);
        },
        print: () => {
            console.log(list.join(','));
        }
    };

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'print') {
            commands.print();
        } else {
            let command = arr[i].split(' ')[0];
            let str = arr[i].split(' ')[1];

            commands[command](str);
        }        
    }
}
