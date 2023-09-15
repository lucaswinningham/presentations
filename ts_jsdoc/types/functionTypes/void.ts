type VoidFunc = () => void;
const f: VoidFunc = () => 'hi'; // ✅ ... wait, what?
// const result: void
const result = f().length; // ❌ -> 2