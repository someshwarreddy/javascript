// function tenth() {alert() }

// function ninth() { tenth() }

// function eigth() { ninth() }

// function seventh() { eigth() }

// function sixth() { seventh() }

// function fifth() { sixth() }

// function fourth() { fifth() }

// function third() { fourth() }

// function second() { third() }

// function first() { second() }

// first();

function first() {
    function second() {
        function third() {
            function fourth() {
                function fifth() {
                    console.log('5')
                }
                fifth();
                console.log('4')
            }
            fourth();
            console.log('3')
        }
        third();
        console.log('2')
    }
    second();
    console.log('1')
}
first();