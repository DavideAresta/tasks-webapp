import axios from 'axios';

export class AuthService {
  static async login(username: string, password: string): Promise<void> {
    const response = await axios.post('/api/auth/login', { username, password });
    localStorage.setItem('token', response.data.token);
  }

  static logout(): void {
    localStorage.removeItem('token');
  }

  static isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }
}
