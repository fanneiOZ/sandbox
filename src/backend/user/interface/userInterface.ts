import { PersonNameInterface } from './personNameInterface';
import { ThirdPartyProfileInterface } from './thirdPartyProfileInterface';

export interface UserInterface {
  id?: number;
  name?: PersonNameInterface;
  email?: string;
  password?: string;
  thirdPartyProfile?: ThirdPartyProfileInterface;
}
