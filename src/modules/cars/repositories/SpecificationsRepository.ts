import { Specification } from "../model/Specification";
import {
  ICreateSpecificationsDTO,
  ISpecificationsRepository,
} from "./ISpecificationsRepository";

class SpecificationsRepository implements ISpecificationsRepository {
  private specifictaions: Specification[];

  constructor() {
    this.specifictaions = [];
  }

  create({ name, description }: ICreateSpecificationsDTO): void {
    const specifictaion = new Specification();

    Object.assign(specifictaion, {
      name,
      description,
      created_at: new Date(),
    });

    this.specifictaions.push(specifictaion);
  }
}

export { SpecificationsRepository };
