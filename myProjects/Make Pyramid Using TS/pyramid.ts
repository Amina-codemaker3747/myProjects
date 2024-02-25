//  Pyramid


function Pyramid(height:number) {
  for(let i = 1; i <= height; i++) {
    for(let j = 1; j <= height - i; j++) {
         process.stdout.write(" ");
    };

    for (let k =1; k <= 2 *i -1; k++) {
      process.stdout.write("*");
    };
    console.log();
  };
};

function Pyramid1(height1:number){ 
  for(let i =height1; i<=1; i--){
    for(let j=3; j>= height1+ 3;j++){
        process.stdout.write(" ");
    }
    for(let k=2*i-1; k<=1; k++){
        process.stdout.write("*");
    }
    console.log();
  }
  }



Pyramid1(55);
Pyramid(55);