import { Book } from "./book";

export class Lend {
  public _id?: string;
  public name: string;  
  public today: Date;
  public returnday: Date;
  public book: Book;
}