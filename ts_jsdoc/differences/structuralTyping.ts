type Ball = { r: number };
type Sphere = { r: number };
type Tube = { r: number; l: number };

let ball: Ball = { r: 10 };
let sphere: Sphere = { r: 20 };
let tube: Tube = { r: 12, l: 3 };

// ball = sphere; sphere = ball; ball = tube; sphere = tube; // ✅
// tube = ball; tube = sphere; // ❌

let createBall = (r: number) => ({ r });
let createSphere = (r: number, metric: boolean) => ({ r: metric ? r : r * 0.39 });
let createRedBall = (r: number) => ({ r, color: 'red' });

// createSphere = createBall; createBall = createRedBall; // ✅
// createBall = createSphere; // ❌
// createRedBall = createBall; // ❌