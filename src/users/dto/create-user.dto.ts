export class UserDto {
  id: string;
  name: string;
  email: string;
  password: string;
  age: number;
  weight: number;
  height: number;
  adresses: AdressDTO[];
  contacts: ContactDTO[];
  skills: SkillDTO[];
}

export class AdressDTO {
  id: string;
  adress: string;
  district: string;
  city: string;
  state: string;
  country: string;
}

export class ContactDTO {
  id: string;
  type: string;
  contact: string;
}

export class SkillDTO {
  id: string;
  level: string;
  skill: string;
  expirience: number;
}
