import UserImg from '../images/user-icon.jpeg';

export interface UserOption {
    id: number;
    name: string;
    email?: string;
    image: string;
    isSelected?: boolean;
  }
  
  const userOption: UserOption[] = [
    { id: 1, name: 'Aarav Kumar', email: 'aarav.kumar@gmail.com', image: UserImg },
    { id: 2, name: 'Advait Patel', email: 'advait.patel@gmail.com', image: UserImg },
    { id: 3, name: 'Arya Singh', email: 'arya.singh@gmail.com', image: UserImg },
    { id: 4, name: 'Aanya Reddy', email: 'aanya.reddy@gmail.com', image:UserImg},
    { id: 5, name: 'Advika Sharma', email: 'advika.sharma@gmail.com', image: UserImg },
  ];
  
  export default userOption;