const myCanvas = document.getElementById('main_canvas');
const { height } = myCanvas!; // ❌
// Property 'height' does not exist on type 'HTMLElement'

const myCanvasToo = document.getElementById('main_canvas') as HTMLCanvasElement;
const { height: heightToo } = myCanvasToo!; // ✅

const x = 'hello' as number; // ❌
// Conversion of type 'string' to type 'number' may be a mistake because ...

const y = 'hello' as any as number; // ✅ (but also ❌)
const z = 'hello' as unknown as number; // ✅ (but also ❌)

// const someObj: { a: number }
const someObj = { a: 1 };
// const someObjToo: { readonly a: 1 }
const someObjToo = { a: 1 } as const;