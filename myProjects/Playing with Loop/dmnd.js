"use strict";
// Diamond 
function createDimondShape(size) {
    for (var i = 1; i <= size; i++) {
        for (var s = size - 1; s >= i; s--) {
            process.stdout.write("💎 ");
        }
        for (var j = 1; j <= i; j++) {
            process.stdout.write("🤎 ");
        }
        console.log();
    }
    if (i == size + 1) {
        for (var i = 1; i <= size - 1; i++) {
            for (var s = 1; s <= i; s++) {
                process.stdout.write("❤ ");
            }
            for (j = i; j <= size; j++) {
                process.stdout.write("💜 ");
            }
            console.log();
        }
    }
}
createDimondShape(20);
function createDimondShape1(size) {
    for (var i = 1; i <= size; i++) {
        for (var s = size - 1; s >= i; s--) {
            process.stdout.write("🖤 ");
        }
        for (var j = 1; j <= i; j++) {
            process.stdout.write("🤍 ");
        }
        console.log();
    }
    if (i == size + 1) {
        for (var i = 1; i <= size - 1; i++) {
            for (var s = 1; s <= i; s++) {
                process.stdout.write("💚 ");
            }
            for (j = i; j <= size; j++) {
                process.stdout.write("🧡 ");
            }
            console.log();
        }
    }
}
createDimondShape1(20);
function createDimondShape2(size) {
    for (var i = 1; i <= size; i++) {
        for (var s = size - 1; s >= i; s--) {
            process.stdout.write("🧡 ");
        }
        for (var j = 1; j <= i; j++) {
            process.stdout.write("💚 ");
        }
        console.log();
    }
    if (i == size + 1) {
        for (var i = 1; i <= size - 1; i++) {
            for (var s = 1; s <= i; s++) {
                process.stdout.write("🤍 ");
            }
            for (var j = i; j <= size; j++) {
                process.stdout.write("🖤 ");
            }
            console.log();
        }
    }
}
createDimondShape2(20);
function createDimondShape3(size) {
    for (var i = 1; i <= size; i++) {
        for (var s = size - 1; s >= i; s--) {
            process.stdout.write("💜 ");
        }
        for (var j = 1; j <= i; j++) {
            process.stdout.write("💛 ");
        }
        console.log();
    }
    if (i == size + 1) {
        for (var i = 1; i <= size - 1; i++) {
            for (var s = 1; s <= i; s++) {
                process.stdout.write("🤎 ");
            }
            for (var j = i; j <= size; j++) {
                process.stdout.write("💎 ");
            }
            console.log();
        }
    }
}
createDimondShape3(20);
