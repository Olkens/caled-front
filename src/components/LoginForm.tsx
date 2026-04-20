"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLogin } from "@/hooks/useLogin";

const schema = z.object({
  username: z.string(),
  password: z.string().min(6, "Hasło musi mieć minimum 6 znaków"),
});

type FormData = z.infer<typeof schema>;

export function LoginForm() {
  const { mutate: login, isPending, isError, error } = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  return (
    <form
      onSubmit={handleSubmit((data) => login(data))}
      className="flex flex-col gap-4 max-w-sm"
    >
      <div>
        <input
          {...register("username")}
          type="username"
          placeholder="Email"
          className="border rounded px-3 py-2 w-full"
        />
        {errors.username && (
          <p className="text-red-500 text-sm">{errors.username.message}</p>
        )}
      </div>

      <div>
        <input
          {...register("password")}
          type="password"
          placeholder="Hasło"
          className="border rounded px-3 py-2 w-full"
        />
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password.message}</p>
        )}
      </div>

      {isError && (
        <p className="text-red-500 text-sm">
          {(error as any)?.response?.data?.message ?? "Błąd logowania"}
        </p>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="bg-blue-600 text-white rounded px-4 py-2 disabled:opacity-50"
      >
        {isPending ? "Logowanie..." : "Zaloguj się"}
      </button>
    </form>
  );
}
