let myTest = {
    a: 1,
    b: 2,
    c(arg="testing") {
        console.log(`a=${this.a} and b=${this.b} and arg=${arg}`)
    },
    d: 3
}

myTest.c()
myTest.c("blargh")