import { trpc } from "@/lib/trpc";
import { startLogin } from "@/const";

export function useAuth() {
  const { data: user, isLoading, error } = trpc.auth.me.useQuery(undefined, {
    retry: false,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  const logoutMutation = trpc.auth.logout.useMutation({
    onSuccess: () => {
      window.location.href = "/";
    },
  });

  return {
    user: user ?? null,
    loading: isLoading,
    error: error ?? null,
    isAuthenticated: !!user,
    refresh: () => {},
    logout: async () => {
      await logoutMutation.mutateAsync();
    },
    startLogin,
  };
}
