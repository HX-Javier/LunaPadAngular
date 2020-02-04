import { Address } from './address.model';

export class Patient {
    PatientId: number;
    FirstName: string;
    LastName: string;
    BirthDate: Date;
    Gender: number;
    MaritalStatus: number;
    Address: Address;
    PhonePrivate: string;
    PhoneMobile: string;
    Email: string;
    // Doctors
    AttendingId: number;
    GeneralPractitionerId: number;
    ReferringDoctorId: number;
    // * Location
    Location: string;
    LocationDate: Date;
    // * Billingmode
    IsUvg: boolean;
    Employer: string;
    BillingMode: number;
    // * Base64 signature
    Signature: string;
}
