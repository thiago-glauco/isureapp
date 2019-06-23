import {Faixa} from './faixa';
export class Plano {
  id: number;
  category: string;
  name: string;
  operator: string;
  description: string;
  lifeTable: Faixa[];
}