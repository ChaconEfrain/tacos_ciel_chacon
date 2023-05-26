import { useRouter } from "next/router";
import React, { useEffect, useRef } from "react";

const Login = () => {
  const formRef = useRef(null);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const { username, password } = Object.fromEntries(formData.entries());
    try {
      const res = await fetch("/api/auth", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();
      if (res.status === 401) throw new Error(data.error);
      localStorage.setItem("token", data.token);
      router.push("/admin/editar");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="flex flex-col gap-2 text-xl text-primary-dark justify-center items-center h-screen"
    >
      <fieldset className="flex flex-col gap-2">
        <label htmlFor="username" className="font-bold">
          Usuario
        </label>
        <input
          id="username"
          name="username"
          type="email"
          placeholder="ejemplo@gmail.com"
          className="bg-primary-medium/30 py-1 px-2"
        />
      </fieldset>
      <fieldset className="flex flex-col gap-2">
        <label htmlFor="password" className="font-bold">
          Contraseña
        </label>
        <input
          id="password"
          name="password"
          type="password"
          className="bg-primary-medium/30 py-1 px-2"
        />
      </fieldset>
      <button>Ingresar</button>
    </form>
  );
};

export default Login;
