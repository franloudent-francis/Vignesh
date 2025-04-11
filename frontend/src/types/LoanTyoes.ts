export interface VehicleType {
    id: number;
    vehicle_number: string;
    vehicle_model: string;
    vehicle_name: string;
    vehicle_color: string;
    chassis_number: string;
    engine_number: string;
    insurance_end_date: string;
    insurance_policy_company: string;
    TO_set: boolean;
    RC_Book: boolean;
    Hp_letter: boolean;
  }
  
 export interface GuarantorType {
    id: number;
    name: string;
    address: string;
    occupation: string;
    phone: number;
    aadhaar_number: number;
    photo: string | null;
  }
  
 export interface LoanType {
    id: number;
    vehicle: VehicleType;
    guarantor: GuarantorType;
    created_at: string;
    modified_at: string;
    loan_date: string;
    loan_principle: number;
    interest_percentage: number;
    interest_amount: number;
    emi: number;
    duration: number;
    bank_name: string;
    cheque_number: string;
    cheque_count: number;
    profile: number;
    active: boolean;
  }
  