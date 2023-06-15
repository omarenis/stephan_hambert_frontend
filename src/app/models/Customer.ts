interface User {
  date_joined: string;
  email: string;
  first_name: string;
  is_active: boolean;
  is_staff: boolean;
  is_superuser: boolean;
  last_login: Date;
  username: string;
  password ?: string;
  id ?: number;
}
