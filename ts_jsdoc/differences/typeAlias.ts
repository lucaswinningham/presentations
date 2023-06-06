type Animal = {
  name: string;
};

type Bear = Animal & { 
  honey: boolean;
};

const bear = {} as Bear;
bear.name;
bear.honey;

type Bear = Animal & {
  kind: 'grizzly' | 'black' | 'polar';
}; // Error: Duplicate identifier Bear