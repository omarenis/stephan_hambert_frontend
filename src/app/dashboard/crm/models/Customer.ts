interface User {
  email: string;
  username: string;
  first_name: string;
  last_name: string;
  is_active: boolean;
  is_superuser: boolean;
  last_login?: Date | string;
  date_joined?: Date | string;
  customerprofile: number | CustomerProfile;
  password?: string;
  id?: number;
}

interface CustomerProfile {
  facebook: string | null;
  google: string | null
  INSTAGRAM: string | null
  phone: string;
  gender: string;
  has_two_factors_authentication: boolean;
  user: number;
  number_purchases: number;
  total_sales: number;
}
