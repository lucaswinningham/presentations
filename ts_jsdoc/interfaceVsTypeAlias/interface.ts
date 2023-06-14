interface Animal {
  name: string;
}

interface Bear extends Animal {
  honey: boolean;
}

const bear = {} as Bear;
bear.name;
bear.honey;

interface Bear extends Animal {
  kind: 'grizzly' | 'black' | 'polar';
} // reopen Bear