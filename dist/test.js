myTest = {
    a: 1,
    b: 2,
    c: function() { console.log(this.a, this.b) }
}

myTest.c()