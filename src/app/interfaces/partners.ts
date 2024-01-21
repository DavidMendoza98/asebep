import { Career } from "./career";
export interface Partners {
    id:string;
    account:     string;
    email:       string;
    name:        string;
    lastname:    string;
    phonenumber: string;
    birthdate:   string;
    sex:         string;
    career:      Career;
}
