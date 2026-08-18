// Standalone logout helper — clears the same key used by AuthContext
export function logout(): void {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('user');
  }
}
