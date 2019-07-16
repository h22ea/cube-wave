let angle = 0;
let w = 25; //the width of eatch on of them
let magicAngle;
let maximumDistance;

function setup() {
    let theCube = createCanvas(450, 450, WEBGL);
    magicAngle = atan(1/ sqrt(2));
    maximumDistance = dist(0, 0, 200, 200);
} 

function draw() {
    background(255);
    ortho(-350, 350, -350, 350, 0, 1000);
    rotateX(-magicAngle);
    rotateY(QUARTER_PI);
    for (let z = 0; z < height; z +=w) {
        for(let x = 0; x < width; x+= w) {
            push();
            let d = dist(x, z, width / 2, height / 2);
            let offset = map(d, 0, maximumDistance, -PI, PI);
            let newAngle = angle + offset;
            let oscilatingValue = floor(map(sin(newAngle), -1, 1, 100, 250));
            let h = oscilatingValue;
            translate(x - width / 2, 0, z - height / 2);
            normalMaterial();
            box(w - 2, h, w - 2);
            //rect(x - width / 2 + w / 2 , 0, w - 2, h);
            
            pop();
        
        }
    }
    angle -= 0.15;
}