export const API_URL = 'http://localhost:3000/api';
export async function apiFetch(path, options = {}) {
  const token = localStorage.getItem('token');
  const headers = { 'Content-Type': 'application/json', ...options.headers };
  if (token) headers.Authorization = `Bearer ${token}`;
  const response = await fetch(`${API_URL}${path}`, { ...options, headers });
  const data = response.status === 204 ? null : await response.json().catch(() => ({}));
  if (!response.ok) {
    if (response.status === 401 && path !== '/auth/login') { localStorage.removeItem('token'); localStorage.removeItem('user'); }
    throw new Error(data?.error || `Ошибка ${response.status}`);
  }
  return data;
}
