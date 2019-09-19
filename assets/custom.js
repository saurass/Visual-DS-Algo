function HistoBar(height, order) {
    // Properties Here !!!
    this.height = height; // Private
    this.order = order; // Private

    // Methods Here !!!
    this.setOrder = order => {
        this.order = order;
        this.ele.style.order = order;
    };

    this.activate = () => {
        this.ele.style.backgroundColor = "blue";
    }

    this.deactivate = () => {
        this.ele.style.backgroundColor = "transparent";
    }

    // Private
    render = () => {
        this.ele = document.createElement('div');
        this.ele.setAttribute("class", "histo-bar");
        this.ele.style.order = this.order;
        this.ele.style.height = this.height + "%";

        document.getElementById("play-area").appendChild(this.ele);
    }

    render();
}

let arr = [];

for (i = 0; i < 20; i++) {
    let obj = new HistoBar(Math.floor(Math.random() * 100) + 1, i + 1);
    arr.push(obj);
}

async function solveBubble() {
    for (i = 0; i < 20; i++) {
        for (j = 0; j < 20 - i - 1; j++) {
            if (arr[j].height > arr[j + 1].height) {
                arr[j].activate();
                await sleep(100).then(swap(arr, j));
                arr[j + 1].deactivate();
            }
        }
    }
}

function swap(arr, j) {
    obj1 = arr[j];
    obj2 = arr[j + 1];

    o1 = obj1.order;
    o2 = obj2.order;

    obj1.setOrder(o2);
    obj2.setOrder(o1);

    temp = arr[j];
    arr[j] = arr[j + 1];
    arr[j + 1] = temp;
}

function sleep(arr, j) {
    return new Promise(resolve => setTimeout(resolve, 100));
}

solveBubble();