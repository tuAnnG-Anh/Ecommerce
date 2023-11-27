import { loginApi } from "@/api/auth";
import { Logo } from "@/components/Logo";
import "react-toastify/dist/ReactToastify.css";
import {
  EyeOutlined,
  EyeInvisibleOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
import { useMutation } from "@tanstack/react-query";
import { Spin } from "antd";
import { useState } from "react";

import { useNavigate } from "react-router-dom";
import { IAccount } from "@/interfaces/IUser";
import { useAuthStore } from "@/store/auth";
import { jwtDecode } from "jwt-decode";
import { JwtPayload } from "@/interfaces/Jwt";
import { getUserById } from "@/api/user";

export const RegisterPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { updateAuth } = useAuthStore();
  const loginMutation = useMutation({
    mutationFn: (account: IAccount) => loginApi(account),
    onSuccess(data) {
      localStorage.setItem("accessToken", JSON.stringify(data?.accessToken));
      if (data?.accessToken) {
        const decoded = jwtDecode(data?.accessToken) as JwtPayload;
        if (decoded?.id) {
          handleStoreUserLogged(decoded?.id, data?.accessToken);
        }
      }
    },
    onError: (err) => console.log(err),
  });

  const handleStoreUserLogged = async (id: string | number, token: string) => {
    const user = await getUserById(id, token);
    const userLogged = { ...user.data, accessToken: token };
    updateAuth(userLogged);
    navigate("/");
  };
  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    loginMutation.mutate({
      email,
      password,
    });
  };

  return (
    <div className="md:grid md:grid-cols-2 gap-20 ">
      <div
        className=" bg-[url('./src/resources/images/loginimg.svg')] bg-neutral-200 bg-center bg-cover bg-no-repeat h-[26.875rem] md:h-screen  py-8 md:p-0"
        style={{
          backgroundSize: "100% 100%",
        }}
      >
        <Logo className="text-[1.5rem]" />
      </div>
      <div className="px-8 md:pl-0 max-w-[28.5rem] container md:mt-[20%] mx-auto">
        <form
          className="my-10 md:m-0 grid gap-8"
          onSubmit={handleLogin}
          method="POST"
        >
          <div>
            <h1 className="font-Poppins font-medium text-[2.5rem] leading-[2.75rem] -tracking-[0.025rem] text-neutral-700">
              Sign up
            </h1>
            <p className="text-neutral-400 mt-6 leading-[1.625rem] ">
              Don’t have an accout yet?
              <a
                className="text-secondary-green font-semibold cursor-pointer"
                onClick={() => navigate("/login")}
              >
                Sign in
              </a>
            </p>
          </div>
          {loginMutation?.data?.status === "ERR" && (
            <div className="p-4 bg-gray-gradient rounded border border-red-500">
              <div>
                <p className="text-red-500 px-2">
                  Incorrect username or password!
                </p>
              </div>
            </div>
          )}
          <input
            type="text"
            placeholder="Your username or email address "
            className="focus:outline-none leading-[1.625rem] text-neutral-400 pb-3 border-b"
            required
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="input-password relative text-neutral-400">
            <input
              type={`${showPassword ? "text" : "password"}`}
              placeholder="Password"
              name="password"
              required
              onChange={(e) => setPassword(e.target.value)}
              className="focus:outline-none leading-[1.625rem]  pb-3 border-b w-full"
            />
            {showPassword ? (
              <EyeOutlined
                className="absolute right-0 top-0 text-2xl leading-none cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              />
            ) : (
              <EyeInvisibleOutlined
                className="absolute right-0 top-0 text-2xl leading-none cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              />
            )}
          </div>
          <div className="flex  justify-between ">
            <label className="relative flex items-start mr-3 cursor-pointer select-none">
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="w-5 h-5 bg-white border-2 border-neutral-400 peer peer-checked:border-0 peer-checked:bg-secondary-blue rounded">
                <img
                  className=""
                  src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/motion-tailwind/img/icons/check.png"
                  alt="tick"
                />
              </div>
              <span className="ml-3 text-neutral-400 text-xs md:text-base leading-5">
                I agree with{" "}
                <span className="text-neutral-700 font-semibold">
                  Privacy Policy
                </span>{" "}
                and{" "}
                <span className="text-neutral-700 font-semibold">
                  Terms of Use
                </span>
              </span>
            </label>
          </div>
          <Spin
            spinning={loginMutation.isPending}
            className="text-white"
            indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />}
          >
            <button
              className="py-[0.62rem] w-full text-white leading-7 -tracking-[0.025rem] bg-neutral-700 hover:bg-neutral-500 rounded-lg"
              type="submit"
            >
              Sign Up
            </button>
          </Spin>
        </form>
      </div>
    </div>
  );
};
