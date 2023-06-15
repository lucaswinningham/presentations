


type UserProps = {
  name: string;
  age?: number;
  alive?: boolean;
};


type Configuration = { enabled?: boolean };

class User extends React.Component {

  constructor(props: UserProps) { super(props); }


  configure({ enabled }: Configuration) {}


  performTask(todo: { what: string; dueBy?: Date; }): void {}   
}