// Static site version — no authentication
export function useAuth() {
  return {
    user: null as null | { id: string; name: string; email: string; role: string },
    loading: false,
    error: null as null,
    isAuthenticated: false,
    refresh: () => {},
    logout: async () => {},
  };
}
