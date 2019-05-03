import {Faixa} from './faixa';
import {FAIXA_ETARIA} from './faixa-etaria'
export class Plano {
  id: number;
  category: string;
  name: string;
  operator: string;
  description: string;
  lifeTable: Faixa[] = FAIXA_ETARIA;
}