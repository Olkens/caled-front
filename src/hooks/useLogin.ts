import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { api } from "@/lib/api";

interface LoginCredentials {
  username: string;
  password: string;
}

interface LoginResponse {
  token: string;
  user: {
    id: string;
    email: string;
    username: string;
    role: string;
  };
}

export function useLogin() {
  const router = useRouter();

  return useMutation({
    mutationFn: (credentials: LoginCredentials) =>
      api
        .post<LoginResponse>("/auth/login", credentials)
        .then((res) => res.data),

    onSuccess: (data) => {
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      router.push("/");
    },

    // onError: (error: any) => {
    //   console.error(
    //     "Błąd logowania:",
    //     error.response?.data?.message ?? "Nieznany błąd",
    //   );
    // },
  });
}
