type Ball = { r: number };
type Sphere = { r: number };
type Tube = { r: number; l: number };

let ball: Ball = { r: 10 };
let sphere: Sphere = { r: 20 };
let tube: Tube = { r: 12, l: 3 };

ball = sphere; // ✅
sphere = ball; // ✅
ball = tube; // ✅
sphere = tube; // ✅

tube = ball; // ❌
// Property 'l' is missing in type 'Ball' but required in type 'Tube'.
tube = sphere; // ❌
// Property 'l' is missing in type 'Ball' but required in type 'Tube'.