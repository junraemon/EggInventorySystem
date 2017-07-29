export class Profile {
    constructor(
        public Id: string,
        public FirstName: string,
        public MiddleName: string,
        public LastName: string,
        public Address: string,
        public Photo?: string,
    ) { }
}