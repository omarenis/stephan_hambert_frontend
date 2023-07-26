export interface CustomerProfile {

    facebook: string;
    google: string;
    phone: string;
    number_purchases: number;
    total_gain: number;
    profile : string;
    gender: string;
    has_two_factors_authentication: boolean;
    id ?: number;
    user ?: number;
}
export interface User
{
    first_name: string;
    last_name: string;
    email: string;
    username: string;
    customerprofile: CustomerProfile | null;
    password ?: string;
    id ?: number;
    is_superuser ?: boolean;
}
